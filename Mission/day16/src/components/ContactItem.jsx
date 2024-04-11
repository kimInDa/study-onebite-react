import "./ContactItem.css";
import { memo } from "react";

function ContactItem({ id, name, contact, onRemoveContact }) {
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={() => onRemoveContact(id)}>🗑️ Remove</button>
    </div>
  );
}

// ✅ React.memo를 활용한 ContactItem 컴포넌트 최적화
export default memo(ContactItem);
