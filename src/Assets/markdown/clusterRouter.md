⏩ Par le temps ? Fait un copier-coller de la commande ci-dessous :smile:

**Routeur 1**

```bash
en
conf t
int fa0/0.10
ip ad 192.168.1.252 255.255.255.0
st 10 ip 192.168.1.254
st 10 pri 110
sta 10 pre
int fa0/0.20
ip ad 192.168.2.252 255.255.255.0
st 20 ip 192.168.2.254
st 20 pri 110
sta 20 pre
end
wr
```

**Routeur 2**

```bash
en
conf t
int fa0/0.10
ip ad 192.168.1.253 255.255.255.0
st 10 ip 192.168.1.254
st 10 pri 90
sta 10 pre
int fa0/0.20
ip ad 192.168.2.253 255.255.255.0
st 20 ip 192.168.2.254
st 20 pri 90
sta 20 pre
end
wr
```



---

# I Presentation

Un cluster de routeur est un ensemble de router qui sont regrouper sous un router virtuel. Les cluster de routeur HSRP est in cluster actif passif, lorsque q'un router tomber en pane celui avec la plus grande priorité va alord prendre le relay après 10 seconde.
Cependant si le router avec la plus grande priorité revient a fonctionner après une interruption de service, il ne récupéra pas le routage. Mais d'autre type de cluster de router VRRP, GLBP.

ℹ️ Si 2 router on le même niveau de priorité c'est celui avec l'adresse ip la plus haute qui aura la priorité

![img](https://formip.com/wp-content/uploads/2019/09/hsrp-vrrp-glbp-difference-2.png)

# II Installation

Cette install de cluster avec HSRP est baser sur des routeur qui fond du routage interVLAN, la mise en plac est détail ici --> [RoutageInterVlan](https://cossu.tech/routageintervlan)

Pour metre en place le cluster de routeur il va me faloir 3 ip de disponible par VLAN une par router et une pour le routeur virtuel (cluster).

![image-20220406200458362](/home/medaey/Documents/GitHub/Portfolio/src/Assets/markdown/clusterRouter.assets/image-20220406200458362.png)

| Vlan | Router 1      | Router 2      | Cluster       |
| ---- | ------------- | ------------- | ------------- |
| 10   | 192.168.1.252 | 192.168.1.253 | 192.168.1.254 |
| 20   | 192.168.2.252 | 192.168.2.253 | 192.168.2.254 |

Pour le routeur 1 je vais lui donc lui associer l'ip 192.168.1.255 a l'interface virtual fa0/0.10 qui est dans le vlan 10 et je lui dit de surveiller l'adresse ip 192.168.1.254 (L'adress ip du cluster).Et enfin je lui definir la prioriter qu'il aura dans le cluster (110).Puis je fait de méme pour l'interface fa0/0.20 en changement l'adress ip.

**Router 1**

```bash
en
conf t
int fa0/0.10
ip ad 192.168.1.252 255.255.255.0
st 10 ip 192.168.1.254
st 10 pri 110
sta 10 pre

int fa0/0.20
ip ad 192.168.2.252 255.255.255.0
st 20 ip 192.168.2.254
st 20 pri 110
sta 20 pre
end
wr
```



**Router 2**

La configuration du router 2 est similaire au router 2, il faut juste bien veiller a indique les bonne adrresse ip.

```bash
en
conf t
int fa0/0.10
ip ad 192.168.1.253 255.255.255.0
st 10 ip 192.168.1.254
st 10 pri 90
sta 10 pre

int fa0/0.20
ip ad 192.168.2.253 255.255.255.0
st 20 ip 192.168.2.254
st 20 pri 90
sta 20 pre
end
wr
```



# III Test de fonctionement

Pour vérifier le bon fontionnementde de la configuration des 2 routeu je commence par eteindre les 2 router pour celail faut cliquer sur le bouton d'alimentation (Commeen vrais) 

![image-20220406201132604](/home/medaey/Documents/GitHub/Portfolio/src/Assets/markdown/clusterRouter.assets/image-20220406201132604.png)

puis depuit un pc du vlan 10 je l'ance un ping infini sur un pc du vlan 20.

![image-20220408070552661](/home/medaey/Documents/GitHub/Portfolio/src/Assets/markdown/clusterRouter.assets/image-20220408070552661.png)

Et je ralume le Routeur 1, si il est bien configurer les 2 machines devrais pouvoir communiquer ! Aprés quelque minutes les machine arrivent bien a comuniquer.

![image-20220408071113157](/home/medaey/Documents/GitHub/Portfolio/src/Assets/markdown/clusterRouter.assets/image-20220408071113157.png)

Maitenan je re-etain le Routeur 1 qui a une configuration fonctionnel, il est temp de tester le Router 2 en répetant l'opération.

![image-20220408071327320](/home/medaey/Documents/GitHub/Portfolio/src/Assets/markdown/clusterRouter.assets/image-20220408071327320.png)

Les 2 pc arivent a nouveau a communiquer ! La configuration de 2 Router est donc fontionnel.

Bon il est temp de tester la bacule HSRP.
Je ralumme le Routeur 1 et une fois qu'il est bine demarrer j'arrete le Routeur2.

![image-20220408072107312](/home/medaey/Documents/GitHub/Portfolio/src/Assets/markdown/clusterRouter.assets/image-20220408072107312.png)



Normalement les Routeur 1 devrais prendre le relai apres quelque minutes.

![image-20220408072406593](/home/medaey/Documents/GitHub/Portfolio/src/Assets/markdown/clusterRouter.assets/image-20220408072406593.png)

Voila c'est fini les cluster de Router avec HSRP est fonctionnel et tout les test on était effectuer.

![image-20220408072822044](/home/medaey/Documents/GitHub/Portfolio/src/Assets/markdown/clusterRouter.assets/image-20220408072822044.png)
