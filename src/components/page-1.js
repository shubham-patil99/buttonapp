import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const FirstPage = () => (
  <div>
    <StaticImage
      src="../images/html.jpg"
      width={500}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
   <div className="para">
		<h5>HTML, in full hypertext markup language, <br></br> a formatting system for displaying material retrieved over the Internet.<br></br>This is on me</h5>
		</div>
    </div>
)

export default FirstPage
