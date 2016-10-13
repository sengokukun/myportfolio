$(function(){

  $('.filter-item').click(function(){
    $('.filter-item').removeClass('active');
    $(this).addClass('active');
    var category = $(this).attr('id');
    if (category === 'all') {
      $('.content-wrapper').show();
    } else {
      $('.content-wrapper').hide();
      $('.skill-box-wrapper').children('.' + category).show();
    }
  });

  $('.filter-items').click(function(){
    $('.filter-items').removeClass('active');
    $(this).addClass('active');
    var category = $(this).attr('id');
    if (category === 'all') {
      $('.article-box').show();
    } else {
      $('.article-box').hide();
      $('.work-box-wrapper').children('.' + category).show();
    }
  });

//   $(function(){
//   $('header a').click(function(){
//     var id =$(this).attr('href');
//     var position =$(id).offset().top;
//     $('html,body').animate({
//       'scrollTop':position
//     },500)
//   });
// });


$('.sp-button').click(function(){
  $('.head-navi').slideToggle();
});


});
