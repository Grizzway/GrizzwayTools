import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { build } from 'esbuild';

const metadata = readFileSync('./Grizzway Tools.meta.js', 'utf8');

const themesDir = resolve('./src/styles/themes');
const themeFolders = readdirSync(themesDir).filter((folder) =>
  statSync(join(themesDir, folder)).isDirectory()
);

let themeImports = '';
let themeObjectEntries = '';

themeFolders.forEach((folder) => {
  const themePath = `./${folder}/${folder}.js`;
  const scriptsPath = `./${folder}/scripts.js`;

  const themeVar = `${folder}Theme`;
  const scriptsVar = `${folder}Scripts`;

  themeImports += `import ${themeVar} from '${themePath}';\n`;
  if (existsSync(join(themesDir, folder, 'scripts.js'))) {
    themeImports += `import ${scriptsVar} from '${scriptsPath}';\n`;
    themeImports += `${themeVar}.scripts = ${scriptsVar};\n`;
  }

  themeObjectEntries += `  '${folder}': ${themeVar},\n`;
});

const themesIndexContent = `${themeImports}

const themes = {
${themeObjectEntries}
};

export default themes;
`;

writeFileSync('./src/styles/themes/index.js', themesIndexContent);
console.log('[build.js] themes/index.js generated.');

await build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  outfile: './dist/Grizzway-Tools.user.js',
  format: 'iife',
  banner: {
    js: metadata,
  },
});
