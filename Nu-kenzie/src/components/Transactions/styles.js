import { css } from "styled-components";
import styled from "styled-components";


export const StyledTransaction = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .summary {
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    color: var(--grey-4);
    padding: 0 16px;
   text-align: left;
   margin-left: 1px;
  }
  .divAlert {
    font-weight: 700;
    font-size: 22px;
    line-height: 34px;
    color: var(--grey-4);
    padding: 0 16px;
  }
  @media (min-width: 768px) {
    margin-top: -595px;
    margin-left: 360px;

  .summary {
    font-size: 14px;
  }
  .divAlert {
    font-size: 16px;
  }
}
  @media (min-width: 1024px) {
    margin-top: -585px;
  }
  @media (min-width: 1440px) {
    margin-top: -595px;
    .summary {
    font-size: 16px;
  }
  .divAlert {
    font-size: 20px;
  }
  }
`;
