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

  if(window.scrollY >= window.innerHeight){
    $('#menu').addClass('bgMenu');
  }
  else if(window.scrollY <= window.innerHeight){
    $('#menu').removeClass('bgMenu');
  }

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

    var techTotal = $('.techContain');



    var divOffset = offset(div);

    if (window.scrollY >= (divOffset.top - 100) && window.scrollY <= (divOffset.top + 1000)) {
      console.log('uguale!');

      techTotal.each(function(i) {
        techTotal.eq(i).addClass('techFixed');
        techTotal.eq(i).removeClass('d-none');
      });

      $('#techText1').removeClass('d-none');

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
      techTotal.each(function(i) {
        techTotal.eq(i).removeClass('d-none');
        techTotal.eq(i).addClass('techFixed');
      });

      tech06.addClass('techActive');
      tech06.removeClass('techInactive');

    } else if(window.scrollY >= (divOffset.top + 6000)){
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

      $('#techText1').addClass('d-none');
    }


  // }

})

var bpBtn = $(".pointer1");
var bpBtn2 = $(".pointer2");
var bpBtn3 = $(".pointer3");
var bpImg = $('.bicpictureImg');
var bpText = $('.bpText');
var bpConnections = $('.Connections ');

function bigPictureChange(obj){

  var bpActive = 0;

  bpBtn.each(function(i) {
    bpBtn.eq(i).removeClass('pointerActive');
    if(obj.id == bpBtn[i].id){
      bpBtn.eq(i).addClass('pointerActive');
      bpActive = i+1;
    }
  })

  bpBtn2.each(function(i) {
    bpBtn2.eq(i).removeClass('pointerActive');
    bpBtn2.eq(bpActive-1).addClass('pointerActive');
  })

  bpBtn3.each(function(i) {
    bpBtn3.eq(i).removeClass('pointerActive');
    bpBtn3.eq(bpActive-1).addClass('pointerActive');
  })

  bpImg.each(function(i) {
    bpImg.eq(i).addClass('bigpictureInactive');
    bpImg.eq(bpActive).removeClass('bigpictureInactive');
  })

  bpText.each(function(i) {
    bpText.eq(i).addClass('d-none');
    bpText.eq(bpActive).removeClass('d-none');
  })

  bpConnections.each(function(i) {
    bpConnections.eq(i).addClass('connectionsInactive');
    bpConnections.eq(bpActive-1).removeClass('connectionsInactive');
  })



}
