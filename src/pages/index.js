import React from "react"

class Index extends React.Component {
  constructor(props) {
    super(props)
    console.log("constructor")
    this.state = {}
    console.log(this.state)
  }

  componentDidMount() {
    console.log("componentDidMount")
    const { search } = this.props.location
    const link = `https://example.com/signup${search}`
    this.setState({ link })
    console.log(this.state)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <ol>
          <li>
            <a href={`${this.state.link}`}>{this.state.link} HTML HREF</a>
          </li>
        </ol>
      </div>
    )
  }
}

export default Index
