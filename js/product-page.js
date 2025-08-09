import {loadProductsWithFetchWithAsync, products} from '../js/product-service.js';
const storeItemsDiv = document.querySelector('.js-products-grid');
const pageNav = document.querySelector('.js-page-selection-box');



displayProducts(renderProducts);

export async function displayProducts(render){
  try{
    await loadProductsWithFetchWithAsync();
    console.log(products)
    localStorage.setItem('products', JSON.stringify(products))
    render(products)
    showPageNav()
  } catch(error){
    console.log('Unexpected error ' + error + 'load from localstorage')
    let productsBackup = JSON.parse(localStorage.getItem('products'));
    render(productsBackup)
    
  }
  
}

function showPageNav(){
  pageNav.innerHTML = `<div class="page-num-box"><span>1</span></div>
        <div class="page-svg-box">
           <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentcolor" fill-rule="evenodd" d="M14.995 10.995a1 1 0 0 1 0 1.414l-4.593 4.593a.99.99 0 0 1-1.4-1.4l3.9-3.9-3.9-3.9a.99.99 0 0 1 1.4-1.4z"></path></svg>
        </div>`
}


function renderProducts(storeItems){
  storeItems.forEach((product) => {
    if(storeItemsDiv){
      storeItemsDiv.innerHTML += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>


        <div class="product-price">
          ${product.getPrice()}
        </div>

        <div class="product-quantity-container">
          <select class="js-quantity-selector-${product.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart js-added-to-cart-${product.id}">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}" data-product-name="${product.name}">
          Add to Cart
        </button>
      </div>`
    }
    
  })
}
