import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import connexion from "../../services/connexion";

function Select({ handleForm, title, name, value }) {
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    const getSelection = async () => {
      try {
        const mySelection = await connexion.get(`/api/${title}`);
        setSelection(mySelection.data);
      } catch (error) {
        console.error(error);
      }
    };
    getSelection();
  }, [title, value]);

  return (
    <label>
      {title}
      <select name={name} onChange={handleForm} required value={value}>
        {selection.map((select) => (
          <option key={select.id} value={select.id}>
            {select.label}
          </option>
        ))}
      </select>
    </label>
  );
}

Select.propTypes = {
  handleForm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
