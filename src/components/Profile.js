import React from 'react'

const Profile = (props) => {
  return (
    <div className='profile'>
      <label for='name'>Your name:
        <input type='text' id='name' />
      </label>
      <button id='submit'>
        Submit
      </button>
    </div>
  )
}

export default Profile
