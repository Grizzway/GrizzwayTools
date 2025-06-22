import chaoTheme from './chao/chao.js';
import chaoScripts from './chao/scripts.js';
chaoTheme.scripts = chaoScripts;
import defaultTheme from './default/default.js';
import hackerTheme from './hacker/hacker.js';
import hackerScripts from './hacker/scripts.js';
hackerTheme.scripts = hackerScripts;


const themes = {
  'chao': chaoTheme,
  'default': defaultTheme,
  'hacker': hackerTheme,

};

export default themes;
