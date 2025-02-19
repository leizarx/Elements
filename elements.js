  console.log('CDN-R');
  $(document).keydown(function(event) {
  if (event.ctrlKey && event.key === "|") {
      var FILLL = localStorage.getItem('FILLL');

      activeElements();
      event.preventDefault();
  }
}); 
function activeElements() {
  var elementos = document.querySelectorAll('input, select, button');
  elementos.forEach(function(elemento) {
      var randomColor = getRandomColor();
      console.groupCollapsed('%c' + elemento.getAttribute('id'), 'color: ' + randomColor);
      console.log('%cId: ' + elemento.getAttribute('id'), 'color: ' + randomColor);
      console.log('%cValue: ' + elemento.getAttribute('value'), 'color: ' + randomColor);
      console.log('%cRequired: ' + elemento.getAttribute('required'), 'color: ' + randomColor);
      console.log('%cClass: ' + elemento.getAttribute('class'), 'color: ' + randomColor);
      console.log('%cType: ' + elemento.getAttribute('type'), 'color: ' + randomColor);
      console.groupEnd();
      elemento.style.border = '3px solid ' + randomColor;
  });
  function getRandomColor() {
      var letters = 'ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 6)];
      }
      return color;
  }
  var cookies = document.cookie.split('; ');
  cookies.forEach(function(cookie) {
      var [key, value] = cookie.split('=');
      if (document.getElementById(key) !== null) {
          document.getElementById(key).value = value;
      }
  });
  elementos.forEach(function(elemento) {
      elemento.addEventListener('click', function(event) {
          event.stopPropagation();
          var id = elemento.getAttribute('id');
          var copyText = document.createElement('input');
          copyText.type = 'text';
          copyText.value = id;
          document.body.appendChild(copyText);
          copyText.select();
          document.execCommand('copy');
          document.body.removeChild(copyText);
          console.clear();
          console.log('ID copiado: ' + id);
      });
  });
  elementos.forEach(function(elemento) {
      if (elemento.style.display === 'none' || elemento.style.visibility === 'hidden') {
          elemento.style.display = 'block';
          elemento.style.visibility = 'visible';
      }
  });
}

