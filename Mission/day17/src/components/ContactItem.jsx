import "./ContactItem.css";
import { contactDispatchedContext } from "../App";
import { memo, useContext } from "react";

/* ✅ 10. Context로 공급받을 것이므로 매개변수에서 onRemoveContact 제거 */
function ContactItem({ id, name, contact }) {
  /* ✅ 11. contactDispatchContext 에서 onRemoveContact 공급받기 */
  const { onRemoveContact } = useContext(contactDispatchedContext);
  return (
    <div className='ContactItem'>
      <div className='name'>{name}</div>
      <div className='contact'>{contact}</div>
      <button onClick={() => onRemoveContact(id)}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);
