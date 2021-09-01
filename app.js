
const button = document.querySelector('button')
button.addEventListener('click',() => {
 

  const input = document.querySelector('.input').value;
  const inpot = document.querySelector('.inpot').value;
  const inpit = document.querySelector('.inpit').value;
  const inpet = document.querySelector('.inpet').value;
  let h1 = document.querySelector('.img');
h1.innerHTML = ""
if ( input=='juniorashu36@gmail.com' && inpot=='658707773' && inpit =='efoulan' && inpet =='1234' )
window.open('doctor-expirience.html')
else
alert('you have enter wrong information some where please check your information')
})