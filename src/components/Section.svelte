<script>
    export let writeOutput = {};
    export let convertedContent = {};

    // window.onload = function () {
    //     var e1_1 = document.getElementById("down_arrow_1");
    //     var e1_2 = document.getElementById("headline_1");
    //     var e2_1 = document.getElementById("down_arrow_2");
    //     var e2_2 = document.getElementById("headline_2");
    //     e1_1.onclick = function() {click_title("1")};
    //     e1_2.onclick = function() {click_title("1")};
    //     e2_1.onclick = function() {click_title("2")};
    //     e2_2.onclick = function() {click_title("2")};
    // }
    // function click_title(n)  {
    //     var headline_string = "headline_" + n;
    //     var down_arrow_string = "down_arrow_" + n;
    //     var num_string = "num_" + n;
    //     var section_string = "section_" + n;
    //     if(document.getElementById(down_arrow_string).name === "chevron-forward-outline")
    //     {
    //         document.getElementById(headline_string).style.color = "black";
    //         document.getElementById(down_arrow_string).style.color = "black";
    //         document.getElementById(down_arrow_string).name = "chevron-down-outline";
    //         document.getElementById(num_string).style.color = "#0275d8";
    //         document.getElementById(section_string).style.display = "block";
    //     }
    //     else
    //     {
    //         document.getElementById(headline_string).style.color = "#b3b3b3";
    //         document.getElementById(down_arrow_string).style.color = "#b3b3b3";
    //         document.getElementById(down_arrow_string).name = "chevron-forward-outline";
    //         document.getElementById(num_string).style.color = "#80BAEB";
    //         document.getElementById(section_string).style.display = "none";
    //     }
    // }


    // function click_title(n)  {
    //     const headline_string = "headline_" + n;
    //     const down_arrow_string = "down_arrow_" + n;
    //     const num_string = "num_" + n;
    //     const section_string = "section_" + n;
    //     if(document.getElementById(down_arrow_string).name === "chevron-forward-outline") {
    //         document.getElementById(headline_string).style.color = "black";
    //         document.getElementById(down_arrow_string).style.color = "black";
    //         document.getElementById(down_arrow_string).name = "chevron-down-outline";
    //         document.getElementById(num_string).style.color = "#0275d8";
    //         document.getElementById(section_string).style.display = "block";
    //     }
    //     else {
    //         document.getElementById(headline_string).style.color = "#b3b3b3";
    //         document.getElementById(down_arrow_string).style.color = "#b3b3b3";
    //         document.getElementById(down_arrow_string).name = "chevron-forward-outline";
    //         document.getElementById(num_string).style.color = "#80BAEB";
    //         document.getElementById(section_string).style.display = "none";
    //     }
    // }

    function click_title(n)  {
        const headline_string = "headline_" + n;
        const down_arrow_string = "down_arrow_" + n;
        const num_string = "num_" + n;
        const section_string = "section_" + n;
        if(document.getElementById(down_arrow_string).name === "chevron-forward-outline") {
            document.getElementById(headline_string).style.color = "black";
            document.getElementById(down_arrow_string).style.color = "black";
            document.getElementById(down_arrow_string).name = "chevron-down-outline";
            document.getElementById(num_string).style.color = "#0275d8";
            for (let section of document.getElementsByClassName(section_string)) {section.style.display = "";}
        }
        else {
            document.getElementById(headline_string).style.color = "#b3b3b3";
            document.getElementById(down_arrow_string).style.color = "#b3b3b3";
            document.getElementById(down_arrow_string).name = "chevron-forward-outline";
            document.getElementById(num_string).style.color = "#80BAEB";
            for (let section of document.getElementsByClassName(section_string)) {section.style.display = "none";}
        }
    }

    const dictTextExpression = {
        B: 'strong',
        I: 'em',
        S: 'del',
        U: 'u',
        WU: 'sup',
        WD: 'sub',
    }

    function getLineNumber(text, index) {
      const match = text.slice(0, index).match(/\n/g);
      return (match ? match.length : 0) + 1;
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

    const makeFinalHtml = (indexMatch, line, match, matches, nowGetParagraphNum) => {
        if (indexMatch === matches.length-1)
            return `<span class=\"section_${nowGetParagraphNum}\">${line.slice(match.index + match[0].length)}</span>`;
        else
            return `<span class="section_${nowGetParagraphNum}"></span>`;


    }

    let countParagraph = 0; let textParagraph = [0, 0, 0]
    const getParagraph = () => {return countParagraph;}
    const incrementParagraph = () => {return ++countParagraph;}
    const recordParagraph = (num) => {
        switch (num) {
            case 2:
                textParagraph[1] = textParagraph[2] = 0;
                return `${++textParagraph[0]}`;
            case 3:
                textParagraph[2] = 0;
                return `${textParagraph[0]}-${++textParagraph[1]}`;
            default:  // 4 and more
                return `${textParagraph[0]}-${textParagraph[1]}-${++textParagraph[2]}`;
        }
    }


    let listFootnotes = [];
    let countFootnotes = 0;

    const appendFootnotes = (text) => { listFootnotes.push(text); countFootnotes++; }

    let isFootnoteMouseOver = false;
</script>

<section>
<!--    <div>
        <h2><ion-icon name="chevron-down-outline" id="down_arrow_1" class="down_arrow" on:click="{() => click_title('1')}"></ion-icon><a href="/" id="num_1">1.</a><span id="headline_1" class="headline">&nbsp개요</span></h2>
        <div id="section_1">
            <div id="text_contents">
                {#await writeOutput}
                    <div> 가져오는 중 잠시만 기다리세요 </div>
                {:then post}
                    <div>{post.data.content}</div>
                {/await}
                박도현: 1학년 3반 4번, 2학년 3반 4번, 3학년 4반 7번이다. 테트리스 고인물이<s>였</s>다.
            </div>
        </div>
        <h2><ion-icon name="chevron-down-outline" id="down_arrow_2" class="down_arrow"></ion-icon><a href="/" id="num_2">2.</a><span id="headline_2" class="headline">&nbsp상세</span></h2>
        <div id="section_2">
            <div id="text_contents">
                21기 도현 스쿼드중 얼굴 미남을 맡고 있다. <s>잘생긴 도현</s><br>
                앱등이다. 맥북 배경화면이 <a href="https://namu.wiki/w/%EB%AA%A8%EB%B0%94%EC%9D%BC%20%EA%B2%8C%EC%9E%84">모바일 게임</a> <a href="https://namu.wiki/w/%EB%B8%94%EB%A3%A8%20%EC%95%84%EC%B9%B4%EC%9D%B4%EB%B8%8C">블루아카이브</a> 캐릭터중 하나인 <a href="https://namu.wiki/w/%EB%AF%B8%EC%86%8C%EB%85%B8%20%EB%AF%B8%EC%B9%B4">미소노 미카</a>이다.
            </div>
        </div>
    </div> -->


<!--    <div>
        {#await writeOutput}
            <div></div>
        {:then post}
            <div>{post.data.content}</div>
        {/await}
    </div> -->


    <div> <!-- TODO: 제대로 </> 안 닫힌 거 있는 듯 <div></div> 밖에 안 뜸 -->
        <!-- TODO: 이거 그냥
        <span>{line.slice((indexMatch === 0 ? 0 : matches[indexMatch-1].index + matches[indexMatch-1][0].length), match.index)}</span>
        이거 말고 다 텍스트로 변환해서 @html 넣는 거가 나을 듯
        아닌데 그럼 footnote onclick 어카냐
             -->

        {#each {length: writeOutput.data.content.split('\n').length} as _, indexLine}
            {@const splitContent = writeOutput.data.content.split('\n')}
            {@const line = splitContent[indexLine]}
            {@const matches = [...line.matchAll(/\[\[([^\[\]]*)\]\]/g)]}
            {@const nowGetParagraphNum = getParagraph()}
            {#if (matches.length === 0)}
                <div class="section_{nowGetParagraphNum}"> {line} </div>
            {:else }
                {#each {length: matches.length} as _, indexMatch}
                    {@const match = matches[indexMatch]}
                    {@const splitMatch = match[1].split(':')}
                    {#if (splitMatch.length === 1)}
                        <a class="section_{nowGetParagraphNum}"> {match[0]} </a>
                    {:else}
                        {#if (splitMatch[0] === ('O'))}
                            <span class="section_{nowGetParagraphNum}">{line.slice((indexMatch === 0 ? 0 : matches[indexMatch-1].index + matches[indexMatch-1][0].length), match.index)}</span>
                            {@const textExpression = changeTagByExpression(splitMatch[1].split('|'), splitMatch[2])}
                            {@html `<span class=\"section_${nowGetParagraphNum}\">${textExpression}</span>`}
                            {@html makeFinalHtml(indexMatch, line, match, matches, nowGetParagraphNum)}
                        {:else}
                            {#if (splitMatch[0][0] === 'H')}
                                {@const nowParagraphNum = incrementParagraph()}
                                {#if splitMatch[0][1] === '2'}
                                    {@const nowParagraphText = recordParagraph(2)}
                                    <h2><ion-icon name="chevron-down-outline" id="down_arrow_{nowParagraphNum}" class="down_arrow" on:click="{() => click_title(`${nowParagraphNum}`)}"></ion-icon><a href="/" id="num_{nowParagraphNum}">{nowParagraphText}.</a><span id="headline_{nowParagraphNum}" class="headline">&nbsp;{splitMatch[1]}</span></h2>
                                {:else if splitMatch[0][1] === '3'}
                                    {@const nowParagraphText = recordParagraph(3)}
                                    <h3><ion-icon name="chevron-down-outline" id="down_arrow_{nowParagraphNum}" class="down_arrow" on:click="{() => click_title(`${nowParagraphNum}`)}"></ion-icon><a href="/" id="num_{nowParagraphNum}">{nowParagraphText}.</a><span id="headline_{nowParagraphNum}" class="headline">&nbsp;{splitMatch[1]}</span></h3>
                                {:else if splitMatch[0][1] === '4'}
                                    {@const nowParagraphText = recordParagraph(4)}
                                    <h4><ion-icon name="chevron-down-outline" id="down_arrow_{nowParagraphNum}" class="down_arrow" on:click="{() => click_title(`${nowParagraphNum}`)}"></ion-icon><a href="/" id="num_{nowParagraphNum}">{nowParagraphText}.</a><span id="headline_{nowParagraphNum}" class="headline">&nbsp;{splitMatch[1]}</span></h4>
                                {/if}

                            {:else if (splitMatch[0][0] === 'L')} <!-- TODO: 이거 Link, Footnote 본문 포함 가능성 있는데???? 복붙하면 될 듯? -->
                                {@const splitLink = splitMatch[1].split('|')}
                                <span class="section_{nowGetParagraphNum}">{line.slice((indexMatch === 0 ? 0 : matches[indexMatch-1].index + matches[indexMatch-1][0].length), match.index)}</span>
                                {#if (splitLink.length === 1)}
                                    <a class="section_{nowGetParagraphNum}" href="{splitLink[0]}">{splitLink[0]}</a>
                                {:else}
                                    <a class="section_{nowGetParagraphNum}" href="{splitLink[0]}">{splitLink[1]}</a>
                                {/if}
                                {@html makeFinalHtml(indexMatch, line, match, matches, nowGetParagraphNum)}

                            {:else if (splitMatch[0][0] === 'P')}
                                <a class="section_{nowGetParagraphNum}"><img href="{splitMatch[1]}"></a>

                            {:else if (splitMatch[0][0] === 'F')}
                                <span class="section_{nowGetParagraphNum}">{line.slice((indexMatch === 0 ? 0 : matches[indexMatch-1].index + matches[indexMatch-1][0].length), match.index)}</span>
                                <p
                                    class="section_{nowGetParagraphNum} footnote"
                                    on:mouseover={() => (isFootnoteMouseOver = true)}
                                    on:mouseout={() => (isFootnoteMouseOver = false)}
                                >[1]</p>
                                {#if (isFootnoteMouseOver)}
                                    <span class="section_{nowGetParagraphNum} footnote">{splitMatch[1]}</span>
                                {/if}
                                {@html makeFinalHtml(indexMatch, line, match, matches, nowGetParagraphNum)}

                            {/if}
                        {/if}
                    {/if}
                {/each}
            {/if}
        {/each}
    </div>
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
        color:yellow;
    }

    .footnote:hover {
      background-color: bisque;
    }
</style>