import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 310px;
  height: 474px;
  gap: 19px;
  border: 2px solid var(--grey-2);
  margin-top: 93px;
  margin-left: 5px;
  border-radius: 8px;
  box-sizing: border-box;

  h3 {
    color: var(--grey-4);
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    font-family: var(--font-Nunito);
    font-style: normal;
    margin-top: 10px;
    margin-left: 20px;
  }
  input {
    width: 270px;
    height: 53px;
    padding: 0px, 16px, 0px, 16px;
    margin-left: 20px;
    gap: 10px;
    border-radius: 8px;
    border: 2px solid var(--grey-1);
    background-color: var(--grey-1);
    color: var(--grey-3);
    text-align: left;
    line-height: 26px;
    font-size: 16px;
    font-weight: 400;
    font-family: var(--font-Nunito);
  }
  p {
    color: var(--grey-3);
    font-size: 8px;
    font-weight: 400;
    line-height: 18px;
    font-family: var(--font-Nunito);
    font-style: normal;
    margin-left: 15px;
  }
  select {
    width: 270px;
    height: 53px;
    background-color: var(--grey-1);
    border-radius: 8px;
    border: 1px solid var(--grey-1);
    color: var(--grey-3);
  }
  button {
    width: 275px;
    height: 48px;
    padding: 13px, 20px, 13px, 20px;
    background-color: var(--primary-1);
    border: 1px solid var(--primary-1);
    border-radius: 8px;
    color: #FFFFFF;
    font-family: var(--font-Nunito);
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  @media (min-width: 768px){
    margin-top: -180px;
    margin-left: 30px;
  }
  @media (min-width: 1024px){
    margin-top: -220px;
  }
  @media (min-width: 1440px) {
    margin-top: -280px;
    margin-left: -80px;
    width: 395px;
    input{ 
        width: 355px;
    }
    select {
    width: 355px;
    }
    button {
    width: 355px;
    }
}
`;
