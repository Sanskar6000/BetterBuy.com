// import pic from "./lojo.png";
// function Webimage(){
//  return <img className="login_img" src={pic}/>
// }
// export default Webimage

import ll from './logo-best.png'
// import pic from "./lojo.png"
import shoes from './shoes.png'
import SaleShoes from './leather.png'
// import Lshoe from './Lshoe.jpg'
import BB from "./bb.png"
// import sale from "./SaleShoe.png"

const Webimage=()=>{
 return <img className="login_img" src={BB}/>
}

const Shoes=()=>{
    return <img className="footer-banner-image" src={shoes}/>
}

const SaleShoe=()=>{
    return <img className="hero-banner-image" src={SaleShoes}/>
}

const Webimage1=()=>{
    return <img className="img1" src={ll}/>
   }

//    const LShoe=()=>{
//     return <img className="" src={Lshoe}/>
//    } 

export {Webimage,Webimage1,SaleShoe,Shoes} 