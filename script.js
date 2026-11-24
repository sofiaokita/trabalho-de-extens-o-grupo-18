
    let currentSize = 18;
    function adjustFont(delta) {
      currentSize = Math.max(15, Math.min(24, currentSize + delta));
      document.documentElement.style.setProperty('--font-size', currentSize + 'px');
    }
    function toggleContrast() {
      document.body.classList.toggle('high-contrast');
    }
  