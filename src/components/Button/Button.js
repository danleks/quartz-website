import styled from 'styled-components';

const Button = styled.button`
  width: 13rem;
  padding: 7px;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 2rem;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.black};
  background: linear-gradient(
    to right,
    ${({ product }) => (product ? 'hsla(40,12%,91%,1)' : '#fff')} 50%,
    transparent 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  cursor: pointer;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  &:hover {
    border: 1px solid
      ${({ product, theme }) =>
        product ? 'hsla(40,12%,91%,1)' : theme.color.black};
    color: #000;
    background-position: left bottom;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 18rem;
    padding: 1.2rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 20rem;
    padding: 1.2rem;
    font-size: ${({ theme }) => theme.fontSize.desktop.s};
  }
`;

export default Button;
