import React, { useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

function MealItemForm(props) {
  const { id, onAddToCart } = props;
  const amountInputRef = useRef();

  const submitForm = (event) => {
    event.preventDefault();
    const enteredQuantity = +amountInputRef.current.value;
    onAddToCart(enteredQuantity);
    amountInputRef.current.value = "1";
  };

  return (
    <form className={classes.form} onSubmit={submitForm}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount-${id}`,
          type: "number",
          min: "1",
          max: "10",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
