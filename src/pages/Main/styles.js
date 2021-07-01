import styled from 'styled-components';

export const Conteiner = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    padding: 20px;
    position: relative;
    height: 400px;
  }
  .will {
    z-index: 2;
    position: relative;
    left: 5vw;
    top: 5vh;
  }
  .xuxus {
    border-radius: 40px;
  }
`;

export const CamilaButton = styled.button`
  background: rgb(14, 51, 181);
  height: 40px;
  width: 40px;
  border-radius: 4px;

  svg {
    align-items: center;
    color: white;
  }
`;
export const Header = styled.div`
  align-items: center;
  display: flex;
  padding: 30px;
  border: 2px;

  a {
    background: rgb(14, 51, 181);
    border: 1px solid #000;
    border-radius: 4px;

    text-decoration: none;
    color: black;
    margin: auto;
    min-width: 65px;
    max-width: 100px;
    text-align: center;
  }
`;
export const Button = styled.button`
  background: rgb(14, 51, 181);
  border: 1px solid #000;
  border-radius: 4px;

  text-decoration: none;
  color: black;
  margin: auto;
  min-width: 65px;
  max-width: 100px;
  text-align: center;
`;
