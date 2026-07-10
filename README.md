# Vila Mon Repos - Sokobanja

Sajt vile Mon Repos, porodičnog smeštaja sa domaćom hranom u Sokobanji (tradicija od 1931). Live na [monrepossokobanja.com](https://monrepossokobanja.com).

## Tehnologije

- [Next.js 16](https://nextjs.org) (App Router, statički export)
- [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Swiper](https://swiperjs.com) za galerije slika
- [EmailJS](https://www.emailjs.com) za kontakt formu
- Google Analytics 4 preko `@next/third-parties`

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Sajt je zatim dostupan na [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Projekat koristi `output: "export"`, pa build generiše čist statički sajt u `out/` folderu - nije potreban Node.js server za hosting.

## Struktura

```
app/            # stranice (App Router): početna, /galerija, /cenovnik, /kontakt
  layout.tsx    # globalni layout, metadata, JSON-LD, Google Analytics
  sitemap.ts    # sitemap.xml
  robots.ts     # robots.txt
components/     # React komponente (Navbar, Footer, galerije, kontakt forma...)
public/assets/  # slike i statički fajlovi
```

## Deploy

Svaki push na `main` automatski pokreće GitHub Actions workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) koji builduje sajt i šalje sadržaj `out/` foldera na cPanel hosting preko FTPS-a.


## SEO i analitika

- Metadata, canonical URL-ovi i Open Graph tagovi po stranici
- Strukturirani podaci (`LodgingBusiness` JSON-LD) za Google rich results
- GA4 sa praćenjem klikova na telefon/email i slanja kontakt forme
