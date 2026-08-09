

// Functional Comps
const PostComp = ({ title, paragraph, btnText})=>{
    return(
        <div>
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <button>{btnText}</button>
        </div>
    )
}

export default PostComp