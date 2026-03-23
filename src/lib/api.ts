const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = {
  get: async (url: string) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}${url}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw { response: { data: errorData } };
    }
    return { data: await response.json() };
  },
  post: async (url: string, data: any, options: any = {}) => {
    const token = localStorage.getItem('token');
    const isFormData = data instanceof FormData;
    const headers: any = {
      'Authorization': `Bearer ${token}`
    };
    if (!isFormData) {
      headers['Content-Type'] = 'application/json';
    }
    
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers,
      body: isFormData ? data : JSON.stringify(data)
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw { response: { data: errorData } };
    }
    return { data: await response.json() };
  },
  put: async (url: string, data: any, options: any = {}) => {
    const token = localStorage.getItem('token');
    const isFormData = data instanceof FormData;
    const headers: any = {
      'Authorization': `Bearer ${token}`
    };
    if (!isFormData) {
      headers['Content-Type'] = 'application/json';
    }
    
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers,
      body: isFormData ? data : JSON.stringify(data)
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw { response: { data: errorData } };
    }
    return { data: await response.json() };
  },
  delete: async (url: string) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw { response: { data: errorData } };
    }
    return { data: await response.json() };
  }
};

export default api;
