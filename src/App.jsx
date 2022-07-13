import './App.css';
import MyHooksClock from './hooks/MyHooksClock';
import MyHooksComponent from './hooks/MyHooksComponent';
import LifeCycleComponent from './life-cycle/LifeCycleComponent';


function App() {
  return(
    <div className="App">
      {/*<LifeCycleComponent/>*/}
      {/*<MyHooksComponent/>*/}
      <MyHooksClock/>
    </div>
  );
}

export default App;
