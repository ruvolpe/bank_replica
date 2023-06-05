import { TextStyledTitle2, TextStyledTitle3 } from "../../styles/styledTexts";
import EntryListContainer from "./EntryListContainer/EntryListContainer";
import { StyledDiv } from "./style";

function List({ entryList, setEntryList }) {
  if (entryList.length != 0) {
    return (
      <StyledDiv>
        <TextStyledTitle3>Resumo Financeiro</TextStyledTitle3>
        <EntryListContainer entryList={entryList} setEntryList={setEntryList} />
      </StyledDiv>
    );
  } else {
    return (
      <StyledDiv>
        <TextStyledTitle3>Resumo Financeiro</TextStyledTitle3>
        <TextStyledTitle2>
          Você ainda não possui nenhum lançamento{" "}
        </TextStyledTitle2>
      </StyledDiv>
    );
  }
}

export default List;
