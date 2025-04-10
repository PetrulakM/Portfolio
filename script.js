function applyStyles(element) {
    element.style.backgroundColor = 'red';
    element.style.fontSize = '70px'
  }
  function addTheImage() {
    var img = document.createElement (`img`);
    img.src = "heheheha.jpeg" ;
    document.body.appendChild(img);
}

  function removeTheImage() {
    var img = document.getElementById (`img`);
    img.body.removeChild(img);
  }
