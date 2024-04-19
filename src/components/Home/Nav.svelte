<script>
    export let writeOutput = {};

    const Categories = writeOutput.data.category.split('|')
    const lastCategory = Categories.pop()
</script>

<nav style="display: flex">
    <p class="this_ryu">분류:&nbsp;</p>

    {#each Categories as category} <!-- fetch 결과의 데이터 개수만큼 반복 실행 -->
        <a class="this_ryu" href="/w/분류:{category}">{category}</a>
        <div>&nbsp;|&nbsp;</div>
    {/each}
    <a class="this_ryu" href="/w/분류:{lastCategory}">{lastCategory}</a>
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
    .this_ryu {
        margin: 0px;
        font-weight: 400;
        font-size: 14px;
    }
</style>