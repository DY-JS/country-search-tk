import styled from "styled-components";
import img from "../../../utils/pictures/earth.png";

export const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background: url(${img}) 0 / cover no-repeat;
`;
