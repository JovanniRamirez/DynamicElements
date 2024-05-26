class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
window.onload = function () {
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton?.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Submit button clicked!');
    });
};
