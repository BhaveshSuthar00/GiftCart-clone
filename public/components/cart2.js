let glob;
function displayTable (items,location) {
    var array = [];
    var total;
    location.innerHTML = null;
    if(items.length===0){
        return;
    }
    items.forEach((elem,index)=>{
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td1_div = document.createElement('div');
        td1_div.setAttribute('class','Bs_remove_div');
        
        let td1_div_button1=  document.createElement('button');
        td1_div_button1.addEventListener('click', ()=>{
            let wishlist_arr = JSON.parse(localStorage.getItem('wishListData')) || [];
            let dd = items[index];
            wishlist_arr.push(dd);

            localStorage.setItem('wishListData',JSON.stringify(wishlist_arr));
            items.splice(index,1)
            localStorage.setItem('productlist',JSON.stringify(items));
            displayTable(items,location);

        })
        td1_div_button1.innerHTML = `<span>MOVE TO WHISHLIST</span> <img  src="https://www.publicdomainpictures.net/pictures/50000/velka/pencil-silhouette.jpg" height="15" alt="">`;
        
        let td1_div_button2 = document.createElement('button');
        td1_div_button2.setAttribute('class','Bs_delete_icon');
        td1_div_button2.innerHTML = '<i class="far fa-trash-alt"></i>';
        
        td1_div_button2.addEventListener('click',()=>{
            items.splice(index,1)
            localStorage.setItem('productlist',JSON.stringify(items));
            displayTable(items,location);
            window.location.href = '/cart';
        });


        
        
        td1_div.append(td1_div_button1,td1_div_button2);
        td1.append(td1_div);
        
        
        let td2 = document.createElement('td');
        td2.innerHTML = `
        <div class="Bs_item_div_intable">
            <img src=${elem.image} alt="">
            <h4>${elem.product}</h4>
        </div>
        `
       
        let td3 = document.createElement('td');
        td3.setAttribute('class','Bs_product_price')
        td3.innerText = `₹${elem.price}`;
        array.push(Number(elem.price));
       

        let td4 = document.createElement('td');
        let td4_div = document.createElement('div');
        td4_div.setAttribute('class','Bs_qty_div');
        let td4_div_input = document.createElement('input');
        td4_div_input.setAttribute('class','product_count');
        td4_div_input.value = `${1}`;
        let td4_div_button = document.createElement('button');
        td4_div_button.setAttribute('id','Bs_update_btn')
        td4_div_button.addEventListener('click',()=>{
            let valueof = td4_div_input.value;
            let price = Number(elem.price);
            let price2 = -Number(price);
            array.push(Number(price2))
            let ans = Number(valueof)*Number(price);
            td5.innerText = ans;
            array.push(Number(ans))
        })
        td4_div_button.textContent = 'UPDATE';
        td4_div.append(td4_div_input,td4_div_button);
        td4.append(td4_div);

        let td5 = document.createElement('td');
        td5.setAttribute('class','Bs_product_price2')
        let valueof = td4_div_input.value;
        td5.innerText = `${elem.price*valueof}`;
        row.append(td1,td2,td3,td4,td5);
        location.append(row);
    })
    total = array.reduce((a,b)=>{
        return a+b;
    })
    return total;
}

export default displayTable;