import React, { useReducer } from 'react';

const Checkbox = () => {
  const [checked, setChecked] = useReducer(
    checked => !checked,
    false
  );

  return (
    <>
      <label>
        {checked ? "checked" : "not checked"}
        <input
          type="checkbox"
          value={checked}
          name={"Checkbox"}
          onChange={setChecked}
          data-testid="checkbox"
        />
      </label>
    </>
  );
};

export default Checkbox;