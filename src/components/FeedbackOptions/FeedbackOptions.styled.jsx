import styled from '@emotion/styled';

export const Button = styled.button`
  width: 200px;
  height: 50px;
  padding: 5px 15px;
  background-color: #FFFDCF;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  text-transform: capitalize;
  border: solid #6c0599 3px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 30px;
  }
  
  :hover,
  :focus {
    background-color: #CC8CDC;
    color: white;
    transition: all 0.2s;
  }
`;
export const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`