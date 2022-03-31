# Introduction

J'ai était amener à crée des role ansible pour automatiser installer et configurer de divers service openldap, zabiix, telegraf, bacula, rsyslog, squid, isc-dhcp-server etc...

Bref ansible est vraiment trés pratique pour pouvoir installer et configurer un serveur voir tout une architecture en un temps record !!

# Ansible c'est quoi ?

Ansible est un outils qui permet d'installer et de configurer un ou plusieurs serveurs au travers de recettes écrites en YAML. Ces recettes contiennent une série de tâches qui seront lancées séquentiellement. Elles utilisent des modules internes à Ansible qui permettent de décrire les opérations à effectuer et leur conditions de lancement.

L'une des force d'Ansible et qui n'est pas nécessaire d'installer un agent sur les serveurs à administrer une connexion ssh et python3 suffise.

ℹ️  *Info : Il existe d'autre outils similaire (Chef, Puppet, SaltStack, Fabric)*

## Installer Ansible sur votre poste
C'est bien beau tout ça mais comment ça fonctionne ?
Déja il ma fallut installer Ansible sur mon ordinateur qui sera le pc qui va orchestré tout ça, "node master" en anglais.

Puis il ma fallut ajouter le dépôt officiel d'ansible adapter au system d'exploitation en l'occurrence debian_11 (bullseye).

⚠️ La doc officiel c'est toujours une allier de qualité pour trouver se genre d'information ;)
[Doc officiel](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)

Vu que je suis une feignasse voila la commande pour ajouter le dépôt ;)
```bash
echo "deb http://ppa.launchpad.net/ansible/ansible/ubuntu focal main" | sudo tee -a /etc/apt/sources.list.d/ansible.list
```

Puis il ne faut pas oublier le paquet gnupg2, qui est très utile pour ajouter des clef du dépôt.(Oui pour ajouter un dépôt il faut une clef, c'est une question de sécurité histoire de vérifier l'authenticité du paquets)

```bash
sudo apt-get install gnupg2
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 93C4A3FD7BB9C367
```

Maintenant que les préparatif sont fini, le moment est enfin venue d'installer Ansible 🥳
```bash
sudo apt-get update -y && sudo apt-get install ansible -y
```

## Vérifier l'installation

Aller une petite vérifie histoire d'étre sur à 100% d'Ansible est bien installer.
```bash
ansible --version
```

Incroyable la version 2.12.2 est installer !

Maintenant que le plus facile est passer c'est l'heure de comprendre ansible et de crée des Playbooks 😈

# Création d'un recette & d'inventaire
Quelque lien vers les vidéos/site que j'ai consulter pour comprendre Ansible.

[⏯️ Découvrir Ansible (4min)](https://youtu.be/prtO-Ox8LW8)

[⏯️ Mettre en place un serveur web avec ansible (56min) ](https://youtu.be/DwNapBHypE8)

[⏯️ Fichier YAML (14min)](https://youtu.be/7gmW6vxgsRQ)

[⏯️ Fichier Jinja2 (3min)](https://youtu.be/slfDz6xqNkg)

[📝 Repo de playbook ansible galaxy](https://galaxy.ansible.com/)

[📝Création des clefs ssh](https://lecrabeinfo.net/se-connecter-en-ssh-par-echange-de-cles-ssh.html#etape-1-generer-des-cles-ssh)

[📝Docs Ansible](https://docs.ansible.com/ansible/latest/index.html)

Bon après quelques heures de documentation et d'inspection de playbook existant voici un résumer.

- **Playbook :** Un fichier YAML qui va contenir les action à effectuer, par exemple install le packet wget, copie un fichier etc...

- **Inventaire :** Un fichier qui contient les information relative au machines à administrer ip, hostname, shell, username, etc...

- **Clef ssh :** Par défaut l'authentification ssh s'effectue par clefs, c'est d’ailleurs recommander. (il est cependant possible de forcer la connexion par mot de passe avec le fichier Inventaire)

- **Templates jinja :** Un fichier Jinja2 c'est le modèle d'un fichier de configuration, qui intègre la notion de variable, list, boucle et condition.

Et enfin il est préférable de crée une arborescence par playbook avec la commande ansible-galaxy histoire d'organiser les fichiers qui constitue un Role Ansible (Playbook, Templates, script, etc..)
```
ansible-galaxy init zabbix
```
Ansible galaxy va alors générer cette arborescence.
```bash
├── defaults
│   └── main.yml
├── files
├── handlers
│   └── main.yml
├── meta
│   └── main.yml
├── README.md
├── tasks
│   └── main.yml
├── templates
├── tests
│   ├── inventory
│   └── test.yml
└── vars
    └── main.yml
```
## Fichier Playbook
Voici un extrais de l'un de mes 1er rôle Ansible qui permet d’installé l'agent zabbix sur toutes les machines qui sont dans le groupe [Zabbix] du fichier **Inventaire**

(Il fait appel à des fichiers pour configurer l'agent que je ne vais pas détailler ici.)

```yaml
---
  # Installation de zabbix-agent
  - name: Ajout de la clé de dépôt zabbix
    apt_key: url=https://repo.zabbix.com/zabbix-official-repo.key state=present
    tags: [ install ]

  - name: Ajout du dépôt zabbix
    template: src=./templates/zabbix.list.j2 dest=/etc/apt/sources.list.d/zabbix.list owner=root group=root mode='0644'
    tags: [ install ]

  - name: Installation PAQUET zabbix_agent
    apt: name=zabbix-agent state=latest update_cache=yes
    tags: [ install ]

  # Configuration globale de zabbix_agent
  - name: Configuration globale de zabbix_agent
    template: src=./templates/zabbix_agentd.conf.j2 dest=/etc/zabbix/zabbix_agentd.d/zabbix_agentd.conf owner=zabbix group=zabbix mode='0640'
    tags: [ install, config ]
```

## Fichier d'inventaire
Voila la tête de mon fichier inventaire, la connexion ssh ce fait par mot de passe et binaire python3 sont indiquer en chemin absolut vu que c'est un environnement de test virtuel.

⚠️ En production il faut utiliser des clef ssh et non des mot de passe pour des questions de sécurité.

```bash
[Zabbix]
server-zabbix ansible_host=192.168.1.30 ansible_user=toor ansible_ssh_pass=password ansible_sudo_pass=password ansible_python_interpreter=/usr/bin/python3
client-zabbix ansible_host=192.168.1.10 ansible_user=toor ansible_ssh_pass=password ansible_sudo_pass=password ansible_python_interpreter=/usr/bin/python3
server-web ansible_host=192.168.1.32 ansible_user=toor ansible_ssh_pass=password ansible_sudo_pass=password ansible_python_interpreter=/usr/bin/python3
```

Après moult test en environnement virtuel et quelque cheveux arracher le rôle fonctionne !!

Il m'est enfin possible:
- Installer le paquets zabbix_agent depuit le dépôt officiel
- Configurer zabbix_agent
- Exécuter quelle script .sh

le tout en une seul commande qui peut être scale sur une multitude de machines 😍
```bash
ansible-playbook main.yml -i inventory --limite server-zabbix:client-zabbix
```

ℹ️ *--limite permet de limiter l'execution du* **Playbook** *à certaine machines*
