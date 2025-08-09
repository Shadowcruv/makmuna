class Product{
  id;
  image;
  priceCents;
  name;

  constructor(products){
    this.id = products.id;
    this.image = products.image;
    this.priceCents = products.priceCents;
    this.name = products.name
  }

  getPrice = () => {
    return `$${(this.priceCents / 100).toFixed(2)}`
  }

}

export let products = JSON.parse(localStorage.getItem('products')) || [];

export async function loadProductsWithFetchWithAsync(){
  const response =  await fetch('https://supersimplebackend.dev/products');
  const data = await response.json()
  // console.log(data);
  products = data.map((item) =>{
                return new Product(item)
              })
  localStorage.setItem('products', products) 
           
}