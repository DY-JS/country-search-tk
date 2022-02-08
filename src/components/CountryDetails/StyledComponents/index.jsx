import styled from "styled-components";

/*variables*/
const flexCenter = `
    display: flex;
    align-items: center;
`;

const flexColumnBetween = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

/*components*/
export const DetailsCard = styled.div`
  ${flexColumnBetween};
  height: 20%;
  min-width: 250px;
  width: 50%;
  margin: 0 auto;
  padding: 20px 5px;
  font-size: 14px;
  font-weight: 400;
  background: #fff;
  border: 1px solid #e1e7ed;
  box-sizing: border-box;
  box-shadow: 0 1px 8px rgba(61, 78, 97, 0.1);
  border-radius: 4px;
  overflow: hidden;
  transform: translateY(50%);
  transition: 0.3s;
  cursor: pointer;

  @media (min-width: 500px) {
    font-size: 16px;
  }

  &:hover {
    outline: 0;
    outline-offset: 0;
    box-shadow: 0 4px 24px rgba(61, 78, 97, 0.5);
  }
`;

export const Detail = styled.p`
  padding-bottom: 15px;
  font-size: 16px;
  font-weight: 600;
`;

export const Img = styled.img`
  margin-right: 15px;
  transform: translateY(20%);
  width: 30px;
  height: 20px;
`;

export const Text = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const Back = styled.div`
  ${flexCenter};
  padding-top: 20px;
  padding-left: 20px;
`;
