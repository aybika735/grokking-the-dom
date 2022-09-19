const ul = document.createElement('ul');
ul.className = 'list';


const li = document.createElement('li');
li.textContent=  "привет, мир";
ul.prepend(li);
document.body.append(ul);
console.log(ul);