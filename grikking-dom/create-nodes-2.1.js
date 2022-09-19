const arr = ["html", "css", "js"];

const ul = document.createElement('ul');
const li = document.createElement('li');
const litwo = document.createElement('li');
const lithree = document.createElement('li');

ul.prepend(li,litwo,lithree);

document.body.append(ul);



console.log(ul);

const matches = document.querySelectorAll('li');


for(let i = 0; i<matches.length; i++){
    matches[i].innerText=`${arr[i]}`;
}

console.log(matches)