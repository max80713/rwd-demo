document.getElementById('menu').addEventListener('click', function() {
  document.getElementById('nav').style.display = 'block'
  document.getElementById('overlay').style.display = 'block'
})

document.getElementById('overlay').addEventListener('click', function() {
  document.getElementById('nav').style.display = 'none'
  document.getElementById('overlay').style.display = 'none'
})