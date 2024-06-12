// function for slider menu for mobile

let menu_button = document.getElementById("menu_button");
let slider_menu = document.getElementById("slide_menu");

menu_click = 0;
menu_button.addEventListener('click', function () {
    if (menu_click === 0) {
        slider_menu.style.left = "0%";
        menu_click++;
    }
    else if (menu_click === 1) {
        slider_menu.style.left = "-100%";
        menu_click = 0;
    }
});

// function for show login form on the screen

let login_menu_btn = document.querySelectorAll(".login_menu_btn");
let login_form_show = document.getElementById("login_form_show");
let login_menu_click = 0;

login_menu_btn.forEach(function(logclick){
    logclick.addEventListener('click', function(){
        if(login_menu_click === 0){
            login_form_show.style.display = "flex"; 
            login_menu_click++;
        }
    });
});

// function for close log form from the screen

let log_form_close = document.getElementById("log_form_close");

log_form_close.addEventListener('click', function(){
    if(login_menu_click === 1){
        login_form_show.style.display = "none";   
        login_menu_click = 0;
    }
});





// function for log in form and sign up form slide

let sign_up = document.getElementById("sign_up");
let log_in = document.getElementById("log_in");
let log_in_form = document.querySelector(".log_in_form");
let sign_up_form = document.querySelector(".sign_up_form");

let log_btn_click = 0;

sign_up.addEventListener('click', function () {
    if(log_btn_click === 0){
        sign_up_form.style.left = "0%";
        log_in_form.style.left = "-100%";
        log_btn_click++ ;
    }
});

log_in.addEventListener('click', function () {
    if(log_btn_click === 1){
        sign_up_form.style.left = "100%";
        log_in_form.style.left = "0%";
        log_btn_click = 0 ;
    }
});



// function for show menu book on the screen

let menu_book_btn = document.querySelectorAll(".menu_book_btn");
let menu_book = document.getElementById("menu-book");
let menu_book_btn_click = 0;

menu_book_btn.forEach(function(menuBookClick){
    menuBookClick.addEventListener('click', function(){
        if(menu_book_btn_click === 0){
            menu_book.style.display = "flex"; 
            menu_book_btn_click++;
        }
    });
});

// function for close log form from the screen

let close_menu_book = document.getElementById("close_menu_book");

close_menu_book.addEventListener('click', function(){
    if(menu_book_btn_click === 1){
        menu_book.style.display = "none";   
        menu_book_btn_click = 0;
    }
});



// function for show full screen gallery 1 image

let full_screen_img_show1 = document.getElementById("full_screen_img_show1");
let full_screen_img_show2 = document.getElementById("full_screen_img_show2");
let full_screen_img_show3 = document.getElementById("full_screen_img_show3");
let full_screen_img_show4 = document.getElementById("full_screen_img_show4");
let full_screen_img_show5 = document.getElementById("full_screen_img_show5");
let full_screen_img_show6 = document.getElementById("full_screen_img_show6");
let full_screen_img_show7 = document.getElementById("full_screen_img_show7");
let full_screen_img_show8 = document.getElementById("full_screen_img_show8");
let full_screen_img_show9 = document.getElementById("full_screen_img_show9");
let full_screen_img_show10 = document.getElementById("full_screen_img_show10");
let full_screen_img_show11 = document.getElementById("full_screen_img_show11");
let full_screen_img_show12 = document.getElementById("full_screen_img_show12");
let full_screen_img_show13 = document.getElementById("full_screen_img_show13");
let full_screen_img_show14 = document.getElementById("full_screen_img_show14");
let full_screen_img_show15 = document.getElementById("full_screen_img_show15");
let full_screen_img_show16 = document.getElementById("full_screen_img_show16");
let full_screen_gallery_img_btn = 0;

function showFullGallery1(){
  if(full_screen_gallery_img_btn === 0){
    full_screen_img_show1.style.display = "flex";
    full_screen_gallery_img_btn++;
  }
}


// function for close full screen gallery 1 image
function closeFullGallery1(){
  if(full_screen_gallery_img_btn === 1){
    full_screen_img_show1.style.display = "none";
    full_screen_gallery_img_btn = 0;
  }
}



// function for show full screen gallery 2 image

function showFullGallery2(){
  if(full_screen_gallery_img_btn === 0){
    full_screen_img_show2.style.display = "flex";
    full_screen_gallery_img_btn++;
  }
}


// function for close full screen gallery 2 image
function closeFullGallery2(){
  if(full_screen_gallery_img_btn === 1){
    full_screen_img_show2.style.display = "none";
    full_screen_gallery_img_btn = 0;
  }
}


// function for show full screen gallery 3 image


function showFullGallery3(){
  if(full_screen_gallery_img_btn === 0){
    full_screen_img_show3.style.display = "flex";
    full_screen_gallery_img_btn++;
  }
}


// function for close full screen gallery 3 image
function closeFullGallery3(){
  if(full_screen_gallery_img_btn === 1){
    full_screen_img_show3.style.display = "none";
    full_screen_gallery_img_btn = 0;
  }
}


// function for show full screen gallery 4 image

function showFullGallery4(){
  if(full_screen_gallery_img_btn === 0){
    full_screen_img_show4.style.display = "flex";
    full_screen_gallery_img_btn++;
  }
}


// function for close full screen gallery 4 image
function closeFullGallery4(){
  if(full_screen_gallery_img_btn === 1){
    full_screen_img_show4.style.display = "none";
    full_screen_gallery_img_btn = 0;
  }
}


// function for show full screen gallery 5 image

function showFullGallery5(){
  if(full_screen_gallery_img_btn === 0){
    full_screen_img_show5.style.display = "flex";
    full_screen_gallery_img_btn++;
  }
}


// function for close full screen gallery 5 image
function closeFullGallery5(){
  if(full_screen_gallery_img_btn === 1){
    full_screen_img_show5.style.display = "none";
    full_screen_gallery_img_btn = 0;
  }
}


// function for show full screen gallery 6 image

function showFullGallery6(){
  if(full_screen_gallery_img_btn === 0){
    full_screen_img_show6.style.display = "flex";
    full_screen_gallery_img_btn++;
  }
}


// function for close full screen gallery 6 image
function closeFullGallery6(){
  if(full_screen_gallery_img_btn === 1){
    full_screen_img_show6.style.display = "none";
    full_screen_gallery_img_btn = 0;
  }
}


// function for show full screen gallery 7 image

function showFullGallery7(){
  if(full_screen_gallery_img_btn === 0){
    full_screen_img_show7.style.display = "flex";
    full_screen_gallery_img_btn++;
  }
}


// function for close full screen gallery 7 image
function closeFullGallery7(){
  if(full_screen_gallery_img_btn === 1){
    full_screen_img_show7.style.display = "none";
    full_screen_gallery_img_btn = 0;
  }
}

// function for show full screen gallery 8 image

function showFullGallery8(){
  if(full_screen_gallery_img_btn === 0){
    full_screen_img_show8.style.display = "flex";
    full_screen_gallery_img_btn++;
  }
}


// function for close full screen gallery 8 image
function closeFullGallery8(){
  if(full_screen_gallery_img_btn === 1){
    full_screen_img_show8.style.display = "none";
    full_screen_gallery_img_btn = 0;
  }
}


// function for show full screen gallery 9 image

function showFullGallery9(){
  if(full_screen_gallery_img_btn === 0){
    full_screen_img_show9.style.display = "flex";
    full_screen_gallery_img_btn++;
  }
}


// function for close full screen gallery 9 image
function closeFullGallery9(){
  if(full_screen_gallery_img_btn === 1){
    full_screen_img_show9.style.display = "none";
    full_screen_gallery_img_btn = 0;
  }
}

// function for show full screen gallery 10 image

function showFullGallery10(){
  if(full_screen_gallery_img_btn === 0){
    full_screen_img_show10.style.display = "flex";
    full_screen_gallery_img_btn++;
  }
}


// function for close full screen gallery 10 image
function closeFullGallery10(){
  if(full_screen_gallery_img_btn === 1){
    full_screen_img_show10.style.display = "none";
    full_screen_gallery_img_btn = 0;
  }
}

// function for show full screen gallery 11 image

function showFullGallery11(){
  if(full_screen_gallery_img_btn === 0){
    full_screen_img_show11.style.display = "flex";
    full_screen_gallery_img_btn++;
  }
}


// function for close full screen gallery 11 image
function closeFullGallery11(){
  if(full_screen_gallery_img_btn === 1){
    full_screen_img_show11.style.display = "none";
    full_screen_gallery_img_btn = 0;
  }
}

// function for show full screen gallery 12 image

function showFullGallery12(){
  if(full_screen_gallery_img_btn === 0){
    full_screen_img_show12.style.display = "flex";
    full_screen_gallery_img_btn++;
  }
}


// function for close full screen gallery 12 image
function closeFullGallery12(){
  if(full_screen_gallery_img_btn === 1){
    full_screen_img_show12.style.display = "none";
    full_screen_gallery_img_btn = 0;
  }
}

// function for show full screen gallery 13 image

function showFullGallery13(){
  if(full_screen_gallery_img_btn === 0){
    full_screen_img_show13.style.display = "flex";
    full_screen_gallery_img_btn++;
  }
}


// function for close full screen gallery 13 image
function closeFullGallery13(){
  if(full_screen_gallery_img_btn === 1){
    full_screen_img_show13.style.display = "none";
    full_screen_gallery_img_btn = 0;
  }
}


// function for show full screen gallery 14 image

function showFullGallery14(){
  if(full_screen_gallery_img_btn === 0){
    full_screen_img_show14.style.display = "flex";
    full_screen_gallery_img_btn++;
  }
}


// function for close full screen gallery 14 image
function closeFullGallery14(){
  if(full_screen_gallery_img_btn === 1){
    full_screen_img_show14.style.display = "none";
    full_screen_gallery_img_btn = 0;
  }
}

// function for show full screen gallery 15 image

function showFullGallery15(){
  if(full_screen_gallery_img_btn === 0){
    full_screen_img_show15.style.display = "flex";
    full_screen_gallery_img_btn++;
  }
}


// function for close full screen gallery 15 image
function closeFullGallery15(){
  if(full_screen_gallery_img_btn === 1){
    full_screen_img_show15.style.display = "none";
    full_screen_gallery_img_btn = 0;
  }
}

// function for show full screen gallery 16 image

function showFullGallery16(){
  if(full_screen_gallery_img_btn === 0){
    full_screen_img_show16.style.display = "flex";
    full_screen_gallery_img_btn++;
  }
}


// function for close full screen gallery 16 image
function closeFullGallery16(){
  if(full_screen_gallery_img_btn === 1){
    full_screen_img_show16.style.display = "none";
    full_screen_gallery_img_btn = 0;
  }
}

