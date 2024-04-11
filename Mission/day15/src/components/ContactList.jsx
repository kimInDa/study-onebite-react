import "./ContactList.css";
import ContactItem from "./ContactItem";

export default function ContactList({ contacs, onDelete }) {
  return (
    <div className='ContactList'>
      <div className='title'>Contact List</div>
      {contacs.map((contact) => (
        <ContactItem key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </div>
  );
}
