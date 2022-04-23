[TOC]

# Présentation

Un proxy ou serveur mandataire est un intermédiaire entre deux hôtes par exemple entre les machines de votre réseau et internet, Squid proxy très connu du monde Open Source permette de filtrer les sites internet accessibles.

Une autre utilité de squid est qu'il est "Cachant", c'est-à-dire qu'il va permettre une mise en cache des pages consultées afin qu'a la prochaine consultation cette page charge plus rapide.

SquidGuard est add-on de Squid qui permet un filtrage encore plus précis.

# Installation

Je commande par mettre à jour les dépôts et installations de squid avec `apt`

```bash
sudo apt update -y &&  sudo apt upgrade -y && sudo apt install squid -y
```

##  Autorisation du pare-feu

j'ai ufw en pare-feu il faut donc que j'autoriser le port 3128 en TCP

```bash
sudo ufw allow 3128/tcp && sudo ufw status numbered | grep 3128
```

## Configuration de Squid

Squid peut faire un blocage par WhiteList ou par BlackList.

**WhiteList**: Bloque tout est autorisé les sites de la liste
**BlackList**: Autorise tout est bloque les sites de la liste

J'ai choisi de faire un filtrage par whitelist.

Je commence par sauvegarde le fichier de configuration par défaut pour pouvoir revenir à la configuration initiale en cas de pépin.

```bash
sudo cp /etc/squid/squid.conf /etc/squid/squid.conf.bak && ls -l /etc/squid/
```

Le fichier `squid.conf` n'est pas très lisible, un bon vieux sed avec de l'expression régulière va rendre le fichier plus lisible.

```bash
sudo sed -i '/^#/d' /etc/squid/squid.conf ; sudo sed -i '/^$/d' /etc/squid/squid.conf && head /etc/squid/squid.conf
```

Petite vérification de l'état du service.

```bash
sudo systemctl restart squid ; sudo systemctl status squid
```

Bon le service fonctionne correctement. C'est l'heure de configurer les AccesControlList ou ACL

Pour créer des règles de filtrage avec squid, il faut définir les éléments que l'on veut impacter. Dans mon cas ce sera le réseau compta qui à pour adressé IP 192.168.1.0/24. Ce sera nos ACL (Access Control Liste ou Liste de Contrôle d'Accès)

> acl compta src 192.168.1.0/24

Puis je rajout une règle http_access qui bloquera l'accès internet à toutes les machines qui sont dans le groupe compta.

>http_access deny compta

## Test du proxy

Normalement si je définis le proxy sur un pc de la compta est que je faire une recherche internet la moindre recherche sera refusée par le proxy.

Par exemple quand je cherchais à accès au site http://cossu.tech/ cette erreur apparaît.

>ERREUR
>L'URL demandée n'a pas pu être trouvée
>
>L'erreur suivante s'est produite en essayant d'accéder à l'URL : http://cossu.tech/
>
>    Accès interdit.
>
>La configuration du contrôle d'accès empêche votre requête d'être acceptée. Si vous pensez >que c'est une erreur, contactez votre fournisseur d'accès.
>
>Votre administrateur proxy est webmaster.

Donc le proxy fonctionne !

## Autoriser des sites pour le réseau compta

Bon maintenant que le blocage fonctionne bien il est temps autoriser des sites internet. Pour cela il faut créé un fichier qui contiendra les sites autorisés.

```bash
sudo bash -c 'echo ".cossu.tech" >> /etc/squid/liste-sites.txt' ; cat /etc/squid/liste-sites.txt
```

Enfin je crée un ACL qui autorise la liste qui est dans `/etc/squid/liste-sites.txt`.

```bash
sudo nano /etc/squid/squid.conf
```
>acl liste_url dstdomain "/etc/squid/liste-sites.txt"
>http_access allow compta liste_url

⚠️ L'ordre des lignes est important, car c'est un traité séquentiel !

Pour finir, redémarrer le service pour que les modifications soient bien appliquées.

```bash
sudo service squid restart ; sudo service squid status
```

La liste des sites contenue dans le fichier `/etc/squid/liste-sites.txt` est désormais autorisée pour le réseau compta.

# Note
Voir les logs
```bash
sudo tail -f /var/log/squid/access.log
```

Ajouter un site dans la liste
```bash
sudo bash -c 'echo ".ytimg.com" >> /etc/squid/liste-sites.txt' ; cat /etc/squid/liste-sites.txt && sudo service squid reload ; sudo service squid status
```

## Source
https://www.ibisc.univ-evry.fr/~petit/Enseignement/AdminSystem/IUP-ASR/2007-2008-IUP-ASR-ADSY/Projet-2007-2008/squid.pdf