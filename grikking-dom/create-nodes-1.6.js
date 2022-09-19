

const div = document.createElement('div');
const ul = document.createElement('ul');

div.append(ul);
const li = document.createElement('li');
li.innerHTML = `<a href="https://instagram.com/intocode">наш инстаграм</a>`
const litwo = document.createElement('li');
litwo.innerHTML  = `<a href="https://intocode.ru">наш сайт</a>`
ul.append(li,litwo);

document.body.append(div);

console.log(div);