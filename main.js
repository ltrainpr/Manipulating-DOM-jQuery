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
  elem = myCreateElement('h1', '', '', 'TAPAS AND PAELLA.  TRY TO RESIST THIS!');
  var heading = headingWrapper.appendChild(elem);

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
});

