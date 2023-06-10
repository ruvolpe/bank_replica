import EntryCard from "../../../fragments/EntryCard/EntryCard";

function EntryListContainer({ entryList, setEntryList }) {
  function deleteEntry(entryID) {
    setEntryList((entryList) =>
      entryList.filter((entry) => entry.id !== entryID)
    );
  }

  return (
    <ul>
      {entryList.map((entry) => (
        <EntryCard key={entry.id} entry={entry} deleteEntry={deleteEntry} />
      ))}
    </ul>
  );
}

export default EntryListContainer;
