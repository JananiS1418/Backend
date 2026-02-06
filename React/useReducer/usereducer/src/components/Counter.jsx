import { useReducer } from "react";

const initialvalue = 0;

const counterReduce = (state, action) => {
  if (action.type === "INC") {
    return state + 1;
  }
  if (action.type === "DEC") {
    return state - 1;
  }
  if (action.type === "RES") {
    return initialvalue;
  }
  return state;
};

const Counter = () => {
  const [count, stateDispatch] = useReducer(counterReduce, initialvalue);

  return (
    <>
      <div  className="bg-amber-900 gap-3 text-white flex flex-col justify-center items-center p-10">
        <h1>Count</h1>
        <p>{count}</p>
<div className="flex gap-5">
    <button className="bg-white text-black p-1 w-20 rounded" onClick={() => stateDispatch({ type: "INC" })}>
          Increment
        </button>

        <button className="bg-white text-black p-1 w-22 rounded" onClick={() => stateDispatch({ type: "DEC" })}>
          Decrement
        </button>

        <button className="bg-white text-black p-1 w-20 rounded" onClick={() => stateDispatch({ type: "RES" })}>
          Reset
        </button>

</div>
        
      </div>
    </>
  );
};

export default Counter;
