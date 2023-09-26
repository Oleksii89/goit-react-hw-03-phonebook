import { Input, Label } from 'Components/ContactForm/ContactForm.styled.';
import { FilterContainer } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterContainer>
      <Label>Find contact by name</Label>
      <Input type="text" value={filter} onChange={onChange}></Input>
    </FilterContainer>
  );
};
