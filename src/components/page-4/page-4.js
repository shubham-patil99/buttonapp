import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const ForthPage = () => (
  <div className="main">
  <div className="img">
    <StaticImage
      src="../images/react.jpg"
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

     <div className="para4">
				<h5>
					intransitive verb. 1 : to exert a reciprocal or counteracting <br></br> 2 : to change in response to a stimulus.<br></br> 3 : to act in opposition to a force or influence —usually
				</h5>	
		</div>

    </div>
  </div>
)

export default ForthPage