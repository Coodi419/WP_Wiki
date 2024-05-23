<script>
    import ParagraphContents from "../ParagraphContents.svelte";
    import EachContent from "../EachContent.svelte";

    export let writeOutput = {};
    export let matchesParagraph = [];

    function click_title(n)  {
        const headline_string = "headline_" + n;
        const down_arrow_string = "down_arrow_" + n;
        const num_string = "num_" + n;

        // const section_string = "section_" + n;
        // if(document.getElementById(down_arrow_string).name === "chevron-forward-outline") {
        if (dictVisible[n] === false) {
            dictVisible[n] = true;
            document.getElementById(headline_string).style.color = "black";
            document.getElementById(down_arrow_string).style.color = "black";
            document.getElementById(down_arrow_string).name = "chevron-down-outline";
            document.getElementById(num_string).style.color = "#0275d8";
            // document.getElementById(section_string).style.display = "block";
        }
        else {
            dictVisible[n] = false;
            document.getElementById(headline_string).style.color = "#b3b3b3";
            document.getElementById(down_arrow_string).style.color = "#b3b3b3";
            document.getElementById(down_arrow_string).name = "chevron-forward-outline";
            document.getElementById(num_string).style.color = "#80BAEB";
            // document.getElementById(section_string).style.display = "none";
        }
    }

    const makeFinalHtml = (indexMatch, line, match, matches, nowGetParagraphNum) => {
        if (indexMatch === matches.length-1)
            return `<span class=\"section_${nowGetParagraphNum}\">${line.slice(match.index + match[0].length)}</span>`;
        else
            return `<span class="section_${nowGetParagraphNum}"></span>`;
    }

    let countParagraph = 0; let textParagraph = [0, 0, 0]
    // const getParagraph = () => {return countParagraph;}
    const incrementParagraph = () => {return ++countParagraph;}
    const recordParagraph = (num) => {
        switch (num) {
            case '2':
                textParagraph[1] = textParagraph[2] = 0;
                return `${++textParagraph[0]}`;
            case '3':
                textParagraph[2] = 0;
                return `${textParagraph[0]}-${++textParagraph[1]}`;
            default:  // 4 and more
                return `${textParagraph[0]}-${textParagraph[1]}-${++textParagraph[2]}`;
        }
    }

    const resetParagraph = () => {
        countParagraph = 0;
        textParagraph = [0, 0, 0];
        return true;
    }

    const content = writeOutput.data.content;
    // const matches = [...content.matchAll(/\[\[H[2-4]:([^\[\]]*)\]\]/g)]

    let dictVisible = {}
    for (let match of Array(matchesParagraph.length).keys()) {
        dictVisible[match+1] = true;
    }

    const matchesFootnotes = [...content.matchAll(/\[\[F:([^\[\]]*)\]\]/g)];
    let dictFootnotesText = {  // TODO: 이거 해결 어떻게 해야 본문에 넣을까?
        // 글자: [숫자, 남은갯수, 갯수, 텍스트] <- 글자인 경우 첫번째 텍스트만 반영
        // 숫자: 텍스트
    };

    let dictTextToFootnote = {
        // 텍스트: 숫자/텍스트
    };

    let listFootnotesText = [
        // 그냥 인덱스 순서대로 글자/숫자
    ];

    let countFootnote = 0;
    for (let match of matchesFootnotes) {
        const splitMatch = match[1].split('|');

        if (splitMatch.length === 1) {
            countFootnote++;
            dictFootnotesText[countFootnote] = match[1];
            listFootnotesText.push(countFootnote);
            dictTextToFootnote[match[1]] = countFootnote;
        }
        else if (splitMatch.length === 2) {
            if (dictFootnotesText[splitMatch[1]] === undefined) {
                listFootnotesText.push(splitMatch[1])
                dictFootnotesText[splitMatch[1]] = [++countFootnote, 1, 1, splitMatch[0]];
                dictTextToFootnote[splitMatch[0]] = countFootnote;
            }
            else {
                dictFootnotesText[splitMatch[1]][1]++
                dictFootnotesText[splitMatch[1]][2]++
            }
        }
    }
</script>

<section>
    {#if (matchesParagraph.length === 0)}
        <EachContent splitContent="{content}" dictTextToFootnote="{dictTextToFootnote}"/>

    {:else}
        {@const resetParesult = resetParagraph()}
        {@const lengthMatches = matchesParagraph.length}
        {#each {length: lengthMatches} as _, indexMatch}
            {@const match = matchesParagraph[indexMatch]}
            {@const numberParagraph = match[0].split(':')[0][3]}
            {@const nowParagraphNum = incrementParagraph()}
            {@const nowParagraphText = recordParagraph(numberParagraph)}
            <!--
            {#if (numberParagraph === '2')}
                <h2 id="para_{nowParagraphText}" class="bottom_line"><ion-icon name="chevron-down-outline" id="down_arrow_{nowParagraphNum}" class="down_arrow" on:click="{() => click_title(`${nowParagraphNum}`)}"></ion-icon><a href="#index" id="num_{nowParagraphNum}">{nowParagraphText}.</a><span id="headline_{nowParagraphNum}" class="headline">&nbsp;{match[1]}</span></h2>
            {:else if (numberParagraph === '3')}
                <h3 id="para_{nowParagraphText}" class="bottom_line"><ion-icon name="chevron-down-outline" id="down_arrow_{nowParagraphNum}" class="down_arrow" on:click="{() => click_title(`${nowParagraphNum}`)}"></ion-icon><a href="#index" id="num_{nowParagraphNum}">{nowParagraphText}.</a><span id="headline_{nowParagraphNum}" class="headline">&nbsp;{match[1]}</span></h3>
            {:else if (numberParagraph === '4')}
                <h4 id="para_{nowParagraphText}" class="bottom_line"><ion-icon name="chevron-down-outline" id="down_arrow_{nowParagraphNum}" class="down_arrow" on:click="{() => click_title(`${nowParagraphNum}`)}"></ion-icon><a href="#index" id="num_{nowParagraphNum}">{nowParagraphText}.</a><span id="headline_{nowParagraphNum}" class="headline">&nbsp;{match[1]}</span></h4>
            {/if}
            -->
            {@const TextLinkSplit = match[1].split('|')}
            {#if (TextLinkSplit.length === 1)}  <!-- TODO: 아무 내용 없으면 class="bottom_line" 없게 -->
                <h2 id="para_{nowParagraphText}" class="bottom_line"><ion-icon name="chevron-down-outline" id="down_arrow_{nowParagraphNum}" class="down_arrow" on:click="{() => click_title(`${nowParagraphNum}`)}"></ion-icon><a href="#index" id="num_{nowParagraphNum}">{nowParagraphText}.</a><span id="headline_{nowParagraphNum}" class="headline">&nbsp;{TextLinkSplit[0]}</span></h2>
            {:else}
                {#if (TextLinkSplit[0].startsWith('http://') || TextLinkSplit[0].startsWith('https://'))}

                    <h2 id="para_{nowParagraphText}" class="bottom_line">
                        <ion-icon name="chevron-down-outline" id="down_arrow_{nowParagraphNum}" class="down_arrow" on:click="{() => click_title(`${nowParagraphNum}`)}"></ion-icon><a href="#index" id="num_{nowParagraphNum}">{nowParagraphText}.</a>
                        <a href="{TextLinkSplit[0]}"><span id="headline_{nowParagraphNum}" class="headline">&nbsp;{TextLinkSplit[1]}</span></a>
                    </h2>
                {:else}
                    <h2 id="para_{nowParagraphText}" class="bottom_line">
                        <ion-icon name="chevron-down-outline" id="down_arrow_{nowParagraphNum}" class="down_arrow" on:click="{() => click_title(`${nowParagraphNum}`)}"></ion-icon><a href="#index" id="num_{nowParagraphNum}">{nowParagraphText}.</a>
                        <span id="headline_{nowParagraphNum}" class="headline">&nbsp;</span><a href="/w/{TextLinkSplit[0]}"><span id="headline_{nowParagraphNum}" class="headline">{TextLinkSplit[1]}</span></a>
                    </h2>
                {/if}
            {/if}


            {#if (indexMatch === lengthMatches-1)}
                <ParagraphContents
                        content="{content.slice(match.index + match[0].length)}"
                        countParagraph="{indexMatch+1}"
                        dictVisible="{dictVisible}"
                        dictFootnotesText="{dictFootnotesText}"
                        dictTextToFootnote="{dictTextToFootnote}" />
            {:else}
                <ParagraphContents
                        content="{content.slice(match.index + match[0].length, matchesParagraph[indexMatch+1].index)}"
                        countParagraph="{indexMatch+1}"
                        dictVisible="{dictVisible}"
                        dictFootnotesText="{dictFootnotesText}"
                        dictTextToFootnote="{dictTextToFootnote}" />
            {/if}
        {/each}

        <br>
        <div class="bottom_line"></div>
        <br>

        {#each listFootnotesText as footnote}
            {#if isNaN(footnote)}
                {@const numberFootnote = dictFootnotesText[footnote][0]}
                <div id="bottom_footnote_{footnote}">
                    <span>[{footnote}]</span>
                    {#each {length: dictFootnotesText[footnote][2]} as _, index}
                        <sup><a href="#{numberFootnote}-{index+1}" class="footnote">{numberFootnote}.{index+1}&nbsp;</a></sup>
                    {/each}
                    <span>{dictFootnotesText[footnote][3]}</span>
                </div>
            {:else}
                <div id="bottom_footnote_{footnote}">
                    <a href="#{footnote}" class="footnote">[{footnote}]</a>
                    <span>&nbsp;{dictFootnotesText[footnote]}</span>
                </div>
            {/if}
        {/each}
    {/if}
</section>

<style>
    section {
        padding: 20px;
        height: auto;
    }
    #num {
        color: #0275d8;
    }
    #num :hover {
        color: #0263b8;
        text-decoration: underline;
    }
    .headline{
        cursor: pointer;
    }
    h2 {
        padding: 5px;
    }

    .bottom_line {
        border-bottom: 1px solid #ced4da;
    }

    .down_arrow{
        color: #666;
        float: left;
        font-size: .9em;
        font-weight: 400;
        line-height: 1.8em;
        margin: 0.2rem 0.4rem 0.4em 0;
        text-align: center;
        width: 0.9em;
        cursor: pointer;
    }
    #text_contents {
        font-size: 14px;
    }
    a {
        color: #0275D8;
    }

    .footnote {
        color: darkgoldenrod;
    }
</style>