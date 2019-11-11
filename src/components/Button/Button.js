import styled from 'styled-components';
// import { Link } from 'gatsby';

const Button = styled.a`
  display: inline-block;
  padding: 2rem 1rem;
  font-size: ${({ theme, contact }) =>
    contact ? theme.fontSize.mobile.l : theme.fontSize.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black};
  outline: none;
  text-decoration: none;
  background-image: ${({ menu }) =>
    menu
      ? 'linear-gradient(to right, hsla(0, 0%, 97%, 1) 50%, transparent 50%)'
      : 'linear-gradient(to right, hsla(289,9%,42%, .5) 50%, transparent 50%)'};
  background-size: 70% 100%;
  background-position: left;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: background-position 0.3s ease-in-out,
    background-size 0.3s ease-in-out;

  &:hover {
    background-position: left;
    background-size: 200% 100%;
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme, contact }) =>
      contact ? theme.fontSize.tablet.xl : theme.fontSize.tablet.xs};
  }

  ${({ theme }) => theme.mq.desktop} {
    width: auto;
    padding: 1.5rem 1rem;
    background-size: 60% 100%;
    text-align: left;
    font-size: ${({ theme, contact }) =>
      contact ? theme.fontSize.desktop.l : theme.fontSize.desktop.xs};
  }
`;

export default Button;
