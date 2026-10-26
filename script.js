function switchTab(tabName, bgClass) {
  // Oculta todas las ventanas
  document.querySelectorAll('main').forEach(win => {
    win.classList.add('hidden');
  });

  // Muestra la ventana seleccionada
  const target = document.getElementById('tab-' + tabName);
  if (target) {
    target.classList.remove('hidden');
  }

  // Cambia el fondo dinámico
  const bg = document.getElementById('bg-overlay');
  bg.className = bgClass;
}

function openGallery(galleryName, bgClass) {
  // Oculta todas las ventanas
  document.querySelectorAll('main').forEach(win => {
    win.classList.add('hidden');
  });

  // Muestra la galería seleccionada
  const target = document.getElementById('gal-' + galleryName);
  if (target) {
    target.classList.remove('hidden');
  }

  // Cambia el fondo dinámico
  const bg = document.getElementById('bg-overlay');
  bg.className = bgClass;
}
