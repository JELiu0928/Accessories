## 此為資策會個人小專，使用HTML、CSS、Javascript技術，並使用Git做版本控制
製作此專題時已學習HTML、CSS、Javascript、Bootstrap、MYSQL，因資料庫串接尚未學習到，故先無使用MYSQL、因想嘗試自己切版及實現RWD，所以並未使用Bootstrap。

> [!IMPORTANT]
> 目前已有改版，加入PHP並連接資料庫(repository：[Accessories_PHP](https://pages.github.com/](https://github.com/JELiu0928))，更新中！

**主題發想**：曾與朋友討論說想做飾品販賣，所以選擇關於飾品官網及戒指客製化的網頁，本人的生日為28號，故LOGO品牌為Twenty-Eight。

**網站架構**：
![image](https://github.com/user-attachments/assets/28a7c722-0adc-4d3c-a46b-f6ff98a55483)
![image](https://github.com/user-attachments/assets/ef6a9988-c8cf-42c7-9b23-13f9ecca9766)

1.首頁 index.html 
  + 一開始為全螢幕動畫，LOGO文字滑入
  + 五秒後會出現廣告
  + 輪播圖廣告
  + 新品到貨 - 點選 **永恆承諾鎖骨鍊** 可到 necklace.html 頁面
  + 客製化介紹
  + Design區介紹 (hover效果)
  + 文章區 - 點選 **More按鈕** 可到 article.html 頁面

2.產品分類 product.html (header->PRODUCT->耳環)
  + 點選sidebar的項鍊選項可以切換至項鍊
  + hover效果

3.取一產品製作單品頁面 necklace.html
  + 大圖hover時有放大鏡功能
  + 點選縮圖可替換大圖，也有放大鏡功能
  + 選擇顏色後點選加入購物車，下方有已加入購物車提示，且購物車會從左邊滑出
  + 購物車可以增減數量，以及<0時會刪除該產品
  + 最下方有**產品推薦**區，每次重新整理都會顯示不同的產品

4.客製化 (header->DESIGNS->客製化)
  + 可依喜好選擇造型、材質、金屬紋理、鑲嵌寶石等(介紹)
  + 點選**預約**按鈕，會出現**預約表**
  
5.門市資訊 store.html
  + sidebar的所有選項皆可選，點選該區會只顯示該區的門市

6.品牌文章 article.html
  + 靜態頁面

7.關於品牌(連結在footer) about.html
  + 靜態頁面

8.登入註冊區 login.html
  + 一開始顯示登入頁面，點選 **沒有帳號，去註冊** 會轉換到註冊頁面
  + 點選 **Already have an account?**，會轉換到登入頁面

**響應式畫面**：
![image](https://github.com/user-attachments/assets/610d45ff-837a-4ff5-876b-2f4691419c7e)

**未來改進方向**：因為手機與平板無法使用hover效果，之後會往點選效果方向進行改版，增進用戶體驗
**參考來源**：©此網站為練習使用，不做商業用途
![image](https://github.com/user-attachments/assets/b5f293e4-e771-4dda-8582-0292c3e2908f)
