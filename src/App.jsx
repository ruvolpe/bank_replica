import { useState } from "react";
import "./App.css";
import ValueForm from "./components/Form/Form.jsx";
import Header from "./components/Header/Header.jsx";
import List from "./components/List/List";
import { GlobalStyle } from "./styles/global";
import { StyledMain } from "./styles/styledMain";
import TotalMoney from "./components/TotalMoney/TotalMoney";

function App() {
  const [entryList, setEntryList] = useState([]);
  console.log(entryList);

  if (entryList.length !== 0) {
    return (
      <>
        <GlobalStyle />
        <Header />
        <StyledMain>
          <ValueForm className="item" setEntryList={setEntryList} />
          <List className="item" entryList={entryList} setEntryList={setEntryList} />
          <TotalMoney entryList={entryList} className="item" />
        </StyledMain>
      </>
    );
  } else {
    return (
      <>
        <GlobalStyle />
        <Header />
        <StyledMain>
          <ValueForm setEntryList={setEntryList} />
          <List entryList={entryList} setEntryList={setEntryList} />
        </StyledMain>
      </>
    );
  }
}

export default App;
