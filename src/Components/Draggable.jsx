import "./styles/Draggable.css";

import { useState } from "react";
import { FaGripVertical } from "react-icons/fa";


const DraggableReact = () => {


  const [items, setItems] = useState([
    { id: "1", content: "Condidata Name" },
    { id: "2", content: "Title" },
    { id: "3", content: "Current Location" },
    { id: "4", content: "Availability" },
    { id: "5", content: "Experience" },
    { id: "6", content: "Visa type" },
    { id: "7", content: "Relocation" },
    { id: "8", content: "Notes" },
  ]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();

    const sourceIndex = e.dataTransfer.getData("index");
    const newItems = [...items];
    const [movedItem] = newItems.splice(sourceIndex, 1);
    newItems.splice(targetIndex, 0, movedItem);

    setItems(newItems);
  };

  return (
    <>
      <div className="jayu">
        <ul className="item-list">
          {items.map((item, index) => (
              <li
              key={item.id}
              className="item"
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              > 
               <FaGripVertical className="checkboxPOPUP-1" />
              <input type="checkbox"/>

              {item.content}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DraggableReact;
