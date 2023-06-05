import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid var(--color-grey-2);
  width: 355px;
  height: 434px;

  @media (max-width: 678px) {
    width: calc(100vw - 32px);
  }
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  background-color: var(--color-color-primary);
  padding: 11px 16px;
  width: 314px;
  height: 50px;
  color: var(--color-grey-1);

  :hover {
    background-color: var(--color-color-primary-2);
  }
`;
