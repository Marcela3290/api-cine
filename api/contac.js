const form = document.querySelector('#contact-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const url = formspree.io/f/meqwnrga

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const data = await response.json();

    if (response.ok) {
      // La solicitud tuvo éxito
      alert('Gracias por su mensaje, nos pondremos en contacto con usted pronto.');
      form.reset();
    } else {
      // La solicitud falló
      alert('Lo siento, hubo un error al enviar su mensaje.');
    }
  } catch (error) {
    // Error de red
    alert('Lo siento, hubo un error de red. Por favor, intente más tarde.');
  }
});