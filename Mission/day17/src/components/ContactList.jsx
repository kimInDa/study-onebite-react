import "./ContactList.css";
import ContactItem from "./ContactItem";
import { contactStateContext } from "../App";
import { useContext } from "react";

/* ✅ 7. Context로 공급받을 것이므로 매개변수에서 기존 Props 제거 */
export default function ContactList() {
  /* ✅ 8. contactStateContext 에서 contacts 공급받기 */
  const contacts = useContext(contactStateContext);
  return (
    <div className='ContactList'>
      <div className='title'>Contact List</div>
      {contacts.map((contact) => (
        /* ✅ 9. Context로 공급할 것이므로 props로 전달하던 onRemoveContact 제거 */
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
}
