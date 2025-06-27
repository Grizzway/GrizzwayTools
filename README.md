# How to Create Your Own Theme

Want to customize your GrizzwayTools experience? You can create your own theme by using the structure and naming conventions outlined below.

## Download Starter Files

Start by downloading the template theme files here:  
[Download chao.zip](https://github.com/Grizzway/GrizzwayTools/blob/main/src/styles/themes/chao.zip)

These contain a working example you can reference. Your custom theme should follow the same structure.

## Naming Conventions

Create a folder inside `src/styles/themes/` with your theme name (e.g., `coolBlue/`), and include the following:

- `coolBlue.js` — your main theme style file.
- `scripts.js` (optional) — used for dynamic effects or custom behavior.

If you use a `scripts.js`, you must ensure it cleans up after itself when switching themes. Follow the same format shown in the example.

## Do Not Change These

To ensure compatibility and consistent UX, themes must not alter the following:

- The profile name color (top right corner).
- The stream title color (users choose this themselves).
- Any specific user’s message or name styling.

## How to Test Your Theme

1. Make a folder inside the `themes` directory using your theme name.
2. Add your `{themeName}.js` and (optionally) `scripts.js` inside.
3. Open `configModal.js` and add your theme to the list of available themes.

Use this format:
```js
{ label: 'Cool Blue', value: 'coolBlue' }
