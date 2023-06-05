import styled from "styled-components";

export const StyledMain = styled.main`
  display: grid;
  padding: 32px 261px;
  grid-template-columns: 1fr 2fr;

  .ValueForm {
    grid-column: 1 / 3;
    grid-row: 1;
  }
  .List {
    grid-column: 3;
    grid-row: 1 / 3;
  }
  .TotalMoney {
    grid-column: 1;
    grid-row: 2;
  }

  @media (max-width: 678px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;

    .item:nth-child(2) {
      order: 2;
    }

    .item:nth-child(3) {
      order: 1;
    }
  }
`;
