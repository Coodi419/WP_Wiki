<script>
    import {Router, Link, Route } from 'svelte-routing'
    import Home from "./routes/Home.svelte"
    import Login from './routes/Login.svelte'
    import EditScreen from './routes/EditScreen.svelte'
 //   import { page } from '$app/stores'
    import { component_subscribe, debug } from 'svelte/internal';
    import { params } from 'svelte-spa-router';

    export let url = "";
    let number;
    let inputNumber;

    function replacer(key, value) {
        if (typeof(value) === 'string') {
            return undefined;
        }
        return value;
    }

    const request = async (endpoint, formJson) => {
        const resp = await fetch(`http://localhost:8000/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(formJson, replacer)
        });

        const result = await resp.json();
        return result.data;
    };

    //const requestWrite = request('write/output', {'path': page.path})
</script>
  
  <main>
    <Router {url}>  
        <Route path = "/" component={Home} requestWrite={''}></Route>
        <Route path = "/login" component={Login} requestWrite={''}></Route>
        <Route path = "/edit" component={EditScreen} requestWrite={''}></Route>
        <Route path= "/w/*path" component={Home} requestWrite={''}></Route>
    </Router>

  </main>

  <style>
    h1 {
        color: brown;
    }
  </style>