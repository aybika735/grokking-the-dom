

function render(arr){
    const ul = document.createElement('ul');
    for(let i = 0; i<arr.length; i++){
    ul.innerHTML += `
  <li>${arr[i]}</li>
  `
    }
   
   
document.body.append(ul);
}
render(["html", "css", "js"]); 

