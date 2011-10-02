(function( $ ){
  $.fn.slideOutNav = function() {

    //For each link, create a div with the alt text
    return this.children().each(function() {
      var $this = $(this);
      var $link = $this.children('a');

      //Extract our link title and create DOM element
      var title = $link.attr('title');
      $this.append($('<div class="slideout_title">'+title+'</div>').css('display', 'none'));

      //Attach slideout hover event
      $link.hover(function(event){
        $link.siblings('.slideout_title').stop().show('slide', { direction: 'left' }, 400);
      }, function(event){
        //Have to go up to parent since div gets wrapped during animation
        $(this).parent().find('.slideout_title').hide('slide', { direction: 'left' }, 400);
      });
    });
  };
})( jQuery );
