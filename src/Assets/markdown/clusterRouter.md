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

Pour vérifier le bon fontionnementde du cluster de router il suffie d'éteindre le router1, cela va avoir pou effect de casser le routage et si tout est bien configurer le Router devrais prendre le relais aprés 10 seconde. Le routage devrais donc redevenir opérationnel.

Donc depuit un pc du vlan 10 je l'ance un ping infini sur un pc du vlan 20.

![image-20220406200953380](/home/medaey/Documents/GitHub/Portfolio/src/Assets/markdown/clusterRouter.assets/image-20220406200953380.png)

Puis j'arrete le Router1 et le Router2 en cliquant sur le bouton d'alimentation (Oui il fait cliquer sur le bouton comme un vrais)

![image-20220406201132604](/home/medaey/Documents/GitHub/Portfolio/src/Assets/markdown/clusterRouter.assets/image-20220406201132604.png)

Je peut constater avec stupeur que le pc du vlan 10 n'arrive plus a communiquer avec le pc du vlan 20 ce qui normal vu que aucun router n'est allumer !

Puis je ralume le Router1 au bout de 2/3 min les 2 pc devrais arriver a comuniquer puis je rétein le Router 1 pour allumer le Router 2 quand le routage revien cela veux dire que la configuratin de mes 2 router sont bon

