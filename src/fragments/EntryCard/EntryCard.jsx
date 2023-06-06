import {
  TextStyledBody,
  TextStyledTitle3,
} from "../../styles/styledTexts";
import { StyledButton, StyledLi } from "./style";

function EntryCard({ entry, deleteEntry }) {

  return (
    <StyledLi entry={entry}>
      <div>
        <TextStyledTitle3>{entry.description}</TextStyledTitle3>
        <TextStyledBody>{entry.kind}</TextStyledBody>
      </div>
      <div>
        <TextStyledBody>R$ {entry.amount},00</TextStyledBody>
        <StyledButton onClick={() => deleteEntry(entry.id)}>Excluir</StyledButton>
      </div>
    </StyledLi>
  );
}

export default EntryCard;
