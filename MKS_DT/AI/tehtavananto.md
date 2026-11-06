# Tehtävä: Bootstrap-sivusto (karuselli, responsiivinen valikko ja grid)

## Tavoite

Rakennat Bootstrap 5 -kirjastoa käyttäen kaksisivuisen verkkosivuston ja kuvaat dokumentissa, mitä teit ja miksi. Tehtävässä harjoitellaan karusellia, responsiivista valikkoa, gridiä ja erillistä tyylitiedostoa.

## Osa 1: Toteutus

Tee sivusto, jossa on seuraavat osat.

### Etusivu (`index.html`)
1. **Otsake-osio:** vaaleanpunainen tausta ja responsiivinen valikko (`navbar`). Pienellä näytöllä valikko avataan painikkeella.
2. **Karuselli:** kolme kuvaa, kuvatekstit, edellinen/seuraava-painikkeet ja pisteohjaimet.

### Grid-sivu (`grid.html`)
1. Samanlainen otsake ja valikko kuin etusivulla.
2. Valikossa on linkki Grid-sivulle.
3. Sivulla on vähintään neljä esimerkkiä Bootstrapin gridistä:
   - kolme yhtä leveää saraketta
   - eri levyiset sarakkeet (esim. 8 + 4)
   - neljä saraketta, jotka näkyvät eri määrä riviä kohden eri näyttökoilla (esim. 1 / 2 / 4)
   - kolme kuvaa gridissä

### Tyylitiedosto (`style.css`)
- Kaikki omat tyylimäärittelysi ovat erillisessä `.css`-tiedostossa, eikä HTML:ssä ole `<style>`-lohkoa tai `style`-attribuutteja.
- Tiedosto on linkitetty molemmille sivuille.

## Osa 2: Selitys

Kirjoita omin sanoin vastaukset kysymyksiin. Pelkkä koodin kopiointi ei riitä. Vastaa kuhunkin kohtaan noin 3–6 lauseella.

### A. Karuselli
1. Mitä luokkia `carousel`, `carousel-inner` ja `carousel-item` tekevät?
2. Mitä `data-bs-target`, `data-bs-slide` ja `data-bs-slide-to` tekevät?
3. Miksi kuvilla on `alt`-teksti ja painikkeilla `visually-hidden`-teksti?
4. Miten varmistit, että karuselli näyttää hyvältä eri kokoisilla näytöillä?

### B. Otsake ja valikko
1. Miten responsiivinen valikko on rakennettu? Selitä `navbar-expand-md`, `navbar-toggler` ja `collapse`.
2. Mitä tapahtuu, kun selainikkunaa kavennetaan?
3. Miten teit otsakkeesta vaaleanpunaisen?

### C. Tyylitiedosto
1. Miksi tyylit kannattaa pitää erillisessä tiedostossa?
2. Miten tyylitiedosto linkitetään HTML-sivulle?
3. Mitkä tyylit tulevat Bootstrapilta ja mitkä kirjoitit itse?

### D. Grid
1. Miten Bootstrapin 12 sarakkeen ruudukko toimii?
2. Selitä, mitä `col-12 col-md-4` ja `col-12 col-sm-6 col-lg-3` tarkoittavat. Millä näytön leveyksillä asettelu muuttuu?
3. Mitä `row`- ja `g-3`-luokat tekevät?
4. Miksi kuville käytetään luokkaa `img-fluid`?

### E. Pohdinta
1. Mikä oli vaikeinta tai yllättävintä?
2. Millaisia virheitä kohtasit ja miten korjasit ne?
3. Mitä lisäisit tai muuttaisit, jos kehittäisit sivua eteenpäin?
4. Mitä opit Bootstrapista verrattuna pelkkään CSS:ään?

## Osa 3: Kuvakaappaukset

Liitä dokumenttiin kuvakaappaukset ja kirjoita jokaiselle lyhyt kuvateksti:
1. Etusivu leveällä näytöllä.
2. Etusivu kapealla näytöllä, valikko suljettuna ja avattuna.
3. Karuselli, jossa toinen tai kolmas kuva on näkyvissä.
4. Grid-sivu leveällä näytöllä.
5. Grid-sivu kapealla näytöllä.

## Palautus

- Palauta HTML-, CSS- ja kuvatiedostot sekä selitysdokumentti (PDF tai Markdown).
- Jos sivusto on julkaistu GitHub Pagesissa, liitä sivuston osoite.

## Arviointi

| Osa-alue | Painoarvo |
|----------|-----------|
| Toimivuus: karuselli, valikko ja grid toimivat | 40 % |
| Koodin rakenne: erillinen CSS, selkeä ja siisti HTML | 20 % |
| Selitys: luokkien ja attribuuttien merkitys on ymmärretty | 30 % |
| Kuvakaappaukset ja ulkoasu | 10 % |

## Lisätehtävät (valinnainen)

- Lisää karuselliin automaattinen vaihtuminen ja säädä sen nopeutta.
- Lisää valikkoon kolmas sivu.
- Tee gridiin kortteja (`card`) kuvien ja tekstien kanssa.
