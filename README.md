# Wyrmhold website

Static site for wyrmholdthegame.com. No build step: open `index.html` or run `python -m http.server`.

- `tools/optimize_images.py` regenerates `assets/img/` from the game's art in `StormTheCastle/ArtPipeline/concepts`.
- Fonts: Cinzel + Inter (SIL OFL 1.1, licence files in `assets/fonts/`).
- Before publishing: fill the highlighted `[placeholders]` in `privacy.html` and set the Steam URL on the buttons in `index.html`.
