import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDelete }) => (
  <ul className={styles.contactList}>
    {contacts &&
      contacts.map(({ id, name, number }) => (
        <li className={styles.contactListItem} key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button className={styles.contactListButton} onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
