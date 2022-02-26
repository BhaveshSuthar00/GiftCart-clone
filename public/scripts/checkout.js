document.getElementById('Bs_total_Citems').innerText = `Items in Cart`
let cart_items = document.getElementById('Bs_cart_items_div');


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
function FormData(event) {
    event.preventDefault()
    let first_name = document.getElementById('Bs_F_name').value;
    let last_name = document.getElementById('Bs_F_last_name').value;
    let address = document.getElementById('Bs_address').value;
    let state_name = document.getElementById('Bs_state_name').value;
    let post_code = document.getElementById('Bs_post_code').value;
    let country_name = document.getElementById('Bs_country').value;
    let phone_number = document.getElementById('Bs_number').value;
    let checkbox = document.getElementById('Bs_checkbox_d');
    if(first_name == ''|| last_name == ''|| address == ''|| state_name == ''|| post_code == ''|| country_name == ''|| phone_number <10){
        alert('Enter All Remaining Credantials');
        return;
    }
}
