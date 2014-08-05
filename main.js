function myCreateElement (element, attributes, html) {
  var elem = document.createElement(element);
  for (var key in attributes){
    elem.setAttribute(key, attributes[key]);
  }
  elem.innerHTML = html;

  return elem;
}

function myAppendChild (parent, child){
  return parent.appendChild(child);
}

function menuTab (section) {
  var menu = '<div class="menu"><div class="traditional-sampler"><h1><em>Traditional Sampler</em></h1><p>Combination of 12 items ( 5 cold, 6 hot ) plus one dessert ( serves 2 people ) ( no substitution please ) 50</p></div><div class="cold-items"><h2><em>Cold Items</em></h2><p>Spanish dry cured sausages ( Salchichón and Chorizo ) (*)</p><p>Assortment of fine Spanish cheeses. (*)</p><p>Potatoes in alioli sauce ( homemade mayonnaise ). (*)</p><p>Sweet caramelized pepper jelly and cheese pintxo.</p><p>Gazpacho ( Andalusian cream of tomatoes and vegetable, served chilled ). (*)</p><h4>Dessert:</h4><p> Tocino de cielo. (*)</p></div><div class="hot-items"><h2><em>Hot Items</em></h2><p>Albondigas ( meatballs in onion and almond sauce ).</p><p>Croquetas ( creamy, lightly breaded fritters ).</p><p>Pollo al pimentón ( chicken marinated in paprika ). (*)</p><p>Paella Mixta ( Saffron-flavored Spanish rice ). (*)</p><p>Gambas al ajillo ( shrimp sauteed in olive oil, parsley and garlic ). (*)</p><p>Calamares Romana ( Lightly breaded and fried calamari ).</p></div></div></div>';

  $(section).addClass('black-background').html(menu);
}

function aboutUsTab (section) {
  var aboutUs = '<div class="business-hours"><h2><em>Serving Denver</em></h2><h2><em>BUSINESS HOURS:</em></h2><p>Sunday through Thursday: 11:00am – 09:30pm</p><p>Friday and Saturday:  11:00am - 11:00pm</p></div><div class="send-us-message"><h2><em>Send Us A Message</em></h2><form><label for="name">Name</label><input type="text" id="name"><br><label for="email">Email</label><input type="text" id="email"><br><label for="message">Message</label><textarea id="message"></textarea><br/><br/><button type="submit">Submit</button></form></div>';

  $(section).addClass('black-background').html(aboutUs);
}

function tabs (e, section) {
  var id = e.target.id.toLowerCase();
  switch (id){
    case 'menu':
      menuTab(section);
      break;
    case 'about':
      aboutUsTab(section);
      break;
    default:
      homeTab();
  }
}

function homeTab () {
  $('.black-background').removeClass('black-background').html('<div class="description"><h2>Featuring a full menu of authentic traditional Spanish cuisine and tapas. Our customers can experience an extremely wide variety of dishes with memorable tastes.</h2></div>');
}

$(document).ready(function () {
  var contentDiv = document.getElementById('content');
  var header = myAppendChild(contentDiv, myCreateElement('header', {'class': 'clearfix'}, null));
  var headingWrapper = myAppendChild(header, myCreateElement('div', {'class': 'heading'}, null));
  myAppendChild(headingWrapper, myCreateElement('span', {'id': 'home', 'class': 'tabs'}, 'Home'));
  myAppendChild(headingWrapper, myCreateElement('span', {'id': 'menu', 'class': 'tabs'}, 'Menu'));
  myAppendChild(headingWrapper, myCreateElement('span', {'id': 'about', 'class': 'tabs'}, 'About'));
  myAppendChild(headingWrapper,myCreateElement('h1', {'class': 'slogan'}, 'TAPAS AND PAELLA.  TRY TO RESIST THIS!'));

  var section = myAppendChild(contentDiv, myCreateElement('section', {}, null));

  var descriptionWrapper =  myAppendChild(section, myCreateElement('div', {'class': 'description'}, null));
  myAppendChild(descriptionWrapper, myCreateElement('h2', {}, 'Featuring a full menu of authentic traditional Spanish cuisine and tapas. Our customers can experience an extremely wide variety of dishes with memorable tastes.'));

  var body = document.getElementsByTagName('body')[0];
  myAppendChild(body, myCreateElement('img', {'src': 'http://seasoned.com/sites/default/files/paella.jpg', 'alt': 'Spanish Paella', 'class': 'paella-picture'}, null));

  $('.tabs').on('click', function(e){tabs(e, section);});
});
