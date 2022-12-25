
let arr = JSON.parse(localStorage.getItem("wishListData"));

appendWishlist(arr);
function appendWishlist(items) {
  document.getElementById("item_details_div").innerHTML = null;
  let total = document.getElementById("ka_item_count");
  total.innerText = `${arr.length}`;
  if (arr.length === 0) {
    let remove_options = document.querySelectorAll(".wo");
    console.log("remove_options:", remove_options.length);
    for (let i = 0; i < remove_options.length; i++) {
      remove_options[i].style.display = "none";
    }
    return;
  }

  items.forEach((el, index) => {
    let parent_main = document.createElement("div");
    parent_main.setAttribute("class", "parent_item");

    let main_div = document.createElement("div");
    main_div.setAttribute("class", "item_details_div");
    main_div.innerHTML = `
         <div id="item_pic"><img src=${el.image} alt=""></div>
            <div id="item_details">
              <a href="">${el.product}</a>
              <h4 id="item_price">${el.price}</h4>
              <label for="">Comment</label>
              <textarea
                id="item_comment"
                placeholder="Comment"
                title="Comment"
              ></textarea
              ><br />
              <label for="">Qty</label><br />
              <input type="number" id="item_qty" value="1" /><br />
              

            </div>
          </div>
          
      `;

    let div3 = document.createElement("div");

    let cart_btn = document.createElement("button");
    cart_btn.setAttribute("class", "wishlist_add_to_cart");
    cart_btn.innerText = "ADD TO CART";
    div3.append(cart_btn);

    cart_btn.addEventListener("click", function () {
      items.splice(index, 1);
      // localStorage.setItem("productlist", JSON.stringify(items));
      let arr2 = JSON.parse(localStorage.getItem("productlist")) || [];
      arr2.push(el)
      localStorage.setItem("productlist", JSON.stringify(arr2));
      localStorage.setItem("wishListData", JSON.stringify(items));
      appendWishlist(items);
    });

    let div2 = document.createElement("div");

    let edit_icon = document.createElement("i");
    edit_icon.setAttribute("id", "ka_edit");
    edit_icon.innerHTML = `<i class="fas fa-edit"></i>`;

    let remove_btn = document.createElement("i");
    remove_btn.setAttribute("id", "ka_remove_btn");
    remove_btn.innerHTML = `<i class="fas fa-times"></i>`;
    div2.append(edit_icon, remove_btn);
    parent_main.append(main_div, div2, div3);
    document.getElementById("item_details_div").append(parent_main);

    remove_btn.addEventListener("click", function () {
      items.splice(index, 1);
      localStorage.setItem("wishListData", JSON.stringify(items));
      appendWishlist(items);
    });
  });
}


let add_allto_cart = document.getElementById("add_to_cartall");
add_allto_cart.addEventListener("click", function () {
  let arr2 = JSON.parse(localStorage.getItem("productlist")) || [];
  let arr = JSON.parse(localStorage.getItem("wishListData")) || [];
  while (arr.length !== 0) {
    arr2.push(arr[0]);
    arr.shift();
  }
  localStorage.setItem("productlist", JSON.stringify(arr2));
  localStorage.setItem("wishListData", JSON.stringify(arr));
  window.location.href = "./cart";
});
