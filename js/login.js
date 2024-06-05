let haveAccount = document.querySelector('.commonArea .have_account')
let goRegisterBtn = document.querySelector('.goRegister')
let registerImg = document.querySelector('.registerImg')
let login = document.querySelector('.login')
let register = document.querySelector('.register')
let loginImg = document.querySelector('.loginImg')

haveAccount.onclick = ()=>{
    register.classList.remove('opacity-1')
    register.classList.add('opacity-0')
    registerImg.classList.remove('opacity-1')
    registerImg.classList.add('opacity-0')

    // if(login.classList.contains('opacity-0') && loginImg.classList.contains('opacity-0')){ 
        login.classList.remove('opacity-0')
        login.classList.add('opacity-1')
        loginImg.classList.remove('opacity-0')
        loginImg.classList.add('opacity-1')
    // }
}
goRegisterBtn.onclick = ()=>{
       
    login.classList.add('opacity-0')
    login.classList.remove('opacity-1')
    loginImg.classList.add('opacity-0')
    loginImg.classList.remove('opacity-1')
    // if( register.classList.contains('opacity-0') && registerImg.classList.contains('opacity-0')){
        register.classList.remove('opacity-0')
        register.classList.add('opacity-1')
        registerImg.classList.remove('opacity-0')
        registerImg.classList.add('opacity-1')
    // }
        // if(window.innerWidth < 992){
        //     login.style.opacity = 0
        //     register.style.opacity = 1
        //     register.style.zIndex = 3
        //     login.style.pointerEvents = "none"
        //     register.style.pointerEvents = "auto"

        // }
        
}