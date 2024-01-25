import Counter from "./Counter";
import Product from "./product";


function Products() {
  let products = [
    {
      id: 1,
      label: "iphone 13",
      price: 2900,
    },
    {
      id: 2,
      label: "Samsung",
      price: 1200,
    },
  ];
  let show = true;

  return (
    <div>
      <h1>List of products </h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
      <Counter />
      {show && (
        <div>
          {products.map((product, index) => (
            <div key={index}>
              <Product  data ={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
