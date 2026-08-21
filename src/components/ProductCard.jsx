
import ButtonComp from './UI/ButtonComp'
import ImageComp from './UI/ImageComp'

const ProductCard = ({
    name,
    img,
    // desc,
    price,
    dprice
}) => {
  return (
    <div className='card'>
        <div>
            <h1>{name}</h1>
            <ImageComp src={img} alt='ersrdtfjgvb' width={"100%"} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta voluptatibus, accusamus nulla deleniti harum perspiciatis assumenda iure quo dolorum optio dolore ut iste vitae! Magnam tenetur sunt omnis quam!</p>
            <h1>{price}</h1>
            <h6>{dprice}</h6>
            <ButtonComp btnText={"Add to Cart"} bgc={"coral"} color={"white"} width={"100%"} />
        </div>
    </div>
  )
}

export default ProductCard