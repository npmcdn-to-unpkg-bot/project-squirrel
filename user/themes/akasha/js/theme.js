jQuery(document).ready(function($){
  console.log('jQuery version', jQuery.fn.jquery);

  var $galleryHome = $('.gallery--home').imagesLoaded(function() {
    $galleryHome.masonry({
      gutter: 2,
      percentPosition: true,
      itemSelector: '.gallery--home__img'
    });
  });
});