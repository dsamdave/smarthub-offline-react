import ProductCard from "./ProductCard"


const ProductsComp = () => {


    const products = [
  {
    name: "Wireless Headphones",
    price: 45000,
    discountPrice: 35000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    name: "Smart Watch",
    price: 65000,
    discountPrice: 52000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    name: "Running Sneakers",
    price: 55000,
    discountPrice: 42000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    name: "Leather Backpack",
    price: 38000,
    discountPrice: 30000,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
  },
  {
    name: "Bluetooth Speaker",
    price: 40000,
    discountPrice: 32000,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
  },
  {
    name: "Gaming Mouse",
    price: 28000,
    discountPrice: 22000,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
  },
  {
    name: "Mechanical Keyboard",
    price: 60000,
    discountPrice: 48000,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
  },
  {
    name: "Sunglasses",
    price: 25000,
    discountPrice: 18000,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
  },
  {
    name: "Classic Wrist Watch",
    price: 85000,
    discountPrice: 70000,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d"
  },
  {
    name: "Travel Water Bottle",
    price: 18000,
    discountPrice: 14000,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8"
  }
];









  return (
    <div className="product-list">
        {
            products.map((items, idx)=>(
                 <ProductCard
                 key={idx}
                     name={items?.name}
                    img={items?.image}
                   
                    price={items?.price}
                    dprice={items?.discountPrice}
                  />
            ))
        }
        {/* <ProductCard /> */}
    </div>
  )
}

export default ProductsComp