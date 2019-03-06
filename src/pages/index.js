import React from "react"
import { Link as GatsbyLink } from "gatsby"

function Homepage(props) {
  const { search } = props.location
  const link = `https://example.com/signup${search}`

  return (
    <div>
      <ol>
        <li>
          <GatsbyLink to={link}>{link} Gatsby Link</GatsbyLink>
        </li>
        <li>
          <a href={`${link}`}>{link} HTML HREF</a>
        </li>
        <li>
          <button onClick={() => window.open(link)}>onClick button</button>
        </li>
      </ol>
    </div>
  )
}
export default Homepage
