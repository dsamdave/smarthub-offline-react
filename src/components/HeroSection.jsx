import { MainLogo } from "../utilities/images"
import ButtonComp from "./UI/ButtonComp"
import ImageComp from "./UI/ImageComp"



const HeroSection = () => {
  return (
    <div className="hero">
        <ImageComp src={MainLogo} alt="" />

        <div>
            <h1>Welcome</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem quia aspernatur doloribus beatae quaerat earum nostrum veritatis cum odit delectus porro quae reprehenderit facere tempore placeat ratione, veniam provident sunt.</p>

            <ButtonComp btnText={"Book Now"} bgc={"coral"} color={"white"} width={"300px"} />
        </div>
    </div>
  )
}

export default HeroSection