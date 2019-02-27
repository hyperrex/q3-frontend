
const API_ROOT = 'http://localhost:3000'
// const API_ROOT = 'https://voter-status-alert.herokuapp.com'

export const signup = ({ firstName, lastName, email, password }) => {
  return fetch(`${API_ROOT}/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Acccepts': 'application/json',
    },
    body: JSON.stringify({ firstName, lastName, email, password })
  })
  .then(response => response.json())
  .then((data) => {
    return data
  })
  .catch((err) => {
    console.log(err)
  })
}

// Send: bd_month, bd_day, bd_year, last_four_ssn -or- id
// Receive: voter_status

export const status = ({ id }) => {
  return fetch(`${API_ROOT}/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Acccepts': 'application/json',
    },
    body: JSON.stringify({ id })
  })
  .then(response => response.json())
  .then((data) => {
    return data
  })
  .catch((err) => {
    console.log(err)
  })
}

