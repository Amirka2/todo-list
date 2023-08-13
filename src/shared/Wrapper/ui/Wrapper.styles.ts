import styled from 'styled-components';
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const MainWrapper = styled(Column)`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  ${({ theme }) => `
    background-color: ${theme.wrapperBackground};
  `}
`;
