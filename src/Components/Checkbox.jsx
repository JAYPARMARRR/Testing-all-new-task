import  { useState } from "react";
import mData from "./Checkbox.json";

function CheckboxList() {

  const [checkboxes, setCheckboxes] = useState(
    mData.map((data) => ({
      id: data.id,
      checked: false,
    }))
  );




  const handleMainCheckboxChange = (event) => {
    const isChecked = event.target.checked;

    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) => ({
        ...checkbox,
        checked: isChecked,
      }))
    );

  };



  const handleCheckboxChange = (event, id) => {
    const isChecked = event.target.checked;
    
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked: isChecked } : checkbox
      )
    );
  };




  return (
    <div>
      <label>



        <input
          type="checkbox"
          onChange={handleMainCheckboxChange}
          checked={checkboxes.every((checkbox) => checkbox.checked)}
        />



        Select All
      </label>
      <ul>
        {mData.map((data) => (
          <li key={data.id}>
            <label>


              <input
                type="checkbox"
                onChange={(event) => handleCheckboxChange(event, data.id)}
                checked={checkboxes.find((checkbox) => checkbox.id === data.id).checked}
              />
              {data.name}

              
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckboxList;
