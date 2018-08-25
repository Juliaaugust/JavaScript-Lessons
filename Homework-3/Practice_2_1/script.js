window.onload = function () {
  var links = document.getElementsByClassName('panel-title');
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      var target = this.getAttribute('data-target');
      var select = document.querySelector(target);

      // select.classList.toggle('active');

      // var activeSelect = document.querySelector('.panel-body.active');
      // activeSelect.classList.remove('active');
      // select.classList.add('active');

      var activeSelect = document.querySelector('.panel-body.active');
      select.classList.toggle('active');
      if (activeSelect != null) {
        if(activeSelect.classList.contains('active')) {
          activeSelect.classList.remove('active');
        } 
      }
    }
  }
};