import chaoTheme from './chao/chao.js';
import chaoScripts from './chao/scripts.js';
chaoTheme.scripts = chaoScripts;
import defaultTheme from './default/default.js';
import egirlTheme from './egirl/egirl.js';
import egirlScripts from './egirl/scripts.js';
egirlTheme.scripts = egirlScripts;
import glowfishTheme from './glowfish/glowfish.js';
import glowfishScripts from './glowfish/scripts.js';
glowfishTheme.scripts = glowfishScripts;
import hackerTheme from './hacker/hacker.js';
import hackerScripts from './hacker/scripts.js';
hackerTheme.scripts = hackerScripts;
import season2Theme from './season2/season2.js';
import season2Scripts from './season2/scripts.js';
season2Theme.scripts = season2Scripts;
import season4Theme from './season4/season4.js';
import season4Scripts from './season4/scripts.js';
season4Theme.scripts = season4Scripts;


const themes = {
  'chao': chaoTheme,
  'default': defaultTheme,
  'egirl': egirlTheme,
  'glowfish': glowfishTheme,
  'hacker': hackerTheme,
  'season2': season2Theme,
  'season4': season4Theme,

};

export default themes;
