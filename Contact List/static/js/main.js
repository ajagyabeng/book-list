// Import from other JS files
import { Store } from "./add.js";
import { UI } from "./ui.js";
import { Operation } from "./filter.js";

/*--------------------CLASSES-----------------------------*/
class Contact {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}

/*--------------------EVENTS---------------------*/
// Event Listener: Display Headers
document.addEventListener("DOMContentLoaded", Store.getContacts);

// Event Listener: Show Contact form
document
  .querySelector("#new-contact")
  .addEventListener("click", UI.showNewContactForm);

// Event Listener: Filter Names
document
  .querySelector("#filter-input")
  .addEventListener("keyup", Operation.filterNames);

// Event Listener: Add Contact to Database
// document.querySelector("#contact-form").addEventListener("submit", (e) => {
//   e.preventDefault();

//   // Get hold of input value
//   const name = document.querySelector("#name").value;
//   const phone = document.querySelector("#phone").value;
//   const email = document.querySelector("#email").value;

//   // validate input
//   if (name === "" || phone === "") {
//     alert("Please fill all fields"); // change this later
//   } else {
//     const contact = new Contact(name, phone, email);

//     //Hide Contact form
//     UI.hideContactForm();
//     //Store contact to database
//     Store.addContact(contact);
//     UI.clearContactField();
//   }
// });

/*
TODOS
1. When adding new contact, check if the exact name already exists(warn to make changes to avoid confusion)
2. When adding new contact, check if the exact number already exist in contacts(show number and name which it is stored to)
3. Add pop up when name is clicked(displays Name, Phone, Email )
4. Connect to server
4i. Add labels(Friends, family, work, school, etc.)
5. More actions(Hide, delete)
6. Add contact(add country calling code to form) - countryinfo module in python
*/
