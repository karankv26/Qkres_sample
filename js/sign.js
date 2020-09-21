

$(document).ready(function(){
  $("#signbutton").click(function(event){
    if($('#inputPassword').val() != $('#confirmPassword').val()) {
         // alert("Password and Confirm Password don't match");
         // Prevent form submission
         event.preventDefault();
     }
  });
});
$('#inputPassword, #confirmPassword').on('keyup', function () {
  if ($('#inputPassword').val().length >= 8 && $('#confirmPassword').val().length >= 8) {
    if ($('#inputPassword').val() ===
          $('#confirmPassword').val()) {
      $('#message').css("color","green");
        $('#message').html('Matched');
        } else {
      $('#message').css("color","red");
        $('#message').html('Both Passwords are not matching')
        }
  }
  else if ($('#inputPassword').val().length < 8 && $('#inputPassword').val().length >= 1) {
      $('#message').css("color","red");
      $('#message').html('Password should be atleast 8 characters')
    }
    else if ($('#inputPassword').val().length <= 0) {
        $('#message').css("color","red");
        $('#message').html('Enter password');}
        else if ($('#inputPassword').val().length >= 8) {
            $('#message').css("color","green");
            $('#message').html('Confirm your password');
          }
});



$.strength = function(element, password) {
  var desc = [{
    'width': '0px'
  }, {
    'width': '20%'
  }, {
    'width': '40%'
  }, {
    'width': '60%'
  }, {
    'width': '80%'
  }, {
    'width': '100%'
  }];
  var descClass = ['', 'progress-bar-danger', 'progress-bar-danger', 'progress-bar-warning', 'progress-bar-success', 'progress-bar-success'];
  var score = 0;

  if (password.length > 6) {
    score++;
  }

  if ((password.match(/[a-z]/)) && (password.match(/[A-Z]/))) {
    score++;
  }

  if (password.match(/\d+/)) {
    score++;
  }

  if (password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
    score++;
  }

  if (password.length > 10) {
    score++;
  }

  element.removeClass(descClass[score - 1]).addClass(descClass[score]).css(desc[score]);
};

$(function() {
  $("#inputPassword").keyup(function() {
    $.strength($("#progress-bar"), $(this).val());
  });
});
