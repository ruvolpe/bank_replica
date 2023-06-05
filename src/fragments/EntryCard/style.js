import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  width: 560px;
  height: 87px;
  align-items: center;
  background-color: var(--color-grey-1);
  margin-bottom: 15px;
  border-radius: 4px;
  padding: 8px 18px;
  @media (max-width: 678px) {
    width: calc(100vw - 32px);
  }
`;

export const StyledButton = styled.button`
    font-size:10px;
    background-color: var(--color-grey-2);
    padding: 3px 9px;
`

