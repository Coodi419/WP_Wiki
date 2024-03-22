<script>
	import {Router, Link, Route } from 'svelte-routing'
	import Home from "./routes/Home.svelte"
	import Login from './routes/Login.svelte';

	export let url = "";
  </script>
  
  <main>
	<Router {url}>
		<Route path="/" component={Home} />
		<Route path="/login.html" component={Login} />
	</Router>
  </main>
