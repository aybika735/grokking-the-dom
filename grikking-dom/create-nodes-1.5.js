const div = document.createElement('div');
const divtwo = document.createElement('div');
const blue = document.createElement('div');

div.className = 'red';
divtwo.className = 'green';
blue.className = 'blue';
blue.textContent = 'я вложен';



div.append(divtwo);
divtwo.append(blue);
document.body.append(div);
console.log(div);







