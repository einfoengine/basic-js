// Examining the dom
// =======
console.log('document ',document);
console.log('document all ',document.all);
console.log('document all [0]',document.all[2]);
console.log('document all length',document.all.length);
console.log('document head',document.head);
console.log('document body',document.body);
console.log('document doctype',document.doctype);
console.log('document domain',document.domain);
console.log('document URL',document.URL);
console.log('document charecterSet',document.characterSet);
console.log('document contentType',document.contentType);

console.log('document forms',document.forms);
console.log('document forms[0]',document.forms[0]);
console.log('document forms[0].id',document.forms[0].id);
console.log('document forms[0].method',document.forms[0].method);
console.log('document forms[0].action',document.forms[0].action);

console.log('document links',document.links);
console.log('document links[0]',document.links[0]);
console.log('document links[0].id',document.links[0].id);
console.log('document links[0].className',document.links[0].className);
console.log('document links[0].classList',document.links[0].classList[0]);

console.log('document images',document.images);
console.log('document scripts',document.scripts);
console.log('document scripts',document.scripts[0].getAttribute('src'));

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});



