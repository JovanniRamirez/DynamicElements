
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
        let p = getProduct();

        //Display product
        console.log(p);

    });

}

function getProduct() {
    let title: string = (<HTMLInputElement>document.querySelector("#productTitle")).value;

    const productPriceTextBox = (<HTMLInputElement>document.querySelector("#productPrice"));
    let price: number = parseFloat(productPriceTextBox.value);

    let p = new Product(title, price);
    return p;
}
