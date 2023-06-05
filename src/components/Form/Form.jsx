import { TextStyledBody, TextStyledTitle4 } from "../../styles/styledTexts";
import { StyledButton, StyledWrapper } from "./style";
import { useState } from "react";
import { StyledInput } from "../../styles/styledInput";
import { v4 as uuidv4 } from "uuid";
import { StyledSelect } from "../../fragments/TypeSelect/style";

function ValueForm({ setEntryList }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [kind, setKind] = useState("");
  function addEntryToList() {
    const newEntry = { id: uuidv4(), description, amount, kind };
    setEntryList((entryList) => [...entryList, newEntry]);
  }

  function submit(event) {
    event.preventDefault();
    addEntryToList();
    setDescription("");
    setAmount("");
    setKind("")
  }

  return (
    <form onSubmit={submit}>
      <StyledWrapper>
        <div>
          <div>
            <TextStyledTitle4 htmlFor="">Descrição</TextStyledTitle4>
            <StyledInput
              value={description}
              required
              type="text"
              placeholder="Digite aqui a sua descrição"
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <TextStyledBody>Exemplo: Compra de roupas</TextStyledBody>
        </div>
        <div>
          <TextStyledTitle4 htmlFor="">Valor R$</TextStyledTitle4>
          <StyledInput
            value={amount}
            required
            type="number"
            placeholder="0"
            min="0"
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div>
            <TextStyledTitle4>Tipo de Valor</TextStyledTitle4>
            <StyledSelect required value={kind} onChange={(event) => setKind(event.target.value)}>
                <option value="">Selecione o tipo de valor</option>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
            </StyledSelect>
        </div>
        <StyledButton type="submit">Inserir Valor</StyledButton>
      </StyledWrapper>
    </form>
  );
}

export default ValueForm;
