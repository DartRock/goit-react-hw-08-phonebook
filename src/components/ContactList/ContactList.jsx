import React from 'react'
import PropTypes from 'prop-types';
import s from './ContactList.module.css'

export const ContactList = ({ filterContacts, onDeleteContacts }) => {
    return (
        <ul className={s.list}>
            {filterContacts?.map(contact => (
                <li key={contact.id} className={s.item}>
                    <p className={s.text}>{contact.name} : {contact.number} </p>
                    <button type="button" onClick={() => onDeleteContacts(contact.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    )
};

ContactList.propTypes = {
  filterContacts: PropTypes.array,
  onDeleteContacts: PropTypes.func,
};

// import React from 'react'
// import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
// import {contactsOperations, contactsSelectors} from '../../redux/contacts'
// import s from './ContactList.module.css'

// export const ContactList = () => {

//     const dispatch = useDispatch();
//   const contacts = useSelector(contactsSelectors.getVisibleContacts);

//   const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));
//   const onEditContact = id => dispatch(contactsOperations.editContact(id));

//     return (
//         <ul className={s.list}>
//             {contacts.map(({id, name, number}) => (
//                 <li key={id} className={s.item}>
//                     <p className={s.text}>{name}: {number} </p>
//                     <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
//                 </li>
//             ))}
//         </ul>
//     )
// };

// ContactList.propTypes = {
//   filterContacts: PropTypes.array,
//   onDeleteContacts: PropTypes.func,
// };