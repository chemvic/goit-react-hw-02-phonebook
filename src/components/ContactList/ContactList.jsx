import PropTypes from 'prop-types';
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList=({contacts,filter})=>{
  
    return(
             <ul className={css.contacts}>
       {contacts
			.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
			.map(({name, number, id}) => (<Contact key={id} name={name} number={number}/>
            ))}
       </ul>
    )
}

ContactList.propTypes={
    filter: PropTypes.string.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.exact(
          {
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,            
            id: PropTypes.string.isRequired   
          }
        ),
      ),
}

export default ContactList;