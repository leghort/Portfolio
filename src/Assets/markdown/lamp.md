[TOC]

⏩ Par le temps ? Fait un copier-coller de la commande ci-dessous 😄

**Debian 11**

```bash
sudo apt update -y && sudo apt upgrade -y; sudo apt-get install apache2 -y && sudo systemctl restart apache2 && sudo systemctl enable apache2; sudo apt-get install -y php; sudo apt-get install -y mariadb-server && sudo systemctl restart mariadb && sudo systemctl enable mariadb && sudo bash -c 'echo "<\?php" >> /var/www/html/phpinfo.php' && sudo bash -c 'echo "phpinfo();" >> /var/www/html/phpinfo.php' && sudo bash -c 'echo "?>" >> /var/www/html/phpinfo.php'
```

---

# I Présentation

**Au fait, c'est quoi un serveur LAMP ?** 

L’acronyme LAMP désigne un ensemble de quatre technologies open source :

- **L pour [Linux](https://www.it-connect.fr/cours-tutoriels/administration-systemes/linux/)**, le système d'exploitation (Debian, dans notre cas)

- **A pour [Apache](https://www.it-connect.fr/cours-tutoriels/administration-systemes/serveur-web/apache/)**, le serveur Web

- **M pour [MySQL/MariaDB](MySQL/MariaDB)** le système de gestion de bases de données

- **P pour [PHP](https://fr.wikipedia.org/wiki/PHP)**, le language de programmation PHP

Une serveur LAMP est donc un serveur qui disposent de c'est 4 composant. Ce type de serveur est très utilisé dans le monde du web par exemple [WordPress](https://fr.wikipedia.org/wiki/WordPress) à besoin d'un serveur LAMP pour sont bon fonctionnement.

# II Apache 2

Je commande par mettre à jour le cache des paquets et les paquets :

```bash
sudo apt upodate -y && sudo apt upgrade -y
```

Puis j'install le paquet apache 2 

```bash
sudo apt-get install -y apache2
```

Ensuite il faut démarrer le service apache2 et le rajouter au démarrage histoire de ne pas a devoir relancer le service manuellement après chaque redémarrage du serveur.

```bash
sudo systemctl restart apache2 && sudo systemctl enable apache2
```

A ce state le serveur web apache 2 devrais être opérationnel je vais vérifier cela avec la commande

```bash
sudo systemctl status apache2
```

>● apache2.service - The Apache HTTP Server
>Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor preset: enabled)
>Active: <span style="color:green">active (running)</span> since Tue 2022-04-05 20:52:28 CEST; 37min ago
> Docs: https://httpd.apache.org/docs/2.4/
>Main PID: 822 (apache2)
>Tasks: 55 (limit: 1156)
>Memory: 11.3M
>  CPU: 139ms
>CGroup: /system.slice/apache2.service
>       ├─822 /usr/sbin/apache2 -k start
>       ├─824 /usr/sbin/apache2 -k start
>       └─825 /usr/sbin/apache2 -k start
>
>avril 05 20:52:28 Lab-01 systemd[1]: Starting The Apache HTTP Server...
>avril 05 20:52:28 Lab-01 apachectl[821]: AH00558: apache2: Could not reliably determine the server's fully qualified do>
>avril 05 20:52:28 Lab-01 systemd[1]: Started The Apache HTTP Server.

Je vérifie également la version Installé

```bash
sudo apache2ctl -v
```

>Server version: <span style="color:green">Apache/2.4.53 (Debian)</span>
>Server built:   2022-03-14T16:28:35

Dans mon cas c'est la version **2.4.53** qui a était installer.

je vais également consulter le serveur avec un navigateur web par exemple [Mozilla Firefox](https://www.mozilla.org/fr/firefox/new/), déjà il faut récupérer l'adresse ip du serveur pour pouvoir y accéder en http.

```bash
ip a
```

>1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
>link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
>inet 127.0.0.1/8 scope host lo
> valid_lft forever preferred_lft forever
>inet6 ::1/128 scope host
> valid_lft forever preferred_lft forever
>2: enp0s3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
>link/ether 08:00:27:ce:2a:8e brd ff:ff:ff:ff:ff:ff
>inet <span style="color:green">192.168.1.100/24</span> brd 192.168.1.255 scope global enp0s3
> valid_lft forever preferred_lft forever
>inet6 2a01:e0a:4df:bc20:a00:27ff:fece:2a8e/64 scope global dynamic mngtmpaddr
> valid_lft 86115sec preferred_lft 86115sec
>inet6 fe80::a00:27ff:fece:2a8e/64 scope link
> valid_lft forever preferred_lft forever

Donc en consultant l'adresse ip du serveur, je devrais tomber sur la page par default d'apache2.

![image-20220405213632771](C:\Users\medaey\AppData\Roaming\Typora\typora-user-images\image-20220405213632771.png)

Parfait Apache 2 c'est fini

# III php

Au tout du php, donc installation du paquet

```bash
sudo apt install -y php
```

puis vérification de la version qui viens d'être installer

```
php -v
```

><span style="color:green">PHP 7.4.28 (cli)</span> (built: Feb 17 2022 16:17:19) ( NTS )
>Copyright (c) The PHP Group
>Zend Engine v3.4.0, Copyright (c) Zend Technologies
>with Zend OPcache v7.4.28, Copyright (c), by Zend Technologies

Bon la version **7.4.28** semble installer je vais vérifier cela en crée une page web avec du code php pour être sûr !

```bash
sudo nano /var/www/html/phpinfo.php
```

ce fichier `phpinfo.php` contiendra les 3 lignes ci dessous

><?php
>phpinfo();
>?>

Maintenant je retour consulter la serveur en web a la différence que je rajouter `/phpinfo.php` après l'adresse ip pour consulter le fichier fraichement crée.
![image-20220405214617141](C:\Users\medaey\AppData\Roaming\Typora\typora-user-images\image-20220405214617141.png)

OK php à bien interpréter le code en crée cette magnifique page.

# IV Mysql/Mariadb

Pour finir le système de gestion de bases de données j'opte pour Mariadb qui "Une copie opensource" de Mysql, donc toujour pareill installation du paquet qui va bien.

```bash
sudo apt install -y mariadb-server
```

une fois l'installation fini je vérifie l'installation

```bash
sudo mysql
```

>Welcome to the <span style="color:green">MariaDB</span> monitor.  Commands end with ; or \g.
>Your MariaDB connection id is 31
>Server version: <span style="color:green">10.5.15-MariaDB-0+deb11u1 Debian 11</span>
>
>Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.
>
>Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
>
>MariaDB [(none)]>

Ok la version 10.5.15 est installer, je vais vérifier que les 3 bases on bien était crée.

```mysql
show databases;
```

>+--------------------+
>| Database           |
>+--------------------+
>| information_schema |
>| mysql              |
>| performance_schema |
>+--------------------+
>3 rows in set (0.000 sec)

Bon ça semble correct je quitte donc mariadb.

```mysql
exit;
```

pour finir j'ajouter le service maria dB au démarrage du serveur.

```bash
sudo systemctl enable mariadb
```

**Voilà, un serveur LAMP basique est installé !** 
⚠️ Pour pouvoir géré le https ou la mise en cache il faudra activer des modules complémentaire d'apache avec [a2enmod](https://technique.arscenic.org/lamp-linux-apache-mysql-php/apache-le-serveur-http/article/la-gestion-des-modules).

📝 https://www.it-connect.fr/installer-un-serveur-lamp-linux-apache-mariadb-php-sous-debian-11/

▶ https://youtu.be/kCY_qMpDsek
