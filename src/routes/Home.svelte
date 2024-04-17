<script>
	import Header from '.././components/Header.svelte'
	import Nav from '.././components/Nav.svelte'
	import Aside from '.././components/Aside.svelte';
	import Footer from '.././components/Footer.svelte';
	import Section from '.././components/Section.svelte';
	import Search_bar from './../components/Search_bar.svelte';

	export let path = undefined;

	if (path === '') { window.location.href = "/"; }
	
	async function getWrite(){
		if (path === undefined) {
			const res = await fetch(`/main`, {method: 'POST'});
			const json = await res.json();
			path = json.data.path;
			return json
		}
		else {
			const res = await fetch(`/write/output?path=${path}`, {method: 'POST'});
			const json = await res.json();
			return JSON.parse(json)
		}
	}
    let writeOutputPromise = getWrite();
</script>
<main>
	<Search_bar></Search_bar>
	<div id="contents">
		{#await writeOutputPromise}
			<div></div>
		{:then writeOutput}
			{@const matchesParagraph = [...writeOutput.data.content.matchAll(/\[\[H[2-4]:([^\[\]]*)\]\]/g)]}
			<Header path={path} writeOutput="{writeOutput}"/>
			<Nav writeOutput="{writeOutput}"/>
			{#if matchesParagraph.length !== 0}
				<Aside matchesParagraph="{matchesParagraph}"/>
			{/if}
			<Section writeOutput="{writeOutput}" matchesParagraph="{matchesParagraph}"/>
			<Footer/>
		{/await}
	</div>
</main>

<style>
	* {
		box-sizing: border-box;
		text-wrap: balance;
		word-break: keep-all;
	}

	main {
		padding: 0;
		max-width: 240px;
		margin: 0 auto;
	}

	input { 
		font-family: inherit;
		font-size: 100%;
		line-height: 1.15;
		margin: 0;
	}

	.search_bar{
		position: relative;
		align-items: stretch;
    	background-color: #fff;
    	border-radius: 4px;
		display: flex;
		flex: 1;
		height: 100%;
		width: 0;
		cursor: pointer;
		text-decoration: none;
	}
	#search_place {
		background: transparent;
		border: none;
		color: #212529;
		flex: 1;
		min-width: 0;
		padding: 0 0 0 0.75rem;
	}
	#random {
		background-color: #fff;
		border-radius: 4px;
		padding: 0;
		width: 2.5rem;
		align-items: center;
		color: #212529;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
	}
	#random_icon {
		fill: currentColor;
		width: 0.85rem;
	}
	#search_tool {
		align-self: center;
		margin-left: 0.75rem;
		margin-right: 0.75rem;
		border-radius: 4px;
		display: flex;
		gap: 0.5rem;
		height: 2.5rem;
		width: 20rem;
	}
	#contents {
		background-color: #ffffff;
		min-height: 50rem;
		width:950px;
		margin-left: 9%;
		margin-top: 15px;
		border-radius: 5px;
		border: 1px solid #ccc;
		outline-offset: -2px;
		padding-block: 1px;
		padding-inline: 2px;
		word-break: break-all;
	}

	#tool_bar {
		width: 100%;
		height: 50px;
		padding: 6px;
		background: linear-gradient(90deg, #00a69c, #00a69c, #28b472);
		display: flex;
	}

	#profile {
		align-items: stretch;
		display: flex;
		position: relative;
		word-break: keep-all;
		box-sizing: border-box;
		color: #fff;
	}
	#profile_button {
		align-items: center;
		border-radius: 4px;
		color: #fff;
		display: flex;
		font-size: 1.05rem;
		font-weight: 500;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		text-decoration: none;
		box-sizing: border-box;
		word-break: keep-all;
		cursor: pointer;
	}
	#profile_icon {
		height: 1.1rem;
		width: auto;
		fill: currentColor;
		box-sizing: border-box;
		overflow: hidden;
		font-size: 1.05rem;
		font-weight: 500;
		color: #fff;
		word-break: keep-all;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>