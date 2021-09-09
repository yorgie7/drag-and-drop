function Card({ className, children, id, draggable , data}) {

  const dragStart = (e) => {
    // console.log("dragStart", e)
    // e.preventDefault();
    console.log(data)
    
    e.dataTransfer.setData('card_id', e.target.id);
    e.dataTransfer.setData('data', JSON.stringify(data));

    // setTimeout(() => {
    //   e.target.style.display = "none";
    
    // }, 100);
  };
  const dragOver = (e) => {
    // console.log("dragOver", e)
    e.stopPropagation();
   
  };

  return (
    <div
      id={id}
      className={className}
      onDragStart={dragStart}
      onDragOver={dragOver}
      draggable={draggable}
    >
      {children}
    </div>
  );
}

export default Card;
