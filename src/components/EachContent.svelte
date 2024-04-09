<script>
    export let splitContent = '';

    const matchesContent = [...splitContent.matchAll(/\[\[([^\[\]]*)\]\]/g)]

    const dictTextExpression = {
        B: 'strong',
        I: 'em',
        S: 'del',
        U: 'u',
        WU: 'sup',
        WD: 'sub',
    }

    const changeTagByExpression = (syntax, textTag) => {
        // console.log(syntax, syntax[-1], textTag, '!!!!!!!!!!!')
        if (syntax.length === 1) {
            return `<${dictTextExpression[syntax[0]]}>${textTag}</${dictTextExpression[syntax[0]]}>`
        }

        // console.log(`<${dictTextExpression[syntax[0]]}>${textTag}</${dictTextExpression[syntax[0]]}>`)
        textTag = changeTagByExpression(syntax.shift(), `<${dictTextExpression[syntax[0]]}>${textTag}</${dictTextExpression[syntax[0]]}>`)
        // console.log('func:', textTag)
        return textTag
    }
</script>

<div>
    {#if matchesContent.length === 0}
        <span> {splitContent} </span>
    {:else}
        {#if (splitContent.length !== 0)}
            {#if matchesContent.length !== 0}
                {@const lastContent = matchesContent[matchesContent.length-1]}
                <span>{splitContent.slice(0, matchesContent[0].index)}</span>
                {#each {length: matchesContent.length-1} as _, countMatchContent}
                    {@const matchContent = matchesContent[countMatchContent]}
                    {@const splitMatchContent = matchContent[1].split(':')}
                    {#if (splitMatchContent[0] === 'O')}
                        {@html `<span> ${changeTagByExpression(
                            splitMatchContent[1].split('|'), splitMatchContent[2]
                        )} </span>`}
                    {:else}
                        {#if (splitMatchContent[0] === 'L')}
                            {@const splitLink = splitMatchContent[1].split('|')}
                            {#if (splitLink.length === 1)}
                                <a href="{splitLink[0]}">{splitLink[0]}</a>
                            {:else if (splitLink.length === 2)}
                                <a href="{splitLink[0]}">{splitLink[1]}</a>
                            {/if}
                        {:else if (splitMatchContent[0] === 'P')}
                            <a><img href="{splitMatchContent[1]}"></a>

                        {:else if (splitMatchContent[0] === 'F')}
                            <span> [아직 미구현] </span>
                        {/if}
                    {/if}
                    <span>{splitContent.slice(
                        matchContent.index + matchContent[0].length, matchesContent[countMatchContent+1].index
                    )}</span>
                {/each}

                {@const splitMatchContent = lastContent[1].split(':')}
                {#if (splitMatchContent[0] === 'O')}
                    {@html `<span> ${changeTagByExpression(
                        splitMatchContent[1].split('|'), splitMatchContent[2]
                    )} </span>`}
                {:else}
                    {#if (splitMatchContent[0] === 'L')}
                        {@const splitLink = splitMatchContent[1].split('|')}
                        {#if (splitLink.length === 1)}
                            <a href="{splitLink[0]}">{splitLink[0]}</a>
                        {:else if (splitLink.length === 2)}
                            <a href="{splitLink[0]}">{splitLink[1]}</a>
                        {/if}
                    {:else if (splitMatchContent[0] === 'P')}
                        <a><img href="{splitMatchContent[1]}"></a>

                    {:else if (splitMatchContent[0] === 'F')}
                        <span> [아직 미구현] </span>
                    {/if}
                {/if}
                <span>{splitContent.slice(
                    lastContent.index + lastContent[0].length
                )}</span>
            {/if}
        {/if}
    {/if}
</div>

<style>

</style>