const form = document.getElementById('casafForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const endpoint = form.action;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formMessage.classList.remove('hidden');
        formMessage.textContent = "✅ Message sent successfully!";
        form.reset();
      } else {
        formMessage.classList.remove('hidden');
        formMessage.textContent = "⚠️ Something went wrong. Try again later.";
        formMessage.classList.replace('text-green-600', 'text-red-600');
      }

      setTimeout(() => formMessage.classList.add('hidden'), 4000);

    } catch (error) {
      formMessage.classList.remove('hidden');
      formMessage.textContent = "❌ Network error. Please try again.";
      formMessage.classList.replace('text-green-600', 'text-red-600');
    formMessage.classList.replace('text-green-600', 'text-red-600');
  }
});