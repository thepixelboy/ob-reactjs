import React from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contact";

const ContactContainerComponent = () => {
  const fakeContact = new Contact("John", "Doe", "john.doe@unknown.com", false);

  return (
    <div>
      <div>
        <h1>Contact:</h1>
      </div>
      <ContactComponent contact={fakeContact}></ContactComponent>
    </div>
  );
};

export default ContactContainerComponent;
