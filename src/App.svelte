<script>
	import Header from './components/Header.svelte'
	import Nav from './components/Nav.svelte'
	import Aside from './components/Aside.svelte';
	import Footer from './components/Footer.svelte';
	import Section from './components/Section.svelte';
	import Article from './components/Article.svelte';
	export let name;
</script>
<main>
	<div id="tool_bar">
		<div id="search_tool">
			<a href="/" title="아무 문서로 이동" id="random"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="random_icon" data-v-3070b92f=""><path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"></path></svg></a>
			<form class="search_bar">
				<input type="search" placeholder="여기에서 검색" autocomplete="off" spellcheck="false" tabindex="1" value="" id="search_place" data-v-3070b92f="">
				<a href="/" title="검색" id="random"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" id="random_icon" data-v-3070b92f=""><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg></a>
				<a href="/" title="이동" id="random"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" id="random_icon" data-v-3070b92f=""><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>
			</form>
			<div id="profile">
				<a href="/" id="profile_button"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" id="profile_icon" data-v-c0860ca0="" data-v-76d6fdf5=""><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg></a>
			</div>
		</div>
		
	</div>
	<div id="contents">
		<Header/>	
		<Nav/>
		<Aside/>
		<Section/>
		<Footer/>
	</div>
</main>

<style>
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
		height: 100%;
		width: 62%;
		margin-left: 9%;
		margin-top: 15px;
		border-radius: 5px;
		border: 1px solid #ccc;
		outline-offset: -2px;
		padding-block: 1px;
		padding-inline: 2px;
	}

	#tool_bar {
		width: 100%;
		height: 40px;
		padding: 6px;
		background: linear-gradient(90deg, #00a69c, #00a69c, #28b472);
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