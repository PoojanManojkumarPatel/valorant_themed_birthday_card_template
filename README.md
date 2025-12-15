# Valorant Birthday Template

Interactive two-page template for a Valorant-themed birthday experience. Page 1 is a mini "defuse the cake" intro, Page 2 is the customizable birthday dossier.
[Demo](https://poojanmanojkumarpatel.github.io/valorant_themed_birthday_card_template/)

## Quickstart
- Open `index.html` in your browser to play the defuse intro; it redirects to `main.html` on success.
- Edit `main.html` to plug in names, badges, memories, and the personal letter.
- Update `assets/` audio or images as needed (placeholders included).

## Repo Map
- `index.html` – landing "defuse the cake" mini-game.
- `script.js` – defuse logic, timers, sounds, confetti, redirect to `main.html`.
- `style.css` – landing page styling and animated background.
- `main.html` – birthday dossier: hero, agent file, abilities, memories, letter.
- `main.js` – ability switcher and audio autoplay helper for `main.html`.
- `main.css` – dossier styling and animated gradient background.
- `assets/` – drop your audio (tick, click, fail, explode, victory) and images (spray placeholder).

## Customization Guide
- Hero section: replace `[Name]`, `[Gamertag]`, nickname pills, and badge labels in `main.html`.
- Agent file: swap `[CALLSIGN]`, role, ally note, and bullet prompts in `main.html`.
- Abilities: edit card labels in `main.html` and matching copy in `main.js` (`abilityTexts` keys must match `data-ability` values).
- Memories: fill each `<article>` in `main.html` with your stories.
- Letter: edit the text inside `#letter-text` in `main.html`; line breaks are preserved.
- Media: replace `assets/rip_cypher.jpeg` with your own image; swap audio files while keeping filenames or update paths in `script.js`/`main.html`.

## How the Defuse Game Works
- Hold the `Hold to Defuse` button for 7 seconds to win; releasing early resets progress.
- A 40s round timer detonates the "cake" if you take too long; the round auto-resets after detonation.
- Success triggers confetti, victory audio, a short delay, then redirects to `main.html`.
- Sounds used: `tick.mp3`, `click.mp3`, `fail.mp3`, `explode.mp3`, `victory.mp3` (all in `assets/`).

## How the Dossier Works
- Ability cards (`data-ability`) map to entries in `abilityTexts` inside `main.js`.
- Default ability copy is neutral; swap the strings to fit your honoree.
- Audio `assets/ambient.mp3` autoplays when the user interacts (click), as allowed by the browser.

## Visual Notes
- Both pages use animated gradients; `main.css` controls the dossier background flow, `style.css` handles the landing pulse.
- Uses Google Fonts: Bebas Neue (titles) + Inter (body).

## Tips for Sharing
- Keep everything client-side: zip and share, or deploy via any static host (GitHub Pages, Netlify, Vercel, S3).
- If hosting, ensure `assets/` file paths remain the same or update references in JS/HTML.

Enjoy the template! Drop in your details and celebrate. 
