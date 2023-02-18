import styled from "styled-components";

export const StyledRegister = styled.main`
  width: 100%;
  max-width: 1440px;
  height: 1120px;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  gap: 36px;

  background-color: var(--color-Grey-4);

  .headerRegister {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;

    width: 300px;

    margin: 0 auto;
    margin-top: 40px;
  }
  .headerRegister img {
    width: 145px;
    height: 20px;
  }
  .headerRegister button {
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
  .sectionRegister{
    width: 320px;
    height: 930px;

    background-color: var(--color-Grey-3);

    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    margin: 0 auto;
  

    align-items: center;
  }
  .sectionRegister > h2 {
    color: var(--color-Grey-0);
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
  }
  .sectionRegister > p {
    color: var(--color-Grey-1);
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
  }
  .formRegister {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10px;
    gap: 20px;
  }
  .formRegister > label {
    color: var(--color-Grey-0);
    font-size: 13px;
    font-weight: 400;
    padding-left: 3px;
  }
  .formRegister > input {
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
  .formRegister > p {
    color: var(--color-Grey-0);
    font-size: 13px;
    font-weight: 400;
    padding-left: 3px;
  }
  select {
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
  .formRegister > button {
    background-color: var(--Color-primary-Negative);
    color: var(--color-Grey-0);

    border: 1.2182px solid var(--Color-primary-Negative);
    border-radius: 4.06066px;

    width: 300px;
    height: 48px;
  }
  .formRegister > button:hover {
    background-color: var(--Color-primary);
    border: 1.2182px solid var(--Color-primary-Focus);
  }
`;
