function accordationPoster(obj) {
  console.log(obj.id);
  var square = document.getElementById('squarePoster');
  square.classList.remove('userBg');
  square.classList.remove('problemBg');
  square.classList.remove('solutionBg');
  square.classList.remove('relevantBg');

  square.classList.add(obj.id);
}
