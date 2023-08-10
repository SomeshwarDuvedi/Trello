import Header from './components/Header';
import './App.css';
import Sidebar from './components/Sidebar';
import BodyComponent from './components/Body';
import { Provider } from 'react-redux';
import store from './store'

const App = ()=> {
  
  return (
    <Provider store={store}>
    <div className="App flex-col">
      <Header />
      <div className='flex'>
        <Sidebar />
        <BodyComponent />
      </div>
    </div>
    </Provider>
  );
}

export default App;

