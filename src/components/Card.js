function Card({ className, children, id, draggable , data}) {

  const dragStart = (e) => {
    e.dataTransfer.setData('card_id', e.target.id);
    e.dataTransfer.setData('data', JSON.stringify(data));
  };
  
  const dragOver = (e) => e.stopPropagation();

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
