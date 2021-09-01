
const button = document.querySelector('button')
button.addEventListener('click',() => {
 

  const inpit = document.querySelector('.inpit').value;
  const inpet = document.querySelector('.inpet').value;
  let h1 = document.querySelector('.img');
h1.innerHTML = ""
if (inpit ==='juniorashu36@gmail.com' && inpet==='658707773')
window.open('consult.html')
else
alert('you have enter wrong information some where please check your information')
})

