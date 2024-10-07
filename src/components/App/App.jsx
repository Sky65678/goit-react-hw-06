import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContackList/ContackList";
import SearchBox from "../SearchBox/SearchBox";

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
