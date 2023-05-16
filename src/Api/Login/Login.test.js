import { apiURL } from "../../Config/Config";
import { apiLogin } from "./Login";

test('apiLogin should return a valid JSON response', async () => {
    const mockResponse = { success: true, token: 'your_token' };
    const mockFetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse)
    });
  
    global.fetch = mockFetch;
  
    const response = await apiLogin('testuser', 'password');
  
    expect(mockFetch).toHaveBeenCalledWith(apiURL + 'auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify({
        username: 'testuser',
        password: 'password'
      })
    });
  
    expect(response).toEqual(mockResponse);
  });
  