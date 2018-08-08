import React from 'react'

const Profile = (props) => {
  return (
    <div className='profile'>
      <label for='name'>Your name:
        <input type='text' id='name' />
      </label>
      <br />
      <label for='ssn'>Last 4 digits of your Social Security Number:
        <input type='integer' id='ssn' />
      </label>
      <button id='submit'> // go to API
        Submit
      </button>
    </div>
  )
}

export default Profile
