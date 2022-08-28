
$(document).ready(function () {
  $('#btn-login').click(function () {
      var Name = $('#username').val();
      if (Name == '') {
          $('#notify').html("username cannot be empty");
      }
      else if(Name.length < 3) {
          $('#notify').html("username must be more than 3 characters");
      }
      else {
          $('#notify').html("");
      }
  

      var Pass = $('#password').val();
      if (Pass == '') {
          $('#notify-pass').html("password cannot be empty");
      }
      else if(Pass.length < 3) {
          $('#notify-pass').html("password must be more than 3 characters");
      }
      else {
          $('#notify-pass').html("");
      }
      let loginForm = document.querySelector('.login-form-container');
      document.querySelector('#close-login-btn').onclick = () =>{
        loginForm.classList.remove('active');
        $('#notify').html("");
        $('#notify-pass').html("");
      }
  });

  $('#btn-register').click(function () {
    var Name = $('#username-1').val();
    if (Name == '') {
        $('#notify-1').html("username cannot be empty");
    }
    else if(Name.length < 3) {
        $('#notify-1').html("username must be more than 3 characters");
    }
    else {
        $('#notify-1').html("");
    }


    var Pass = $('#password-1').val();
    if (Pass == '') {
        $('#notify-pass-1').html("password cannot be empty");
    }
    else if(Pass.length < 3) {
        $('#notify-pass-1').html("password must be more than 3 characters");
    }
    else {
        $('#notify-pass-1').html("");
    }

    var PassConfirm = $('#password-confirm').val();
    if (PassConfirm == '') {
        $('#notify-confirm').html("password confirm cannot be empty");
    }
    else if(PassConfirm.length < 3) {
        $('#notify-confirm').html("password confirm must be more than 3 characters");
    }
    else {
        $('#notify-confirm').html("");
    }

    let loginForm = document.querySelector('.login-form-container');
    document.querySelector('#close-login-btn').onclick = () =>{
      loginForm.classList.remove('active');
      $('#notify').html("");
      $('#notify-pass').html("");
    }
    let registerForm = document.querySelector('.register-form-container');
    document.querySelector('#close-register-btn').onclick = () =>{
      registerForm.classList.remove('active');
      $('#notify-1').html("");
      $('#notify-pass-1').html("");
      $('#notify-confirm').html("");
      loginForm.classList.remove('active');
      $('#notify').html("");
      $('#notify-pass').html("");
    }
});

$('#pay-btn').click(function () {
  var Name = $('#card-number').val();
  if (Name == '') {
      $('#notify-card').html("card number cannot be empty");
  }
  else if(Name.length < 3) {
      $('#notify-card').html("card numbet must be more than 3 characters");
  }
  else {
      $('#notify-card').html("");
  }

  var expiry = $('#expiry').val();
  if (expiry == '') {
      $('#notify-expiry').html("expiry date cannot be empty");
  }
  else if(expiry.length < 3) {
      $('#notify-expiry').html("expiry date numbet must be more than 3 characters");
  }
  else {
      $('#notify-expiry').html("");
  }

  var cvc = $('#cvc').val();
  if (cvc == '') {
      $('#notify-cvc').html("card number cannot be empty");
  }
  else if(cvc.length < 3) {
      $('#notify-cvc').html("card numbet must be more than 3 characters");
  }
  else {
      $('#notify-cvc').html("");
  }
});

  $('input.input-qty').each(function() {
    var $this = $(this),
      qty = $this.parent().find('.is-form'),
      min = Number($this.attr('min')),
      max = Number($this.attr('max'))
    if (min == 0) {
      var d = 0
    } else d = min
    $(qty).on('click', function() {
      if ($(this).hasClass('minus')) {
        if (d > min) d += -1
      } else if ($(this).hasClass('plus')) {
        var x = Number($this.val()) + 1
        if (x <= max) d += 1
      }
      $this.attr('value', d).val(d)
    })
  })
})
searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}


let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

let registerForm = document.querySelector('.register-form-container');

document.querySelector('#register-btn').onclick = () =>{
  registerForm.classList.toggle('active');
  loginForm.classList.remove('active');
}

document.querySelector('#close-register-btn').onclick = () =>{
  registerForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 200);
}

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

