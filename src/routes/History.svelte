<script>
	import Search_bar from './../components/Search_bar.svelte';
    import HistoryArticle from '../components/History/HistoryArticle.svelte'
</script>
<main>
	<Search_bar></Search_bar>
    <div id="contents">
        <HistoryArticle/>
    </div>
</main>

<style>
    * {
		box-sizing: border-box;
		text-wrap: balance;
		word-break: keep-all;
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
</style>