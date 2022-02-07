import styled from "styled-components";
import search from "../../../utils/pictures/search.svg";

/*variables*/
const flexCenter = `
    display: flex;
    align-items: center;
    justify-content: center;
 `;

const flexBetween = `
    display: flex;
    align-items: center;
    justify-content: space-between;
 `;

/*components*/
export const Container = styled.div`
  ${flexCenter};
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background-color: transparent;
`;

export const Controls = styled.div`
  ${flexBetween};
  position: relative;
  width: 95%;
  @media (min-width: 500px) {
    width: 70%;
  }

  &::before {
    display: block;
    content: "";
    position: absolute;
    width: 13px;
    height: 13px;
    top: 10px;
    left: 8px;
    background: url(${search}) 0 / cover no-repeat;
    z-index: 2;
  }
`;

export const Input = styled.input`
  width: 70%;
  height: 30px;
  padding-left: 25px;
  font-size: 14px;
  font-weight: normal;
  background: #fff;
  border: 1px solid #e1e7ed;
  box-sizing: border-box;
  box-shadow: 0 1px 8px rgba(61, 78, 97, 0.1);
  border-radius: 4px;
  cursor: pointer;

  @media (min-width: 500px) {
    font-size: 16px;
    width: 75%;
  }

  &::placeholder {
    font-size: 14px;
  }

  &:focus {
    background-color: linear-gradient(180deg, #fff 0%, #f6f6f7 100%);
    border: 1px solid #e1e7ed;
    border-radius: 3px;
    font-size: 20px;
    font-weight: 400;
  }

  &:active,
  &:hover,
  &:focus {
    outline: 0;
    outline-offset: 0;
    box-shadow: 0 4px 24px rgba(61, 78, 97, 0.5);
  }
`;

export const Button = styled.button`
  ${flexCenter}
  width: 25%;
  height: 30px;
  padding: 10px;
  font-size: 14px;
  font-weight: normal;
  background: #3b82f6;
  box-sizing: border-box;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #fff;
    background: #dc2626;
  }

  @media (min-width: 500px) {
    font-size: 16px;
    width: 20%;
  }
`;
