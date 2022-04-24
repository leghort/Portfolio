[TOC]

⏩ Pas le temps ? Fait un copier-coller des textes ci-dessous dans les bons équipements et le routage inter vlan est terminé😄

**Router 1841**

```shell
en
conf t
int fa 0/0.10
en d 10
ip ad 192.168.1.254 255.255.255.0
ex
int fa 0/0.20
en d 20
ip ad 192.168.2.254 255.255.255.0
ex
int fa 0/0
no sh
```

**Switch 2960 (24 port)**

```shell
en
conf t
vlan 10
name VLAN10
ex
vlan 20
name VLAN20
ex
int ra fa 0/1-12
sw m a
sw a v 10
no sh
ex
int ra fa 0/13-24
sw m a
sw a v 20
no sh
ex
in ra gi 0/1-2
sw m t
no sh
ex
```

---

# Présentation du routage inter Vlan

Le routage inter vlan et comme son nom l'indique est un mécanisme de [routage](https://fr.wikipedia.org/wiki/Routage) des données d'un [Vlan](https://fr.wikipedia.org/wiki/R%C3%A9seau_local_virtuel) vers un autre [Vlan](https://fr.wikipedia.org/wiki/R%C3%A9seau_local_virtuel) afin que les équipements présents dans c'est 2 réseaux locaux virtuels puissent communiquer.



![image-20220331215642150](C:\Users\medaey\AppData\Roaming\Typora\typora-user-images\image-20220331215642150.png)

## I Configuration du router

Pour pouvoir effectuer du routage inter vlan le routeur doit avoir une interface/carte réseau et une ip dans chacun des vlan. Plutôt que de devoir ajouter une carte réseau physique par vlan sur le router. Je vais plutôt créer plusieurs interfaces virtuelles sur une carte réseau physique et attribuer une IP par interface virtuelle.

Déjà il faut mettre le router Cisco en mode configuration

```
Router>en
Router#conf t
```
Puis je crée une sous-interface pour chaque vlan dans mon cas il en aura 2 donc je créer une sous-interface pour le vlan 10 et lui donne l'adresse IP 192.168.1.254.
```shell
Router(config)#int fa 0/0.10
Router(config-subif)#en d 10
Router(config-subif)#ip ad 192.168.1.254 255.255.255.0
Router(config-subif)#ex
```
pareille pour le vlan 20
```shell
Router(config)#int fa 0/0.20
Router(config-subif)#en d 20
Router(config-subif)#ip ad 192.168.2.254 255.255.255.0
Router(config-subif)#ex
```
Enfin j'active l'interface fastEthernet 0/0 du router qui est l'interface physique qui a "en elle" les 2 autres sous interface.
```
Router(config)#int fa 0/0
Router(config-if)#no sh
```
## II Configuration du switch

Pour que le routage inter-vlan soit fonctionnel il va falloir créer les vlan sur le switch et indiquer quel port fait parti de quel vlan. Il sera aussi nécessaire de passer le ou les ports utilisé par le router en mode [TRUNK/port tagué](TRUNK/port taggé) affin qui est bien un accès dans le 2 vlan.

Passe le Switch en mode configuration

```
Switch>en
Switch#conf t
```
Créer le vlan 10 sur le Switch
```
Switch(config)#vlan 10
Switch(config-vlan)#name VLAN10
Switch(config-vlan)#ex
```
Créer le vlan 20  sur le Switch
```
Switch(config)#vlan 20
Switch(config-vlan)#name VLAN20
Switch(config-vlan)#ex
```
Les ports fastEthernet de 1 à 12 dans la vlan 10
```
Switch(config)#int ra fa 0/1-12
Switch(config-if-range)#sw m a
Switch(config-if-range)#sw a v 10
Switch(config-if-range)#no sh
Switch(config-if-range)#ex
```
Les ports fastEthernet de 13 à 24 dans la vlan 20
```
Switch(config)#int ra fa 0/13-24
Switch(config-if-range)#sw m a
Switch(config-if-range)#sw a v 20
Switch(config-if-range)#no sh
Switch(config-if-range)#ex
```
Configurer les 2 ports Gigabit Ethernet en mode Trunks
```
Switch(config)#in ra gi 0/1-2
Switch(config-if-range)#sw m t
Switch(config-if-range)#no sh
Switch(config-if-range)#ex
```
Afficher tout les vlan du switch et le port qui y sont attribué
```
Switch(config)#do sh vl
```
A ce stade tout le voyant devrait passer au vert sur Cisco Packet Tracer
![image-20220331223229464](C:\Users\medaey\AppData\Roaming\Typora\typora-user-images\image-20220331223229464.png)

## III Test Routage Vlan

Ping un équipement du vlan 10

```
Router#ping ip 192.168.1.1

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 192.168.1.1, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 0/0/1 ms
```
Ping un équipement du vlan 20
```
Router#ping ip 192.168.2.1
Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 192.168.2.1, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 0/0/0 ms
```

Un dernier test depuis un ordinateur du VLAN 10 je ping un ordinateur du VLAN20

>C:\>ipconfig
>
>FastEthernet0 Connection:(default port)
>
>   Link-local IPv6 Address.........: FE80::2D0:FFFF:FE7B:64D7
>
>   IP Address......................: <span style="color:green">192.168.1.1</span>
>
>   Subnet Mask.....................: <span style="color:green">255.255.255.0</span>
>
>   Default Gateway.................: <span style="color:green">192.168.1.254</span>
>
>
>
>C:\>ping 192.168.2.1
>
>Pinging 192.168.2.1 with 32 bytes of data:
>
>Reply from 192.168.2.1: bytes=32 time=4ms TTL=127
>
>Reply from 192.168.2.1: bytes=32 time=3ms TTL=127
>
>Reply from 192.168.2.1: bytes=32 time=1ms TTL=127
>
>Reply from 192.168.2.1: bytes=32 time<1ms TTL=127
>
>
>
>Ping statistics for 192.168.2.1:
>
>​    <span style="color:green">Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),</span>
>
>Approximate round trip times in milli-seconds:
>
>​    Minimum = 0ms, Maximum = 4ms, Average = 2ms
>
>C:\>

Le routage intervlan est donc fonctionnel

▶️ https://youtu.be/pVA9Fy-UXjg

📝️ https://www.it-connect.fr/mise-en-place-de-vlans-et-de-routage-inter-vlans/