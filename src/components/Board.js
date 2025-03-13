import { useState } from "react";
import Modal from "./Modal";

function getInput(el, i) {
  switch (el.type) {
    case "text":
      return (
        <input type="text"  placeholder= {el.placeholder}  autoComplete={el.autoComplete}/>
      );

    case "checkbox":
      return (
        <>
          <input type="checkbox" />
          <label> {el.label}</label>
        </>
      );

    case "radio":
      return  (
      <>
      <input type="radio" />
      <label> {el.label}</label>
    </>
    )
    case "password":
      return  <input type="password" placeholder= {el.placeholder}  autoComplete={el.autoComplete}/>;
    case "submit":
      return <input key={i} type="submit" />;
  }
}
const Data = ({ data }) => {
  return (
    <div>
      <form>
        {data.map((el, i) => {
          return getInput(el, i);
        })}
      </form>
    </div>
  );
};

function Board({ className, children, id, droppable }) {
  const [formData, setFormdata] = useState([]);

  const [showModal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(false);
  };

  const drop = (e) => {
    e.preventDefault();

    if (droppable) {
      const card_id = e.dataTransfer.getData("card_id");
      const input_details = e.dataTransfer.getData("data");

      const object = JSON.parse(input_details);

      let arr = [...formData];
      arr.push(object);
  
      setFormdata((prev) => arr, console.log(formData));
      console.log(formData);
      const card = document.getElementById(card_id);

      card.style.display = "block";
      card.style.margin = "20px";

      e.target.appendChild(card);
    }
  };
  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {!showModal ? (
        <>
          <div
            id={id}
            className={className}
            onDrop={drop}
            onDragOver={dragOver}
          >
            {children}
          </div>
          <button className="formButton" onClick={() => setModal(true)}>
            Get Form
          </button>
        </>
      ) : (
        // <div style={{ marginTop: "80vh" }}>
        //   {formData.map((el) => (
        //     <p>{el.type}</p>
        //   ))}
        // </div>
        <>
          {showModal && (
              <Data data={formData} />  
          )}
        </>
      )}
    </>
  );
}

export default Board;
