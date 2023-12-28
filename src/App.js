import { Provider } from 'react-redux';
import './App.css';
import Index from './Routingcomp/Index';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>  
     <div className="App">
<Index/>
    </div>
    </Provider>
 
  );
}

export default App;
 