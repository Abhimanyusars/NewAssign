fetch('data/index.json').then(response => {
    return response.json();
  }).then(json => {
    index = elasticlunr.Index.load(json);
  });
  const matches = index.search(‘foo’);
  console.log(hey);