var arr = JSON.parse(localStorage.getItem("wishListData")) || [];
let jewellery_div = document.getElementById("jewellery_container");
let data = JSON.parse(localStorage.getItem("search_items_array"));

let div = document.querySelector(".options");

div.addEventListener("click", () => {
  if (div.value === "low") {
    data = data.sort(function (a, b) {
      return a.price - b.price;
    });
    appendJewellery2(data);
  } else if (div.value === "high") {
    data = data.sort(function (a, b) {
      return b.price - a.price;
    });
    appendJewellery2(data);
  }
});

function appendJewellery2(data) {
  jewellery_div.innerHTML = null;
  document.getElementById("jewellery_container").innerHTML = null;
  jewellery_div.textContent = null;
  ///////////////////for loop start/////////////////////////
  data.forEach((element, index) => {
    let div = document.createElement("div");
    div.setAttribute("class", "divmain");

    //  ///////////////////image div////////////////////////////////
    let img_div = document.createElement("div");
    img_div.setAttribute("class", "BS_img_div");
    let jewellery_img = document.createElement("img");
    jewellery_img.src = element.image;
    img_div.append(jewellery_img);
    //////////////hear icon//////////////////////////////
    let heart_div = document.createElement("div");
    let heart_tag = document.createElement("i");
    heart_tag.setAttribute("class", "far fa-heart");
    heart_div.setAttribute("class", "heart_div");
    ///////////////////////title////////////////////////////////////
    let main_titleDiv = document.createElement("div");
    let title_div = document.createElement("div");
    title_div.innerText = element.product;
    //  let title = document.createElement("p")
    main_titleDiv.setAttribute("class", "main_titleDiv");

    //////////////////////mrp//////////////////////////////////
    let mrp_div = document.createElement("div");
    mrp_div.setAttribute("class", "mrp_div");
    let mrp_tag = document.createElement("p");
    mrp_tag.innerHTML = "MRP (incl gst)";
    let ruppee_icon = document.createElement("p");
    ruppee_icon.innerHTML = `₹${element.price}`;

    ///////////////////star icon//////////////////////////////////
    let star_Div = document.createElement("div");
    star_Div.setAttribute("class", "star_div");
    let star_icon1 = document.createElement("i");
    star_icon1.setAttribute("class", "fas fa-star");
    let star_icon2 = document.createElement("i");
    star_icon2.setAttribute("class", "fas fa-star");
    let star_icon3 = document.createElement("i");
    star_icon3.setAttribute("class", "fas fa-star");
    let star_icon4 = document.createElement("i");
    star_icon4.setAttribute("class", "fas fa-star");
    let star_icon5 = document.createElement("i");
    star_icon5.setAttribute("class", "far fa-star");

    /////////////////appending//////////////////////////////////
    star_Div.append(star_icon1, star_icon2, star_icon3, star_icon4, star_icon5);
    mrp_div.append(mrp_tag, ruppee_icon);
    //  title_div.append(title)
    heart_div.append(heart_tag);
    main_titleDiv.append(title_div, heart_div);
    div.append(img_div, main_titleDiv, mrp_div, star_Div);
    jewellery_div.append(div);

    heart_div.onclick = () => {
      if (heart_div.style.color !== "red") {
        heart_div.style.color = "red";
      } else {
        heart_div.style.color = "black";
      }
    };

    let data_to_send = {
      image: element.image,
      product: element.product,
      price: element.price,
      sub_category: element.sub_category,
    };

    //////////////////////////WishList///////////////////////
    heart_div.onclick = () => {
      arr.push(data[index]);
      localStorage.setItem("wishListData", JSON.stringify(arr));
      window.location.href = "/wishlist_layout";
    };

    ////////////////shoiab data (show data) end/////////////////////////
  });
  ///////////////for loop end here////////////////

  /////////////oop end here////////////////
}
// appendJewellery2(data);
///////////////////appending function ends here///////////////////
///////////////////////script for jewelry data ends here///////////////////////////

function myfun() {
  let divs = document.getElementById("dropcontent");
  divs.classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches("#clicks")) {
    var removeshow = document.getElementById("dropcontent");
    if (removeshow.classList.contains("show")) {
      removeshow.classList.remove("show");
    }
  }
};
