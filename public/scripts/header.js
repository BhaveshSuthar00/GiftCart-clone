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

  // ------------------------------------onclick cross of signin/login display----------------------------

  // let login_box_close = document.getElementById("cross_btn");
  // login_box_close.addEventListener("click", function () {
  //   login_box_div.style.display = "none";
  //   let y = document.querySelector(".bg-model");
  //   y.style.display = "none";
  // });

  // ------------------------------------onclick cross of create account display----------------------------

  // let createAct_box_close = document.getElementById("karthik_cross_btn");
  // createAct_box_close.addEventListener("click", function () {
  //   create_act_div.style.display = "none";
  //   let y = document.querySelector(".bg-model");
  //   y.style.display = "none";
  // });

  // ------------------------------------onclick SIGNUP of signin<-->create act display----------------------------

  // let switch_boxes = document.getElementById("switch_boxes");
  // switch_boxes.addEventListener("click", () => {
  //   login_box_div.style.display = "none";
  //   create_act_div.style.display = "block";
  // });

  // let back_btn = document.getElementById("back_click");
  // back_btn.addEventListener("click", () => {
  //   create_act_div.style.display = "none";
  //   login_box_div.style.display = "block";
  // });

  // // ----------------------------------------create account FUNCTIONALITY------------------------------------
  // let create_acc = document.querySelector("#createaccount");
  // create_acc.onsubmit = (event) => {
  //   Register(event);
  // };
  // async function Register(e) {
  //   e.preventDefault();
  //   try {
  //     var register_data = {
  //       name: document.getElementById("username").value,
  //       email: document.getElementById("name").value,
  //       password: document.getElementById("password").value,
  //       username: document.getElementById("email").value,
  //       mobile: document.getElementById("confirm_password").value,
  //       description: document.getElementById("last_name").value,
  //     };
  //     register_data = JSON.stringify(register_data);
  //     console.log("data", register_data);
  //   } catch (err) {
  //     console.log("err:", err);
  //   }
  //   let reg_api = `https://masai-api-mocker.herokuapp.com/auth/register`;

  //   let response = await fetch(reg_api, {
  //     method: "POST",
  //     body: register_data,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   let data = await response.json();
  //   console.log(data);
  //   // message{message: 'Registration Success', error: false}
  //   if (data.message == "Registration Success") {
  //     alert("Registration Success Please Go Back Sign In");
  //   }
  // }

  //   --------------------------------signIN FUNCTIONALITY---------------------------------

  // let login_acc = document.querySelector("#login_acc");
  // login_acc.onsubmit = (event) => {
  //   login(event);
  // };
  // async function login(e) {
  //   e.preventDefault();
  //   let login_data = {
  //     username: document.getElementById("username-login").value,
  //     password: document.getElementById("password-login").value,
  //   };
  //   login_data = JSON.stringify(login_data);

  //   let login_url = `https://masai-api-mocker.herokuapp.com/auth/login`;

  //   let response = await fetch(login_url, {
  //     method: "POST",
  //     body: login_data,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   let data = await response.json();
  //   let username = document.getElementById("username-login").value;
  //   getUser(username, data.token);
  // }

  // async function getUser(username, token) {
  //   let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;

  //   let response = await fetch(api, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   let data = await response.json();
  //   console.log("data:", data);
  //   // {mobile: 'ybsskm', username: 'ybsskm@gmail.com', email: 'ybsskm', description: 'ybsskm', token: 'd36250ae00b9a68d642e3b4b864f973b', …}
  //   if (data.username === username) {
  //     alert(`Welcome ${data.email.toUpperCase()}`);
  //     localStorage.setItem("current_user", JSON.stringify(data));
  //     window.location.href = "./index";
  //   } else {
  //     alert("Invalid Email or Password");
  //   }
  // }
  async function logged() {
    let logged_user = await fetch("http://localhost:2000/yashraj");
    let message = await logged_user.json();
    if (!message.message) {
      document.querySelector(
        "#hello_btn"
      ).textContent = `Hello, ${message.user.first_name}`;
      document.querySelector("#karthik_sigin_click").style.display = "none";
      document.querySelector("#karthik_createAct_click").style.display = "none";
      const log = `<li><a id="sign_out" href="#">Sign Out</a></li>`
      let y = document.querySelector(
        "#karthik_d"
      );
      y.innerHTML+=log;
        document.querySelector("#sign_out").onclick = async () => {
          
          let logged_user = await fetch("http://localhost:2000/karthik");
          let message = await logged_user.json();
          window.location.href = "/index"
        }
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
  const get_url = `https://giftcartbackendapp.herokuapp.com/api/products`;
  let search_item = document.querySelector("#prod_search_input");
  let product;
  search_item.onkeypress = (event) => {
    if (event.key === "Enter") {
      product = search_item.value;
      getDataFromDataBase(get_url, product);
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
    let arr = [];
    data.map(({ category, sub_category, price, image, id, product }) => {
      let cat = "";
      let sub = "";
      for (let i = 0; i < prod.length; i++) {
        cat += category[i];
        sub += sub_category[i];
      }
      if (prod === cat || prod === sub) {
        let obj = {
          image,
          price,
          product,
        };
        arr.push(obj);
      }
    });
    arr = arr.reverse();
    localStorage.setItem("search_items_array", JSON.stringify(arr));
    arr.map(({ image, price, product, sub_category, category }) => {
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
        };
        localStorage.setItem("clickedJewelleryData", JSON.stringify(obj));
        window.location.href = "shopitem";
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
