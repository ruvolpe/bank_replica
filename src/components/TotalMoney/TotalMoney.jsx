import { TextStyledBody, TextStyledTitle3 } from "../../styles/styledTexts"
import { StyledDiv } from "./style"

function TotalMoney (entryList){

    function TotalAmount({entryList}){
        return entryList.reduce((acc, entry)=> {
            return entry.kind === "Entrada" ? acc + +entry.amount : acc - +entry.amount}, 0)
    }

    let result = TotalAmount(entryList)

    return(
        <StyledDiv>
            <div>
                <TextStyledTitle3>Valor Total:</TextStyledTitle3>
                <TextStyledTitle3><span>R${result},00</span></TextStyledTitle3>
            </div>
            <TextStyledBody>O valor se refere ao saldo</TextStyledBody>
        </StyledDiv>
    )
}

export default TotalMoney