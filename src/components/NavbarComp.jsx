import { MainLogo } from "../utilities/images"
import ButtonComp from "./UI/ButtonComp"
import ImageComp from "./UI/ImageComp"
import ListItemComp from "./UI/ListItemComp"


const NavbarComp = ()=>{

    const navLink = [
        {
            linkName: "Home",
            href: "/home",
            icon: "Services",
        },
        {
            linkName: "About Us",
            href: "/about",
            icon: "Services",
        },
        {
            linkName: "Services",
            href: "/services",
            icon: "Services",
        },
        {
            linkName: "Contact Us",
            href: "/contact",
            icon: "Services",
        },
       
      
    ]



    return (
        <nav>
            <div className="logo">
                {/* <img src={MainLogo} alt="" /> */}
                <ImageComp src={MainLogo} />
                </div>

            <ul>
                {
                    navLink.map((item, idx)=>(
                        <ListItemComp item={item.linkName} href={item.href} key={idx} />
                    ))
                }
                {/* <ListItemComp item="home" />
                <ListItemComp item="home" />
                <ListItemComp item="home" />
                <ListItemComp item="home" /> */}
                {/* <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li> */}
            </ul>

            <div className="btn-container">

                <ButtonComp 
                    btnText="Login" 
                    // bgc="tranparent" 
                    color={"blue"} 
                />
                <ButtonComp 
                    btnText="Register" 
                    bgc={"blue"}
                    color={"white"}
                />

            </div>

            {/* <button>Login</button>
            <button>Register</button> */}
        </nav>
    )

}

export default NavbarComp