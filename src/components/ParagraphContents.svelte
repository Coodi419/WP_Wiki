<script>
    import EachContent from "./EachContent.svelte";

    export let countParagraph = 0;
    export let content = '';
    export let dictVisible = {};

    const splitContents = content.split('\n')
</script>

<div class="section_{countParagraph}">
    {#key dictVisible}
        {#if (dictVisible[countParagraph])}
            <div style="">
                {#each splitContents as splitContent}
                    <EachContent splitContent="{splitContent}" />
                {/each}
            </div>
        {:else}
            <div style="display: none;">
                {#each splitContents as splitContent}
                    <EachContent splitContent="{splitContent}" />
                {/each}
            </div>
        {/if}
    {/key}
</div>

<style>

</style>