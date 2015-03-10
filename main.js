function changeTabHandler (e) {
  var id = e.target.id.toLowerCase();
  $('.active').removeClass('active');
  switch (id){
    case 'menu-nav-tab':
      menuTab();
      break;
    case 'about-nav-tab':
      aboutUsTab();
      break;
    default:
      homeTab();
  }
}

function menuTab (section) {
  $('#menu').addClass('active');
}

function aboutUsTab (section) {
  $('#about-us').addClass('active');
}

function homeTab () {
  $('.description').addClass('active');
}

$(document).ready(function () {
  $('.tabs').on('click', changeTabHandler);
});
