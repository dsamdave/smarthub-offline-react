import ButtonComp from "../UIComps/ButtonComp"
import TextComp from "../UIComps/TextComp"


const FooterComp = ()=>{
    return <footer>
        <TextComp title="David" />
        <TextComp title="Chisom" />
        <TextComp  />
       

        <ButtonComp text="Read More" color="blue" />
        <ButtonComp text="Register Now" color="green" />
       
    </footer>
}

export default FooterComp