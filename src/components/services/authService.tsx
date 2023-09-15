import axios from 'axios';

// Función para iniciar sesión y obtener un token
async function iniciarSesion(email: string, password: string) {
  try {
    const response = await axios.post('https://tudominio.com/api/login', {
      email: email,
      password: password,
    });

    const token = response.data.token;
    return token;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
}

// Llama a la función para iniciar sesión
const email = 'tu@email.com';
const password = 'tuContraseña';

iniciarSesion(email, password)
  .then((token) => {
    // Una vez que tengas el token, puedes usarlo para realizar llamadas a los endpoints protegidos
    console.log('Token de autenticación:', token);
    // Llama a la función para llamar al endpoint protegido con el token
  })
  .catch((error) => {
    // Maneja los errores de inicio de sesión aquí
  });
