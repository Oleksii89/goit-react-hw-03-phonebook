import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  border: 2px solid black;
  padding: 10px;
`;
export const Input = styled.input`
  margin-bottom: 15px;
  height: 20px;
  border-radius: 5px;
  width: 250px;
`;

export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  box-sizing: border-box;
  width: 100px;
  height: 24px;
  background: blue;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 600;
  font-size: 15px;
`;
