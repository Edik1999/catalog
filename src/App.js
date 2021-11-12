import './App.css';
import jsonData from './etsy.json';
import Listing from './components/Listing';

function App() {

  const data = jsonData;
  const data2 = '';

  return (
    <div className="App">
      <Listing items={data}/>
    </div>
  );
}

export default App;
