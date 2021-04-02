function renderHello() {
  var template = document.getElementById('template').innerHTML;
  var rendered = Mustache.render(template, { name: 'Patron' });
  document.getElementById('target').innerHTML = rendered;
}
