## Ez a fordítás manaszon munkáján alapul. 
Mivel nem fejlesztette 2020 áprilisa óta, ezért úgy gondoltam, hogy frissítem.
https://github.com/manaszon/flarum-ext-hungarian

## Változások az eredetihez képest:

Composer.json:
 Verzió szám átírva, így lehet telepíteni.

config.js:
 A dátum, idő kiírás megjavítva.

## Telepítés
Ezt a csomagot a [Composer](https://getcomposer.org/) nevű programmal tudod telepíteni.

```console
composer require zolii/hun_flarum
```

Miután letöltötted engedélyezd az admin panelben. A Basics menüpontban állításd át alapértlemezettnek a nyelvcsomagot.

## Frissítés

Szintén [Composer](https://getcomposer.org/) programmal.

```console
composer update zolii/hun_flarum
```

Gyorsító tár törlése (ajánlott!):

```console
php flarum cache:clear
```
