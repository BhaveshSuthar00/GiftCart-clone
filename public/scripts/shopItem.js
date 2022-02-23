


document.getElementById("sam_X").addEventListener("click",function disappearDiv()
{
    document.getElementById("Sam_alert_popup_message").style.display ="none";
})

//>>>>>>> click on home page <<<<<<<<<// lines 9 to 13
document.getElementById("Sam_home_link").addEventListener("click",function ()
{
    window.location.href ="/index"
})

//>>>>>>>>> click on product cateogy <<<<<<// lines 15 to 28
document.getElementById("Sam_category_page").addEventListener("click",function (){
    let cat =document.getElementById("Sam_category_page").innerHTML;
    console.log(cat)
    if( cat =='<i>/ jewellery</i>')
    {
        window.location.href="/jewellery"
    }
    if(cat =='<i>/ perfumes</i>')
    {
        window.location.href="/perfume"

    }
})

//>>>>>>>>> eventlistenre for product name so that one can return to jewellary or perfumes page <<<<<<<<<<<// lines 30 to 43
document.getElementById("Sam_name_product").addEventListener("click",function (){
    let cat =document.getElementById("Sam_category_page").innerHTML;
    console.log(cat)
    if( cat =='<i>/ jewellery</i>')
    {
        window.location.href="/jewellery"
    }
    if(cat =='<i>/ perfumes</i>')
    {
        window.location.href="/perfume"

    }
})


//>>>>>>>>> PINCODE CHECK HIDDEN DIVES FUNCTIONALITY START HERE <<<<<<<<<<<<// lines 46 to 69

{

    let count =0

    function toggle_div_visibility()
    {
        count++;
        if(count ==1)
        {
            console.log("i am visible")
            document.getElementById("sam_delievry_pincode_check").style.display ="block";
        }
        if(count ==2)
        {
            console.log("i am Invisible")
            document.getElementById("sam_delievry_pincode_check").style.display ="none";
            document.getElementById("sam_alert_append_div").style.display="none"
            count =0;
        }

    }
}

//>>>>>>>>> CHECK THE PICODE <<<<<<<<<<<<<// lines 71 to 133

{
let count =0;
document.getElementById("Sam_check_button").addEventListener("click",function (){

    count++;

    let val =document.getElementById("sam_input_pincode").value

    if(val.length ==6 && count==1)
    {
        document.getElementById("sam_please_wait_message").style.display="block"
        document.getElementById("sam_please_wait_message").innerHTML="Please Wait..." 
        setTimeout(()=>{
            document.getElementById("sam_please_wait_message").style.display="none";
            document.getElementById("sam_please_wait_message").innerHTML="";
            document.getElementById("sam_alert_append_div").innerHTML=""; 
            document.getElementById("sam_alert_append_div").style.display="block"
            document.getElementById("sam_alert_append_div").style.height="70px";
            document.getElementById("sam_alert_append_div").style.paddingLeft="0px";
            let div = document.createElement("div")
            div.setAttribute("id","sam_alert_pincode")
            div.innerHTML =`<ul>
                            <li>Standard Delivery service is available in your area.</li>
                            </ul>
                            `
            let div2 =document.createElement("div")
            div2.setAttribute("id","sam_free_delivery_shift_left")
            div2.append(`Free Delivery`)
            document.getElementById("sam_alert_append_div").append(div,div2)},2000)
        count=0;
    }
    else if(val.length !=6 && count ==1)
    {
        document.getElementById("sam_please_wait_message").style.display="block"
        document.getElementById("sam_please_wait_message").innerHTML="Please Wait..." 
    
        setTimeout(()=>{
            document.getElementById("sam_please_wait_message").style.display="none";
            document.getElementById("sam_please_wait_message").innerHTML="";
            document.getElementById("sam_alert_append_div").innerHTML=""; 
            document.getElementById("sam_alert_append_div").style.display="block"
            document.getElementById("sam_alert_append_div").style.height="50px"
            document.getElementById("sam_alert_append_div").style.paddingLeft="15px";
            let div = document.createElement("div")
            div.setAttribute("id","sam_alert_pincode")
            div.innerHTML ="Sorry. Delivery service is not available for the pin code entered."
            document.getElementById("sam_alert_append_div").append(div)},2000)
        count=0;
    }
    else
    {
        document.getElementById("sam_alert_append_div").style.display="none";
        document.getElementById("sam_alert_append_div").style.height="70px";
        document.getElementById("sam_alert_append_div").style.paddingLeft="15px";
    }

})


}

//>>>>>>>>>>  KEY VALUES JS CODES   <<<<<<<<<<<<// lines 134 to 328
{
    let count =0;

    //>>>>>>>>>>> key value data entry <<<<<<<<<// lines 138 to 188
    document.getElementById("sam_keyvalue").addEventListener("click",function(){
        document.getElementById("sam_keyfeatures").innerHTML="";
        count++;
        let cat =document.getElementById("Sam_category_page").innerHTML;  // to import values ot the KEY values after knowing which thing is added to the page
        if(count==1)
        {
            document.getElementById("sam_keyfeatures").style.display ="block"
            let div =document.createElement("div")
                div.setAttribute("id","sam_appending_data_div")
                // div.innerHTML= keyValues() ;
                if( cat =='<i>/ jewellery</i>')
                {
                    div.innerHTML =`<ul>
                                    <ul>
                                        <ul>
                                            <li style="color:red"><div id="sam_bullet_change">Material: Gold</div></li>
                                            <li style="color:red"><div id="sam_bullet_change">Gold Weight: 1.750 gms</div></li>
                                            <li style="color:red"><div id="sam_bullet_change">Gold Purity: 18kt Yellow Gold</div></li>
                                            <li style="color:red"><div id="sam_bullet_change">Diamond Weight: 0.07 carats</div></li>
                                            <li style="color:red"><div id="sam_bullet_change">Stone Type: Diamond</div></li>
                                            <li style="color:red"><div id="sam_bullet_change">Product Dimension: Pendant Heigth: 1.70 cm (With Hook)& Width: 0.90 cm</div></li>
                                            <li style="color:red"><div id="sam_bullet_change">Country of Origin: India</div></li>
                                        </ul>
                                    </ul>
                                </ul>`
                }
                if(cat =='<i>/ perfumes</i>')
                {
                    div.innerHTML =`<ul>
                                    <ul>
                                        <ul>
                                            <li style="color:red"><div id="sam_bullet_change">Male</div></li>
                                            <li style="color:red"><div id="sam_bullet_change">Eau de Toilette</div></li>
                                            <li style="color:red"><div id="sam_bullet_change">100 ml</div></li>
                                            <li style="color:red"><div id="sam_bullet_change">Daytime/Citrus</div></li>
                                            <li style="color:red"><div id="sam_bullet_change">Country of Origin: India</div></li>
                                        </ul>
                                    </ul>
                                </ul>`
                }
                
                document.getElementById("sam_keyfeatures").append(div)
            count=0;
            // console.log("count after key value",count)

        }
        else 
        {
            document.getElementById("sam_keyfeatures").style.display ="none"
        }})
    
    
    //>>>>>>>>>>>>> details entry <<<<<<<<<<<<//line 191 to 219

    document.getElementById("sam_details").addEventListener("click",function(){
    document.getElementById("sam_keyfeatures").innerHTML="";
    count++;
    let cat =document.getElementById("Sam_category_page").innerHTML;  // to import values ot the KEY values after knowing which thing is added to the page

    if(count==1)
    {
        document.getElementById("sam_keyfeatures").style.display ="block"
        let div =document.createElement("h3")
            div.setAttribute("id","sam_appending_data_div")
            if( cat =='<i>/ jewellery</i>')
            {
                div.innerHTML= "Lustrous, gleaming and radiating; this Sunshine Shimmer Diamond Pendant is oneof prettiest piece of jewelry you will ever own. Experience the Sunshine Shimmer embrace and glow with pride. Diamond Pcs: 1 pc, Diamond Wt: 0.07 cts, Diamond Color: I/J, Diamond Clarity: VS, Gold Wt: 1.750 gms Gold Purity: 18kt Pendant Heigth: 1.70 cm (With Hook)& Width: 0.90 cm" ;   
            }
            if(cat =='<i>/ perfumes</i>')
            {
                div.innerHTML =`Exhilarate and mesmerise the senses in every way. Versace Pour Homme 100 ml for men consists of a fresh citrus tone, which will surely surprise one's senses. The Top notes are lemon, neroli, bergamot and rose de mai, middle notes are hyacinth, clary sage, cedar and geranium and the base notes are Tonka bean, musk and amber. The Eau de Toilette is ideal for Daytime use.`
            }
            document.getElementById("sam_keyfeatures").append(div)
        count=0;

    }
    else 
    {
        document.getElementById("sam_keyfeatures").style.display ="none"
    }})

    //>>>>>>>>>>>>>> disclaimer data entry <<<<<<<<<<<<<// lines 220 to 261

    document.getElementById("sam_dislcaimer").addEventListener("click",function(){
        document.getElementById("sam_keyfeatures").innerHTML="";
        count++;
        let cat =document.getElementById("Sam_category_page").innerHTML;  // to import values ot the KEY values after knowing which thing is added to the page

        
        if(count==1)
        {
            document.getElementById("sam_keyfeatures").style.display ="block"
            let div =document.createElement("h3")
                div.setAttribute("id","sam_appending_data_div")
                if( cat =='<i>/ jewellery</i>')
                {
                    div.innerHTML= "Our jewellery pricing is calculated using current precious metal and gem prices. These prices do change from time to time, owing to the fluctuations in prices of precious metal and gem prices, so our prices change as well The current price was updated on 25th December 2019 For any price difference our customer service will contact you post the order. In case of non payment of the extra amount the order stands cancelled";
                }   
                if(cat =='<i>/ perfumes</i>')
                {
                    div.innerHTML="";
                }

            let h3 =document.createElement("h3")
                h3.setAttribute("id","sam_heading_in_disclaimer")
                if( cat =='<i>/ jewellery</i>')
                {
                    h3.innerHTML="Precious metal and gem pricing:"
                }
                if(cat =='<i>/ perfumes</i>')
                {
                    h3.innerHTML="";
                }

                
                document.getElementById("sam_keyfeatures").append(h3,div)
            count=0;
            
        }
        else 
        {
            document.getElementById("sam_keyfeatures").style.display ="none"
        }})

        //>>>>>>>> brand details entry line <<<<<<<<// 263 to 301
    
        document.getElementById("sam_brand_details").addEventListener("click",function(){
        document.getElementById("sam_keyfeatures").innerHTML="";
        count++;
        let cat =document.getElementById("Sam_category_page").innerHTML;  // to import values ot the KEY values after knowing which thing is added to the page

        if(count==1)
        {
            document.getElementById("sam_keyfeatures").style.display ="block"
            let div =document.createElement("h3")
                div.setAttribute("id","sam_appending_data_div1_manuf")
                if( cat =='<i>/ jewellery</i>')
                {
                    div.innerHTML= "SURAT DIAMOND JEWELRY PVT. LTD. Vasant Vilas,31 Dr. D.D. Sathye Marg Mumbai - 400004";
                }
                if(cat =='<i>/ perfumes</i>')
                {
                    div.innerHTML="Shree Traders 101, AL SANA HOUSE,Maharashtra, 400049"
                }
                
            let h3 =document.createElement("h3")
                h3.setAttribute("id","sam_heading_in_disclaimer")
                if( cat =='<i>/ jewellery</i>')
                {
                    h3.innerHTML="Manufacturer / Packer / Importer:"
                }
                if(cat =='<i>/ perfumes</i>')
                {
                    h3.innerHTML="Manufacturer / Packer / Importer:"
                }
                document.getElementById("sam_keyfeatures").append(h3,div)
            count=0;

        }
        else 
        {
            document.getElementById("sam_keyfeatures").style.display ="none"
        }})

        //>>>>>>>>>> review write details <<<<<<<<<<// lines 303 to 328

        document.getElementById("sam_review_write").addEventListener("click",function(){
        document.getElementById("sam_keyfeatures").innerHTML="";
        count++;
        let cat =document.getElementById("Sam_category_page").innerHTML;  // to import values ot the KEY values after knowing which thing is added to the page

        if(count==1)
        {
            document.getElementById("sam_keyfeatures").style.display ="block"
            let div =document.createElement("div")
                div.setAttribute("id","sam_appending_data_div")
                div.innerHTML= `<div id="sam_flex">
                                    <div id="sam_review_Edit1">Write Your Review</div>
                                    <div></div>
                                </div>
                                <div id="sam_only_signin_user">Only registered users can write reviews. Please, <span id="sam_span_signIn">Sign in</span> or <span id="sam_span2_accout_create">create an account</span></div>` ;
                document.getElementById("sam_keyfeatures").append(div)
            count=0;

        }
        else 
        {
            document.getElementById("sam_keyfeatures").style.display ="none"
        }})
}

//>>>>>>>>>>>>>>>>> functionality for adding count of products <<<<<<<<<<<<<<// lines 330 to 383
{
    let count =1;
    document.getElementById("sam_display_value_count").innerHTML=count;
    document.getElementById("sam_subtracting_count").addEventListener("click",function (){
        if(count>1 &&count<10)
        {
        count--;
        // document.querySelector("#sam_item_count>#sam_display_value_count").style.width="25px"
        document.getElementById("sam_display_value_count").innerHTML=""
        document.getElementById("sam_display_value_count").innerHTML=count;
        }
        else if(count>=9 &&count<100)
        {
            // document.querySelector("#sam_item_count>#sam_display_value_count").style.width="30px"
            count--;
            document.getElementById("sam_display_value_count").innerHTML=""
            document.getElementById("sam_display_value_count").innerHTML=count;
        }
        else if(count>=99)
        {
            // document.querySelector("#sam_item_count>#sam_display_value_count").style.width="35px"
            count--;
            document.getElementById("sam_display_value_count").innerHTML=""
            document.getElementById("sam_display_value_count").innerHTML=count;
        }

    })

    document.getElementById("sam_adding_count").addEventListener("click",function (){
        if(count>=1 &&count<10)
        {
        count++;
        // document.querySelector("#sam_item_count>#sam_display_value_count").style.width="25px"
        document.getElementById("sam_display_value_count").innerHTML=""
        document.getElementById("sam_display_value_count").innerHTML=count;
        }
        else if(count>=9 &&count<100)
        {
            // document.querySelector("#sam_item_count>#sam_display_value_count").style.width="30px"
            count++;
            document.getElementById("sam_display_value_count").innerHTML=""
            document.getElementById("sam_display_value_count").innerHTML=count;
        }
        else if(count>=99)
        {
            // document.querySelector("#sam_item_count>#sam_display_value_count").style.width="35px"
            count++;
            document.getElementById("sam_display_value_count").innerHTML=""
            document.getElementById("sam_display_value_count").innerHTML=count;
        }

    })
}

//>>>>>>>>>>>>>> data recieve from sumit when we click on the perfume or jewellary page to buy <<<<<<<<<<<<<<<//lines 385 to 389

let obj_data_get_from_sumit= JSON.parse(localStorage.getItem("clickedJewelleryData")) //data transfer by sumit kartik page;
    

// add to cart button functionality
//>>>>>>>>>>>>>>>>>here is the most important work going that all data from pages made by sumit is fetch here and form the same data i am using in this page as well as transfering to  the bhavesh page <<<<<<<<<<<<<<<<<<<<<<<<<<//
// lines 392 to 419
{

var arr = JSON.parse(localStorage.getItem('productlist')) || []; //by bhavesh  transfer data 
    document.getElementById("sam_add_to_cart").addEventListener("click",()=>{

    let obj_data_get_from_sumit= JSON.parse(localStorage.getItem("clickedJewelleryData")) //data transfer by sumit kartik page;
    // console.log("data recieve on click",obj_data_get_from_sumit)
    //>>>>>>> localStorage.setItem("clickedJewelleryData", JSON.stringify(data))// storage define in sumit page just for cross check record <<<<<<<<<<<<<<//


    let count =document.getElementById("sam_display_value_count").innerHTML

    let obj_transfer_to_bhavesh= {
        image:obj_data_get_from_sumit.image,
        product:obj_data_get_from_sumit.product,
        price:Number(obj_data_get_from_sumit.price),
        product_count:Number(count)
    }


    arr.push(obj_transfer_to_bhavesh)

    localStorage.setItem("productlist",JSON.stringify(arr))
    //>>>>>>> var arr = JSON.parse(localStorage.getItem('productlist')) || []; // storage define in bhavesh page <<<<<<<<<<<//
    })
}


{  
//>>>>>>>>>>>>>>>>> data getting from sumit page is using in the page with the help of code written in lines 423 to 447 <<<<<<<<<<<<<<<//
    function displayInpage(){     
        // if(obj_data_get_from_sumit.sub_category=='perfumes')
        // {
            let ram = (Math.random()*(1.50-1.25)+1.25).toFixed(2);

            document.querySelector("title").innerHTML="";
            document.querySelector("title").innerHTML=`buy ${obj_data_get_from_sumit.product}`;
            document.getElementById("Sam_category_page").innerHTML="";
            document.getElementById("Sam_category_page").innerHTML=`<i>/ ${obj_data_get_from_sumit.sub_category}</i>`;
            document.getElementById("Sam_name_product").innerHTML="";
            document.getElementById("Sam_name_product").innerHTML=`<i>/ ${obj_data_get_from_sumit.product}</i>`;
            document.querySelector("#Sam_details_display>h1").innerHTML="";
            document.querySelector("#Sam_details_display>h1").innerHTML=obj_data_get_from_sumit.product;
            document.getElementById("Sam_add_price_here").innerHTML="";
            document.getElementById("Sam_add_price_here").innerHTML=`<p>&#8377</p><p>${(Number(obj_data_get_from_sumit.price)).toFixed(2)}</p><p>&#8377</p><p>${(Number(obj_data_get_from_sumit.price)*ram).toFixed(2)}</p>`;
            document.getElementById("sam_save_amount").innerHTML="";
            document.getElementById("sam_save_amount").innerHTML=`${Math.floor((ram-1)*100)}%`
            let img =document.createElement("img")
                img.src=obj_data_get_from_sumit.image;
            document.getElementById("Sam_image_display").append(img)
        // }
    }
    displayInpage()
}


//>>>>>>>>>>>> Wrap gift functionality <<<<<<<<<<<<<<<<<// lines 450 to 457
{
    document.getElementById("sam_wrap_gift").addEventListener("click",function (){

        document.getElementById("sam_wrap_gift").style.borderBottomColor ="steelblue"
        document.getElementById("sam_gift_card").style.borderBottomColor ="silver"
    })
}

//>>>>>>>>>>>>> Gift card functionality<<<<<<<<<<<<<// lines 459 to 467

{
    document.getElementById("sam_gift_card").addEventListener("click",function (){

        document.getElementById("sam_gift_card").style.borderBottomColor ="steelblue"
        document.getElementById("sam_wrap_gift").style.borderBottomColor ="silver"
    })
}





