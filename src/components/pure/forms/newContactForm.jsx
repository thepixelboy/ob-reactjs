import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../../models/contact.class";

const NewContactForm = ({ add }) => {
  const nameRef = useRef("");
  const surnameRef = useRef("");
  const emailRef = useRef("");
  const statusRef = useRef(false);

  function addContact(e) {
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      surnameRef.current.value,
      emailRef.current.value,
      false
    );
    add(newContact);
  }

  return (
    <form onSubmit={addContact} className="d-flex mb-4">
      <div class="row g-3">
        <h3>Add new contact</h3>
        <div class="col-sm">
          <input
            ref={nameRef}
            id="inputName"
            type="text"
            className="form-control form-control-lg"
            required
            autoFocus
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div class="col-sm">
          <input
            ref={surnameRef}
            id="inputSurname"
            type="text"
            className="form-control form-control-lg"
            required
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>
        <div class="col-sm-5">
          <input
            ref={emailRef}
            id="inputEmail"
            type="email"
            className="form-control form-control-lg"
            required
            placeholder="Email address"
            aria-label="Email address"
          />
        </div>
        <div class="col-sm-2">
          <button type="submit" className="btn btn-primary btn-lg ms-2">
            Add contact
          </button>
        </div>
      </div>
    </form>
  );
};

NewContactForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default NewContactForm;
