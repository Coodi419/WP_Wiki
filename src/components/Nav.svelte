<script>
    export let writeOutput = {};
</script>

<nav style="display: flex">
    <p id="this_ryu">분류:&nbsp;</p>
    {#await writeOutput} <!-- 동작 중일 때 처리 -->
        <div></div>
    {:then post} <!-- 정상 종료 후 처리 -->
        {@const Categories = post.data.category.split('|')}
        {@const lastCategory = Categories.pop()}
        {#each Categories as category} <!-- fetch 결과의 데이터 개수만큼 반복 실행 -->
            <a id="this_ryu" href="/w/분류:{category}">{category}</a>
            <div>&nbsp;|&nbsp;</div>
        {/each}
        <a id="this_ryu" href="/w/분류:{lastCategory}">{lastCategory}</a>
    {/await}
</nav>

<style>
    nav {
        margin: 20px;
        margin-top: 0px;
        padding: 3px;
        padding-top: 3px;
        padding-bottom: 3px;
        border-radius: 5px;
        border: 1px solid #a0a0a0;
    }
    #this_ryu {
        margin: 0px;
        font-weight: 400;
        font-size: 14px;
    }
</style>