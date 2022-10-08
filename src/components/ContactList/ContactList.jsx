import PropTypes from 'prop-types';
// ===========================
export const ContactList = ({contacts,filter,onDeleteContact})=>{ 
  const filterContacts=contacts.filter(({name})=> name.toLowerCase().includes(filter.toLowerCase()));
  console.log(filterContacts);
  
  return(    
    contacts.length===0
      ? <p>Your phonebook is empty</p>
      : <ul>
      {!filter?
        contacts.map(({name,number,id})=><li key={id} data-id={id}>{name}:{number} <button type="button" name="deleteBtn" onClick={(e)=>onDeleteContact(e)}>Delete</button></li>)
        :filterContacts.map(({name,number,id})=><li key={id}>{name}:{number}</li>)
      }
    </ul>        
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name:PropTypes.string.isRequired,
      number:PropTypes.string.isRequired,
      id:PropTypes.string.isRequired
    })
    ),
  filter:PropTypes.string
}