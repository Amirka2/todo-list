import styled from 'styled-components';
import {Input} from "../../../shared/Input";
import {Column} from "../../../shared/Wrapper";

export const TitleInput = styled(Input)`
  height: 30px;
  font-size: 24px;
  ${({ theme }) => `
    color: ${theme.color};
  `}
`;

export const NoteInput = styled(Input)`
  height: 20px;
  width: 100%;
  font-size: 14px;
  ${({ theme }) => `
    color: ${theme.color};
  `}
`;

export const InputFields = styled(Column)`
  align-items: flex-start;
  width: 80%;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const SubmitButton = styled.button`
  width: 70px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 7px;
  margin: 0 5px 0 0;
  ${({ theme }) => `
    color: ${theme.buttonColor};
    background-color: ${theme.buttonBackground};
  `}
`;
