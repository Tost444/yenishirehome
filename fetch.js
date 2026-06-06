import https from 'https';

https.get('https://api.github.com/repos/Bayraksea/yenishirehomecatalog/git/trees/main?recursive=1', {
  headers: { 'User-Agent': 'Node.js' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const json = JSON.parse(data);
    const files = json.tree.filter(t => t.path.endsWith('.jpg')).map(t => t.path);
    console.log(files.join('\n'));
  });
}).on('error', console.error);
