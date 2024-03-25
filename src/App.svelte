<script>
	import {Router, Link, Route } from 'svelte-routing'
	import Home from "./routes/Home.svelte"
	import Login from './routes/Login.svelte';
	export let url = "";
	export let number;
	export let inputNumber = 3;
  </script>
  
  <main>
	<Router {url}>
		<Route path="/" component={Home} />
		<Route path="/login" component={Login} />
	</Router>
  </main>

  <style>
	h1 {
		color: brown;
	}
  </style>