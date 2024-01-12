import './product.css'

function Product({product }) {
   


  return (
    <div className='product-container'>
      <img src={product.image	} alt='' />
      <h1>{product.title}</h1>
      <p> {product.description}</p>
      <h1>{product.price}</h1>
      <button>Add to cart</button>
    </div>
  )
}

export default Product
