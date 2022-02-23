async function getJewellery(url){
    try{
        let res = await fetch(url)
        let data = await res.json()
        return data
    }
    catch(e){
        console.log("error:",e)
    }
}


 function appendJewellery(data,location){

     ///////////////////for loop start/////////////////////////
     data.forEach(element => {
         let div = document.createElement("div")
         div.setAttribute("class","divmain")

        //  ///////////////////image div////////////////////////////////
         let jewellery_img = document.createElement("img")
         jewellery_img.src = element.image;

         //////////////hear icon//////////////////////////////
         let heart_div = document.createElement("div")
         let heart_tag = document.createElement("i")
         heart_tag.setAttribute("class","far fa-heart")
         heart_div.setAttribute("class","heart_div")
         ///////////////////////title////////////////////////////////////
         let main_titleDiv = document.createElement("div")
         let title_div = document.createElement("div")
         title_div.innerText = element.product;
        //  let title = document.createElement("p")
         main_titleDiv.setAttribute("class","main_titleDiv")

         //////////////////////mrp//////////////////////////////////
         let mrp_div = document.createElement("div")
         let mrp_tag = document.createElement("p")
         mrp_tag.innerHTML = "MRP (incl gst)"
         let ruppee_icon = document.createElement("p")
         ruppee_icon.innerHTML = `₹${element.price}`
         mrp_div.setAttribute("class","mrp_div")

         ///////////////////star icon//////////////////////////////////
         let star_Div = document.createElement("div")
          let star_icon1 = document.createElement("i")
          star_icon1.setAttribute("class","fas fa-star")
          let star_icon2 = document.createElement("i")
          star_icon2.setAttribute("class","fas fa-star")
          let star_icon3 = document.createElement("i")
          star_icon3.setAttribute("class","fas fa-star")
          let star_icon4 = document.createElement("i")
          star_icon4.setAttribute("class","fas fa-star")
          let star_icon5 = document.createElement("i")
          star_icon5.setAttribute("class","far fa-star")

          /////////////////appending//////////////////////////////////
          star_Div.append(star_icon1, star_icon2, star_icon3, star_icon4, star_icon5)
         mrp_div.append(mrp_tag,ruppee_icon)
        //  title_div.append(title)
         heart_div.append(heart_tag)
         main_titleDiv.append(title_div,heart_div)
         div.append(jewellery_img,main_titleDiv, mrp_div, star_Div)
         location.append(div)

         //////////////////////styles/////////////////////////
         star_icon1.style.color ="red"
         star_icon2.style.color ="red"
         star_icon3.style.color ="red"
         star_icon4.style.color ="red"
         star_icon5.style.color ="red"
         
         heart_div.onclick=()=>{
            if(heart_div.style.color!=="red") {
                heart_div.style.color = "red"
            }
            else{
                heart_div.style.color = "black"
            }
            
            
         }
        
         let data_to_send ={
            image:element.image,
            product: element.product,
            price:  element.price,
            sub_category:element.sub_category,
            
        };
        ///////////////////function showData//////////////////////
        jewellery_img.onclick=()=>{
           showItem(data_to_send)
        }
        //////////////////////////WishList///////////////////////
        heart_div.onclick=()=>{
          arr.push(data[index])
          localStorage.setItem("wishListData",JSON.stringify(arr))
          window.location.href = "/wishlist_layout"
        }
        
        
        ////////////////shoiab data (show data) end/////////////////////////
        });
        ///////////////for loop end here////////////////
        
        
        function showItem(data){
        
        localStorage.setItem("clickedJewelleryData", JSON.stringify(data))
        
        window.location.href = '/shopItem'
        
        
        }
        
        
        /////////////oop end here////////////////
        }
 ///////////////////appending function ends here///////////////////

 export{getJewellery,appendJewellery}

