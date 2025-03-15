// toggle tab btn
const tabBtn = document.querySelectorAll(".tab-btn")
const parentOfProducts = document.querySelector(".parent-of-products")
tabBtn.forEach((item , index) => {
  item.addEventListener("click" , (eo) => {
    item.parentElement.getElementsByClassName("active-btn")[0].classList.remove("active-btn")
    eo.target.classList.add("active-btn")

    parentOfProducts.getElementsByClassName("active-product")[0].classList.remove("active-product")
    parentOfProducts.getElementsByClassName("most-sale")[index].classList.add("active-product")
  })
});

// accordion the Products 

const allplus = document.querySelectorAll(".drop-down-accordion")

allplus.forEach(item => {

  item.addEventListener("click" , (eo) => {
    
  const content = eo.target.parentElement.parentElement.getElementsByClassName("accordion-content")[0]
  content.classList.toggle("active")
    if (content.classList.contains("active")) {
      item.innerHTML = `&#129169;`;
      item.style.transform = "translateY(-21px)";
      content.style.height = `${content.scrollHeight}px`
    } else {
      item.innerHTML = `&#129171;`;
      item.style.transform = "translateY(10px)";
      content.style.height ="0"
    }

  })
  
});




// opend carts when click on cart-btn 

const showCard = document.getElementById("show-cards")
const cartBtn = document.querySelector(".cart-btn")

cartBtn.addEventListener("click" , (eo) => {
  showCard.style.transform = "translateX(0)"
})

// close the  showCards when click on close button
const closeScreen = document.getElementById("close")
close.addEventListener("click" , (eo) => {
  showCard.style.transform = "translateX(-120vw)"
})
