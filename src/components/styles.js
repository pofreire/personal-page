import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 5vw;
  color: #fff;
  user-select: none;
  z-index: 1;

  span {
    color: #34bbff;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: space-around;
    height: 50px;
    max-width: 1200px;
  }

  ul {
    list-style: none;
  }

  ul li,
  ul li svg {
    color: whitesmoke;
    padding: 0 10px;

    &:hover {
      color: #34bbff;
    }
  }

  div > ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin-bottom: 50px;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    max-width: 960px;
    margin-bottom: 30px;
  }

  ul li + li {
    margin-left: 10px;
  }
`;

export const Profile = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  max-width: 1140px;
  margin: 0 40px;
  position: relative;

  img {
    width: 260px;
    height: auto;
  }
  div {
    padding-left: 70px;

    p a {
      color: #34bbff;
    }

    p + p {
      color: #a1a1a1;
      &::before {
        content: " ";
        width: 35px;
        height: 6px;
        background: #34bbff;
        display: block;
        margin: 20px 0;
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;

    img {
      margin-bottom: 40px;
    }
  }
`;

export const Projetos = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  max-width: 1140px;
  width: 100%;
  flex-wrap: wrap;
  position: relative;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 200px;
    background: #363636;
    margin: 5px;
    position: relative;

    a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 200px;
      }
    }

    &::before {
      content: "";
      position: absolute;
      border: 2px solid #34bbff;
      width: 15px;
      height: 15px;
      bottom: 0;
      left: 0;
      transition: opacity 0.2s ease;
      opacity: 0;
    }
    &::after {
      content: "";
      position: absolute;
      border: 2px solid #34bbff;
      width: 15px;
      height: 15px;
      top: 0;
      right: 0;
      transition: opacity 0.2s ease;
      opacity: 0;
    }

    &::before {
      border-right: 0;
      border-top: 0;
      left: 0;
      bottom: 0;
    }

    &::after {
      border-left: 0;
      border-bottom: 0;
      top: 0;
      right: 0;
    }
    &:hover::after,
    &:hover::before {
      opacity: 1;
    }
  }
`;

export const BtnSearch = styled.div`
  display: inline-block;
  font-weight: 400;
  color: whitesmoke;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid #34bbff;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  background-color: transparent;
  text-decoration: none;

  &:hover,
  :active {
    color: whitesmoke;
    background-color: #34bbff;
  }
`;

export const Contato = styled.div`
  max-width: 576px;
  width: 100%;
`;
