import { apiURL } from '../../Config/Config';

export async function apiLogin (username, password) {
  const response = await fetch(apiURL + 'auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  });
  return response.json();
}