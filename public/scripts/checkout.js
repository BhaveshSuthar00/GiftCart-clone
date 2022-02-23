let items = JSON.parse(localStorage.getItem('productlist'));
document.getElementById('Bs_total_Citems').innerText = `${items.length} Items in Cart`
let cart_items = document.getElementById('Bs_cart_items_div');



displayTable(items,cart_items);


let shownoshow = document.querySelector('#Bs_cart_items_div');
let redio5  = document.getElementById('Bs_total_Citems');
let img_img = document.getElementById("Bs_dropdown_img2");
redio5.addEventListener('click',function(){
    if(shownoshow.style.display == 'block'){
        shownoshow.style.display = 'none';
        img_img.style.transform = 'rotate(90deg)';
    }
    else {

        img_img.style.transform = 'rotate(270deg)';
        shownoshow.style.display = 'block';
    }
})




function displayTable(items,location){
    items.forEach(({image,product,price,product_count})=>{
        let main_div = document.createElement('div');
        main_div.setAttribute('class','Bs_pro_main_div')
        main_div.innerHTML = `
        <div class="Bs_pro_img_div">
                <img src=${image} alt="">
            </div>
            <div>
                <p class="Bs_cart_p1">${product}</p>
                <p class="Bs_cart_p2">Qty ${product_count}</p>
                <p class="Bs_cart_p3">${price*product_count}</p>
            </div>
        `
        location.append(main_div)
    })
}




function FormData(event) {
    event.preventDefault()
    let first_name = document.getElementById('Bs_F_name').value;
    let last_name = document.getElementById('Bs_F_last_name').value;
    let address = document.getElementById('Bs_address').value;
    let landmark = document.getElementById('Bs_landmark').value;
    let state_name = document.getElementById('Bs_state_name').value;
    let post_code = document.getElementById('Bs_post_code').value;
    let country_name = document.getElementById('Bs_country').value;
    let phone_number = document.getElementById('Bs_number').value;
    let checkbox = document.getElementById('Bs_checkbox_d');
    if(!checkbox.checked){
        alert('Enable Standand Delivery')
        return;
    }
    if(first_name == ''|| last_name == ''|| address == ''|| state_name == ''|| post_code == ''|| country_name == ''|| phone_number <10){
        alert('Enter All Credantials');
        return;
    }
    else{
        var obj = {
            first_name,
            last_name,
            address,
            landmark,
            state_name,
            post_code,
            country_name,
            phone_number
        }
        localStorage.setItem('Address_users',JSON.stringify(obj));
        window.location.href = './payment';
    };
}
