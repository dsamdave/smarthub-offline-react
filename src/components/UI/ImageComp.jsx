

const ImageComp = ({ src, alt = "randmon Image", width })=>{
    return <img src={src} alt={alt ? alt : "randmon Image" } style={{width: width ? width : null}} />
}

export default ImageComp