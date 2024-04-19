<script>
    import {Router, Link, Route } from 'svelte-routing'

    import Home from "./routes/Home.svelte"
    import Login from './routes/Login.svelte'
    import EditScreen from './routes/EditScreen.svelte'
    import History from './routes/History.svelte'
 //   import { page } from '$app/stores'
    import { component_subscribe, debug } from 'svelte/internal';
    import { params } from 'svelte-spa-router';

    export let url = "";
    let number;
    let inputNumber;
</script>
  
<main>
    <Router {url}>
        <Route path = "/" component={Home} requestWrite={''}></Route>
        <Route path = "/login" component={Login} requestWrite={''}></Route>
        <Route path = "/edit/*path" component={EditScreen} requestWrite={''}></Route>
        <Route path = "/history" component={History} requestWrite={''}></Route>
        <Route path= "/w/*path" component={Home} requestWrite={''}></Route>
    </Router>
</main>

  <style>
    h1 {
        color: brown;
    }
  </style>