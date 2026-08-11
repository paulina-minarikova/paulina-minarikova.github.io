# Ako dostať web na internet cez GitHub Pages (od úplnej nuly)

Netreba žiadne technické znalosti ani inštaláciu programov. Celý proces
prebieha v internetovom prehliadači.

## 1. Vytvorenie GitHub účtu

1. Choďte na [github.com](https://github.com).
2. Kliknite **"Sign up"**.
3. Zadajte e-mail, heslo a používateľské meno (napr. `paulina-minarikova`
   alebo podobné — bude súčasťou webovej adresy, takže je dobré zvoliť
   niečo jednoduché a profesionálne).
4. Potvrďte e-mail podľa pokynov, ktoré príde do schránky.

## 2. Vytvorenie repozitára (priečinka pre web)

1. Po prihlásení kliknite vpravo hore na **"+"** → **"New repository"**.
2. **Repository name**: napíšte napr. `paulina-web` (bez diakritiky a medzier).
3. Nastavte repozitár ako **Public** (musí byť verejný, aby fungovala
   bezplatná verzia GitHub Pages).
4. Nič iné nezaškrtávajte (README netreba, súbory prídu v ďalšom kroku).
5. Kliknite **"Create repository"**.

## 3. Nahratie súborov webu (bez potreby inštalovať čokoľvek)

1. V novom, prázdnom repozitári kliknite na odkaz
   **"uploading an existing file"** (alebo hore **"Add file" → "Upload files"**).
2. Otvorte na počítači priečinok s webom (tento priečinok — obsahuje
   súbory `index.html`, `o-mne.html`, `ponuka.html`, `aktuality.html`,
   `kontakt.html`, a priečinky `css`, `js`, `images`).
3. Označte **úplne všetky súbory a priečinky vnútri** tohto priečinka
   (nie samotný priečinok, ale jeho obsah) a pretiahnite ich myšou do
   okna prehliadača na GitHub stránke.
4. Počkajte, kým sa nahrajú všetky súbory (vrátane obrázkov).
5. Dole zadajte krátky popis, napr. "Prvá verzia webu", a kliknite
   **"Commit changes"**.

> Dôležité: štruktúra priečinkov (`css/`, `js/`, `images/`) musí ostať
> presne taká, ako je teraz — inak sa web nezobrazí správne. Pri
> pretiahnutí celého obsahu priečinka naraz sa štruktúra zachová
> automaticky.

## 4. Zapnutie GitHub Pages (zverejnenie webu)

1. V repozitári kliknite na **"Settings"** (v hornom menu repozitára).
2. V ľavom menu kliknite na **"Pages"**.
3. V sekcii **"Build and deployment" → "Source"** vyberte
   **"Deploy from a branch"**.
4. Pri **"Branch"** vyberte `main` a priečinok `/ (root)`, potom **"Save"**.
5. Počkajte 1–2 minúty. Hore sa zobrazí zelená hláška s adresou webu,
   typicky v tvare:

   ```
   https://VASE-POUZIVATELSKE-MENO.github.io/paulina-web/
   ```

6. Táto adresa je live web — funguje pre kohokoľvek na internete.

## 5. (Voliteľné) Vlastná doména

Ak si Paulína neskôr kúpi vlastnú doménu (napr. `paulinafyzio.sk`), dá sa
v tej istej sekcii **Settings → Pages** pridať do poľa **"Custom domain"**.
Toto už vyžaduje aj nastavenie u poskytovateľa domény (DNS záznam) — pri
záujme je najjednoduchšie napísať mi znova a prejdeme to spolu.

## 6. Odovzdanie prístupu

Keďže tento web je pre Paulínu, po dokončení jej odovzdajte:
- prihlasovacie údaje do GitHub účtu (alebo ju rovno nechajte, nech si
  účet vytvorí sama podľa bodu 1, a vy len nahráte súbory ako
  spoluprispievateľ – **Settings → Collaborators**),
- odkaz na túto zložku so súbormi webu,
- súbor `NAVOD-AKTUALIZACIA.md`, kde je návod na bežnú úpravu obsahu
  (najmä kalendár podujatí v `aktuality.html`).

## Ako neskôr aktualizovať web

Pozri `NAVOD-AKTUALIZACIA.md` — všetky bežné úpravy (texty, fotky,
kalendár podujatí) sa dajú robiť priamo na GitHub.com bez inštalácie
čohokoľvek, presne tým istým spôsobom ako nahrávanie súborov vyššie
(cez ceruzku "Edit" pri konkrétnom súbore).
