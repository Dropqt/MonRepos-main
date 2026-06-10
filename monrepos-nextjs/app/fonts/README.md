# Brand font - Moreno (Typedepot)

Moreno is the **Mon Repos** wordmark font (the designer used a **Rough/Rust** cut).
It's a commercial font, so the licensed file must come from the designer - it can't
be fetched from Google Fonts.

## 1. Drop the file(s) here
Place the Moreno cut the designer used, for example:

    MorenoRust-Black.woff2      ← best
    MorenoRough-Bold.otf        ← also fine

Any of these formats work with `next/font/local`: **.woff2 (preferred), .woff, .otf, .ttf**.
If you have several weights, drop them all and I'll register each.

## 2. Tell me the filename
I'll wire it into `app/layout.tsx` via `next/font/local` (self-hosted - works offline,
perfect for the static export) and point the `.wordmark` / display styles at it,
replacing the Playfair Display placeholder.
