async function navbar_responsive() {
  let target = document.querySelectorAll(".cat_nav div");
  for (let i = 0; i < target.length; i++) {
    target[i].onmouseenter = (event) => {
      navbar_appen(event);
    };
    target[i].onmouseleave = (event) => {
      navbar_remove(event);
    };
  }
  function navbar_appen(e) {
    let y = e.target.childNodes[1];

    document.querySelector(`.${y.textContent}`).style.visibility = "visible";
  }
  function navbar_remove(e) {
    let y = e.target.childNodes[1];

    let t = document.querySelector(`.${y.textContent}`);
    t.onmouseenter = () => {
      t.style.visibility = "visible";
    };
    t.onmouseleave = () => {
      t.style.visibility = "hidden";
    };
    t.style.visibility = "hidden";
  }
  var navbar = document.querySelector(".mid_nav");
  let postiton = navbar.offsetTop;
  window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    let nav = document.querySelector(".sticky_nav");
    if (window.pageYOffset >= postiton) {
      navbar.classList.add("sticky");

      nav.innerHTML = `<span><i class="fas fa-bars"></i></span>`;
      let y = document.querySelectorAll(".filter>div");
      for (let k = 0; k < y.length; k++) {
        y[k].style.position = "fixed";
        y[k].style.top = "50px";
      }
    } else {
      navbar.classList.remove("sticky");
      nav.innerHTML = null;
      let y = document.querySelectorAll(".filter>div");
      for (let k = 0; k < y.length; k++) {
        y[k].style.position = "absolute";
        y[k].style.top = "auto";
      }
    }
  }
  let nav_btn = document.querySelectorAll(".nav_btn");
  nav_btn[0].addEventListener("click", (event) => {
    let y = document.querySelector(".slide_nav");
    y.classList.toggle("active");
  });
  nav_btn[1].addEventListener("click", (event) => {
    let y = document.querySelector(".slide_nav");
    y.classList.toggle("active");
  });
  nav_btn[2].addEventListener("click", (event) => {
    let y = document.querySelector(".slide_nav");
    y.classList.toggle("active");
  });

  //this is for next work sign in data search
  let signin_bar = document.querySelector("#hello_btn");
  signin_bar.onclick = () => {
    document
      .querySelector("#dashboard_dropdown")
      .classList.toggle("vissible_toggle");
  };
  // -------------------------------------------------kartik------------------------------------------------//

  let signin_click = document.getElementById("karthik_sigin_click");
  let login_box_div = document.getElementById("karthik_signin_container");
  signin_click.addEventListener("click", function () {
    document
      .querySelector("#dashboard_dropdown")
      .classList.toggle("vissible_toggle");

    let y = document.querySelector(".bg-model");
    y.style.display = "block";

    if (login_box_div.style.display == "none") {
      login_box_div.style.display = "block";
    } else {
      login_box_div.style.display = "block";
    }
  });

  //------------------------------ onclick create account display--------------------------------------

  let create_act_click = document.getElementById("karthik_createAct_click");
  let create_act_div = document.getElementById("karthik_create_container");
  create_act_click.addEventListener("click", function () {
    document
      .querySelector("#dashboard_dropdown")
      .classList.toggle("vissible_toggle");
    let y = document.querySelector(".bg-model");
    y.style.display = "block";
    if (create_act_div.style.display == "none") {
      create_act_div.style.display = "block";
    } else {
      create_act_div.style.display = "block";
    }
  });

  async function logged() {
    let logged_user = await fetch("http://localhost:2000/yashraj");
    let message = await logged_user.json();
    if (!message.message) {
      document.querySelector(
        "#hello_btn"
      ).textContent = `Hello, ${message.user.first_name}`;
      document.querySelector("#karthik_sigin_click").style.display = "none";
      document.querySelector("#karthik_createAct_click").style.display = "none";
      const log = `<li><a id="sign_out" href="#">Sign Out</a></li>`;
      let y = document.querySelector("#karthik_d");
      y.innerHTML += log;
      document.querySelector("#sign_out").onclick = async () => {
        let logged_user = await fetch("http://localhost:2000/karthik");
        let message = await logged_user.json();
        window.location.href = "/index";
      };
    }
  }
  logged();

  // console.log('logged_user:', logged_user)
  let login_user_data = JSON.parse(localStorage.getItem("current_user"));
  let str;
  if (login_user_data != undefined) {
    str = "";
    for (let i = 0; i < login_user_data.email.length; i++) {
      if (i == 0) {
        str += login_user_data.email[i].toUpperCase();
      } else {
        str += login_user_data.email[i];
      }
    }

    document.querySelector("#hello_btn").textContent = `Hello, ${str}`;
  }
  // search functionality
  // const get_url = `https://giftcartbackendapp.herokuapp.com/api/products`;
  const get_url = `http://localhost:2000/admin`;
  let search_item = document.querySelector("#prod_search_input");
  let product;
  let arr;
  search_item.onkeypress = (event) => {
    if (event.key === "Enter" && arr.length > 0) {
      product = search_item.value;
      window.location.href = `/product/random?item=${arr[0].category}&sub=${arr[0].sub_category}`;
    }
  };

  search_item.oninput = () => debounce(getDataFromDataBase, 500);

  document.querySelector("#search_btn").addEventListener("click", () => {
    product = search_item.value;
    getDataFromDataBase(get_url, product);
  });
  var id;
  function debounce(func, delay) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(function () {
      product = search_item.value;
      func(get_url, product);
    }, delay);
  }

  async function getDataFromDataBase(url, product) {
    try {
      if (product.length <= 1) {
        let location = document.querySelector("#search_result_div");
        location.style.display = "none";
        return;
      }
      let res = await fetch(url);
      let data = await res.json();
      if (Array.isArray(data)) {
        search_itemlogic(data, product);
        // appendDatafromDataBase(data);
      } else {
        let arr = [];
        arr.push(data);
        search_itemlogic(data, product);
        // appendDatafromDataBase(arr);
      }
    } catch (err) {
      console.log(err, "Not Found");
    }
  }
  let location;
  function search_itemlogic(data, prod) {
    location = document.querySelector("#search_result_div");
    document.addEventListener("mouseup", function (e) {
      if (!location.contains(e.target)) {
        location.style.display = "none";
      }
    });
    location.style.display = "block";
    location.innerHTML = null;
    arr = [];
    data.map(({ category, sub_category, price, image, id, product, _id }) => {
      // let cat = "";
      // let sub = "";
      // console.log(id, category, sub_category);
      // for (let i = 0; i < prod.length; i++) {
      //   cat += category[i];
      //   sub += sub_category[i];
      // }
      if (category != null && sub_category != null) {
        if (category.startsWith(prod) || sub_category.startsWith(prod)) {
          // console.log(category, sub_category);
          let obj = {
            image,
            price,
            product,
            _id,
            id,
            category,
            sub_category,
          };
          arr.push(obj);
        }
      }
    });
    arr = arr.reverse();
    localStorage.setItem("search_items_array", JSON.stringify(arr));
    arr.map(({ image, price, product, sub_category, category, _id, id }) => {
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = image;
      let p1 = document.createElement("p");
      p1.textContent = product;
      let p2 = document.createElement("p");
      p2.textContent = price;
      let div1 = document.createElement("div");
      div1.append(p1, p2);
      div.append(img, div1);
      div.onclick = () => {
        let obj = {
          image,
          price,
          product,
          sub_category,
          category,
          _id,
          id,
        };
        localStorage.setItem("clickedJewelleryData", JSON.stringify(obj));

        window.location.href = `/shopitem/${_id}`;
      };
      location.append(div);
    });
    if (arr.length == 0) {
      location.style.display = "none";
      return;
    }
  }
}

export default navbar_responsive;
