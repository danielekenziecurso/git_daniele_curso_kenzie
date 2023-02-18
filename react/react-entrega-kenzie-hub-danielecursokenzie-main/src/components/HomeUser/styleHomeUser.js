import styled from "styled-components";

export const StyledDashboard = styled.main`
  width: 100%;
  max-width: 1440px;
  height: 720px;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  gap: 36px;

  background-color: var(--color-Grey-4);
  .headerDash {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    max-width: 1440px;
    height: 72px;

    margin: 0 auto;
    margin-top: 40px;

    border-bottom: 0.1px solid var(--color-Grey-2);
  }
  .headerDash > img {
    width: 145px;
    height: 20px;
  }
  .headerDash > button {
    background-color: var(--color-Grey-3);
    color: var(--color-Grey-0);

    border-radius: 4px;
    border: none;

    width: 68px;
    height: 41px;

    font-size: 12px;
    font-weight: 600;
    line-height: 29px;

    align-items: center;
  }
  .inforUser {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    max-width: 1440px;
    height: 72px;

    margin: 0 auto;

    border-bottom: 0.1px solid var(--color-Grey-2);
  }
  .inforUser > h2{
    color: var(--color-Grey-0);
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    margin-top: -25px;
  }
  .inforUser > P{
    color: var(--color-Grey-1);
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    margin-top: -25px;
  }
  .development{
    margin: 0 auto;

  }
  .development > h2{
    color: var(--color-Grey-0);
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;

  }
  .development > p{
    color: var(--color-Grey-1);
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;

  }
`;
