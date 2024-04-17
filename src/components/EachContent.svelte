<script>
    import TextHighlights from "./TextHighlight.svelte";

    export let splitContent = '';
    export let dictTextToFootnote = {};
    export let dictFootnotesText = {};

    const matchesContent = [...splitContent.matchAll(/\[\[([^\[\]]*)\]\]/g)]

    let fontsize = 14;

    // TODO: font-size : calc(var(--fontsize ) * 1px); 이렇게 css로 font-size 보내기
</script>

<div class="contentdiv">
    {#if matchesContent.length === 0}
        <span class="text_content"> {splitContent} </span>
    {:else}
        {#if (splitContent.length !== 0)}
            {#if matchesContent.length !== 0}
                {@const lastContent = matchesContent[matchesContent.length-1]}
                <span class="text_content">{splitContent.slice(0, matchesContent[0].index)}</span>
                {#each {length: matchesContent.length-1} as _, countMatchContent}
                    {@const matchContent = matchesContent[countMatchContent]}
                    {@const splitMatchContent = matchContent[1].split(':')}

                    {#if (splitMatchContent[0] === 'O')}
                        <TextHighlights splitMatchContent="{splitMatchContent}" />
                    {:else}
                        {#if (splitMatchContent[0] === 'L')}
                            {@const splitLink = splitMatchContent[1].split('|')}
                            {#if (splitLink.length === 1)}
                                <a href="{splitLink[0]}" class="text_content">{splitLink[0]}</a>
                            {:else if (splitLink.length === 2)}
                                <a href="{splitLink[0]}" class="text_content">{splitLink[1]}</a>
                            {/if}
                        {:else if (splitMatchContent[0] === 'P')}
                            <a class="text_content"><img href="{splitMatchContent[1]}"></a>

                        {:else if (splitMatchContent[0] === 'F')} <!-- TODO: 미완성 -->
                            {@const splitFootnote = splitMatchContent[1].split('|')}
                            {#if (splitFootnote.length === 1)}
                                {@const numberParagraph = dictTextToFootnote[splitFootnote[0]]}
                                <a href="#bottom_footnote_{numberParagraph}" class="footnote text_content"> <sup> [{numberParagraph}] </sup> </a>
                            {:else if (splitFootnote.length === 2)}
                                {@const textFootnote = dictFootnotesText[splitFootnote[1]]}
                                {@const countFootnote = 1} {--textFootnote[1]}
                                <a href="#bottom_footnote_{splitFootnote[0]}" id="{textFootnote[0]}-{textFootnote[2] - countFootnote}" class="footnote text_content"> <sup> [{splitFootnote[1]}] </sup> </a>

                            {/if}
                        {/if}
                    {/if}
                    <span class="text_content">{splitContent.slice(
                        matchContent.index + matchContent[0].length, matchesContent[countMatchContent+1].index
                    )}</span>
                {/each}

                {@const splitMatchContent = lastContent[1].split(':')}
                {#if (splitMatchContent[0] === 'O')}
                    <TextHighlights splitMatchContent="{splitMatchContent}" />
                {:else}
                    {#if (splitMatchContent[0] === 'L')}
                        {@const splitLink = splitMatchContent[1].split('|')}
                        <!-- {@const isExistUrl = } -->
                        {#if (splitLink.length === 1)}
                            <a href="{splitLink[0]}" class="text_content">{splitLink[0]}</a>
                        {:else if (splitLink.length === 2)}
                            <a href="{splitLink[0]}" class="text_content">{splitLink[1]}</a>
                        {/if}
                    {:else if (splitMatchContent[0] === 'P')}
                        <a class="text_content"><img href="{splitMatchContent[1]}"></a>

                    {:else if (splitMatchContent[0] === 'F')}
                        {@const splitFootnote = splitMatchContent[1].split('|')}
                        {#if (splitFootnote.length === 1)}
                            {@const numberParagraph = dictTextToFootnote[splitFootnote[0]]}
                            <a href="#bottom_footnote_{numberParagraph}" class="footnote text_content"> <sup> [{numberParagraph}] </sup> </a>
                        {:else if (splitFootnote.length === 2)}
                            {@const textFootnote = dictFootnotesText[splitFootnote[1]]}
                            {@const countFootnote = --textFootnote[1]}
                            <a href="#bottom_footnote_{splitFootnote[0]}" id="{textFootnote[0]}-{textFootnote[2] - countFootnote}" class="footnote text_content"> <sup> [{splitFootnote[1]}] </sup> </a>
                        {/if}
                    {/if}
                {/if}
                <span class="text_content">{splitContent.slice(
                    lastContent.index + lastContent[0].length
                )}</span>
            {/if}
        {/if}
    {/if}
</div>

<style>
    .footnote {
        color: darkgoldenrod;
    }

    a.footnote {
        text-decoration: none;
    }

    .text_content {
        font-size: 14px;
    }

    .contentdiv {
        font-size: 0;
    }
</style>