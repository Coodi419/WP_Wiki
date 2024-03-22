<script>
	import Router from 'svelte-spa-router'
	import Home from "./routes/Home.svelte"
	import Login from './Login.svelte';
  
	const routes = {
	  '/': Home,
	  '/login.html': Login,
	}
  </script>
  
  <Router {routes}/>