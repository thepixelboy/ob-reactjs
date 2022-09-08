import React, { useState } from "react";
import { Contact } from "../../models/contact.class";
import ContactDetailsComponent from "../pure/contactDetails";

import "../../styles/contacts.scss";
import NewContactForm from "../pure/forms/newContactForm";

const ContactListComponent = () => {
  const contact1 = new Contact(
    "Steve",
    "Rogers",
    "captain.america@avengers.com",
    false
  );
  const contact2 = new Contact("Tony", "Stark", "iron.man@avengers.com", false);
  const contact3 = new Contact(
    "Natasha",
    "Romanov",
    "black.widow@avengers.com",
    false
  );

  // Estado del componente
  const [contacts, setContacts] = useState([contact1, contact2, contact3]);

  function changeStatus(contact) {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].completed = !tempContacts[index].completed;
    setContacts(tempContacts);
  }

  function removeContact(contact) {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  }

  function addContact(contact) {
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }

  return (
    <div className="row">
      <h2>Contacts</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            return (
              <ContactDetailsComponent
                key={index}
                contact={contact}
                status={changeStatus}
                remove={removeContact}
              ></ContactDetailsComponent>
            );
          })}
        </tbody>
      </table>
      <NewContactForm add={addContact}></NewContactForm>
    </div>
  );
};

export default ContactListComponent;
