function accordationTech(obj) {
  console.log(obj.id);
  var square = document.getElementById('squareTech');
  square.classList.remove('modularSystemBg');
  square.classList.remove('trackerBg');
  square.classList.remove('guideBg');

  square.classList.add(obj.id);
}


// scroll tech


document.addEventListener("scroll", function(e) {

  // if (window.innerWidth >= window.innerHeight) {

    function offset(el) {
      var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop
      }
    }

    var div = document.getElementById('rowTech');
    var tech01 = $('#tech01');
    var tech02 = $('#tech02');
    var tech03 = $('#tech03');
    var tech04 = $('#tech04');
    var tech05 = $('#tech05');
    var tech06 = $('#tech06');
    var tech07 = $('#tech07');

    var techTotal = $('.techContain');



    var divOffset = offset(div);

    if (window.scrollY >= (divOffset.top - 100) && window.scrollY <= (divOffset.top + 1000)) {
      console.log('uguale!');

      techTotal.each(function(i) {
        techTotal.eq(i).addClass('techFixed');
        techTotal.eq(i).removeClass('d-none');
      });

      tech02.addClass('techInactive');
      tech02.removeClass('techActive');

    } else if (window.scrollY >= (divOffset.top + 1000) && window.scrollY <= (divOffset.top + 2000)) {
      tech02.addClass('techActive');
      tech02.removeClass('techInactive');

      tech03.addClass('techInactive');
      tech03.removeClass('techActive');

    } else if (window.scrollY >= (divOffset.top + 2000) && window.scrollY <= (divOffset.top + 3000)) {
      tech03.addClass('techActive');
      tech03.removeClass('techInactive');

      tech04.addClass('techInactive');
      tech04.removeClass('techActive');

    } else if (window.scrollY >= (divOffset.top + 3000) && window.scrollY <= (divOffset.top + 4000)) {
      tech04.addClass('techActive');
      tech04.removeClass('techInactive');

      tech05.addClass('techInactive');
      tech05.removeClass('techActive');

    } else if (window.scrollY >= (divOffset.top + 4000) && window.scrollY <= (divOffset.top + 5000)) {
      tech05.addClass('techActive');
      tech05.removeClass('techInactive');

      tech06.addClass('techInactive');
      tech06.removeClass('techActive');

    } else if (window.scrollY >= (divOffset.top + 5000) && window.scrollY <= (divOffset.top + 6000)) {
      tech06.addClass('techActive');
      tech06.removeClass('techInactive');

      tech07.addClass('techInactive');
      tech07.removeClass('techActive');

    } else if (window.scrollY >= (divOffset.top + 6000) && window.scrollY <= (divOffset.top + 7000)) {
      techTotal.each(function(i) {
        techTotal.eq(i).removeClass('d-none');
        techTotal.eq(i).addClass('techFixed');
      });

      tech07.addClass('techActive');
      tech07.removeClass('techInactive');

    } else if(window.scrollY >= (divOffset.top + 7000)){
      techTotal.each(function(i) {
        techTotal.eq(i).removeClass('techFixed');
        if(i>=1){
          techTotal.eq(i).addClass('techInactive');
          techTotal.eq(i).addClass('d-none');
          techTotal.eq(i).removeClass('techActive');
        }
      });




    }  else if (window.scrollY <= (divOffset.top - 100)) {
      techTotal.each(function(i) {
        if(i>=1){
          techTotal.eq(i).addClass('d-none');
        }
        techTotal.eq(i).removeClass('techFixed');
      });
    }


  // }

})
