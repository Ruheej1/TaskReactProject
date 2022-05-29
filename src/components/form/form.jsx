import './form.css'
const Form = () => {

    return (
      <>


      <form>
          <h3 className='form-txt'>Say hello</h3>
        
          <input type="text" placeholder="Name" />

          <input type="text" placeholder="Email ID" />

          <input type="text" placeholder="Type something here" />
      </form>
      <button type="button" class="btn btn-primary send-btn">Send</button>
      </>
     
    );
  }

  export default Form;