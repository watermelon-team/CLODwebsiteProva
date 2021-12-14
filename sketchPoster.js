function accordationPoster(obj) {
  console.log(obj.id);
  var square = document.getElementById('squarePoster');
  square.classList.remove('userBg');
  square.classList.remove('problemBg');
  square.classList.remove('solutionBg');
  square.classList.remove('relevantBg');

  square.classList.add(obj.id);
}



function bigPictureChange(obj){

  var bpBtn = $(".pointer1");
  var bpBtn2 = $(".pointer2");
  var bpBtn3 = $(".pointer3");
  var bpImg = $('.bicpictureImg');
  var bpText = $('.bpText');
  var bpConnections = $('.Connections');

  var bpActive = 0;

  if($(obj).hasClass('pointerActive')){
    $(obj).removeClass('pointerActive');

    bpBtn2.each(function(i) {
      bpBtn2.eq(i).removeClass('pointerActive');
    })

    bpBtn3.each(function(i) {
      bpBtn3.eq(i).removeClass('pointerActive');
    })

    bpImg.each(function(i) {
      if(i == 0){
        bpImg.eq(0).removeClass('bigpictureInactive');
      }
      else{
        bpImg.eq(i).addClass('mvpInactive');
      }

    })

    bpText.each(function(i) {
      bpText.eq(i).addClass('d-none');
      bpText.eq(0).removeClass('d-none');
    })

    bpConnections.each(function(i) {
      bpConnections.eq(i).addClass('connectionsInactive');
    })

  }
  else{

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

}


function mvpChange(obj){

  var bpBtn = $(".pointer1mvp");
  var bpBtn2 = $(".pointer2mvp");
  var bpBtn3 = $(".pointer3mvp");
  var bpImg = $('.bicpictureImgmvp');
  var bpText = $('.bpTextmvp');


  var bpActive = 0;

  if($(obj).hasClass('pointerActive')){
    $(obj).removeClass('pointerActive');

    bpBtn2.each(function(i) {
      bpBtn2.eq(i).removeClass('pointerActive');
    })

    bpBtn3.each(function(i) {
      bpBtn3.eq(i).removeClass('pointerActive');
    })

    bpImg.each(function(i) {
      if(i == 0){
        bpImg.eq(0).removeClass('bigpictureInactive');
      }
      else{
        bpImg.eq(i).addClass('mvpInactive');
      }

    })

    bpText.each(function(i) {
      bpText.eq(i).addClass('d-none');
      bpText.eq(0).removeClass('d-none');
    })

  }

  else{
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
      if(i == 0){
        bpImg.eq(0).addClass('bigpictureInactive');
      }
      else{
        bpImg.eq(i).addClass('mvpInactive');
        bpImg.eq(bpActive).removeClass('mvpInactive');
      }

    })

    bpText.each(function(i) {
      bpText.eq(i).addClass('d-none');
      bpText.eq(bpActive).removeClass('d-none');
    })
  }






}
