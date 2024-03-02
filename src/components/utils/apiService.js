// apiService.js

const API_BASE_URL = 'http://127.0.0.1:8000/api';

async function fetchNoticias() {
  const response = await fetch(`${API_BASE_URL}/news`);
  const data = await response.json();
  return data;
}

export { fetchNoticias };

async function fetchUsuarios() {
  const response = await fetch(`${API_BASE_URL}/users`);
  const data = await response.json();
  return data;
}

export { fetchUsuarios };
export const handleLogin = async (username, password) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      // El login fue exitoso, realiza las acciones necesarias
      console.log('Login exitoso');
    } else {
      // El login falló, maneja el error
      console.error('Error al intentar iniciar sesión');
    }
  } catch (error) {
    console.error('Error en la solicitud al servidor', error);
  }
};
