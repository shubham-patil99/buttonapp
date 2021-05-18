import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const ThirdPage = () => (
  <div className="main">
  <div className="img">
    <StaticImage
      src="../images/javascript.png"
      width={500}
      height={281}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    </div>
    
    <div className="buttons">
     <Link to="/page-1/"  className="one">1</Link>
     <Link to="/page-2/"  className="one">2</Link>
     <Link to="/page-3/"  className="one">3</Link>
     <Link to="/page-4/"  className="one">4</Link>

     <div className="para3">
		<h5>JavaScript is a scripting or programming language that allows you to<br></br>complex features on web pages —every time a web page does more than <br></br>and display static information <br></br>for you to look at — displaying timely content updates, interactive maps,<br></br> animated 2D/3D graphics</h5>
    </div>

    </div>  
	
  </div>
)

export default ThirdPage