import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

//THEN I see a contact form with fields for a name, an email address, and a message
//WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required

//WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

function Contact() {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
    </>
  );
}

export default Contact;
