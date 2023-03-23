import styled from "styled-components";

export const StyledCards = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    background-color: var(--grey-1);
    width: 310px;
    height: 136px;
    border-radius: 4px;
    border-left: 4px solid ${({borderLeft}) => borderLeft};
    h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
    font-family: var(--font-Nunito);
    color: var(--grey-4);
    margin-left: 20px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    font-family: var(--font-Nunito);
    color: var(--grey-4);
    margin-left: 20px;
  }
  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    font-family: var(--font-Nunito);
    color: var(--grey-4);
    margin-left: 20px;
  }
  button {
    width: 35px;
    height: 35px;
    border-radius: 4px;
    border: none;
    text-align: center;
    margin-left: 15px;
  }
  img {
    width: 15px;
    height: 15px;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 400px;
    height: 87px;
  p {
    margin-top: 60px;
    margin-left: -50px;
  }
  span{
    margin-top: 50px;
    margin-left: 260px;
  }
  button{
    margin-left: -60px;
  }
}
`;