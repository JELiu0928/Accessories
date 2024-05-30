let reserve = document.querySelector('.reserve_container')
let reserveBtn = document.querySelector('.atelier>button')
let cancelBtn = document.querySelector('.cancel_btn')
let TPE = document.getElementById('TPE')
let mapTpe = document.querySelector('.map_tpe')
let mapTph = document.querySelector('.map_tph')
let TPH = document.getElementById('TPH')

let blackOverlay = document.querySelector('.black_overlay')
reserveBtn.addEventListener('click',()=>{
    reserve.classList.toggle('reserve_show')
    console.log(window.getComputedStyle(reserve).getPropertyValue('opacity'))
    blackOverlay.style.display = "block"
    // blackOverlay.style.top = 
    console.log( 'window.scrollY', window.scrollY)
    console.log( 'document.body.scrollTop', document.body.scrollTop)
    alert('我是btn')
})
cancelBtn.addEventListener('click',()=>{
    reserve.classList.remove('reserve_show')
    blackOverlay.style.display = "none"
})
TPE.addEventListener('click',()=>{ 
    mapTpe.classList.add('tpe_show')
    if(mapTpe.classList.contains('tpe_show')){
        mapTph.classList.remove('tph_show')
    }
})
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