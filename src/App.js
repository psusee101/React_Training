import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData } from "./actions";
const App = () => {
const dispatch = useDispatch();
// Selects the state value from the store.
const todo = useSelector((state) => state.data.todo);
// Dispatches action to add the data
const handleAddData = ()=>dispatch(addData());
// Dispatches action to delete the data.
const handleDeleteData = ()=>dispatch(deleteData());
return (
	<div>
	<button onClick={handleAddData}>Add Data</button>
	<button onClick={handleDeleteData}>Delete Data</button>

	{todo && <div>{JSON.stringify(todo)}</div>}
	</div>
);
};

export default App;
