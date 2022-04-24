[TOC]

# DHCP sous Linux

## Préparation

### installation des rackets

```bash
# Installe le server dhcp via apt
sudo apt-get install isc-dhcp-server
```

### Autoriser les ports sur le firewall (si besoin)

```bash
# Autoriser les port 67 & 68 en /udp
(base) toor@debian:~$ sudo ufw allow 67/udp && sudo ufw allow 68/udp
Rule added
Rule added (v6)
Rule added
Rule added (v6)
# Vérifier que les régle on bien était ajouter
(base) toor@debian:~$ sudo ufw status numbered
Status: active

To                         Action      From
     --                         ------      ----
[ 1] 22/tcp                     ALLOW IN    Anywhere                  
[ 2] 3389/tcp                   ALLOW IN    Anywhere                  
[ 3] 53                         ALLOW IN    Anywhere                  
[ 4] 80/tcp                     ALLOW IN    Anywhere                  
[ 5] 67/udp                     ALLOW IN    Anywhere                  
[ 6] 68/udp                     ALLOW IN    Anywhere                  
[ 7] 22/tcp (v6)                ALLOW IN    Anywhere (v6)             
[ 8] 3389/tcp (v6)              ALLOW IN    Anywhere (v6)             
[ 9] 53 (v6)                    ALLOW IN    Anywhere (v6)             
[10] 80/tcp (v6)                ALLOW IN    Anywhere (v6)             
[11] 67/udp (v6)                ALLOW IN    Anywhere (v6)             
[12] 68/udp (v6)                ALLOW IN    Anywhere (v6)  
```
## Configuration

### Configuration basique

```bash
# Editer le fichier dhcpd.conf
sudo nano /etc/dhcp/dhcpd.conf
```
`/etc/default/dhcpd.conf`

```bash
# dhcpd.conf
option domain-name "cossu.fr";
# Adress ip de votre serveur dns
option domain-name-servers 192.168.5.51, 192.168.5.43;

default-lease-time 600; # Temp des beau dhcp
max-lease-time 7200;
ddns-update-style none;

# Plage d'ip qui va étre donné par le dhcp
subnet 192.168.5.0 netmask 255.255.255.0 {
        range 192.168.5.50 192.168.5.59;
        option routers 192.168.5.252;
}
```

### Écoutes sur plusieurs interfaces (ou une interface spécifique)

```bash
# Lister vos interface réseau
ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: eno1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 2c:41:38:a9:fb:ce brd ff:ff:ff:ff:ff:ff
    altname enp7s0
    inet 192.168.5.51/24 brd 192.168.5.255 scope global noprefixroute eno1
       valid_lft forever preferred_lft forever
    inet6 fe80::2e41:38ff:fea9:fbce/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
5: wlx9c3dcfca479d: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 9c:3d:cf:ca:47:9d brd ff:ff:ff:ff:ff:ff
    inet 192.168.43.225/24 brd 192.168.43.255 scope global dynamic noprefixroute wlx9c3dcfca479d
       valid_lft 3006sec preferred_lft 3006sec
    inet6 fe80::8af0:eff5:d41:99da/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
```

```bash
# Editer les ficher /etc/default/isc-dhcp-server
 sudo nano /etc/default/isc-dhcp-server
```
`/etc/default/isc-dhcp-server`

```bash
# Spécifier les interface
INTERFACESv4="eno1"
INTERFACESv6=""
```

### Ouvrir un terminal avec les logs en continu

```bash
sudo tail -f /var/log/syslog
```
## Démarrer le serveur

```bash
# Rédémarer le services isc-dhcp-server
sudo service isc-dhcp-server restart
# Vérifier que le bon fonctionement du serveur dhcp
(base) toor@debian:~$ sudo service isc-dhcp-server status
● isc-dhcp-server.service - LSB: DHCP server
     Loaded: loaded (/etc/init.d/isc-dhcp-server; generated)
     Active: active (running) since Fri 2021-11-12 16:33:20 CET; 34s ago
       Docs: man:systemd-sysv-generator(8)
    Process: 16883 ExecStart=/etc/init.d/isc-dhcp-server start (code=exited, status=0/SUCCESS)
      Tasks: 4 (limit: 4549)
     Memory: 8.3M
        CPU: 66ms
     CGroup: /system.slice/isc-dhcp-server.service
             └─16899 /usr/sbin/dhcpd -4 -q -cf /etc/dhcp/dhcpd.conf eno1

nov. 12 16:33:18 debian systemd[1]: Starting LSB: DHCP server...
nov. 12 16:33:18 debian isc-dhcp-server[16883]: Launching IPv4 server only.
nov. 12 16:33:18 debian dhcpd[16899]: Wrote 0 leases to leases file.
nov. 12 16:33:18 debian dhcpd[16899]: Server starting service.
nov. 12 16:33:20 debian isc-dhcp-server[16883]: Starting ISC DHCPv4 server: dhcpd.
nov. 12 16:33:20 debian systemd[1]: Started LSB: DHCP server.
```
