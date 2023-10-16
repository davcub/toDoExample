'use client';
import React from 'react';

const Home = () => {
	const [todos, setTodos] = React.useState([]);
	const [inputData, setInputData] = React.useState('');

	const add = (e) => {
		e.preventDefault();
		const newTodos = [...todos, inputData];
		setTodos(newTodos);
	};

	const remove = (index) => {
		const newTodos = todos.splice(index, 1);
		console.log(newTodos);
	};

	const update = (index) => {
		todos[index] = 'Updated To Do';
		newTodos = todos;
		console.log(newTodos);
	};

	const handleChangeInputData = (e) => {
		setInputData(e.target.value);
	};

	return (
		<form
			onSubmit={add}
			className="bg-blue-200 p-4 m-20 rounded-xl flex flex-col"
		>
			<p className="bg-green-300 p-2 rounded">David Cubrilla To Do</p>
			<input
				className="m-4 rounded p-2"
				type="text"
				value={inputData}
				onChange={handleChangeInputData}
			/>
			{todos.map((todo) => {
				return (
					<div key={todo} className="bg-red-200 p-4 m-4 rounded">
						{todo}
						<button onClick={remove}>Remove</button>
						<button onClick={update}>Update</button>
					</div>
				);
			})}
			<button type="submit" className="bg-violet-300 p-2 rounded">
				Add To Do
			</button>
		</form>
	);
};

export default Home;
