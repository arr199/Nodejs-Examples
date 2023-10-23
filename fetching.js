const port = 60797

fetch(`http://localhost:${port}`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
