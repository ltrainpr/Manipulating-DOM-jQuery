function myCreateElement (element, id, className, html) {
  var elem = document.createElement(element);
  elem.id = id;
  elem.className = className;
  elem.innerHTML = html;

  return elem;
}

$(document).ready(function () {
  var contentDiv = document.getElementById('content');
  var elem = myCreateElement('header', '', 'clearfix', '');
  var header = contentDiv.appendChild(elem);
  elem = myCreateElement('div', '', 'heading', '');
  var headingWrapper = header.appendChild(elem);
  elem = myCreateElement('span', 'menu', '', 'Menu');
  headingWrapper.appendChild(elem);
  elem = myCreateElement('span', 'about', '', 'About');
  headingWrapper.appendChild(elem);
  elem = myCreateElement('h1', '', 'slogan', 'TAPAS AND PAELLA.  TRY TO RESIST THIS!');
  headingWrapper.appendChild(elem);

  elem = myCreateElement('section', '', '', '');
  var section = contentDiv.insertBefore(elem, header.nextSibling);
  elem = myCreateElement('div', '', 'description', '');
  var descriptionWrapper =  section.appendChild(elem);
  elem = myCreateElement('h2', '', '', 'Featuring a full menu of authentic traditional Spanish cuisine and tapas. Our customers can experience an extremely wide variety of dishes with memorable tastes.');
  var description = descriptionWrapper.appendChild(elem);


  var img = document.createElement('img');
  img.src = "http://seasoned.com/sites/default/files/paella.jpg";
  img.alt = "Spanish Paella";
  img.className = "paella-picture";
  document.body.insertBefore(img, contentDiv.nextSibling);

  $('#menu, #about').on('click', function (e) {
    var id = e.target.id.toLowerCase();
    if (id === 'menu') {
      $(section).addClass('black-background').html(menu);
    }else{
      $(section).addClass('black-background').html(aboutUs);
    }
  });
});

var menu = '<div class="menu"><div class="traditional-sampler"><h1><em>Traditional Sampler</em></h1><p>Combination of 12 items ( 5 cold, 6 hot ) plus one dessert ( serves 2 people ) ( no substitution please ) 50</p></div><div class="cold-items"><h2><em>Cold Items</em></h2><p>Spanish dry cured sausages ( Salchichón and Chorizo ) (*)</p><p>Assortment of fine Spanish cheeses. (*)</p><p>Potatoes in alioli sauce ( homemade mayonnaise ). (*)</p><p>Sweet caramelized pepper jelly and cheese pintxo.</p><p>Gazpacho ( Andalusian cream of tomatoes and vegetable, served chilled ). (*)</p><h4>Dessert:</h4><p> Tocino de cielo. (*)</p></div><div class="hot-items"><h2><em>Hot Items</em></h2><p>Albondigas ( meatballs in onion and almond sauce ).</p><p>Croquetas ( creamy, lightly breaded fritters ).</p><p>Pollo al pimentón ( chicken marinated in paprika ). (*)</p><p>Paella Mixta ( Saffron-flavored Spanish rice ). (*)</p><p>Gambas al ajillo ( shrimp sauteed in olive oil, parsley and garlic ). (*)</p><p>Calamares Romana ( Lightly breaded and fried calamari ).</p></div></div></div>';
var aboutUs = '<div class="business-hours"><h2><em>Serving Denver</em></h2><h2><em>BUSINESS HOURS:</em></h2><p>Sunday through Thursday: 11:00am – 09:30pm</p><p>Friday and Saturday:  11:00am - 11:00pm</p></div><div class="send-us-message"><h2><em>Send Us A Message</em></h2><form><label for="name">Name</label><input type="text" id="name"><br><label for="email">Email</label><input type="text" id="email"><br><label for="message">Message</label><input type="text" id="message"><button type="submit">Submit</button></form></div>';