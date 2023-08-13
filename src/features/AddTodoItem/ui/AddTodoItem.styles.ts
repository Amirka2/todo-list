import styled from 'styled-components';
import {Input} from "../../../shared/Input";
import {CardTextWrapper} from "../../../shared/TodoCard";

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

export const InputFields = styled(CardTextWrapper)`
  align-items: flex-start;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SubmitButton = styled.button`
  width: 70px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 40px;
  ${({ theme }) => `
    color: ${theme.buttonColor};
    background-color: ${theme.buttonBackground};
  `}
`;
