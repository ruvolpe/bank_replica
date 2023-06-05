import { StyledInput } from "../../styles/styledInput"
import { TextStyledTitle4 } from "../../styles/styledTexts"

function FormInput({label, placeholder}){
    return (
        <div>
            <TextStyledTitle4 htmlFor="">{label}</TextStyledTitle4>
            <StyledInput type="text" placeholder={placeholder}/>
        </div>
    )
}

export default FormInput