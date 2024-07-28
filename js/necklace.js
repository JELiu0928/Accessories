import { necklaceItems ,earringItems  } from "./productItem.js";
export function myNecklace() {
    
    let imgMask = document.getElementById("img_mask");
    let originImg = document.querySelector(".originImg");
    let manifierImg = document.getElementById("manifier_img");
    let manifierShow = document.querySelector(".magnifier_show");
    let thumbnail = document.querySelector(".thumbnail");
    let goodsTitle = document.querySelector(".goods_title");
    let addCartBtn = document.getElementById("add_cart");
    // let cartItemTitle = document.getElementById("cartItem_title");
    let silver = document.getElementById("silver");
    let roseGold = document.getElementById("roseGold");
    let goodPrice = document.querySelector(".price").innerText;
    let cartContainer = document.querySelector(".cart_container");
    let cartIcon = document.querySelector(".cart_icon");
    // let originImgBgImg = window.getComputedStyle(originImg).getPropertyValue('background-image')
    let thumbnailArr = [
        "./img/EternalNecklace/01.webp",
        "./img/EternalNecklace/02.webp",
        "./img/EternalNecklace/03.webp",
        "./img/EternalNecklace/04.webp",
        "./img/EternalNecklace/05.webp",
        "./img/EternalNecklace/06.webp",
        "./img/EternalNecklace/07.webp",
        "./img/EternalNecklace/08.webp",
        "./img/EternalNecklace/09.webp"
    ]
    

    // 產品選色後變化
    let selectColor = ''
    roseGold.onclick = ()=>{
        originImg.style.backgroundImage = `url(${thumbnailArr[0]})`
        manifierImg.src = thumbnailArr[0]
        selectColor = 'roseGoldColor'
    
    }
    silver.onclick = ()=>{
        originImg.style.backgroundImage = `url(${thumbnailArr[1]})`
        manifierImg.src = thumbnailArr[1]
        selectColor = 'silverColor'
        // updateSelectedColor(selectColor) 
        
    }
    // 縮圖
    for(let i = 0;i <= thumbnailArr.length-1 ; i++){
        let myImg = document.createElement('img')
        myImg.setAttribute('src',thumbnailArr[i])
        thumbnail.appendChild(myImg)
        // 點選縮圖後上方大圖會改變
        myImg.onclick = ()=>{
            originImg.style.backgroundImage = `url(${thumbnailArr[i]})`
            manifierImg.src = thumbnailArr[i]
        }
    }   
    
    addCartBtn.onclick = ()=>{
        

        if(selectColor == ''){
            return
        }
        
        addCartItem();
        let cartItems = document.querySelectorAll(".cart_item");
        // 獲取最新產生的購物車項目
        let cartItem = cartItems[cartItems.length - 1]; 
        let cartImg = cartItem.querySelector(".cart_img");
        // console.log('cartItems[0]',cartItems[0])
        // console.log('cartItems[1]',cartItems[1])
        // 選擇該顏色時，購物車照片要是該顏色
        if(cartImg.classList.contains('silverColor')){
            cartImg.style.backgroundImage = `url(${thumbnailArr[1]})`
        }else{
            cartImg.style.backgroundImage = `url(${thumbnailArr[0]})`
        }
        
        
        let plusBtn = cartItem.querySelector('.plus_btn')
        let minusBtn = cartItem.querySelector('.minus_btn')
        let quantity = cartItem.querySelector('.quantity')
        // subtotal = 單價*個數 ； total = 總計
        let subtotal = cartItem.querySelector('.subtotal')
        let total = document.querySelector('.total')
        // total = subtotal
        // console.log('total',total.innerText)

        // subtotal.innerText = parseInt(goodPrice)
        plusBtn.onclick = ()=>{
            let currentNum = quantity.value
            quantity.value = `${parseInt(currentNum) + 1}`
            subtotal.innerText = parseInt(goodPrice) * parseInt(quantity.value)
            // total = subtotal
            // console.log('plustotal',total.innerText)
            updateTotal()
            // updateTotalAmount()
            
        }

        minusBtn.onclick = ()=>{
            // updateTotalAmount()
            let currentNum = quantity.value
            if(quantity.value <= 1){
                cartItem.remove();
                // console.log('minusBtnAmount',amount.innerText)
                // cartContainer.style.right = `${-560}px`;
                // console.log('cartContainer.style.right',cartContainer.style.right)
                // console.log(cartContainer)
                
            }else{
                quantity.value = currentNum - 1
                subtotal.innerText = parseInt(goodPrice) * parseInt(quantity.value)
                total = subtotal
                // console.log('minustotal',total)
            }
            
            // if(parseInt(amount.innerText) < 1){
            if(document.querySelector('.total span:last-child').innerText == 363){
                cartContainer.style.right = `${-560}px`;
                // console.log('amount.innerText= 0',amount.innerText)
                black_overlay.style.display = "none"

            }
            console.log(document.querySelector('.total span:last-child').innerText)
            updateTotal()
            // console.log('minusBtntotal',total)
            
        }
        
        cartIcon.style.transform = `translateX(${0}px)`;
        
        // 加入購物車後提示
        let addcartMsg = document.querySelector('.addcart_message')
        addcartMsg.style.bottom = 0 + 'px'
        setTimeout(() => {
            addcartMsg.style.bottom = -60 + 'px'
        }, 3000);
    }


    //購物車icon與遮罩
    let black_overlay = document.querySelector('.black_overlay')
    cartIcon.onclick = ()=>{
        // cartContainer.style.transform = `translateX(${0}px)`;
        cartContainer.style.right = `${0}px`;
        black_overlay.style.display = "block"

    }
    let cartCancel = document.querySelector(".cart_cancel");
    cartCancel.onclick = ()=>{
        // cartContainer.style.transform = `translateX(${550}px)`;
        cartContainer.style.right = `${-560}px`;
        black_overlay.style.display = "none"
        // console.log(cartContainer)
    }

    // 加進購物車品項
    function addCartItem(){
        let cartItem ;
        let existCartItem = document.querySelector(`.cart_item[data-color="${selectColor}"]`)
        
        // console.log(existCartItem)
        if(existCartItem){
            
            let existItemQuantity = existCartItem.querySelector('.quantity')
            let currentQuantity = parseInt(existItemQuantity.value)
            existItemQuantity.value = currentQuantity + 1
            // let existCartItemImg = existCartItem.querySelector(`.cart_img`)
            // existCartItemImg.style.backgroundImage = existCartItemImg.style.backgroundImage
            // console.log()
            let subtotal = existCartItem.querySelector('.subtotal');
            subtotal.innerText = parseInt(goodPrice) * parseInt(existItemQuantity.value);
        }else{
            
            cartItem = document.createElement('div')
            cartItem.classList.add('cart_item')
            // 創建一個購物車項目時帶上data-color屬性 = 選擇的顏色
            cartItem.dataset.color = selectColor;
            cartItem.innerHTML = 
            `   <div class="cart_img ${selectColor}"></div>
                    <div class="cartItem_title">${goodsTitle.innerText} - ${selectColor}</div>
                    <div class="cartbtn_group">
                        <span class="subtotal">${goodPrice}</span>
                        <button class="minus_btn">-</button>
                        <input type="text" name="quantity" class="quantity" value="1">
                        <button class="plus_btn">+</button>
                    </div>
                    
                    `
            cartContainer.appendChild(cartItem);
                            
        }
        updateTotal()
        // updateTotalAmount()
    }
    // 更新購物車總金額
    function updateTotal(){
        let total = 0
        let subtotals = document.querySelectorAll('.subtotal')
        subtotals.forEach((subtotal)=>{
            // console.log('subtotal',subtotal.innerText)
            total += parseInt(subtotal.innerText)
            // subtotalArr.push(subtotal)
            // console.log(parseInt(subtotalArr[0]))
            console.log('total內',total)

        })
        document.querySelector('.total span:last-child').innerText = total
        console.log('updateTotal',total)
        console.log('document.querySelector(\'.total span:last-child\').innerText',document.querySelector('.total span:last-child').innerText)
    }

    // //更新購物車總數量
    // let amount = document.createElement('span')
    // function updateTotalAmount(){
    //     let quantity = 0
    //     let quantitys = document.querySelectorAll('.quantity')
    //     // console.log('quantitys',quantitys)
    //     // amount = 0
    //     // console.log('TotalAmount',totalAmount)
    //     quantitys.forEach((totalAmount)=>{
    //         // console.log('totalAmount.value',totalAmount.value)
    //         quantity += parseInt(totalAmount.value)
    //         // console.log(parseInt(subtotalArr[0]))
    //         console.log(' updateTotalAmount的quantity',quantity)
    //     })
    //     amount.innerText = quantity
    //     // console.log('amount.innerText',amount.innerText)

    //     // console.log('total',total)
    //     console.log('AAAAAAAAmount',amount.innerText)

    // }
    

    // 更新購物車項目文字
    // function updateSelectedColor(selectColor) {
    //     let cartItemTitles = document.querySelectorAll(".cartItem_title");

    //     // console.log(cartItemTitle.innerText.includes(selectColor))
    //     // 更新購物車中的所有項目的顏色文字
    //     cartItemTitles.forEach(cartItemTitle => {
    //     console.log('selectColor',selectColor)
    //         cartItemTitle.innerText = `${goodsTitle.innerText} - ${selectColor}`;
            
    //     });
    // }
    

    
    //隨機取項鍊產品
    let moreList = document.querySelector('.moreList')
    // console.log('randomNum',randomNum)
    // document.createElement('li')
    // necklaceItems.forEach((Item,randomNum)=>{
        // console.log('Item[randomNum].imgSrc',Item[randomNum].imgSrc)
    let randomIndexArr = []    
    for(let i = 0 ; i < 5 ; i++){
        let randomNum = Math.floor(Math.random()* necklaceItems.length )

        // randomNum = Math.floor(Math.random()* necklaceItems.length )
        // 如果陣列中已含有隨機數，將i遞減使for迴圈再跑選取一次
        if(randomIndexArr.includes(randomNum)){
            // randomNum = Math.floor(Math.random()* necklaceItems.length )
            i--;
            continue
        }
        randomIndexArr.push(randomNum)    
        // console.log(necklaceItems[randomNum].name)
    
        let myLi =  document.createElement('li')
        myLi.innerHTML = `
            <a href="#">
                <img src="${necklaceItems[randomNum].imgSrc}" alt="">
                <p>${necklaceItems[randomNum].name}</p>
            </a>
            `
            moreList.appendChild(myLi)
        }
            

            
            
            
            
        //放大鏡功能
    originImg.onmouseover = () =>{
        imgMask.style.display = 'block'
        manifierShow.style.display = 'block'
    }
    originImg.onmouseout = () =>{
        imgMask.style.display = 'none'
        manifierShow.style.display = 'none'
        
    }
    // coordinate:座標
    originImg.onmousemove = (coordinate)=>{
        // 圖片相對於視窗的位置
        let originImgCoordinate = originImg.getBoundingClientRect()
        // console.log('originImgCoordinate',originImgCoordinate)
        // console.log('coordinate.clientX',coordinate.clientX)
        let mouseX = coordinate.clientX - originImgCoordinate.left - 100
        let mouseY = coordinate.clientY - originImgCoordinate.top - 100
        // console.log(mouseX)
        
        if(mouseX >= 200){mouseX = 200}
        if(mouseX < 0){mouseX = 0}
        if(mouseY >= 200){mouseY = 200}
        if(mouseY < 0){mouseY = 0}
        imgMask.style.left = `${mouseX}px`
        imgMask.style.top = `${mouseY}px`

        let manifierImg2 = window.getComputedStyle(manifierImg).getPropertyValue('left')
        // console.log(manifierImg2)
        manifierImg.style.left = `${-2 * mouseX}px`
        manifierImg.style.top = `${-2 * mouseY}px`

        
    }

    
    
}