import PropTypes from 'prop-types';
import css from "./Contact.module.css";

const Contact=({name, number})=>{

    return(
        <>  
              <li className={css.contact_item}>{name}: {number}</li>							))}
        </>
 
    )
}

Contact.propTypes={
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}

export default Contact;