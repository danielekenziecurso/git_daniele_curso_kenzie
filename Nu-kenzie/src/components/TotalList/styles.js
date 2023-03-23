import styled from "styled-components";

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  width: 310px;
  height: 96px;
  border: 2px solid var(--grey-2);
  border-radius: 4px;
  background-color: #ffffff;
  margin-top: 20px;
  margin-left: 5px;

  .divValue {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  h3 {
    padding: 0 20px;
    color: var(--color-grey-4);
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
    font-family: var(--font-Nunito);
  }
  span {
    padding-left: 100px;
    color: var(--color-primary-1);
    font-weight: 700;
    font-size: 16px;
    font-family: var(--font-Nunito);
    line-height: 30px;
  }
  p {
    margin-left: 25px;
    color: var(--grey-4);
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    font-family: var(--font-Nunito);
  }
  @media (min-width: 768px){
    margin-left: 30px;
  }
  @media (min-width: 1440px){
    margin-left: -80px;
    width: 395px;
  }
`;
