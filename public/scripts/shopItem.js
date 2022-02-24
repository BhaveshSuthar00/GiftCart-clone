document.getElementById("sam_X").addEventListener("click",function disappearDiv()
{
    document.getElementById("Sam_alert_popup_message").style.display ="none";
})

//>>>>>>> click on home page <<<<<<<<<// lines 9 to 13
document.getElementById("Sam_home_link").addEventListener("click",function ()
{
    window.location.href ="/index"
})

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





