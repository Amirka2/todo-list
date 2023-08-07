import styled from 'styled-components';
import {Column, Row} from '../../Wrapper';

export const CardWrapper = styled(Row)`
  min-width: 400px;
  min-height: 50px;
  width: 80vw;
  border: 1px solid black;
  border-radius: 12px;
  margin: 3px;
  background-color: #0c89de;
`;

export const CardTextWrapper = styled(Column)`
  width: 95%;
  padding: 5px 0 5px 0;
`;

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin: 5px;
  border: 1px solid #a90000;
  border-radius: 50%;
  border-style: outset;
`;

export const Title = styled.h2`
  color: #ffffff;
`;

export const Notes = styled.p`
  width: 100%;
  color: #ffffff;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  word-wrap: break-word;
`;