<script>
	import {Router, Link, Route } from 'svelte-routing'
	import Home from "./routes/Home.svelte"
	import Login from './routes/Login.svelte';
	export let url = "";
	let number;
	let inputNumber;

	const request = async (endpoint) => {
		const resp = await fetch(`http://localhost:8000/api${endpoint}`);
		const result = await resp.json();
		return result;
	};

	const getNumberFromBackend = async (no) => {
		const result = await request(`/post/${no}`);
		number = result.data;
	};
  </script>
  
  <main>
	<Router {url}>
		<Route path="/" component={Home} />
		<Route path="/login" component={Login} />
	</Router>
	<h1>Fast Blog</h1>
	<p>We are building our blog using FastAPI and Svelte!</p>
	<p>response number: {number || ''}</p>
	<input bind:value={inputNumber}>
	<button type="button" on:click={() => getNumberFromBackend(inputNumber)}>submit</button>
  </main>

  <style>
	h1 {
		color: brown;
	}
  </style>