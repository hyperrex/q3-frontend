
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
  .then(response => resonse.json())
  .then((data) => {
    return data
  })
  .catch((err) => {
    console.log(err)
  })
}
