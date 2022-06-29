import styled from 'styled-components';

export const DivGlobal = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  align-items: center;
  background-color: #FFF3F0;
`;

export const Div = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  justify-items: center;
  button {
    width: 150px;
    margin: 0px 4px;
    /* border: 1px solid red; */
    /* padding: 1px; */
    padding: 12px 5px;
    border-radius: 20px;
    border: 0;
    background-color: white;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 11px;
    transition: all .5s ease;
  }
  #buttons {
    margin-top: 8px;
    display: flex;
    justify-content: space-evenly;
  }
`;

export default DivGlobal;
