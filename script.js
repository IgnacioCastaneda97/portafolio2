
  document.getElementById("contactBtn").addEventListener("click", function() {
    const email = 'castanedaignacio25@gmail.com';
    const subject = 'Asunto del mensaje';
    const body = 'Cuerpo del mensaje';
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

