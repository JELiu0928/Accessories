import { stores } from "./storeslist.js";
        
        console.log(stores)
        console.log(typeof stores)
        // 先取出區域region，再迭代區域內門市
        // for(let region in stores)
        // console.log('region',region.north)
        
        
        let storeTable = document.querySelector('.store_table tbody')
        window.onload = ()=>{
            displayRegion('all')
            document.querySelector('.storeBtn').classList.toggle('sidebar_select')

        }
        // 分開取出各區域
        document.querySelector('.storeBtn').onclick = ()=>{
            displayRegion('all')
            selectRegion('storeBtn')

        }
        document.querySelector('.northBtn').onclick = ()=>{
            displayRegion('north')
            selectRegion('northBtn')
        }
        document.querySelector('.centralBtn').onclick = ()=>{
            displayRegion('central')
            selectRegion('centralBtn')
            
        }
        document.querySelector('.southBtn').onclick = ()=>{
            displayRegion('south')
            // document.querySelector('.').classList.toggle('sidebar_select')
            selectRegion('southBtn')
        }

        function selectRegion(btn){
            document.querySelectorAll('.sidebar a').forEach((btn)=>{
                btn.classList.remove('sidebar_select')
            })
           
            document.querySelector(`.${btn}`).classList.add('sidebar_select')


        }
        function displayRegion(region){
            // 將各區門市解構賦值給全部門市
            const allStore = [...stores.north,...stores.central,...stores.south]
            // let regionStore = stores[region]
            // 將三元運算結果賦值給regionStore
            let regionStore = region === 'all' ? allStore : stores[region];
            
            console.log('allStore',allStore)
            storeTable.innerHTML = ""
            regionStore.forEach((Item)=>{
                let storeItem = document.createElement('tr')
                storeItem.classList.add(`${region}_store`)
                // 有的門市只有一個營業時間，判斷後加入
                let openTimes = `<p>${Item.open}</p>`;
                if (Item.open2) {
                    openTimes += `<p>${Item.open2}</p>`;
                }
                storeItem.innerHTML = 
                    `   <td>${Item.name}</td>
                        <td class="opan_time">
                            ${openTimes}
                        </td>
                        <td>${Item.address}</td>
                        <td><a href="${Item.map}" target="_blank"><i class="fa-solid fa-map-location-dot"></i></a></td>
                    `
                    console.log(storeItem)
                    storeTable.appendChild(storeItem)
            })
        }

