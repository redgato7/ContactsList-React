import React from 'react';
import ContactPerson from './ContactPerson';

import contacts from '../data/data';

const ContactsList = () => {

      return (
        <div>
         {contacts.map(contact => <ContactPerson key={contact.img} contact={contact}></ContactPerson>)}
        </div>
      )
    }

export default ContactsList;