import styled from "styled-components";

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

const flexColumnBetween = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

/*components*/
export const CountryCard = styled.div`
  ${flexColumnBetween};
  height: 200px;
  margin: 10px;
  padding: 10px;
  border-radius: 6px;
  background: rgba(15, 45, 245, 0.5);
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    font-weight: 600;
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 600px;
  line-height: 22px;
  color: #000;
`;

export const Code = styled.p`
  font-size: 16px;
  font-weight: 600px;
  line-height: 18px;
  transform: translateY(-50%);
  color: #000;
`;

export const FlagContainer = styled.div`
  width: 50%;
  height: 10%;
  margin: 0 auto;
  padding-bottom: 3px;
  transform: translateY(-1200%);
`;

export const Controls = styled.div`
  ${flexBetween};
  width: 100%;
  height: 20px;
`;

export const Checkbox = styled.input`
  height: 20px;
  width: 20px;
`;

export const Button = styled.button`
  ${flexCenter};
  height: 20px;
  width: 50px;
  font-size: 14px;
  color: #000;
  font-weight: 400;
  background: #a7f3d0;
  box-sizing: border-box;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:disabled,
  &:disabled:hover {
    color: #fff;
    background: rgba(315, 45, 5, 0.3);
  }

  &:hover {
    color: #fff;
    font-weight: 600;
    background: #dc2626;
  }
`;
