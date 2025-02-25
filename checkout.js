let Cart_list = [];


function CheckCart() {             //Function to get data from cookies
    const cookievalue = document.cookie.split('; ').find(row => row.startsWith('Cart_list='));
    if (cookievalue) {
        Cart_list = JSON.parse(cookievalue.split('=')[1]);
    }
}
CheckCart();

                                    // Function for adding cart to HTML
function addCartTo_HTML() {
    const Cart_listHTML = document.querySelector('.ReturnCart .list');
    const Total_QuantityHTML = document.querySelector('.Total_Quantity');
    const totalPriceHTML = document.querySelector('.totalPrice');
    let Total_Quantity = 0;
    let totalPrice = 0;

    Cart_listHTML.innerHTML = '';

    if (Cart_list) {
        Cart_list.forEach(product => {
            if (product) {
                const newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = `
                    <img src="${product.image}">
                    <div class="info">
                        <div class="Name">${product.Name}</div>
                        <div class="Price">$${product.Price}/1 product</div>
                    </div>
                    <div class="Quantity">${product.Quantity}</div>
                    <div class="returnPrice">$${product.Price * product.Quantity}</div>`;
                Cart_listHTML.appendChild(newCart);
                Total_Quantity += product.Quantity;
                totalPrice += product.Price * product.Quantity;
            }
        });
    }

    Total_QuantityHTML.innerText = Total_Quantity;
    totalPriceHTML.innerText = `$${totalPrice.toFixed(2)}`;
}

                                        
function ValidatePhone(phoneNumber) {      //Function of validating the phone number,with ten digits, 
    
    const phoneRegex = /^(\+\d{1,3})?\d{10}$/;
    return phoneRegex.test(phoneNumber);
}

                                          
function ValidateEmail(email) {       //Function of validating the email
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

                                        // Function to display checkout summery and convert the checkout button to go to shop
function DisplayCheckoutSummaryAndConvertButton() {
    replaceCheckoutButton();//replacing the checkout button
    displayCheckoutSummary();//displaying checkoit summary
   
}


function displayCheckoutSummary() {   //Function to display checkout summary
    const customerInfo = document.querySelector('.Summary .customer-info');
    const productSummary = document.querySelector('.Summary .product-Summary');
    customerInfo.innerHTML = '';
    productSummary.innerHTML = '';

    const fullName = document.getElementById('Name').value;
    const phoneNumber = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const Address = document.getElementById('Address').value;
    const Country = document.getElementById('Country').value;
    const City = document.getElementById('City').value;

    customerInfo.innerHTML = `
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${Address}</p>
        <p><strong>Country:</strong> ${Country}</p>
        <p><strong>City:</strong> ${City}</p>
    `;

   //cart info.
    const Cartitems = Cart_list.map(product => `  
        <div class="product-details">
            <p><strong>Name:</strong> ${product.Name}</p>
            <p><strong>Price per unit:</strong> $${product.Price}</p>
            <p><strong>Quantity:</strong> ${product.Quantity}</p>
            <p><strong>Total Price:</strong> $${product.Price * product.Quantity}</p>
        </div>
    `).join('');

    productSummary.innerHTML = Cartitems;

    
    const Total_Quantity = Cart_list.reduce((total, product) => total + product.Quantity, 0);  //calculating total quantity and total price
    const totalPrice = Cart_list.reduce((total, product) => total + (product.Price * product.Quantity), 0);

                                                      //adding total price and quantity to summary
    productSummary.innerHTML += `   
        <p><strong>Total Quantity:</strong> ${Total_Quantity}</p>
        <p><strong>Total Price:</strong> $${totalPrice.toFixed(2)}</p>
    `;
}
                    //Function of replacing the "Checkout" button.
function replaceCheckoutButton() {
    const buttonCheckout = document.querySelector('.buttonCheckout');
    buttonCheckout.innerText = "Back to Shop";
    buttonCheckout.removeEventListener('click', handleCheckout);
    buttonCheckout.addEventListener('click', handleBackToShop);
}

                    
function handleBackToShop() {  //Back to shop button, while claering the cart
    ClearCart();
    window.location.href = "shop.html";  //redirects to the shop
}


function handleCheckout() {    //checkout button
    if (Cart_list.length === 0) {
        alert("Your Cart is empty!");
        return;               // Stoping the execution ,if  Cart  empty.
    }

                               //checking the input fields
    const fullName = document.getElementById('Name').value.trim();
    const phoneNumber = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const Address = document.getElementById('Address').value.trim();
    const Country = document.getElementById('Country').value.trim();
    const City = document.getElementById('City').value.trim();

    if (!fullName || !phoneNumber || !email || !Address) {
        const emptyFields = [];
        if (!fullName) emptyFields.push("Full Name");
        if (!phoneNumber) emptyFields.push("Phone Number");
        if (!Address) emptyFields.push("Address");
        if (!email) emptyFields.push("Email");

        alert("The following fields need to be completed:\n" + emptyFields.join(", "));
        return;                             //stoping the execution
    }

    if (!ValidatePhone(phoneNumber)) {
        alert("Enter a valid phone number!");     //if phone number is invalid
        return;
    }
    
    if (!ValidateEmail(email)) {
        alert("Enter a valid email Address!");    //if phone number is invalid
        return;
    }                                 
    alert("Your order has been placed successfully!");   //Displaying the alert
    DisplayCheckoutSummaryAndConvertButton();            // Pcheckout summary and converting the button
}
document.querySelector('.buttonCheckout').addEventListener('click', handleCheckout);   // checkout button


function ClearCart() {                      //clearing the cart
    Cart_list = []; 
    document.cookie = 'Cart_list=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; // Clearing cart coockie
}
addCartTo_HTML();                          //adding cart items when HTML loads


document.querySelector('.backToShopButton').addEventListener('click', () => {  //back to shop
    ClearCart(); 
    window.location.href = "shop.html";      // directing to the sho page
});
