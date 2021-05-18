import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"



const SecondPage = () => (
  <div className="main">
  <div className="img">
    <StaticImage
      src="../images/css.png"
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
     <div className="para2">
		<h5>Cascading Style Sheets Level 3 (CSS3) is the iteration of the CSS<br></br> standard used in the styling and formatting of Web pages. <br></br>CSS3 incorporates the CSS2 standard with some changes and improvements.</h5>
		</div>
    </div>
  </div>
)

export default SecondPage