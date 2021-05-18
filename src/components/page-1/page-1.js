import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const FirstPage = () => (
  <div className="main">
  <div className="img">
    <StaticImage
      src="../images/html.jpg"
      width={500}
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
     <div className="para1">
		<h5>HTML, in full hypertext markup language, <br></br>
     a formatting system for displaying material retrieved over the Internet.<br></br>
     This is on me</h5>
		</div>
     </div>
    </div>
)

export default FirstPage
