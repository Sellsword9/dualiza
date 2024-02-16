// apiService.js

const API_BASE_URL = 'http://127.0.0.1:8000/api';

async function fetchNoticias() {
  const response = await fetch(`${API_BASE_URL}/news`);
  const data = await response.json();
  return data;
}

export { fetchNoticias };
