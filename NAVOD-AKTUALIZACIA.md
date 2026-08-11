# Návod na úpravu webu

Tento web je jednoduchá súprava súborov (HTML), takú istú, akú vidíte
teraz. Netreba žiadny program na inštaláciu — všetko sa dá upravovať
priamo v prehliadači na stránke GitHub.com.

## Ako upravovať priamo na GitHub.com (odporúčané, najjednoduchšie)

1. Prihláste sa na [github.com](https://github.com) svojím účtom.
2. Otvorte repozitár webu (napr. `https://github.com/VASE-MENO/paulina-web`).
3. Kliknite na súbor, ktorý chcete upraviť (napr. `aktuality.html`).
4. Vpravo hore kliknite na ceruzku (ikonka "Edit this file").
5. Upravte text priamo v okne.
6. Dole na stránke kliknite na zelené tlačidlo **"Commit changes..."**.
7. Do 1–2 minút sa zmena automaticky prejaví na živom webe.

Netreba nič sťahovať ani inštalovať — stačí internetový prehliadač.

---

## Ako pridať nový workshop / podujatie do kalendára

Otvorte súbor **`aktuality.html`** a nájdite v ňom časť označenú:

```
ÚDAJE O PODUJATIACH
```

Uvidíte tam bloky, ktoré vyzerajú takto:

```html
<!-- EVENT START -->
<div class="event-card" data-date="2026-08-20">
  <div class="event-date">20. august 2026</div>
  <h3 class="event-title">Workshop: Krčná chrbtica</h3>
  <p class="event-desc">Popis podujatia, miesto konania a čo si priniesť.</p>
  <span class="event-price">25 €</span>
</div>
<!-- EVENT END -->
```

### Postup pridania nového podujatia

1. Označte a skopírujte celý blok od `<!-- EVENT START -->` po `<!-- EVENT END -->`.
2. Vložte kópiu na nový riadok kdekoľvek medzi `<div id="events-data">` a jeho koncovým `</div>`.
3. V novom bloku upravte:
   - `data-date="2026-08-20"` → dátum vo formáte **RRRR-MM-DD** (rok-mesiac-deň). Toto pole je najdôležitejšie — podľa neho sa podujatie samo zaradí medzi "Pripravované" alebo do "Archívu".
   - text v `<div class="event-date">` → dátum tak, ako sa má zobraziť ľuďom (napr. "20. august 2026").
   - nadpis v `<h3 class="event-title">`.
   - popis v `<p class="event-desc">`.
   - cenu v `<span class="event-price">` (nepovinné, dá sa aj vymazať).
4. Uložte zmenu (Commit changes).

**Netreba nič manuálne triediť ani presúvať** — akonáhle dátum podujatia
uplynie, stránka ho sama presunie do sekcie "Archív minulých podujatí"
úplne dole na stránke. Nové podujatia sa vždy zoradia od najbližšieho.

### Ako odstrániť podujatie

Vymažte celý blok od `<!-- EVENT START -->` po `<!-- EVENT END -->` a uložte zmenu.

### Dôležité pravidlá formátovania

- Dátum v `data-date` musí byť vždy v tvare `RRRR-MM-DD`, napr. `2026-09-03`
  (nie `3.9.2026`) — inak sa podujatie nemusí správne zaradiť.
- Každý riadok `<!-- EVENT START -->` musí mať svoj párový
  `<!-- EVENT END -->`, inak sa layout môže rozbiť. Najbezpečnejšie je vždy
  kopírovať celý existujúci blok a v ňom len meniť text.
- Úvodzovky `"` musí mať `data-date="..."` vždy na oboch stranách.

---

## Ako zmeniť text na iných stránkach (O mne, Ponuka, Kontakt)

Rovnaký princíp ako vyššie — otvorte príslušný súbor
(`o-mne.html`, `ponuka.html`, `kontakt.html`, `index.html`), kliknite na
ceruzku, nájdite text medzi značkami (napr. `<p>Tento text chcem zmeniť</p>`)
a prepíšte ho. Neupravujte text medzi `<` a `>` (to sú značky, ktoré
riadia vzhľad) — meňte iba text medzi nimi.

## Ako vymeniť fotku

1. Novú fotku premenujte presne rovnako, ako sa volá tá pôvodná
   (napr. `paulina-portrait.jpg`), aby ste nemuseli upravovať kód.
2. V priečinku `images/` na GitHube kliknite **"Add file" → "Upload files"**.
3. Nahrajte novú fotku s rovnakým názvom — GitHub sa opýta, či chcete
   pôvodný súbor nahradiť. Potvrďte a uložte zmenu (Commit changes).

Ak chcete pridať úplne novú fotku s iným názvom, treba potom v
príslušnom `.html` súbore nájsť `<img src="images/...">` a názov súboru
tam upraviť.

## Kontaktné údaje, telefón, adresa

Nachádzajú sa v súbore `kontakt.html` a tiež v pätičke (dolná časť)
každej stránky. Vyhľadajte príslušné číslo/e-mail/adresu a prepíšte.

---

Ak si nie ste niečím istá, najbezpečnejšie je zmeniť len text medzi
značkami a nič nemazať okolo neho. Ak sa niečo pokazí, GitHub uchováva
históriu všetkých zmien (záložka **"History"** pri súbore), takže sa
dá kedykoľvek vrátiť k predošlej funkčnej verzii.
