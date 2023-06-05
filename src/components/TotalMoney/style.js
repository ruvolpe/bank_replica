import styled from "styled-components"

export const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: flex-start;
    border: 1px solid var(--color-grey-2);
    width:355px;
    height:96px;
    margin-top:18px;
    padding: 20px 23px;

    div{
        display: flex;
        justify-content: space-between;
        width:100%;

        span{
            color: var(--color-color-primary);
        }
    }

    @media (max-width: 678px) {
    width: calc(100vw - 32px);
  }
`
