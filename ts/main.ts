
/**Represents an individual products for sale */
class Product {
    //The name of the product
    title: string;

    //The retail price of the product
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}

window.onload = function () {
    // Grab the first submit button on the page using the 'type' attribute
    const submitButton: HTMLButtonElement = document.querySelector('button[type="submit"]');

    // Ensure the submitButton is not null before adding an event listener
    submitButton?.addEventListener('click', (event: MouseEvent): void => {
        // Prevent the default form submission
        event.preventDefault();

        //Get product form the form
        let p:Product = getProduct();

        //Display product
        displayProduct(p);
    });
}

function displayProduct(prod:Product) {
    //Get the product display div
    let displayDiv = document.querySelector("#productDisplay") as HTMLElement;
    displayDiv.innerHTML += 
        `
            <div class="col-sm-12 col-md-6 col-lg-4 mb-3 mx-auto">
                <div class="card" style="width: 18rem;">
                    <img src="https://placehold.co/250" class="card-img-top" alt="Just a blank placeholder">
                    <div class="card-body">
                        <h5 class="card-title">${prod.title}</h5>
                        <p class="card-text">This product is sold as ${prod.price}</p> 
                    </div>
                </div>
            </div>
        `;
    
}

function getProduct() {
    let title: string = (<HTMLInputElement>document.querySelector("#productTitle")).value;

    const productPriceTextBox = (<HTMLInputElement>document.querySelector("#productPrice"));
    let price: number = parseFloat(productPriceTextBox.value);

    let p = new Product(title, price);
    return p;
}
