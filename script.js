// Cambiar entre pestañas principales
function switchTab(tabName, bgClass) {
  // Ocultar todas las ventanas
  document.querySelectorAll('main').forEach(win => {
    win.classList.add('hidden');
  });

  // Mostrar la ventana seleccionada
  const target = document.getElementById('tab-' + tabName);
  if (target) {
    target.classList.remove('hidden');
  }

  // Cambiar fondo de pantalla
  const bg = document.getElementById('bg-overlay');
  bg.className = bgClass;
}

// Abrir carpetas de galerías
function openGallery(galleryName, bgClass) {
  document.querySelectorAll('main').forEach(win => {
    win.classList.add('hidden');
  });

  const target = document.getElementById('gal-' + galleryName);
  if (target) {
    target.classList.remove('hidden');
  }

  const bg = document.getElementById('bg-overlay');
  bg.className = bgClass;
}
