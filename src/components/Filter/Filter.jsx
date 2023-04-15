import React,{Component} from 'react';
import PropTypes from 'prop-types';
import css from "./Filter.module.css";

class Filter extends Component{
state={
    query:'',
}

    handleInputChange=({ target:{ value: query } }) => {
		this.setState({ query });
        this.props.onQuery(query);
          };

    render(){
        
    return(
        <label className={css.filter_lable}>
            <span>Find contacts by name</span>
        <input className={css.filter_input}
        type="text" 
        name="query" 
        onChange={this.handleInputChange}
        placeholder='Enter name for search ...'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters,
         apostrophe, dash and spaces.
          For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        </label>
    )}
}

Filter.propTypes = {
    onQuery: PropTypes.func.isRequired
    }

export default Filter;