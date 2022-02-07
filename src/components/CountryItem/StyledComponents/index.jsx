import styled from "styled-components";

/*variables*/
const flexBetween = `
    display: flex;
    align-items: center;
    justify-content: space-between;
 `;

/*components*/
export const CountryCard = styled.div`
  height: 180px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #bebebe;
  border-radius: 6px;
  background: rgba(15, 45, 245, 0.4);
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 600px;
  line-height: 22px;
  padding: 5px;
  color: #000;
`;

export const Controls = styled.div`
  ${flexBetween};
  width: 100%;
`;

export const Checkbox = styled.input`
  height: 20px;
  width: 20px;
`;
