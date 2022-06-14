import axios from "axios";

function Form() {
  function onFormSubmit(event) {
    event.preventDefault();

    console.log(event);
    console.log(this);

    //Direct and simple
    // alert(`${event.target[0].value} ${event.target[1].value}`);

    //Better way
    const formData = new FormData(event.target);
    // alert(`Hello ${formData.get('first_name')} ${formData.get('last_name')}!`);

    axios.post(
      'https://crud1-ddb59-default-rtdb.firebaseio.com/people.json', 
      Object.fromEntries(formData.entries())
    );
  }

  return (
    <form className="Form" onSubmit={onFormSubmit}>
      <div>
        <label>
          First name
          <input type="text" name="first_name"/>
        </label>
      </div>
      <div>
        <label>
          Last name
          <input type="text" name="last_name" />
        </label>
      </div>
      <div>
        <label>
          Age
          <input type="number" name="age" />
        </label>
      </div>
      <div>
        <label>
          Email
          <input type="email" name="email" />
        </label>
      </div>
      <div>
        <label>
          Password
          <input type="password" name="password" />
        </label>
      </div>
      <button>OK</button>
    </form>
  )
}

export default Form;