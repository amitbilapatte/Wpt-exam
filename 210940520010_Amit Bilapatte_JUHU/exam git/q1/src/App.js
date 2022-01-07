import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div>
    <header>
        <div className="row">
        <div class="heading1">MyChatApp </div>
        <div class="heading2"> by AMIT BILAPATTE / 210940520010</div>
        </div>
      </header>

      <section>
        <div className="chattab">
          <input type= "text" placeholder= "Lets chat here..."></input>
          <button>SEND</button>
        </div>
        <div>
          <input type="text">Hii</input>
        </div>
        <div>
          <input type="text">Hello,</input>
        </div>
        <div>
          <input type="text">Whatsap</input>
        </div>
        <div>
          <input type="text">All good</input>
        </div>
        <div>
          <input type="text">All the best</input>
        </div>
      </section>

</div>
  );
}

export default App;


