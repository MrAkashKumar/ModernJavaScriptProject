// Create Element

const li = document.createElement('li');

//Add Class

li.className = 'collection-item';

//Add id
li.id = 'new-item';

//Add Attribute

li.setAttribute('title', 'new Item');

//Create text node and append

li.appendChild(document.createTextNode('Hello World'));

//create new link element
const link = document.createElement('a');

//Add class
link.className = 'delete-item secondary-content';
//Add Icon html
link.innerHTML = '<i class = "fa fa-remove"></i>';

//Appent link into li
li.appendChild(link);

//Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

//output
console.log(li);