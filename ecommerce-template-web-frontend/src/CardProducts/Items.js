import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  padding: 0 5px;
  width: 100%;
  text-align: center;
  color: #fff;
  margin: 0 5px;

  :hover {
    /* transition: width 2s, height 4s; */
    transition: all 0.25s ease;
    transform: scale(1.07);
  }
`;
