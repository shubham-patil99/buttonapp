import * as React from "react"
import { Link } from "gatsby"


const IndexPage = () => (
  <div>
     <div className="buttons">
     <Link to="/page-1/"  className="one">1</Link>
     <Link to="/page-2/"  className="one">2</Link>
     <Link to="/page-3/"  className="one">3</Link>
     <Link to="/page-4/"  className="one">4</Link>
    </div>
   
  </div>
)

export default IndexPage
