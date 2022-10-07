import PropTypes from 'prop-types';
// ===========================
export const ContactList = ({contacts,filter})=>{ 
  const filterContacts=contacts.filter(({name})=> name.toLowerCase().includes(filter.toLowerCase()));
  console.log(filterContacts);
  return(       
    <ul>
      {!filter?
        contacts.map(({name,number,id})=><li key={id}>{name}:{number}</li>)
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