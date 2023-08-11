import {styled} from 'styled-components';

export const Toggle = styled.input`
  display: none;
  &:checked + label {
    background-color: #2f7df9;
  }

  &:checked + label:after {
    left: 33px;
  }
  
`;
export const Container = styled.div`
  display: block;
  
`;

export const Label = styled.label`
  transition: all 200ms ease-in-out;
  display: inline-block;
  position: relative;
  height: 40px;
  width: 70px;
  border-radius: 40px;
  cursor: pointer;
  background-color: #ddd;
  color: transparent;

  &:after {
    transition: all 200ms ease-in-out;
    content: ' ';
    position: absolute;
    height: 34px;
    width: 34px;
    border-radius: 50%;
    background-color: white;
    top: 3px;
    left: 3px;
    right: auto;
    box-shadow: 1px 1px 1px gray;
  }

  &.colored,
  input[type="checkbox"]:checked + label {
    background-color: #55c946;
  }

label {
  background-color: #ff4949;
}`;
