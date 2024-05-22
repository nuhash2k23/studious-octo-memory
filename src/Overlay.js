import { state } from "./store"
import {motion} from 'framer-motion';
import './Overlay.css';
export default function Overlay(){
    // const placeholder = [' #344344 , #c498he, #f067ee, #58u34e' ]
    return(
      <section key="custom" className="custom">

        <div className="slg">
          <div className="hdiv">
        <h1 className="slogan">NEW <br/>MODERNIZED</h1>
        </div>
<div className="spanslogan"><p>At Wood Thata Furniture Co., we're not just in the business of crafting furniture; we're in the business of creating lasting impressions. Established with a passion for woodworking and a commitment to excellence, our company has been synonymous with quality craftsmanship and timeless design since 1989</p></div>
<button className="cta" onClick={()=>{

state.frontimpact = false
}}>SEE PRODUCT</button>
        </div>







<div className="vid" 

>

<div className="video-container">
  <video
    className="video-player"
    autoPlay
    muted
    loop
    controls
  >
    <source src="../vid.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>



<div className="spanslogan2"><p>In every knot, grain, and finish, our dedication to excellence shines through. From rustic farmhouse charm to contemporary sophistication, our furniture celebrates the timeless allure of wood, inviting you to bring the beauty of nature into your home. Experience the difference that quality craftsmanship and sustainable materials can make with Wood Thata Furniture Co.</p></div>


</div>




      </section>
    )
}