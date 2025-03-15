const buy = document.querySelectorAll(".buy");
const body = document.getElementById("body");
const allProducts = document.getElementById("allProducts");
const NumberOfProduct = document.getElementById("number-product");
let number = 0;
// get total price
const totalPrice = document.getElementById("totalPrice");
const getTotalPrice = () => {
  const allcarts = document.querySelectorAll(".done-product");
  let total = 0;
  allcarts.forEach((item) => {
    const price = Number(
      item.getElementsByClassName("price")[0].innerText.replace("$", "")
    );
    const quantity = Number(item.getElementsByClassName("number")[0].value);
    total = total + price * quantity;
  });
  totalPrice.innerText = ` $${total}  `;
};

// update total price if there change

allProducts.addEventListener("change", (eo) => {
  getTotalPrice();
});

// delete the product
allProducts.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("delete")) {
    eo.target.parentElement.remove();
    getTotalPrice();
    number = number - 1;
    NumberOfProduct.innerText = `${number}`;

    const nameOfDeleteProduct =
      eo.target.parentElement.getElementsByClassName("product-name")[0]
        .innerText;
    const allcards = document.querySelectorAll(".card-product");

    allcards.forEach((item) => {
      const nameOfProductInGalary =
        item.getElementsByClassName("titlcard")[0].innerText;
      if (nameOfDeleteProduct == nameOfProductInGalary) {
        const doneButton = item.getElementsByClassName("btn-success")[0];
        doneButton.classList.remove("btn-success");
        doneButton.classList.add("btn-primary");
        doneButton.removeAttribute("disabled");
        doneButton.innerText = "Buy";
      }
    });
  }
});

buy.forEach((item) => {
  item.addEventListener("click", (eo) => {
    number = number + 1;
    NumberOfProduct.innerText = `${number}`;
    item.classList.add("btn-success");
    item.setAttribute("disabled", "");
    item.innerHTML = `<span class="icon-check"></span> done`;
    const mabrouk = document.createElement("div");
    mabrouk.classList.add("mabrouk");
    mabrouk.innerHTML = `&#128525; مبروووك`;
    body.append(mabrouk);

    setTimeout(() => {
      mabrouk.style.transform = "translateX(-120vw)";
    }, 1500);

    const card = item.parentElement.parentElement;
    const imgSrc = card
      .getElementsByClassName("card-img-top")[0]
      .getAttribute("src");
    const itemName = card.getElementsByClassName("titlcard")[0].innerText;
    const itemPrice = card.getElementsByClassName("price")[0].innerText;

    const addProduct = `
    
      <div class="done-product">
          <div class="title-img">
            <img src="${imgSrc}" alt="">
            <p class="product-name" >${itemName}</p>
          </div>
  
          <div class="quantity">
            <p>الكمية</p>
            <input type="number" class="number"  id="number" value="1" min="1">
          </div>
          <div class="price">${itemPrice}</div>
          <button lang="ar" class="delete">حذف</button>
        </div>
    
    
    `;

    allProducts.innerHTML += addProduct;
    getTotalPrice();
  });
});

// open the ShowCard when click on icon cart
const showCards = document.getElementById("show-cards");
const iconShoppingCart = document.getElementById("icon-shopping-cart");

iconShoppingCart.addEventListener("click", (eo) => {
  showCards.style.transform = "translateX(0)";
});

// close the  showCards when click on close button
const close = document.getElementById("close");
close.addEventListener("click", (eo) => {
  showCards.style.transform = "translateX(-120vw)";
});


// drop down links

const iconBars = document.querySelector(".icon-bars");
const Ul = document.getElementById("Ul");

iconBars.addEventListener("click", (eo) => {
  if (Ul.style.opacity === "1") {
    Ul.style.opacity = "0";
    Ul.style.height = "0";
  } else {
    Ul.style.opacity = "1";
    Ul.style.height = "163px";
  }
});

window.addEventListener("scroll", (eo) => {
  if (scrollY >= 50) {
    iconBars.style.display = "none";
    Ul.style.display = "none";
  } else {
    iconBars.style.display = "block";
    Ul.style.display = "flex";
  }
});
