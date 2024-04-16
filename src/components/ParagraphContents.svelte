<script>
    import EachContent from "./EachContent.svelte";

    export let countParagraph = 0;
    export let content = '';
    export let dictVisible = {};
    export let dictFootnotesText = {};
    export let dictTextToFootnote = {};

    const splitContents = content.split('\n')
</script>

<div class="section_{countParagraph}">
    {#key dictVisible}
        {#if (dictVisible[countParagraph])}
            <div style="">
                {#each splitContents as splitContent}
                    <EachContent splitContent="{splitContent}"
                                 dictFootnotesText="{dictFootnotesText}"
                                 dictTextToFootnote="{dictTextToFootnote}" />
                {/each}
            </div>
        {:else}
            <div style="display: none;">
                {#each splitContents as splitContent}
                    <EachContent splitContent="{splitContent}"
                                 dictFootnotesText="{dictFootnotesText}"
                                 dictTextToFootnote="{dictTextToFootnote}"/>
                {/each}
            </div>
        {/if}
    {/key}
</div>

<style>

</style>