[TOC]

⏩ Par le temps ? Utilise mon rôle Ansible bind9:smile:

**Debian 11**

```bash
git clone https://github.com/leghort/role-ansible.git
```
---

# I Présentation

**Qu'est-ce que le DNS ?**

Le DNS à pour but de traduire les noms de domaines en [adresses IP](https://fr.wikipedia.org/wiki/Adresse_IP). Chaque appareil connecté à un réseau dispose d'une adresse IP unique. Grâce aux serveurs  DNS, une adresse IP (par exemple, 172.217.19.238 en IPv4) devient www.google.com c'est tout de même plus simple à mémoriser pour nous autres humain. Pour mettre en place un tel service,  je vais créer un serveur DNS sous debian11  avec l'outil Bind9 dans un réseau privé.

# II Installation de bind9

**Prérequis**

Je commence par installer les paquets `dnsutils` et `bind9`

```bash
sudo apt-get install dnsutils bind9 -y
```

Maintenant je crée une zone par exemple **cossu.tech**

ℹ️ Uniquement les machines qui ont pour DNS principal le serveur bind 9 utiliseront notre zone.

Déjà il est préférable que le nom du serveur porte le même nom que la zone qu'il diffusera dans mon cas `cossu.tech`

```bash
sudo hostnamectl set-hostname cossu.tech
```

Puis changer la résolution de nom local pour cela il va falloir connaitre l'adresse ip du serveur j'utiliser la commande.

```bash
ip a
```

>1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
>link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
>inet 127.0.0.1/8 scope host lo
>valid_lft forever preferred_lft forever
>2: enp0s3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
>link/ether 08:00:27:6d:df:9d brd ff:ff:ff:ff:ff:ff
>inet 192.168.1.24/24 brd 192.168.1.255 scope global dynamic enp0s3
>valid_lft 84835sec preferred_lft 84835sec

192.168.1.24 est donc l'adresse ip du serveur, il ne reste plus qu'à la renseigné dans le fichier.

```bash
sudo nano /etc/hosts
```

>127.0.0.1       localhost
>127.0.1.1       cossu.tech
>192.168.1.24    cossu.tech

Pour effectuer des tests j'indique au serveur de faire appel à lui mếme "192.168.1.24".
```bash
sudo nano /etc/resolv.conf
```

ℹ️ Cette modification disparaîtra après le redémarrage du serveur.

>domain cossu.tech
>search cossu.tech
>nameserver 192.168.1.25

Je redémarre le service resolved pour appliquer les modifications.
```bash
sudo systemctl restart systemd-resolved
sudo systemctl enable systemd-resolved
```
Petite vérification du bon fonctionnement du service resolved
```bash
systemd-resolve --status
```

>Global
>   Protocols: +LLMNR +mDNS -DNSOverTLS DNSSEC=no/unsupported
>resolv.conf mode: foreign
>Current DNS Server: 192.168.1.24
> DNS Servers: 192.168.1.24
>  DNS Domain: cossu.tech

Visiblement tout va bien. 

# III Configuration de la zone

Je vais modifier la configuration de bind 9 pour lui indiquer que tous les noms qu'il ne connait pas seront à transférer à une autre serveur DNS par exemple 8.8.8.8 (le DNS de google).

```bash
sudo nano /etc/bind/named.conf.options
```

Ce fichier contient les options de configuration du serveur DNS. 

>options {
>             directory "/var/cache/bind";
>        forwarders {
>                     8.8.8.8;
>             };
>             dnssec-validation auto;
>        listen-on-v6 { any; };
>     };

Dans un autre fichier, je déclare les noms de domaines et le chemin vers un fichier qui servira de "base de données".

ℹ️ Les infos `in-addr.arpa` sont à modifier en fonction du réseau, étant dans le réseau `192.168.1.0/24`

```bash
sudo nano /etc/bind/named.conf.local
```

>zone "cossu.tech" {
>        type master;
>        file "/etc/bind/db.cossu.tech";
>};
>
>zone "1.168.192.in-addr.arpa" {
>        type master;
>        file "/etc/bind/db.1.168.192.in-addr.arpa";
>};

# IV Création des bases de données

Allez c'est parti pour créer un fichier "base de données" qui référence les associations ip / nom.

```bash
sudo nano /etc/bind/db.cossu.tech
```
>$TTL 604800
>$ORIGIN cossu.tech.
>@       IN      SOA     dns.cossu.tech. admin.cossu.tech (
>                   20221703    ; Numero de serie AnneMoisJour
>                   604800      ; Temps de rafraichissement
>                   86400       ; Temps entre les essais
>                   2419200     ; Temps expiration
>                   604800 )    ; Valeur TTL minimum
>@       IN NS dns.cossu.tech.
>
>DNS                     IN A 192.168.1.24
>linux                   IN A 192.168.1.14
>linuxPortable           IN A 192.168.1.18
>win10                   IN A 192.168.1.45

Maintenant, il faut s'assurer qu'il n'y a pas d'erreurs dans les fichiers *db.cossu.tech*

 ```bash
sudo named-checkzone cossu.tech /etc/bind/db.cossu.tech
 ```

>zone cossu.dev/IN: loaded serial 20221703
>OK

C'est OK donc je passe à la configuration de la zone inverse qui permet d'obtenir un nom à partir d'une adresse ip.

```bash
sudo nano /etc/bind/db.1.168.192.in-addr.arpa
```
>$TTL    604800
>@       IN      SOA     dns.cossu.tech. admin.cossu.tech (
>                        20221703    ; Numero de serie AnneMoisJour
>                        604800      ; Temps de rafraichissement
>                        86400       ; Temps entre les essais
>                        2419200     ; Temps expiration
>                        604800 )    ; Valeur TTL minimum
>
>@       IN      NS     dns.cossu.tech.
>24      IN      PTR    dns.cossu.tech.
>14      IN      PTR    linux.cossu.tech.
>18      IN      PTR    linuxPortable.cossu.tech.
>45      IN      PTR    win10.cossu.tech.

 Je vérifie la syntaxe du fichier *db.1.168.192.in-addr.arpa*

```bash
sudo named-checkzone 1.168.192.in-addr.arpa /etc/bind/db.1.168.192.in-addr.arpa
```

>zone 1.168.192.in-addr.arpa/IN: loaded serial 20221703
>OK

Tout va bien, il est temps de redémarrer le service bind9

```bash
sudo systemctl restart bind9
```
Le moment fatidique est arrivé, voire si la résolution de nom fonctionne. Pour cela, la commande *nslookup* est un allié de choix.

```bash
nslookup linux.cossu.tech
```

>Server:		192.168.1.24
>Address:	192.168.1.24#53
>
>Name:	linux.cossu.tech
>Address: 192.168.1.14

Le serveur DNS 192.168.1.24 dit que le nom `linux.cossu.tech` est égal à l'adresse `192.168.1.14`, ça fonctionne ! Aller au tour de la zone inverse.

```bash
nslookup 192.168.1.14
```

> 14.1.168.192.in-addr.arpa	name = linux.cossu.tech.

Nslookup dit que 192.168.1.14 c'est le nom `linux.cossu.dev` ! Le serveur change les noms en ip et inversement. 🤩

📝https://www.cloudflare.com/fr-fr/learning/dns/what-is-dns/
📝https://wiki.csnu.org/index.php/Installation_et_configuration_de_bind9
📝https://www.isc.org/bind/
📝https://wiki.debian.org/fr/Bind9