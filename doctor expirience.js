
// console.log("kjdlas")
let button = document.querySelector("button")
 button.addEventListener('click', () => {
    let name = document.querySelector(".name").value;
  let p= document.createElement("p")
  p.innerHTML = `${name}`
   let div = document.querySelector("div")
   div.appendChild(p)
   


 } )