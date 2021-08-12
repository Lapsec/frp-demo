import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './components/Main';
import { range } from "rxjs";
import { map, filter } from "rxjs/operators";

range(1, 2)
  .pipe(
    filter(x => x % 2 === 1),
    map(x => x + x)
  )
  .subscribe(x => console.log(x));

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='app_container'>
        <SideBar/>
        <Main/>
      </div>
      
    </div>
  );
}

if (module.hot) {  
  module.hot.accept('./App', () => {    
    const NextApp = require('./App').default;    
    // render with new App here
  });
}

export default App;
