import Contact from "../Contack/Contack";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiGetAllContacts } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const dispatch = useDispatch();

  const visibleUsers = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(apiGetAllContacts());
  }, [dispatch]);

  // const users = useSelector((state) => state.contacts.contacts);
  // const filterValue = useSelector((state) => state.filter.filterValue);

  // const visibleUsers = users.filter((user) => {
  //   const userName = user.name ? user.name.toLowerCase() : "";
  //   const userNumber = user.number ? user.number.toLowerCase() : "";
  //   return (
  //     userName.includes(filterValue.toLowerCase()) ||
  //     userNumber.includes(filterValue.toLowerCase())
  //   );
  // });

  return (
    <ul className={css.container}>
      {visibleUsers.map((item) => (
        <li className={css.item} key={item.id}>
          <Contact name={item.name} number={item.number} id={item.id} />
        </li>
      ))}
    </ul>
  );
}
