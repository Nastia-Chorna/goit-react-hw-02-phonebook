import styled from '@emotion/styled';

export const List = styled.ul`
    display: block;
  padding: 2px 0;
   list-style-type: none;
    align-items: baseline;
    &:not(:last-child) {
        margin-bottom: 30px;
        list-style-type: none;
        margin: 10px 0;
    }
`;

export const Button = styled.button`
 margin-left: 40px;
    width: 100px;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.25;
  background-color: grey;
  border:none;
  border-radius: 5px;
  cursor: pointer;
`;

