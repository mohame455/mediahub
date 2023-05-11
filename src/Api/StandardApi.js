import { apiURL } from '../Config/Config';
import Store from '../Redux/Store';

const createHeader = (token) => {
    return {
      Authorization: 'Bearer ' + token
    };
};

export async function apiGet (api) {
  const token = Store.getState().auth.accessToken;
  const response = await fetch(apiURL + api, {
    method: 'Get',
    headers: createHeader(token)
  });
  try {
    const responseJson = await response.json();
      return responseJson;
  } catch (e) {
    return { statusCode: 500 };
  }
}

export async function apiPost (api, body) {
    const token = Store.getState().auth.accessToken;
   const response = await fetch(apiURL + api, {
     method: 'POST',
     headers: createHeader(token),
     body: body
   });
   try {
     const responseJson = await response.json();
       return responseJson;
   } catch (e) {
     return { statusCode: 500 };
   }
 }