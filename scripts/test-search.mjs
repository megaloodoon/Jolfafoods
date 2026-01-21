import path from 'path';
import { pathToFileURL } from 'url';

const routePath = pathToFileURL(path.resolve('src/app/api/search/route.js')).href;
const mod = await import(routePath);

async function run(q, locale){
  const req = { url: `http://localhost/?q=${encodeURIComponent(q)}&locale=${locale}` };
  const res = await mod.GET(req);
  const json = await res.json();
  console.log('---');
  console.log('Query:', q, 'Locale:', locale, 'Results:', json.length);
  console.log(JSON.stringify(json.slice(0,5), null, 2));
}

await run('تاریخچه','fa');
await run('История','ru');
await run('Cheese','en');
await run('پنیر','fa');
