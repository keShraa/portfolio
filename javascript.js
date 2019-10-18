const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  panels.forEach(panel => panel.classList.remove('open'));
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

function typeEffect(element, speed) {
  const text = ">lignes de code...";
  element.innerHTML = "";
  console.log("im in");

  let i = 0;
  const timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// setInterval(typeEffect, 3000);
setInterval(function() {
  const speed = 150;
  const code = document.querySelector('.code');
  typeEffect(code, speed);
}, 5000)
