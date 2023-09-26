import { FilterButton } from 'Components/Filter/Filter.styled';
import { ContactItemLi } from './ContactItem.styled';

export const ContactIem = ({ contacts, onDeleteContact }) => {
  return contacts.map(({ name, number, id }) => (
    <ContactItemLi key={id}>
      {name} : {number}
      <FilterButton
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </FilterButton>
    </ContactItemLi>
  ));
};
