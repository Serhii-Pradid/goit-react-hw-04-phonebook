import { useState } from "react";
import shortid from "shortid";
import css from './Form.module.css'

const Form = ({ onSubmit }) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
  const {name, value} = event.target;

  switch (name) {
    case 'name':
      setName(value);
      break;

      case 'number':
      setNumber(value);
      break;
  
    default:
      break;
  }
}

const handleSubmit = event => {
  event.preventDefault();
  console.log(name, number)

  onSubmit(name, number);
  reset();
 };

 const reset = () => {
    setName('')
    setNumber('')
 }

 const nameInput = shortid.generate();

   return (
            <form onSubmit={handleSubmit}>
<div className={css.fieldForm}>
      <label htmlFor={nameInput}> Name
   <input
  type="text"
  placeholder="Name Surname"
  name="name"
  value={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={handleChange}
  id={nameInput}/>
    </label>

     <label htmlFor={nameInput}> Number

   <input
  type="tel"
  placeholder="xxx-xx-xx"
  name="number"
  value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  onChange={handleChange}/>
      </label>
</div>

<button className={css.buttonForm} type="submit"> Add Contact </button>

</form>
         );
  }  



export default Form;