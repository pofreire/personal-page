import styled from "styled-components";

export const Container = styled.header`
    padding: 0px 0px 24px 0px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    transition: all 0.5s;
    z-index: 997;

  .main-menu {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    padding: 12px 30px;
    transition: all 0.3s ease;
    align-items: center;
    top: ${(props) => (props.show ? `55px` : `10px`)};
    max-width: 768px;

    @media(max-width: 768px){
      display: none;
    }

    .logo {
      content: "";
      top: -30px;
      width: 100px;
      height: 100px;
      left: -4px;
      z-index: 12;
      color: #fff;
      transition: all 0.3s linear 0s;
      font-size: 38px;
    }

    > div {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;

      nav {
        margin-bottom: 10px;

        ul {
          touch-action: pan-y;
          margin: 0;
          padding: 0;
          list-style: none;

          li {
            float: left;
            margin-left: 10px;

            >a{
              color: #fff;
              text-decoration: none;
              position: relative;

              &:hover::after{
                width: 100%;
              }
              
              &::after{
                content: '';
                width: 0;
                height: 2px;
                position: absolute;
                bottom: 0;
                left: 0;
                background-color: #e6e6e6;
                transition: width 400ms ease,background-color 400ms ease;
              }
            }

          }
        }
      }
    }
  }
`;

export const Box = styled.div`
  transition: all 0.3s ease;
  padding: 5px;
  background-color: #34bbff;
  height: 30px;

  @media(min-width: 768px){
    padding-bottom: ${(props) => (props.show ? `5px` : `90px`)};
    margin-top: ${(props) => (props.show ? `0` : `-40px`)};
  }

  .menu-social-icons {
    display: flex;
    justify-content: center;

    a {
      font-size: 25px;
      color: #fff;
      margin: 0 5px;

      &:hover {
        color: #363636;
      }
    }

    svg {
      width: 25px;
    }
  }
`
export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #34bbff;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (min-width: 576px) {
      padding: 2rem;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
  
  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

  }
`;

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (min-width: 768px) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#FFF' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
;
