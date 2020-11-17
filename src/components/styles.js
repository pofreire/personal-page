import styled from "styled-components";

export const H1 = styled.h1`
  color: #fff;
  user-select: none;
  z-index: 1;
  width: 768px;
  text-align: center;
  font-size: 5vw;

  @media(max-width: 768px){
    font-size: 10vw;
  }

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

  ul li a:hover {
    color: #34bbff;
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
  min-height: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  scroll-snap-type: y mandatory;

  h2 {
    margin-bottom: 50px;
  }

  .btns-search {
    list-style: none;
    display: flex;
    justify-content: space-around;
    max-width: 960px;
    margin-bottom: 30px;

    li + li {
      margin-left: 10px;
    }
  }
`;

export const Profile = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  max-width: 1140px;
  margin: 0 40px;
  position: relative;

  h2 {
    margin-bottom: 30px;
  }

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

    div {
      padding-left: 0;
    }

    img {
      margin-bottom: 40px;
      display: none;
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

  img {
    max-width: calc(100% - 100px);
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 200px;
    background: #363636;
    margin: 5px;
    position: relative;

    > div {
      display: none;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: inherit;
        text-decoration: none;
      }
    }
    &:hover {
      > div {
        position: absolute;
        background: rgb(54 54 54 / 0.8);
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: center;

        .about-project {
          text-align: center;
          padding: 0 30px;
          p {
            margin-top: 10px;

            span {
              background-color: #34bbff;
              border-radius: 3px;
              padding: 2px;
              font-size: 12px;
            }
            span + span {
              margin-left: 3px;
            }
          }
        }
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
      z-index: 1;
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
  width: 100%;
  display: flex;
  flex-direction: row;
  max-width: 1020px;
  justify-content: space-around;

  .side-contact{
    width: 200px;

    >div{

      p{

        a{
          color: inherit;
        }

        &:hover{
          color: #34bbff;
        }
      }

      p+p{
        margin-top: 10px;
      }
    }
  }

  form{
    width: calc(100% - 400px);
  }

  @media (max-width: 668px) {
    flex-direction: column;
    align-items: center;

    form {
      width: 80%;
      padding: 0 40px 40px;
    }
  }
`;

export const Resume = styled.div`
  flex-direction: row;
  width: 100%;
  display: flex;
  max-width: 1020px;

  > div {
    :first-child {
      width: 25%;
      h2 > span {
        border-bottom: 3px solid #34bbff;
      }
    }
    :last-child {
      width: 75%;
      > div {
        padding-left: 40px;
      }
      p {
        margin: 5px 0;
        color: #6e7881;
      }
    }
  }

  @media (max-width: 668px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div {
      :first-child {
        width: unset;
        h2 > span {
          border-bottom: 3px solid #34bbff;
        }
      }
      :last-child {
        width: unset;
        > div {
          padding-left: 40px;
        }
        p {
          margin: 5px 0;
          color: #6e7881;
        }
      }
    }
  }

  .work + .work {
    margin-top: 40px;
  }

  .skills {
    list-style: none;
    padding: 40px 0 40px 40px;

    li {
      position: relative;

      > h3 {
        position: absolute;
        top: -30px;
      }

    }

    li + li {
      margin-top: 40px;
    }
  }
`;

export const ArrowScroll = styled.a`
  border-left: 13px solid transparent;
  border-right: 13px solid transparent;
  border-bottom: 40px solid #34bbff;

  z-index: 2;
  position: fixed;
  bottom: 50px;
  right: 50px;
  text-indent: -9999px;
  background-color: transparent;
  transition: all 0.3s ease;

  &:hover,
  &:active,
  &:focus{
    border-bottom: 40px solid #1592d2;
  }
  @media (max-width: 568px) {
      right: 5px;
  }

`;
