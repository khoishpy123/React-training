import { useReducer, useRef } from "react";
import "./App.css";

//1. innitState
const innitState = {
  job: "",
  jobs: [],
};

const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DEL_JOB = "del_job";

//2. Action
const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const delJob = (payload) => {
  return {
    type: DEL_JOB,
    payload,
  };
};

//3. Reducer
const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DEL_JOB:
      const newJobs = [...state.jobs];

      newJobs.splice(action.payload, 1);

      newState = {
        ...state,
        jobs: newJobs,
      };
      break;
    default:
      throw new Error("co loi");
  }
  return newState;
};

//4. Dispatch
function App() {
  const [state, Dispatch] = useReducer(reducer, innitState);

  const { job, jobs } = state;

  const inputRef = useRef();

  const handleAddJob = () => {
    Dispatch(addJob(job));
    Dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Todo</h1>
      <input
        ref={inputRef}
        value={job}
        onChange={(e) => {
          Dispatch(setJob(e.target.value));
        }}
        placeholder="enter todo..."
      />
      <button onClick={handleAddJob}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span
              onClick={() => {
                Dispatch(delJob(index));
              }}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
