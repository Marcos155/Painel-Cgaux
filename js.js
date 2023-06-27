$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});


var text = 'Ford 2.0';
var select = document.querySelector('#carros');
for (var i = 0; i < select.options.length; i++) {
  if (select.options[i].text === text) {
    select.selectedIndex = i;
    break;
  }
}