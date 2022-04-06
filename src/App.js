import { getAuth } from "firebase/auth";
import './App.css';
import app from "./firebase.init"

const auth = getAuth(app)

function App() {
  return (
    <div className="App">
      <h1>Email password Authentication</h1>

        <input type="text"/>
      <input type="text" name="" id="" />
    </div>
  );
}


export default App;
