<script>
    export let matchesParagraph = [];

    let textParagraph = [0, 0, 0];

    const resetParagraph = () => {textParagraph = [0, 0, 0]; return true;}
    const recordParagraph = (num) => {
        switch (num) {
            case '2':
                textParagraph[1] = textParagraph[2] = 0;
                return [`${++textParagraph[0]}`, 2];
            case '3':
                textParagraph[2] = 0;
                return [`${textParagraph[0]}-${++textParagraph[1]}`, 3];
            default:  // 4 and more
                return [`${textParagraph[0]}-${textParagraph[1]}-${++textParagraph[2]}`, 4];
        }
    }

    resetParagraph()
</script>

<aside>
    <div class="index">
        <p id="index_text">목차</p>
        <div id="index_content">
            {#each matchesParagraph as match}
                {@const textParagraph = recordParagraph(match[0][3])}
                {@const textList = match[0].slice(5, match[0].length-2).split('|')}
                {#if (textList.length === 1)}
                    <span>{'\u00A0'.repeat((textParagraph[1] - 2) * 2)}<a href="#para_{textParagraph[0]}">{textParagraph[0]}</a>. {textList[0]}</span>

                {:else}

                    {#if (textList[0].startsWith('http://') || textList[0].startsWith('https://'))}
                        <span>{'\u00A0'.repeat((textParagraph[1] - 2) * 2)}<a href="#para_{textParagraph[0]}">{textParagraph[0]}</a>. <a href="{textList[0]}">{textList[1]}</a></span>
                    {:else}
                        <span>{'\u00A0'.repeat((textParagraph[1] - 2) * 2)}<a href="#para_{textParagraph[0]}">{textParagraph[0]}</a>. <a href="/w/{textList[0]}">{textList[1]}</a></span>
                    {/if}
                {/if}
            {/each}
        </div>
    </div>
</aside>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
    aside {
        margin: 20px;
        margin-top: 0px;
        padding: 3px;
        padding-top: 3px;
        padding-bottom: 3px;
        border-radius: 5px;
    }
    .index {
        border: 1px solid #ccc;
        display: inline-block;
        margin-left: 5px;
        padding: 12px 20px 18px 0;
        box-sizing: border-box;
        word-break: break-all;
    }
    #index_text {
        font-size: 1.10em;
        margin-left: 14px;
        tab-size: 4;
        text-size-adjust: 100%;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
    }
    #index_content {
        margin-top: 12px;
        padding-left: 20px;
        box-sizing: border-box;
        display: block;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
    }
    a {
        color: #0275D8;
    }
    span {
        display: block;
        box-sizing: border-box;
    }
    p {
        margin: 0;
    }
</style>