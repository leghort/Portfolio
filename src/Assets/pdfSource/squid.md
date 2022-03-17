[TOC]

# Installation

```bash
sudo apt update &&  sudo apt upgrade # Mise a jour des dépo est des packet
sudo apt install squid # Installation de du serveur mendataire Squid
```

##  Ouvrir le port 3128 du pare-feu

```bash
sudo ufw allow 3128/tcp && sudo ufw status numbered | grep 3128 # Autoriser les port 3128 en TCP
```



# Configuration

Nous allons mettre en place une proxy par whitelist, c'est a dire que tout les site seront bloquer excepter les site que l'on va autoriser.

## Faire une sauvegarde du fichier `squid.conf`

Dans un premier temp il est préférable d'affecter une sauvegarde du fichier de configuration par default, pour revenir le cas échéent à la configuration initions.

```bash
sudo cp /etc/squid/squid.conf /etc/squid/squid.conf.bak && ls -l /etc/squid/ # Crée une copie du fichier squid.conf
```

## Rendre le fichier `squid.conf` plus lisible

Dans une optique de lisibilité du fichier de configuration nous allons retirer tout les ligne commenté et vides.

```bash
sudo sed -i '/^#/d' /etc/squid/squid.conf ; sudo sed -i '/^$/d' /etc/squid/squid.conf && head /etc/squid/squid.conf
```

## Démarrer le service

L'on démarre alors le service et l'on vérifie sont bon fonctionnement avec status

```bash
sudo service squid restart ; sudo service squid status # Démarrer le service squid & vérifier sont état de lancement
```

## Access Control List

Pour pourvoir appliquer des règles de filtrage avec squid, il va falloir dans un premier temp définir les éléments que l'on veut impacter. Dans notre cas ce sera le réseau compta qui à pour adresse IP 192.168.1.0/24. Ce sera nos ACL (Access Control List ou Liste de Contrôle d'Accès)

```bash
# Acl pour toutes les machine qui sont dans le réseau 192.168.1.0
acl compta src 192.168.1.0/24
```

## Régle http_access

```bash
# Bloque tous les machines qui sont dans le group compta
http_access deny compta
```



# Test le proxy dans avec un navigateur web (Firefox)

Dans un navigateur web lancer à partir d'une machine qui appartiens au groupe ajouter l'@ ip du proxy que vous venais de configurer en temp que proxy, normalement la moindre recherche internet sera refuser par le proxy.

Par exemple quand je chercher à accès au site http://cossu.xzy/ cette erreur apparait.

>```
>ERREUR
>L'URL demandée n'a pas pu être trouvée
>
>L'erreur suivante s'est produite en essayant d'accéder à l'URL : http://cossu.xzy/
>
>    Accès interdit.
>
>La configuration du contrôle d'accès, empêche votre requête d'être acceptée. Si vous pensez >que c'est une erreur, contactez votre fournisseur d'accès.
>
>Votre administrateur proxy est webmaster.
>```

Donc le proxy fonctionne !



# Autoriser le site http://cossu.xzy/ pour le réseau compta
## Crée un fichier qui contiendra les sites que l'on veut autoriser

```bash
sudo bash -c 'echo ".cossu.xzy" >> /etc/squid/liste-sites.txt' ; cat /etc/squid/liste-sites.txt
```

## Créer une acl qui fait référence au fichier

```bash
sudo nano /etc/squid/squid.conf
```
Ajouter les ligne suivant au fichier `/etc/squid/squid.conf`

```bash
# acl qui faire referance a la liste de site internet
acl liste_url dstdomain "/etc/squid/liste-sites.txt"
# autoriser les site de la liste pour les machine du réseau compta
http_access allow compta liste_url
```

⚠️ L'ordre des lignes *http_access* est important, car elle seront traiter de manière séquentielle ⚠️

## Redémarre le service squid

```bash
sudo service squid restart ; sudo service squid status
```

Les nome de domaine renseigner dans le fichier `/etc/squid/liste-sites.txt` est désormais autoriser pour le réseau compta.


 # Note

## Voir les logs

```bash
sudo tail -f /var/log/squid/access.log
```

## Ajouter un site dans la liste 

```bash
sudo bash -c 'echo ".ytimg.com" >> /etc/squid/liste-sites.txt' ; cat /etc/squid/liste-sites.txt && sudo service squid reload ; sudo service squid status
```



## Source

https://www.ibisc.univ-evry.fr/~petit/Enseignement/AdminSystem/IUP-ASR/2007-2008-IUP-ASR-ADSY/Projet-2007-2008/squid.pdf