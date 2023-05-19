import PropTypes from 'prop-types';
import css from './ContactList.module.css'

export const ContactList = ({contacts, onDeleteContact}) => (
    <ul>
        {contacts.map(({id, name, number}) => {
            return (
                <li key={id}>
                    <p> {name} : {number} </p>
                    <button className={css.buttonDelete} onClick={() => onDeleteContact(id)}> Delete </button>
                </li>
            )
        })}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    onDeleteContact: PropTypes.func.isRequired
    }