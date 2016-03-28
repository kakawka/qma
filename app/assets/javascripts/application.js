// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require bootstrap
//= require turbolinks

//= require gsdk
//= require gsdk-radio
//= require gsdk-checkbox
//= require gsdk-bootstrapswitch
//= require get-shit-done
//= require hipster-cards

//= require_tree .


$(document).ready(function(){
  var transparentDemo = true;
  var fixedTop = false;

  $(window).scroll(function(e) {
      oVal = ($(window).scrollTop() / 170);
      $(".blur").css("opacity", oVal);

  });

  var $container = $('.masonry-container');

    doc_width = $(document).width();

    if (doc_width >= 768){
        $container.masonry({
            itemSelector        : '.card-box',
            columnWidth         : '.card-box',
            transitionDuration  : 0
        });
    } else {
        $('.mas-container').removeClass('mas-container').addClass('row');
    }

})
