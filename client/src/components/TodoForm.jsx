import { Form, InputGroup, Button } from "react-bootstrap";

import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo(text));

    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="form mt-5" onSubmit={onFormSubmit}>
      <div className="d-flex">
        <InputGroup className="container mb-3">
          <Form.Control placeholder="Enter New Todo..." aria-label="Enter New Todo..." aria-describedby="basic-addon2" onChange={onInputChange} value={text} />
          <Button type="submit" variant="outline-secondary" id="button-addon2">
            Submit
          </Button>
        </InputGroup>
      </div>
    </form>
  );
};

export default TodoForm;
