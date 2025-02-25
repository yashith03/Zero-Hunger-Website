let Cart_icon = document.querySelector('.Cart_icon');
let Cart = document.querySelector('.Cart');
let Container = document.querySelector('.Container');
let Close = document.querySelector('.Close');

Cart_icon.addEventListener('click', function(){
    if(Cart.style.right == '-100%'){
        Cart.style.right = '0';
        Container.style.transform = 'translateX(-400px)';
    }else{
        Cart.style.right = '-100%';
        Container.style.transform = 'translateX(0)';
    }
})
Close.addEventListener('click', function (){
    Cart.style.right = '-100%';
    Container.style.transform = 'translateX(0)';
})


let products = null;
                    //fetching data from json file
fetch('product.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
})

                    //showing data on products
function addDataToHTML(){
                    // removing data from HTML
    let Product_ListHTML = document.querySelector('.Product_List');
    Product_ListHTML.innerHTML = '';

                         // adding new data
    if(products != null) 
    {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            `<img src="${product.image}" alt="">
            <h2>${product.Name}</h2>
            <div class="Price">$${product.Price}</div>
            <button onclick="addCart(${product.id})">Add To Cart</button>`;

            Product_ListHTML.appendChild(newProduct);

        });
    }
}


//using coockies, so cart will not lost from refreshing page 
let Cart_list = [];
function CheckCart(){
    var cookievalue = document.cookie
    .split('; ')
    .find(row => row.startsWith('Cart_list='));
    if(cookievalue){
        Cart_list = JSON.parse(cookievalue.split('=')[1]);
    }else{
        Cart_list = [];
    }
}
CheckCart();
function addCart($idProduct){
    let productsCopy = JSON.parse(JSON.stringify(products));
   
    if(!Cart_list[$idProduct])   //if the product is not in the cart
    {
        Cart_list[$idProduct] = productsCopy.filter(product => product.id == $idProduct)[0];
        Cart_list[$idProduct].Quantity = 1;
    }else{
        Cart_list[$idProduct].Quantity++;  //if the product is  in the cart,quantity increases.
    }
    document.cookie = "Cart_list=" + JSON.stringify(Cart_list) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";

    addCartTo_HTML();
}
addCartTo_HTML();
function addCartTo_HTML(){
    
    let Cart_listHTML = document.querySelector('.Cart_list');
    Cart_listHTML.innerHTML = '';

    let totalHTML = document.querySelector('.Total_Quantity');
    let Total_Quantity = 0;
                             //if the product is in the cart
    if(Cart_list){
        Cart_list.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${product.image}">
                    <div class="Content">
                        <div class="Name">${product.Name}</div>
                        <div class="Price">$${product.Price} / 1 product</div>
                    </div>
                    <div class="Quantity">
                        <button onclick="changeQuantity(${product.id}, '-')">-</button>
                        <span class="value">${product.Quantity}</span>
                        <button onclick="changeQuantity(${product.id}, '+')">+</button>
                    </div>`;
                Cart_listHTML.appendChild(newCart);
                Total_Quantity = Total_Quantity + product.Quantity;
            }
        })
    }
    totalHTML.innerText = Total_Quantity;
}
function changeQuantity($idProduct, $type){
    switch ($type) {
        case '+':
            Cart_list[$idProduct].Quantity++;
            break;
        case '-':
            Cart_list[$idProduct].Quantity--;

                                      // if the quantity is minus or 0,product removes from the cart
            if(Cart_list[$idProduct].Quantity <= 0){
                delete Cart_list[$idProduct];
            }
            break;
    
        default:
            break;
    }
                          
    document.cookie = "Cart_list=" + JSON.stringify(Cart_list) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";       //       saving new data in cookie 
    addCartTo_HTML(); // reloading HTML view cart
}