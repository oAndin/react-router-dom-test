import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      <p>
        <Link to='/contacts/1'>Forma de contato 1</Link>
      </p>
      <p>
        <Link to='/contacts/2'>Forma de contato 2</Link>
      </p>
      <p>
        <Link to='/contacts/3'>Forma de contato 3</Link>
      </p>
    </>
  );
};

export default Contact;