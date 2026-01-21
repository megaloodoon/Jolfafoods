(async()=>{
  const fs = require('fs');
  const path = require('path');
  const ports = [3000,3001];
  const tryFetch = async (url, opts={}, timeout=3000)=>{
    const controller = new AbortController();
    const id = setTimeout(()=>controller.abort(), timeout);
    try{
      const res = await fetch(url, {...opts, signal: controller.signal});
      clearTimeout(id);
      return res;
    }catch(e){ clearTimeout(id); throw e; }
  };

  let base=null; let portFound=null;
  for(const p of ports){
    const url = `http://localhost:${p}/api/banners`;
    try{
      const r = await tryFetch(url, { method: 'GET' }, 2000);
      await r.text();
      base = `http://localhost:${p}`; portFound=p; break;
    }catch(e){ /*ignore*/ }
  }
  if(!base){ console.error('No responding dev server on ports', ports); process.exit(2); }
  console.log('Using base', base);

  const dbPath = path.join(process.cwd(),'data','db.json');
  const readDB = ()=> JSON.parse(fs.readFileSync(dbPath,'utf8'));
  console.log('DB sample (before):', JSON.stringify({banners: readDB().banners? readDB().banners.slice(-3):null, banners_fa: readDB().banners_fa? readDB().banners_fa.slice(-3):null}, null,2));

  const testId = Date.now();
  try{
    console.log('POST test id', testId);
    const res = await tryFetch(`${base}/api/banners`, { method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify({ id:testId, image:'/Image/banner/1.jpg', locale:'fa' }) }, 5000);
    console.log('POST status', res.status);
    let txt=''; try{ txt = await res.text(); txt = txt || ''; console.log('POST body', txt); }catch(e){ console.log('POST body read failed', e.message); }
  }catch(err){ console.error('POST request failed', err.message); }

  try{
    const r = await tryFetch(`${base}/api/banners`, { method:'GET' }, 3000);
    console.log('GET status', r.status);
    const j = await r.json();
    console.log('GET sample length', Array.isArray(j)? j.length : typeof j);
  }catch(err){ console.error('GET failed', err.message); }

  try{
    console.log('DELETE test id', testId);
    const r = await tryFetch(`${base}/api/banners?id=${testId}&locale=fa`, { method:'DELETE' }, 3000);
    console.log('DELETE status', r.status);
    try{ console.log('DELETE body', await r.text()); }catch(e){ console.log('DELETE body read failed', e.message); }
  }catch(err){ console.error('DELETE failed', err.message); }

  console.log('DB sample (after):', JSON.stringify({banners: readDB().banners? readDB().banners.slice(-3):null, banners_fa: readDB().banners_fa? readDB().banners_fa.slice(-3):null}, null,2));

})();
