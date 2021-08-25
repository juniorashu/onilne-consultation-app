const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById ('error');


form .addEventListener('submit', (e) => {
    let message = []
    if(name.value === "" || name.value == null) {
    message.push('Enter your information')
    } else if
    (name.value === password.value) {
        message.push("password valide")
        

        }else
        if (name.value ==! password.value) {
            message.push("password not valide")
        }
 
    if(password.value.length <=6) {
        message.push("password must be longer than 6 characters ")
    }
    if(password.value.length >=20) {
       message.push("password must be longer than 20 characters ")
       
 }
   if (password.value === "password") {
       message.push("password cannot be password")
   }

    if (message.length > 0) {
       e.preventDefault()
       errorElement.innerText = message.join(',')
   }
      })