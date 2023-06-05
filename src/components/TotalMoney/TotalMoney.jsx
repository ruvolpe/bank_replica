import { TextStyledBody, TextStyledTitle3 } from "../../styles/styledTexts"
import { StyledDiv } from "./style"

function TotalMoney (entryList){

    function TotalAmount({entryList}){
        let counter = 0
        entryList.map((entry)=> {
            if (entry.kind ==="Entrada"){
                counter += entry.amount
            } else {
                counter -= entry.amount
            }
        })
        return counter
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