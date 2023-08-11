import styled from 'styled-components';

export const Input = styled.input`
  all: unset;
  ${({ theme }) => `
    color: ${theme.color};
    ::placeholder {
      color: ${theme.color};
    }
  `}
`;
