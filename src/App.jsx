// import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset} from './redux/actions';
import "./index.css";

function App() {

  const count  = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return ( 
    <div className='app'>
      <h1 className='title'>Redux Counter App</h1>
      <h2 className='count'>{count}</h2>
       <div className="btn-group">
      <button className="btn" onClick={() => dispatch(increment())}>+</button>
      <button className='btn' onClick={() => dispatch(decrement())}> - </button>
      <button className="btn reset" onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  )
}

export default App
