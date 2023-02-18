import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  max-width: 1440px;
  height: 720px;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  gap: 36px;

  background-color: var(--color-Grey-4);

  .headerLogo {
  }
  .imgLogo {
    width: 145px;
    height: 20px;

    margin-top: 40px;
  }
  .sectionLogin {
    width: 320px;
    height: 505px;

    background-color: var(--color-Grey-3);

    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    margin: 0 auto;

    align-items: center;
  }
  .sectionLogin > h2 {
    color: var(--color-Grey-0);
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
  }
  .formLogin {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10px;
    gap: 20px;
  }
  .formLogin > label {
    color: var(--color-Grey-0);
    font-size: 13px;
    font-weight: 400;
    padding-left: 3px;
  }
  .formLogin > input {
    color: var(--color-Grey-1);
    background-color: var(--color-Grey-2);

    width: 300px;
    height: 48px;

    gap: 10px;
    padding-left: 16px;

    box-sizing: border-box;

    border-radius: 4px;
    border: 1.2182px solid var(--color-Grey-2);
  }
  .formLogin > p {
    color: var(--color-Grey-1);
    font-weight: 400;
    font-size: 12px;
    margin-left: 60px;
  }
  .formLogin > button {
    background-color: var(--color-Grey-1);
    color: var(--color-Grey-0);

    border: 1.2182px solid var(--color-Grey-1);
    border-radius: 4.06066px;

    width: 300px;
    height: 48px;
  }
  .formLogin > button:hover {
    background-color: var(--Color-primary);
    border: 1.2182px solid var(--Color-primary-Focus);
  }
`;
