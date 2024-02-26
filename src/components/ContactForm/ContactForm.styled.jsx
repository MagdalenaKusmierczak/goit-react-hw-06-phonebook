import styled from 'styled-components';

export const Form = styled.form`
  width: 500px;
  height: 300px;
  margin-block: 20px;
  padding: 15px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  border: 2px black solid;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 5px;
  font-size: 25px;
`;
export const Input = styled.input`
  width: 250px;
  margin: 0;
  padding: 5px;
  font-size: 18px;
  border: #8ca1adde 1px solid;
  border-radius: 5px;
`;
export const SubButton = styled.button`
  margin-top: 10px;
  margin-left: 5px;
  width: 125px;
  height: 30px;
  padding: 2px;
  font-size: 20px;
  background-color: #0086d4;
  border-radius: 10px;
  border: 0px;
  &:hover {
    background-color: #1700d4;
    color: white;
  }
`;
