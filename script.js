function switchTab(tabName, bgClass) {
  document.querySelectorAll('main').forEach(win => {
    win.classList.add('hidden');
  });

  const target = document.getElementById('tab-' + tabName);
  if (target) {
    target.classList.remove('hidden');
  }

  const bg = document.getElementById('bg-overlay');
  bg.className = bgClass;
}

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
