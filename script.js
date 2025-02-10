const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const productList = Array.from(document.querySelectorAll('.card'));
const noResultMessage = document.getElementById('noResultMessage');

function searchProduct(){
    const searchValue = searchInput.value.toLowerCase().trim();

    const filteredProduct = productList.filter(product =>{
        const productName = product.getAttribute('data-name').toLocaleLowerCase().trim();
        return productName.includes(searchValue);
    })

    productList.map(product  => product.style.display = 'none');
    filteredProduct.map(product  => product.style.display = 'block');

    if (filteredProduct.length === 0) {
        noResultMessage.style.display = 'block';
    } else {
        noResultMessage.style.display = 'none';
    }
}

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchProduct();
    }
});

searchButton.addEventListener('click', searchProduct);