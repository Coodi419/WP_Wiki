<script>
	import {Router, Link, Route } from 'svelte-routing'
	import Home from "./routes/Home.svelte"
	import Login from './routes/Login.svelte'
	export let url = "";
	let number;
	let inputNumber;

	const request = async (endpoint) => {
		const resp = await fetch(`http://localhost:8000/${endpoint}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify('test')
		});
		const result = await resp.json();
		return result;
	};

	const getNumberFromBackend = async (no) => {
		const result = await request(`${no}`);
		number = result.data;
	};
  </script>
  
  <main>
	<Router {url}>
		<Route path="/" component={Home} answer = {3} />
		<Route path="/login" component={Login} />
	</Router>
  </main>

  <style>
	h1 {
		color: brown;
	}
  </style>
