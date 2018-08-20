import React from 'react'

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    let response = await fetch('http://localhost:3001/users', {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({"name": this.state.name})
    })
    let json = await response.json()
    console.log("Response: ", json)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



export default SignUpForm

// render () {


  //   return (
  //     <form className='SignUpForm'>
  //       <div>
  //         <label for='month'>month:
  //           <input type='text' id='month' onChange={this.testFunc } />
  //         </label>
  //         <label for='day'>day:
  //           <input type='integer' id='day' />
  //         </label>
  //         <label for='year'>year:
  //           <input type='integer' id='year' />
  //         </label>
  //       </div>
  //       <br />
  //       <label for='ssn'>Last 4 digits of your Social Security Number:
  //         <input type='integer' id='ssn' />
  //       </label>
  //       <br />
  //       <button id='submit' type="button" onclick="sendIt()" value="Submit form"> {/*Post to API*/}
  //         Submit
  //       </button>
  //     </form>
  //   )
  // }

// const SignUpForm = (props) => {
//   return (
//     <div className='SignUpForm'>
//       <div>
//       <label for='month'>month:
//         <input type='integer' id='month' />
//       </label>
//       <label for='day'>day:
//         <input type='integer' id='day' />
//       </label>
//       <label for='year'>year:
//         <input type='integer' id='year' />
//       </label>
//       </div>
//       <br />
//       <label for='ssn'>Last 4 digits of your Social Security Number:
//         <input type='integer' id='ssn' />
//       </label>
//       <br />
//       <button id='submit' type="button" onclick="sendIt()" value="Submit form"> {/*Post to API*/}
//         Submit
//       </button>
//     </div>
//   )
// }
