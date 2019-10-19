import styled from 'styled-components';

const Button = styled.button`
  width: 13rem;
  padding: 7px;
  border: 1px solid ${({ theme }) => theme.color.lightDark};
  border-radius: 20px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.white};
  background-color: transparent;
  cursor: pointer;
`;

export default Button;
