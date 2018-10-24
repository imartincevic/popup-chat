$(document).ready(function() {

  if((typeof $.cookie('showChat') !== '1') && (typeof $.cookie('showChat') == 'undefined')) {
    var widget = $('.chat'),
    message = $('.chat__message'),
    pollLink = $('.chat__poll-link-wrap'),
    timedate = $('.chat__timedate'),
    close = $('.chat__btn-close'),
    d = new Date();
  
    timedate.append(d.toLocaleString());
  
    setTimeout(function() {
      setTimeout(function() {
        $('audio#pop')[0].play()
      }, 500);
    
      widget.show('fast');
      timedate.delay(500).fadeIn('fast');
      message.delay(500).fadeIn('fast');
      pollLink.delay(2000).fadeIn('fast');

      $.cookie('showChat', '1', {
        expires: 365
      });
    }, 10000);
  
    close.click(function() {
    widget.hide('fast');
    });
  } else {
    return false;
  }

});
