import React from 'react'

const SignUpForm = (props) => {
  return (
    <div className='SignUpForm'>
      <div>
      <label for='month'>month:
        <input type='integer' id='month' />
      </label>
      <label for='day'>day:
        <input type='integer' id='day' />
      </label>
      <label for='year'>year:
        <input type='integer' id='year' />
      </label>
      </div>
      <br />
      <label for='ssn'>Last 4 digits of your Social Security Number:
        <input type='integer' id='ssn' />
      </label>
      <br />
      <button id='submit' type="button" onclick="sendIt()" value="Submit form"> {/*Post to API*/}
        Submit
      </button>
    </div>
  )
}

export default SignUpForm
