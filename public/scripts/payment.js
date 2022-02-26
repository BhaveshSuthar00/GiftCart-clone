function discountApply() {
    let dd = document.getElementById('Bs_discount_code').value;

    if(dd !== "masai99"){
        return;
    }
    let cart_Total = document.getElementById('Bs_cart_total');
    cart_Total.innerText = `10`;
    let charge_amount = 0;
    let charge = document.getElementById('Bs_charges');
    charge.innerText = charge_amount;
    let order_total = document.getElementById('Bs_order_total');
    order_total.textContent = `${10}`;
    let py_total = document.getElementById('total_amount');
    py_total.innerText = `₹${10}`;
    let final_total = 10;
    localStorage.setItem("total_price",JSON.parse(final_total));
}

function HardCode(event) {
    event.preventDefault()
    let card_number = document.getElementById('Bs_card_number').value;
    let card_cvv = document.getElementById('BS_card_cvv').value;
    let card_exp = document.getElementById('BS_card_expiry').value;
    let card_username = document.getElementById('Bs_card_username').value;

    if(card_number.length !== 16){
        
        alert('Enter Right Card Number');
        return;
    }
    if(card_cvv.length !== 3){
        alert('Enter correct CVV Number');
        return;
    }
    if(card_exp.length !== 4){
        alert('Card Expiry Date is wrong');
        return;
    }
    if(card_username.length === ''){
        alert('invalid userName');
        return;
    }
    else {
        alert('Your payment is successful, Thank you using giftcard.')
        window.location.href = '/cart/removeUser';
    }
}



let btn3 = document.getElementById('Bs_payment_btn3');
btn3.addEventListener('click',()=> {
    let payment_page = document.getElementById("Bs_payment_hard_div");
    payment_page.style.display = 'block';
})

let btn_pay = document.getElementById('Bs_btn_for_payment');
btn_pay.addEventListener('click',function (){
    let payment_page = document.getElementById("Bs_payment_hard_div");
    payment_page.style.display = 'none';
})
document.getElementById('Bs_total_Citems').innerText = `Items in Cart`

let div1 = document.getElementById('Bs_payment_method1');
let div2 = document.getElementById('Bs_payment_method2');
let div3 = document.getElementById('Bs_payment_method3');
let apply_p = document.getElementById('Bs_apply_discount');
apply_p.addEventListener('click',function(){
    let div = document.getElementById('Bs_apply_div');
    if(div.style.display == 'block'){
        div.style.display = 'none';
    }
    else  {
        div.style.display = 'block';
    }
})


let radio1= document.getElementById('radio1');
radio1.addEventListener('click',function(){
    if(div1.style.display == 'none'){
        div2.style.display = 'none';
        div3.style.display = 'none';
        div1.style.display = 'block';
    }
    else {
        div1.style.display = 'none';
    }   
})
let radio2= document.getElementById('radio2');
radio2.addEventListener('click',function(){
    if(div2.style.display == 'none'){
        div2.style.display = 'block';
        div1.style.display = 'none';
        div3.style.display = 'none';
    }
    else {
        div2.style.display = 'none';
    }
})
let radio3= document.getElementById('radio3');
radio3.addEventListener('click',function(){
    if(div3.style.display == 'none'){
        div3.style.display = 'block';
        div1.style.display = 'none';
        div2.style.display = 'none';
    }
    else {
        div3.style.display = 'none';
    }
})

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


let PayTM = document.getElementById('Bs_payment_btn1')
let payU = document.getElementById('Bs_payment_btn2')
let international = document.getElementById('Bs_payment_btn3')
