import './App.css';
import MyCallBackHook from './hooks/MyCallbackHook';
import MyHooksClock from './hooks/MyHooksClock';
import MyHooksComponent from './hooks/MyHooksComponent';
import LifeCycleComponent from './life-cycle/LifeCycleComponent';


function App() {
  return(
    <div className="App">
      {/*<LifeCycleComponent/>*/}
      {/*<MyHooksComponent/>*/}
      {/*<MyHooksClock/>*/}
      <MyCallBackHook/>
    </div>
  );
}

export default App;
