# Web Paulínka

Osobná webová stránka Paulíny Minárikovej – fyzioterapeutky a lektorky jogy v Martine.

Statický web (čisté HTML/CSS/JS, žiadny build krok), určený na hosting cez **GitHub Pages**.

## Štruktúra

```
index.html          – domovská stránka
o-mne.html           – O mne
ponuka.html          – Ponuka služieb a cenník
aktuality.html       – Aktuality / kalendár workshopov (samo-triediaci sa)
kontakt.html         – Kontakt, adresa, mapa
css/style.css        – vzhľad stránky
js/script.js         – mobilné menu + logika kalendára podujatí
images/              – fotografie a favicon
NAVOD-AKTUALIZACIA.md – návod pre správu obsahu (najmä kalendár podujatí)
```

## Ako spustiť lokálne

Netreba žiadnu inštaláciu. Stačí otvoriť `index.html` v prehliadači,
alebo z priečinka spustiť jednoduchý lokálny server, napr.:

```
python3 -m http.server 8000
```

a otvoriť `http://localhost:8000`.

## Ako publikovať / upravovať obsah

Pozri `NAVOD-AKTUALIZACIA.md` pre úpravu textov, fotiek a kalendára
podujatí priamo cez GitHub.com (bez nutnosti inštalovať čokoľvek).
