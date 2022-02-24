    function myfun(){
    let divs =  document.getElementById("dropcontent")
    divs.classList.toggle("show")
    }
    window.onclick= function(event){
      if(!event.target.matches("#clicks"))
      {
        var removeshow = document.getElementById("dropcontent")
        if(removeshow.classList.contains("show")){
          removeshow.classList.remove("show")
        }
      }
    }