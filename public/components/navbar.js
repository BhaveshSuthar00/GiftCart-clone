async function navbar_part(){
    return `<header>
    <!-- top nav -->
    <div class="top_header">
      <div class="left_header">
        <div class="header-social">
          <ul class="social">
            <li>
              <a href="#"
                ><span><i class="fab fa-facebook-f"></i></span
              ></a>
            </li>
            <li>
              <a href="#"
                ><span><i class="fab fa-twitter"></i></span
              ></a>
            </li>
            <li>
              <a href="#"
                ><span><i class="fab fa-instagram"></i></span
              ></a>
            </li>
            <li>
              <a href="#"
                ><span><i class="fab fa-youtube"></i></span
              ></a>
            </li>
            <li>
              <a href="#"
                ><span><i class="fab fa-pinterest"></i></span
              ></a>
            </li>
          </ul>
          <div class="phone">
            <i class="fas fa-phone-alt"></i>
            <p>+919910644899 Mon-Sat(9am-6pm)</p>
          </div>
          <div class="help">
            <a href="#"><span>Help</span></a>
          </div>
        </div>
      </div>
      <div class="right_header">
        <div class="mid_gap"></div>
        <div class="account">
          <div  class="hello_signin">
            <span>
              <span>INR<i class="fa fa-angle-down"></i></span>
              <span id="hello_btn"
                >Hello, Sign In <i class="fa fa-angle-down"></i>
              </span>
            </span>
          </div>
          <div class="cart">
          <a href="/cart">
            <span><i class="fas fa-shopping-cart"></i></span>
            <span id="cart_cc" class="cart-count">0</span>
            </a>
          </div>
          <div class="nav_btn">
            <span><i class="fas fa-bars"></i></span>
          </div>
        </div>
      </div>
    </div>
    <!-- top nav search -->
    <div class="mid_search">
      <div class="gift_logo">
        <a href="/index">
        <img
          src="https://style.giftcart.com/pub/media/logo/stores/1/GC-logo-with-punchline.png"
          alt=""
        />
        </a>
      </div>
      <div class="search_bar">
        <div class="search_mic">
          <input
            type=""
            placeholder="   Search entire store here..."
            name=""
            id="prod_search_input"
          />
          <button id="search_btn">
            <span class="material-icons-outlined"> search </span>
          </button>
          
        </div>
        <div id="search_result_div">
            
          </div>
      </div>
      <div class="hatke">
        <img
          src="https://style.giftcart.com/pub/static/frontend/Mgs/molly/en_US/images/hatkegifts-logo.gif"
          alt="Hatke Gifts"
        />
        <div class="gift_now_btn">
          <a href="#">Gift Now</a>
          <i class="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
    </div>
    <div class="mid_nav">
      <div class="cat_nav">
        <div class="cat">
          <p>CATEGORIES</p>
          <i class="fas fa-angle-down"></i>
        </div>
        <div>
          <p>ANIVERSARY</p>
          <i class="fas fa-angle-down"></i>
        </div>
        <div>
          <p>BIRTHDAY</p>
          <i class="fas fa-angle-down"></i>
        </div>
        <div>
          <p>VALENTINE</p>
          <i class="fas fa-angle-down"></i>
        </div>
        <div>
          <p>PERSONALISED</p>
          <i class="fas fa-angle-down"></i>
        </div>
        <div>
          <p>RECIPIENT</p>
          <i class="fas fa-angle-down"></i>
        </div>
        <div>
          <p>OCCASIONS</p>
          <i class="fas fa-angle-down"></i>
        </div>
        <div class="nav_btn sticky_nav">
          <!-- <span><i class="fas fa-bars"></i></span> -->
        </div>
      </div>
    </div>
    <div class="filter">
      <div class="cat_opt CATEGORIES">
        <div>
          <a href="#"><h3>TopGifts</h3></a>
          <ul>
            <a href="#"><li>Baby</li></a>
            <a href="#"><li>Beauty & PersonalCare</li></a>
            <a href="#"><li>Business & Executive Gifts</li></a>
            <a href="#"><li>Chocolates & Cookies</li></a>
            <a href="#"><li>Chocolates & Cookies</li></a>
            <a href="#"><li>Computer & Mobile Accessories</li></a>
          </ul>
          <a href="#"><h3>Cocktail Mix</h3></a>
          <a href="#"><h3>Corporate Gifting</h3></a>
          <a href="#"><h3>Digital Gifts</h3></a>
          <ul>
            <a href="#"><li>Eco-Friendly</li></a>
            <a href="#"><li>Experiential Gifts</li></a>
            <a href="#"><li>Fashion & Style</li></a>
          </ul>
        </div>
        <div>
          <ul>
            <a href="#"><li>Flower & Cakes</li></a>
            <a href="#"><li>Garden & Gifts</li></a>
            <a href="#"><li>Gift Basket & Hampers</li></a>
            <a href="#"><li>Gift Cards</li></a>
          </ul>
          <a href="#"><h3>Hatke Gifts</h3></a>
          <ul>
            <a href="#"><li>Home & Living</li></a>
            <a href="./jewellery.html"><li>Jewellery</li></a>
            <a href="#"><li>Kids</li></a>
            <a href="#"><li>Love & Romance</li></a>
          </ul>
          <a href="#"><h3>Masks</h3></a>
        </div>
        <div>
          <ul>
            <a href="#"><li>Naughty</li></a>
            <a href="/product/perfume"><li>Perfumes</li></a>
          </ul>
          <a href="#"><h3>Personalised Gifts</h3></a>
          <ul>
            <a href="#"><li>Pet Gifts</li></a>
            <a href="#"><li>Religious Gifts</li></a>
            <a href="#"><li>Soft Toys</li></a>
            <a href="#"><li>Toys & Games</li></a>
            <a href="#"><li>Travel & Outdoor</li></a>
            <a href="#"><li>Unique Gifts</li></a>
            <a href="#"><li>Zodiac Gifts</li></a>
          </ul>
        </div>
        <div>
          <img
            src="https://style.giftcart.com/pub/media/wysiwyg/menu/occasionbox_300.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="cat_opt person PERSONALISED">
        <div>
          <a href="#"><h3>3D Figurines</h3></a>
          <a href="#"><h3>Baby Announcement</h3></a>
          <a href="#"><h3>Barware</h3></a>
          <a href="#"><h3>Books</h3></a>
          <a href="#"><h3>Cards</h3></a>
          <ul>
            <a href="#"><li>Birthday Cards</li></a>
            <a href="#"><li>I Love You Cards</li></a>
            <a href="#"><li>Anniversary Cards</li></a>
            <a href="#"><li>I Miss You Cards</li></a>
            <a href="#"><li>Get Well Soon</li></a>
            <a href="#"><li>Naughty Cards</li></a>
            <a href="#"><li>Pop Up Cards</li></a>
            <a href="#"><li>Valentine's Day Cards</li></a>
            <a href="#"><li>Easel Cards</li></a>
          </ul>
          <a href="#"><h3>Chocolate Bars</h3></a>
          <ul>
            <a href="#"><li>Birthday</li></a>
            <a href="#"><li>I Love You</li></a>
            <a href="#"><li>I Am Sorry</li></a>
            <a href="#"><li>Thank You</li></a>
            <a href="#"><li>Frienship</li></a>
            <a href="#"><li>Valentine's Day</li></a>
            <a href="#"><li>Zodiac</li></a>
            <a href="#"><li>Designer & Photo</li></a>
          </ul>
        </div>
        <div>
          <ul>
            <a href="#"><li>Calendars</li></a>
            <a href="#"><li>Coasters</li></a>
          </ul>
          <a href="#"><h3>Caricatures</h3></a>
          <ul>
            <a href="#"><li>Clocks</li></a>
            <a href="#"><li>Cushions</li></a>
            <a href="#"><li>Frames</li></a>
            <a href="#"><li>Key chains</li></a>
            <a href="#"><li>Name Plates</li></a>
            <a href="#"><li>Picture Stands</li></a>
            <a href="#"><li>Clocks</li></a>
            <a href="#"><li>Desk Clocks</li></a>
            <a href="#"><li>Wall Clocks</li></a>
          </ul>
          <a href="#"><h3>Cushions</h3></a>
          <ul>
            <a href="#"><li>Couple Cushions</li></a>
            <a href="#"><li>Create Your Own</li></a>
            <a href="#"><li>Jewellery</li></a>
            <a href="#"><li>Jigsaw Puzzles</li></a>
            <a href="#"><li>Keepsakes</li></a>
            <a href="#"><li>Ceramic Plates</li></a>
            <a href="#"><li>Glass & Crystal</li></a>
            <a href="#"><li>Handmade Sketches & Paintings</li></a>
            <a href="#"><li>Rock Slates</li></a>
            <a href="#"><li>Photo Frames</li></a>
            <a href="#"><li>Scrolls</li></a>
          </ul>
        </div>
        <div>
          <ul>
            <a href="#"><li>PlexiGlass Plaques</li></a>
            <a href="#"><li>Engraved Wooden Plaques</li></a>
            <a href="#"><li>Key Chains</li></a>
            <a href="#"><li>Luggage tag</li></a>
          </ul>
          <a href="#"><h3>Message in A Bottle</h3></a>
          <ul>
            <a href="#"><li>Magnets</li></a>
          </ul>
          <a href="#"><h3>Mugs</h3></a>
          <ul>
            <a href="#"><li>Mouse pads</li></a>
            <a href="#"><li>Name Plates</li></a>
            <a href="#"><li>Magazines & Newspapers</li></a>
            <a href="#"><li>Notebooks</li></a>
            <a href="#"><li>Poster Frames</li></a>
          </ul>
          <a href="#"><h3>Lamps</h3></a>
          <ul>
            <a href="#"><li>Love Messages</li></a>
            <a href="#"><li>Pillow Covers</li></a>
            <a href="#"><li>Passport Covers</li></a>
            <a href="#"><li>Personalised Wallets & Diaries</li></a>
            <a href="#"><li>Songs</li></a>
            <a href="#"><li>Teddy</li></a>
          </ul>
        </div>
        <div>
          <img
            src="https://style.giftcart.com/pub/media/wysiwyg/menu/occasionbox_300.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="cat_opt person OCCASIONS">
        <div>
          <a href="#"><h3>UPCOMINGS OCCASIONS</h3></a>
          <ul>
            <a href="#"><li>Republic(26-01)</li></a>
            <a href="#"><li>Valentines Day(14-02)</li></a>
            <a href="#"><li>Womens Day(08-03)</li></a>
            <a href="#"><li>Holi(18-03)</li></a>
            <a href="#"><li>April Fool Day(01-04)</li></a>
            <a href="#"><li>More</li></a>
          </ul>
        </div>
        <div>
          <a href="#"><h3>GIFTS BY OCCASIONS</h3></a>
          <ul>
            <a href="#"><li>Anniversary</li></a>
            <a href="#"><li>Baby Shower/Godbharai</li></a>
            <a href="#"><li>Baby Naming Day</li></a>
            <a href="#"><li>Birthday</li></a>
            <a href="#"><li>Housewarming</li></a>
            <a href="#"><li>New Mom</li></a>
            <a href="#"><li>Retirement</li></a>
            <a href="#"><li>Wedding</li></a>
            <a href="#"><li>More</li></a>
          </ul>
        </div>
        <div>
          <a href="#"><h3>EVENTS & SENTIMENTS</h3></a>
          <ul>
            <a href="#"><li>Crazy For You!</li></a>
            <a href="#"><li>Cheer Up!</li></a>
            <a href="#"><li>Just Because</li></a>
            <a href="#"><li>Get Well Soon</li></a>
            <a href="#"><li>You're the Best</li></a>
            <a href="#"><li>Farewell</li></a>
            <a href="#"><li>Welcome Home</li></a>
            <a href="#"><li>Thank You!</li></a>
            <a href="#"><li>I Love You!</li></a>
            <a href="#"><li>You're A Star</li></a>
            <a href="#"><li>More</li></a>
          </ul>
        </div>
        <div>
          <img
            src="https://style.giftcart.com/pub/media/wysiwyg/menu/occasionbox_300.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="cat_aniversary ANIVERSARY">
        <div>
          <a href="#"><h3>GIFTS BY RECIPIENT</h3></a>
          <ul>
            <a href="#"><li>Husband</li></a>
            <a href="#"><li>Wife</li></a>
          </ul>
        </div>
        <div>
          <a href="#"><h3>GIFTS BY CATEGORIES</h3></a>
          <ul>
            <a href="#"><li>Personalised Gifts</li></a>
            <a href="#"><li>Flower & Cakes</li></a>
            <a href="#"><li>Giftcards</li></a>
          </ul>
        </div>
        <div></div>
      </div>
      <div class="cat_birth cat_aniversary BIRTHDAY">
        <div>
          <a href="#"><h3>GIFTS BY RECIPIENT</h3></a>
          <ul>
            <a href="#"><li>Men</li></a>
            <a href="#"><li>Women</li></a>
            <a href="#"><li>Teens</li></a>
            <a href="#"><li>Kids</li></a>
            <a href="#"><li>Girlfriend</li></a>
            <a href="#"><li>Boyfriend</li></a>
            <a href="#"><li>Husband</li></a>
            <a href="#"><li>Wife</li></a>
            <a href="#"><li>Mom</li></a>
            <a href="#"><li>Dad</li></a>
            <a href="#"><li>Brother</li></a>
            <a href="#"><li>Sister</li></a>
          </ul>
        </div>
        <div>
          <a href="#"><h3>GIFTS BY CATEGORIES</h3></a>
          <ul>
            <a href="#"><li>Birthday Cards</li></a>
            <a href="#"><li>Flower & Cakes</li></a>
            <a href="#"><li>Personalised Gifts</li></a>
            <a href="#"><li>Chocolates</li></a>
            <a href="#"><li>Giftcards</li></a>
          </ul>
        </div>
        <div></div>
      </div>
      <div class="cat_aniversary valentine VALENTINE">
        <div>
          <ul>
            <a href="#"><li>Rose Day</li></a>
            <a href="#"><li>Propose Day</li></a>
            <a href="#"><li>Chocolate Day</li></a>
            <a href="#"><li>Teddy Day</li></a>
            <a href="#"><li>Promise Day</li></a>
            <a href="#"><li>Hug Day</li></a>
            <a href="#"><li>Kiss Day</li></a>
          </ul>
        </div>
      </div>
      <div class="cat_aniversary recipient RECIPIENT">
        <div>
          <ul>
            <a href="#"><li>Men</li></a>
            <a href="#"><li>Women</li></a>
            <a href="#"><li>Teens</li></a>
            <a href="#"><li>Kids</li></a>
            <a href="#"><li>Babies</li></a>
            <a href="#"><li>Boyfriend</li></a>
            <a href="#"><li>Girlfriend</li></a>
            <a href="#"><li>Husband</li></a>
            <a href="#"><li>Wife</li></a>
            <a href="#"><li>Friend</li></a>
            <a href="#"><li>Mom</li></a>
            <a href="#"><li>Dad</li></a>
            <a href="#"><li>Brother</li></a>
            <a href="#"><li>Sister</li></a>
          </ul>
        </div>
      </div>
    </div>
    <div class="slide_nav">
      <div class="nav_btn close">
        <span><i class="fas fa-times"></i></span>
      </div>
      <div class="stickers">
        <img
          src="https://style.giftcart.com/pub/static/frontend/Mgs/molly/en_US/images/hatkegifts-logo.gif"
          alt="Hatke Gifts"
        />
      </div>
      <div>
        <a href="#"
          ><p>VALENTINES DAY</p>
          <i class="fas fa-plus"></i>
        </a>
        <a href="#"><p>ANIVERSARY</p> </a>
        <a href="#"><p>BIRTHDAY</p> </a>
        <a href="#"><p>MORE OCCASIONS</p> </a>
        <a href="#"
          ><p>UPCOMING OCCASIONS</p>
          <i class="fas fa-plus"></i>
        </a>
        <a href="#"
          ><p>RECIPIENT</p>
          <i class="fas fa-plus"></i>
        </a>
        <a href="#"><p>TOP GIFTS</p> </a>
        <a href="#"
          ><p>CATEGORY</p>
          <i class="fas fa-plus"></i>
        </a>
        <a href="#"><p>CORPORATE</p> </a>
        <a href="#"><p>SPECIAL OFFERS</p> </a>
        <a href="#"><p>MY ACCOUNT</p> </a>
        <a href="#"><p>TRACK MY ORDER</p> </a>
        <a href="#"><p>FAQ</p> </a>
        <div class="contact">
          <p>CALL US : +91 99 1064 4899</p>
        </div>
      </div>
    </div>


    <div class="bg-model"></div>
    
    <div id="dashboard_dropdown" class="vissible_toggle">
      <ul id="karthik_d">
        <li><a href="#">My Account</a></li>
        <li><a href="#">My Orders</a></li>
        <li><a href="./wishlist_layout.html">My Wish List</a></li>
        <li><a href="/register/create" id="karthik_createAct_click">Create Account</a></li>
        <li><a href="/register/login" id="karthik_sigin_click">Sign In</a></li>
      </ul>
    </div>
    
  </header>`
}
export default navbar_part;