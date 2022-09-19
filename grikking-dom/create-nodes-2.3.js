function render(arr){
    const ul = document.createElement('ul');
    for(let i = 0; i<arr.length; i++){
    ul.innerHTML += `
  <li><a href="${arr[i].url}">${arr[i].name}</a></li>
  `
    }
   
   
document.body.append(ul);
}
render([
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ]); 