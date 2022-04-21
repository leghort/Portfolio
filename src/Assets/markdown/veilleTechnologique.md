[TOC]

# Veille Technologique

Pour effectuer cette veille j'ai utilisé l'agrégateur de flux rss **[inoreader](https://www.inoreader.com/)** afin d'être informé des derniers articles de site comme **[Le journal du hacker](https://www.journalduhacker.net/)** ou **[korben.info](https://korben.info/)**. J'ai également utilisé l'outil de **[rechercher avancer google](https://www.google.com/advanced_search)** pour obtenir de résultats plus pertinent.

## Qu’est-ce qu’une veille Technologique ?

La veille technologique est le fait de se tenir informé des nouveautés d'un secteur d'activité, que ce soit les inventions des concurrents ou des nouvelles techniques afin de performer dans son domaine. L'informatique est un secteur qui évolue rapidement, la veille technologique est une composante importante pour tout professionnel du secteur. Elle permet également de prendre de meilleure décision et de gagner en compétense.

Ma veille technologique va porter sur les systèmes de stockage et plus particulièrement sur les disques durs SSD qui sont les suceseurs directes des disques durs HDD.

## Ques-ce qu'un SSD ?

Un SSD est un disque dur de stockage qui utilise des puces électroniques et non un disque rotatif pour stocker les informations comme une carte SD ou une clef USB. C'est disque dur ont une vitesse de lecteur/écriture de loin supérieure aux HDD, il résiste mieux au choques et ils sont également plus silencieux.

L'information stockée dans le SSD persiste électriquement au sein des composant électronique même en l'absence d'alimentation électrique contrairement à la mémoire vive (RAM). Cette exploie est dut à l'ajout d'une grille flottante sur [des transistors **MOSFET**](https://fr.wikipedia.org/wiki/Transistor_%C3%A0_effet_de_champ_%C3%A0_grille_m%C3%A9tal-oxyde) cette grille flottante en noir sur les schémas ci-dessous va permettre ou non aux électrons de passer quand une tension est appliquer au transistor. Pour en savoir plus sur le fonctionnement fondamental du SSD je ne peux que recommande l'article de [couleur-science.eu](https://couleur-science.eu/?d=b3cf17--comment-fonctionne-la-memoire-flash-dun-lecteur-ssd)

![effet mémoire dans le transistor](https://couleur-science.eu/img/cc/memory-effect.png)

## Quand utiliser un SSD ?

Utiliser ce type de disque dur sur un **ordinateur portable** est particulièrement pertinent il permet d'accélérer le temps de démarrage et de réduire les risques de perte de donné, car si l'ordinateur portable venait à être brutalisé le fait de ne plus avoir de composant mécanique dans le disque dur le rend plus robust au choc.

Le SSD a également une place privilégier dans les matériels dédiés aux **jeux vidéo** que ce soit un **ordinateur** ou une **console de jeux** c'est d'ailleurs ce choix que **SONY** a fait pour ça toute dernière console la Playstation 5. Choix qui se comprend vu le gain de performance apporter que ce soit en temps de chargement des modèles 3D des textures ou bien sur le démarrage de l'appareil. L'on parle ici d'un gain qui est de **4 fois plus rapide** qu'un HDD.

Ils sont est également utilisé dans **l'industrie** vue le **gain de performanse** qu'ils proposent, par exemple des acteurs comme **OVH** avec sa gamme de produits VPS qui est équipe de SSD.

![image-20220421010305683](/home/medaey/.config/Typora/typora-user-images/image-20220421010305683.png)

Voici un tableau synoptique des différences entre les disques HDD et SSD

| HDD                                                          | SSD                                                         |
| ------------------------------------------------------------ | ----------------------------------------------------------- |
| Peu coûteux *(2To = 60€)*                                    | Très coûteux *(2To = 220€)*                                 |
| Pas rapide *(0,1 à 1,7 Mo/s)*                                | Plus rapide *(50 à 250 Mo/s)*                               |
| Consomme plus d'énergie électrique (10Watt)                  | Utilise moins d’énergie électrique *(5 Watt)*               |
| Les rotations des disque magnétique en aluminum/verre et les clics de la téte de lecture sont audibles *(27 à 48 dB)* | Aucun son, en raison de l'absence de pièces mobiles *(1dB)* |
| Capacité de stockage par disque très grande  *(Max 20 To)*   | Limité en capacité de stockage par disque *(Max 8 To)*      |

## Les types de cellules

Tous les ssd ne se valent pas les cellules de mémoire d'un disque SSD peut-être de type:

- **SLC** pour Single Level Cell.

  Chaque cellule contient un seul bit. C'est le type le plus cher, souvent rencontré en entreprises car il supporte jusqu'à *100,000 cycles de lecture/écriture*

  

- **MLC** pour Multi Level Cell.
  2 bits par cellule c'est le plus courant en raison de son prix et convient à la plupart  des utilisations quotidiennes et intensives adapter au gamer. *10 000 cycles de lecture/écriture*

  
  
- **TLC** pour Triple Level Cell. 

  3 bits par cellules le prix baisse et les performances également. Pour autant, les SSD qui en sont équipés restent plus que  suffisants pour les utilisateurs netbook et tablette.

  500 à 1000 cycles de lecture/écriture

  

- **QLC**  ou Quadri Level Cell
  
  4 bits par cellule, ce sont les cellules les moins chères dû marcher avec la plus grande capacité de stockage, mais elles dispose uniquement de *1000 cycles de lecture/écriture*

Plus il y a de bits par cellule, plus la capacité de stockage du SSD sera grande avec une réduction du prix, mais en contrepartie les cellules auront une durée de vie plus courte ce qui va avoir pour effect de réduire la capacité de stockage au cours du temps.

![Flash Storage: What Do SLC MLC TLC and QLC Stand For?](https://datastorageasean.com/sites/default/files/images/Flash%20Storage%20-%20Difference%20Between%20SLC%2C%20MLC%2C%20TLC%20and%20QLC.png)

Choisir le type de cellule qui équipe son SSD est donc important en fonction du nombre de lectures/écriture au qu'elle il sera soumis. Aujourd'hui les SSD une durée de vie correcte (au moins 5 ans) si l'on en fait un utilisation "classique". Mais la durée de vie d'un SSD varie fortement en fonction du nombre de lectures/écriture qu'il subit.

## SSD sata ou NVMe M2 ?

Les derniers disques durs SSD utilise une autre connectique que le SATA. Ils utilisent désormais une connectique appelée NVMe M.2 pour communiquer avec le processeur, leur format change également pour devenir des cartes semblables à des barrettes de RAM.

![2.5" sata vs nvme vs m.2 sata](https://generationcloud-17452.kxcdn.com/wp-content/uploads/2020/09/maxresdefault.jpg)

C'est nouveau disque SSD ont une vitesse de transfert encore plus rapide allant de 500 à 2000 Mo/s, cette amélioration est principalement due à l'abandon du connecteur sata qui limite le transfert à 600 Mo/s.
![NVME-Infographic_MK1701062_FR_0217](https://julientracol.files.wordpress.com/2019/04/nvme-infographic_mk1701062_fr_0217.png?w=748)

ℹ️ Pour pouvoir profiter de c'est nouveau disque SSD NVMe M2 il faut que votre carte-mére dispose d'un emplacement M2. À savoir que les disques PCIe Gen 4 sont rétro-compatible PCIe Gen3.

## L'avenir du SSD

Aujourd’hui les disque dur SSD sont arrive à maturité quand celle des HDD a été largement éprouvée. Il n'est pas rare de voir de système hybride qui utilise un SSD comme dique principal pour profiter de c'est avantage tout en déléguant une partie du stockage sur des disques HDD afin de pouvoir effectuer une réduction des coûts.

C'est disque on longtemps était critiqués pour leur faible durée de vie mais les technologies ont progressé et il est fort à parier qu’un autre composant clé de l'ordinateur tombe en panne avant le SSD. Nous sommes aujourd'hui encore dans une phase transitoire où le HDD à ça place, mais il ne fait  aucun doute que les disques SSD vont prendre une place encore plus important sur le marché dans les prochaines années.

*Source utilisée pour cette veille*

▶️https://youtu.be/sHnMQnxgEro (Anatomie d'un SSD et de sa Mémoire)
▶️ https://youtu.be/gXZPURjJk9U (Décortiquer un disque SSD)
📝https://www.dir-tech.com/disque-dur-hdd-et-ssd-quel-choix/
📝https://www.phonandroid.com/meilleurs-ssd-internes-quel-modele-choisir.html
📝https://fr.wikipedia.org/wiki/SSD
📝https://www.materiel.net/guide-achat/g7-les-ssd/5368/
📝https://generationcloud.fr/post/quel-type-de-disque-dur-choisir-ssd-vs-hdd-vs-sshd-et-2-5-vs-3-5-cas-pratiques
📝https://www.conseil-config.com/2016/dossier-le-raid-de-ssd-dans-les-pc-des-particuliers-utile-ou-superflu/
📝https://youtu.be/cyNQ4i2rb0M (NAS 20To SSD)
📝https://www.reneelab.fr/difference-slc-mlc-tlc.html#slc