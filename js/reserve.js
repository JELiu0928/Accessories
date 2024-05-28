document.addEventListener("DOMContentLoaded", function() {

let reserve = document.querySelector('.reserve_container')
let reserveBtn = document.querySelector('.atelier>button')
// let reserveBtn = document.querySelector('.atelier button')
let cancelBtn = document.querySelector('.cancel_btn')
let TPE = document.getElementById('TPE')
let mapTpe = document.querySelector('.map_tpe')
let mapTph = document.querySelector('.map_tph')
let TPH = document.getElementById('TPH')

reserveBtn.addEventListener('click',()=>{
    console.log(reserveBtn)
    reserve.classList.toggle('reserve_show')
    console.log(window.getComputedStyle(reserve).getPropertyValue('opacity'))
})
cancelBtn.addEventListener('click',()=>{
    reserve.classList.remove('reserve_show')

})
TPE.addEventListener('click',()=>{ 
    mapTpe.classList.add('tpe_show')
    if(mapTpe.classList.contains('tpe_show')){
        mapTph.classList.remove('tph_show')
    }
    }
    
)
TPH.addEventListener('click',()=>{ 
    mapTph.classList.add('tph_show')
    if(mapTph.classList.contains('tph_show')){
        mapTpe.classList.remove('tpe_show')
    }
})

//日期 
let date = new Date()
// console.log(date)
let today = date.toISOString().split('T')[0];
// console.log('today',today.toISOString().split('T')[0])
let reserveDate = document.getElementsByName("reserveDate")
//設置最小日期與最大日期
reserveDate[0].setAttribute('min', today);
date.setMonth(date.getMonth() + 1);
let month = date.toISOString().split('T')[0];
reserveDate[0].setAttribute('max', month);



});