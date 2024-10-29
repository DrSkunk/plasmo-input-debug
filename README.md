# Plasmo input bug

Reproduction steps:

- Install dependencies with `pnpm install`
- Start the app with `pnpm dev`
- Go to `chrome://extensions/` and enable developer mode
- Load the app as an unpacked extension, using the folder `build/chrome-mv3-dev`
- An input should be shown on lower left hand corner of every page you visit
- Go to a website that has a global keyboard listener, such as Miro
- Type inside the input

What is expected:

- The input should receive the typed characters
  What is happening:
- Keyboard shortcuts of the website are triggered
- The input does not receive the typed characters
