import './App.css';

import { range } from "rxjs";
import { map, filter } from "rxjs/operators";

range(1, 200)
  .pipe(
    filter(x => x % 2 === 1),
    map(x => x + x)
  )
  .subscribe(x => console.log(x));

function App() {
  return (
    <div className="App">
      
      这是个页面
      
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
