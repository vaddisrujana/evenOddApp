import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  button1 = () => {
    this.setState({number: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {number} = this.state
    let para
    if (number % 2 === 0) {
      para = <p className="para">Count is Even</p>
    } else {
      para = <p className="para">Count is Odd</p>
    }
    return (
      <div className="background">
        <div className="background1">
          <h1 className="head">Count {number}</h1>
          {para}
          <button onClick={this.button1} type="button" className="button">
            Increment
          </button>
          <p className="para1">*Increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
