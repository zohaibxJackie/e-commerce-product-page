// This is the code for responsive menu
let burgerButton = document.querySelector(".burger-menu");
let burgerIcon = document.querySelector(".burger-menu img");
let nav = document.querySelector("nav");

burgerButton.addEventListener("click", function () {
    let navAttribute = nav.getAttribute("area-hidden");
    if (navAttribute == "true") {
        nav.setAttribute("area-hidden", "false");
        navAttribute = "false";
        burgerIcon.setAttribute("src", "/images/icon-close.svg")
    } else {
        nav.setAttribute("area-hidden", "true");
        burgerIcon.setAttribute("src", "/images/icon-menu.svg")
    }
})

// This is the code for changing image 
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const btn4 = document.querySelector(".btn4")

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");

const productImageLarge = document.getElementById("product-img-large");
const productImageLargeAtrr = productImageLarge.getAttribute("src");
let currentImageIndex;
const imageArray = document.querySelectorAll(".imgk")
let totalPrice = document.querySelector("#totalPrice");

function showPage(elem, elemImg, num) {
    const imagesPage = document.querySelector("#show");
    imagesPage.style.display = "block";
    currentImageIndex = num;

    if (elemImg.getAttribute("src") === img1.getAttribute("src")) {
        btn1.classList.add("highlight-image");
        productImageLarge.setAttribute("src", imageArray[0].getAttribute("originalSrc").toString());
    } else if (elemImg.getAttribute("src") === img2.getAttribute("src")) {
        btn2.classList.add("highlight-image");
        productImageLarge.setAttribute("src", imageArray[1].getAttribute("originalSrc").toString());
    } else if (elemImg.getAttribute("src") === img3.getAttribute("src")) {
        btn3.classList.add("highlight-image");
        productImageLarge.setAttribute("src", imageArray[2].getAttribute("originalSrc").toString());
    } else if (elemImg.getAttribute("src") === img4.getAttribute("src")) {
        btn4.classList.add("highlight-image");
        productImageLarge.setAttribute("src", imageArray[3].getAttribute("originalSrc").toString());
    }
}


function changeImage(elem, element, num) {
    const btn = document.querySelectorAll("#btn");
    currentImageIndex = num;

    btn.forEach(temp => {
        temp.classList.remove("highlight-image");
    })
    productImageLarge.setAttribute("src", element.getAttribute("originalsrc"));
    if (elem.classList !== "highlight-image") {
        elem.classList.add("highlight-image")
    } else {
        alert("Please refresh the page");
    }
}

// I have added this because the currentImageAddress is unknow when the screen size is small
if (window.length < 900) {
    currentImageIndex = 1;
}

function nextImage() {
    const btn = document.querySelectorAll("#btn");

    btn.forEach(temp => {
        temp.classList.remove("highlight-image");
    })

    if (currentImageIndex == 4) {
        currentImageIndex = 1;
    } else {
        currentImageIndex += 1;
    }

    if (currentImageIndex === 1) {
        btn[0].classList.add("highlight-image");
        productImageLarge.setAttribute("src", imageArray[0].getAttribute("originalsrc").toString());
    } else if (currentImageIndex === 2) {
        btn[1].classList.add("highlight-image");
        productImageLarge.setAttribute("src", imageArray[1].getAttribute("originalsrc").toString());
    } else if (currentImageIndex === 3) {
        btn[2].classList.add("highlight-image");
        productImageLarge.setAttribute("src", imageArray[2].getAttribute("originalsrc").toString());
    } else if (currentImageIndex === 4) {
        btn[3].classList.add("highlight-image");
        productImageLarge.setAttribute("src", imageArray[3].getAttribute("originalsrc").toString());
    }
}

//previous button
function previousImage() {
    const btn = document.querySelectorAll("#btn");

    btn.forEach(temp => {
        temp.classList.remove("highlight-image");
    })
    if (currentImageIndex == 1) {
        currentImageIndex = 4;
    } else {
        currentImageIndex -= 1;
    }

    if (currentImageIndex === 1) {
        btn[0].classList.add("highlight-image");
        productImageLarge.setAttribute("src", imageArray[0].getAttribute("originalsrc").toString());
    } else if (currentImageIndex === 2) {
        btn[1].classList.add("highlight-image");
        productImageLarge.setAttribute("src", imageArray[1].getAttribute("originalsrc").toString());
    } else if (currentImageIndex === 3) {
        btn[2].classList.add("highlight-image");
        productImageLarge.setAttribute("src", imageArray[2].getAttribute("originalsrc").toString());
    } else if (currentImageIndex === 4) {
        btn[3].classList.add("highlight-image");
        productImageLarge.setAttribute("src", imageArray[3].getAttribute("originalsrc").toString());
    }

}

function closePage() {
    const btn = document.querySelectorAll("#btn");
    btn.forEach(temp => {
        temp.classList.remove("highlight-image");
    })
    const imagesPage = document.querySelector("#show");
    imagesPage.style.display = "none";
}

// code for increasing the quantity and decreasing the quantity

let quantityElement = document.querySelectorAll(".quantity");
let quantity1 = parseInt(quantityElement[0].innerHTML);
let quantity2 = parseInt(quantityElement[1].innerHTML);
let quantity3 = parseInt(quantityElement[2].innerHTML);



function increaseQuantity() {
    quantity1 += 1;
    quantity2 += 1;
    quantity3 += 1;
    quantityElement[2].innerHTML = quantity2.toString();
    total = quantity1 * 125.0;
}

function decreaseQuantity() {
    if (quantity1 > 0 && quantity2 > 0) {
        quantity1 -= 1;
        quantity2 -= 1;
        quantity3 -= 1;
    }
    quantityElement[2].innerHTML = quantity2.toString();
    total = quantity1 * 125.0;
}

const cart = document.querySelector(".cart");
const cartDetails = document.querySelector(".cart-pricing-check")
// show the cart details on clicking on the cart which is an icon in top right corner
cart.addEventListener("click", () => {
    if (cartDetails.getAttribute("showDetail") == "false") {
        cartDetails.setAttribute("showDetail","true");
    } else {
        cartDetails.setAttribute("showDetail","false");
    }
})

function resetQuantity() {
    total = 0;
    quantity1 = 0;
    quantity2 = 0;
    quantity3 = 0;
    quantityElement[0].innerHTML = quantity1.toString();
    quantityElement[1].innerHTML = quantity2.toString();
    quantityElement[2].innerHTML = quantity2.toString();
    totalPrice.innerHTML = '0'
    document.querySelector(".cart-quantity").style.display = "none";
    document.querySelector(".cart-empty").style.display = "flex";
}

function addToCart() {
    quantityElement[0].innerHTML = quantity1.toString();
    quantityElement[1].innerHTML = quantity2.toString();
    totalPrice.innerHTML = total.toString();
    
    if (quantity1 > 0) {
        document.querySelector(".cart-empty").style.display = "none";
        document.querySelector(".cart-quantity").style.display = "block";
    } else {
        document.querySelector(".cart-empty").style.display = "flex";
        document.querySelector(".cart-quantity").style.display = "none";
    }
}