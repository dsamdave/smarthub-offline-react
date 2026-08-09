import { useEffect, useState } from "react"
import Button from "./components/Button"
import PostComp from "./components/PostComp"
import Title from "./components/TitleComp"


function App (){

  // React Hooks

  // useState()
  // useEffect()

  // use....

  const arr = ["David", "Jude", "Joy", "James"]

  const [myName, setMyName] = useState("")
  const [students, setStudents] = useState([])

  console.log({ myName, students })

  const updateMyName = ()=>{ 
    console.log("Clickedddd")
    setMyName("David Sampson")

    setStudents(arr)
  }



  useEffect(()=>{
    console.log("useEffect Ran")
    // setMyName("David Sampson")

    // updateMyName()

  }, [students])

  return(

    <div>
      
      <div>
        <Title title={myName} />
        <button onClick={updateMyName}>Update useState</button>
      </div>
      
      <div>

        <h1>bjhvcgfhdfcvghfvb</h1>

        <Button text="Read more" />
        <Button text="Welcome" />
        <Button text="Submit" />
        <Button />
        <Button />
        <Button />
        <Button />

        <Title title="Welcome" />
        <Title title="Finished" />
        <Title  title={"gfcvghvg"}/>


        <PostComp 
          title={"Title 1"} 
          paragraph={"llnhufcghdcvghfvgh fvghcvb fvgfvg gfvg vgfvghfv"}
          btnText={"Read More"}
        />


        <PostComp  
          title={"Title 2"}
          paragraph={"hjvyg gfv gyvghb g vgv gbghv ghb vghv b"}
          btnText={"See More..."}
        />


        <PostComp 
          title={"Title 3"}
          paragraph={"bhjvh g cvgb ghcv fgc fcfgv cxfgvb cvbcvbv"}
          btnText={"Download"}
        />
      </div>
    </div>

    
  )

}

export default App