import React, {Component} from "react";
import shortid from "shortid";
import css from './Form.module.css'

class Form extends Component {
    
    state = {
    name: '',
    number: ''
    }

handleChange = event => {
  const {name, value} = event.currentTarget
  this.setState({[name]: value})     // == ({[event.currentTarget.name]: event.currentTarget.value})
};

handleSubmit = event => {
  event.preventDefault();
  console.log(this.state)
  this.props.onSubmit(this.state);
  this.reset();
 };

 reset = () => {
    this.setState({name: '', number: ''})
 }

 nameInput = shortid.generate();

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
<div className={css.fieldForm}>
      <label htmlFor={this.nameInput}> Name
   <input
  type="text"
  placeholder="Name Surname"
  name="name"
  value={this.state.name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={this.handleChange}
  id={this.nameInput}/>
    </label>

     <label htmlFor={this.nameInput}> Number

   <input
  type="tel"
  placeholder="xxx-xx-xx"
  name="number"
  value={this.state.number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  onChange={this.handleChange}/>
      </label>
</div>

<button className={css.buttonForm} type="submit"> Add Contact </button>

</form>
         );
  }  
}


export default Form;