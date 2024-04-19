<script>
    export let splitMatchContent = [];

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

<span class="text_content">
    {@html changeTagByExpression(
        splitMatchContent[1].split('|'), splitMatchContent[2]
    )}
</span>

<style>
    .text_content {
        font-size: 14;
    }
</style>