import Board from "./components/Board";
import Card from "./components/Card";


// const dragStart = (e) => {
//   console.log("dragStart", e)
//   // e.preventDefault();
  
//   e.dataTransfer.setData('card_id', e.target.id);
//   e.dataTransfer.setData('data', JSON.stringify(e.target.data));

//   // setTimeout(() => {
//   //   e.target.style.display = "none";
  
//   // }, 100);
// };
// const dragOver = (e) => {
//   console.log("dragOver", e)
//   e.stopPropagation();
 
// };


function App() {
  return (
    <div>
      <main className="flexbox">
        <Board className="block-s" id="board-1" droppable={false}>

          <Card id="card-1" draggable={true} className="card" data = {{ type : "text", placeholder : "text type input" , autoComplete : "none"}}>
            <input type="text" placeholder="text type input" autoComplete="none" />
          </Card>
          <Card id="card-2" draggable={true} className="card" data = {{type : "radio", label : "Radio Button"}}>
            <input type="radio" />
            <label> Radio Button</label>

          </Card>
       
          <Card id="card-3" draggable={true} className="card" data = {{ type : "checkbox" , label : "Checkbox" }}>
            <input type="checkbox" />
            <label> checkbox</label>
          </Card>
          <Card id="card-4" draggable={true} className="card" data = {{ type: "password", placeholder:"Password",  autoComplete:"none"}}>
          <input type="password" placeholder="Password"  autoComplete="none"/>
          </Card>
          <Card id="card-5" draggable={true} className="card" data = {{ type: "submit" }}>
            <input type="submit" />
          </Card>
          {/* <input id = "input" type="checkbox" draggable={true}  onDragStart={dragStart} onDragOver={dragOver} data ={{type : "input"}}/> */}

        </Board>

        <Board className="block-b" id="board-2" droppable={true}>
        
        </Board>
      </main>
    </div>
  );
}

export default App;
