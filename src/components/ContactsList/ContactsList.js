import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';

export const ContactsList = ({ filterList, deleteContact }) => {
  return (
    <ul>
      {filterList.map(item => {
        return (
          <li key={item.id}>
            <ContactInfo contact={item} onDelete={deleteContact} />
          </li>
        );
      })}
    </ul>
  );
};
