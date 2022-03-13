# Quesque que QEMU  ?

QEMU est une solution de virtualisation qui est à la basse de projet comme KVM, il est aussi important de savoir que le code de QEMU est utiliser par VirtualBox. Cette solution est donc une base fondamental des technologies de virtualisation.

## Crée une machine virtuel avec QEMU

Pour crée cette Machine Virtuel (VM) il faut définir les élément suivant :

- Crée un disque Virtuel et ça taille
- L'architecture du système de la VM
- Définir la ram de la VM
- Indiquer le fichier iso a utiliser

Dans un premier temp il me faut un disque virtuel qui va stocker tout les données de la VM.

```bash
qemu-img create debian.img 8G
```



Au tour de l'architecture, celle que je vais utiliser est une architecture *qemu-system-x86_64* mais il en existe d'autre *qemu-system-i386, qemu-system-arm,...* Il faut donc indiquer la bonne architecture.

Et enfin la ram 1024Mo devrais suffire pour une debian sans interface graphique.

Voici donc la commande que j'exécuter pour crée la VM debian avec qemu.

```bash
qemu-system-x86_64 -hda debian.img -cdrom debian-11.2.0-amd64-netinst.iso -m 1024M -boot order=dc
```

Une magnifique interface nommé QEMU apparais 🥳

![image-20220313013113297](qemu.assets/image-20220313013113297.png)

Une fois tout les étapes d'installation effectuer, j'ai arrêter la machiner est l'ai redémarrer avec la commande si dessous.

```bash
qemu-system-x86_64.exe -hda image.img --cdrom debian-11.2.0-amd64-netinst.iso -m 1024M
```

📝 https://doc.ubuntu-fr.org/qemu
📝 https://www.tremplin-numerique.org/comment-utiliser-qemu-pour-demarrer-un-autre-systeme-dexploitation
📝 https://www.lojiciels.com/quest-ce-que-qemu-kvm-sous-linux/#Quelles_sont_les_differences_entre_QEMU_et_KVM