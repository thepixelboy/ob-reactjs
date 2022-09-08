import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactDetailsComponent = ({ contact, status, remove }) => {
  // Returns an icon style and color depending on task's status
  function contactStatuStyle() {
    if (contact.completed) {
      return "bi bi-person-circle connected";
    } else {
      return "bi bi-person-circle disconnected";
    }
  }

  function statusToglleStyle() {
    if (contact.completed) {
      return "bi bi-toggle-on connected me-2";
    } else {
      return "bi bi-toggle-off disconnected me-2";
    }
  }

  return (
    <tr className="fw-normal">
      <th>
        <span className="task-ms-2">
          {contact.name} {contact.surname}
        </span>
      </th>
      <td>
        <span>{contact.email}</span>
      </td>
      <td className="text-center contact-status">
        <i
          className={contactStatuStyle()}
          title={contact.connected ? "CONNECTED" : "DISCONNECTED"}
        ></i>
      </td>
      <td className="text-center contact-actions">
        <i
          onClick={() => status(contact)}
          className={statusToglleStyle()}
          title="Change contact status"
        ></i>
        <i
          onClick={() => remove(contact)}
          className="bi bi-trash delete"
          title="Delete contact"
        ></i>
      </td>
    </tr>
  );
};

ContactDetailsComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
  status: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default ContactDetailsComponent;
