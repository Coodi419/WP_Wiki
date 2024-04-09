<script>
    import ParagraphContents from "./ParagraphContents.svelte";
    import {onMount} from 'svelte';

    export let writeOutput = {};
    export let matchesParagraph = [];

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
    //         for (let section of document.getElementsByClassName(section_string)) {section.style.display = "";}
    //     }
    //     else {
    //         document.getElementById(headline_string).style.color = "#b3b3b3";
    //         document.getElementById(down_arrow_string).style.color = "#b3b3b3";
    //         document.getElementById(down_arrow_string).name = "chevron-forward-outline";
    //         document.getElementById(num_string).style.color = "#80BAEB";
    //         for (let section of document.getElementsByClassName(section_string)) {section.style.display = "none";}
    //     }
    // }

    function getLineNumber(text, index) {
      const match = text.slice(0, index).match(/\n/g);
      return (match ? match.length : 0) + 1;
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

    onMount(() => {

    })


    let listFootnotes = [];
    let countFootnotes = 0;

    const appendFootnotes = (text) => { listFootnotes.push(text); countFootnotes++; }

    let isFootnoteMouseOver = false;

    const content = writeOutput.data.content;
    // const matches = [...content.matchAll(/\[\[H[2-4]:([^\[\]]*)\]\]/g)]

    let dictVisible = {}
    for (let match of Array(matchesParagraph.length).keys()) {
        dictVisible[match+1] = true;
    }
    const getDictSelection = (key) => {return dictVisible[key];}
</script>

<section>
    {#if (matchesParagraph.length === 0)}
        <div> nose </div>

    {:else}
        {@const resetParesult = resetParagraph()}
        {@const lengthMatches = matchesParagraph.length}
        {#each {length: lengthMatches} as _, indexMatch}
            {@const match = matchesParagraph[indexMatch]}
            {@const numberParagraph = match[0].split(':')[0][3]}
            {@const nowParagraphNum = incrementParagraph()}
            {@const nowParagraphText = recordParagraph(numberParagraph)}
            {#if (numberParagraph === '2')}
                <h2 id="para_{nowParagraphText}"><ion-icon name="chevron-down-outline" id="down_arrow_{nowParagraphNum}" class="down_arrow" on:click="{() => click_title(`${nowParagraphNum}`)}"></ion-icon><a href="#index" id="num_{nowParagraphNum}">{nowParagraphText}.</a><span id="headline_{nowParagraphNum}" class="headline">&nbsp;{match[1]}</span></h2>
            {:else if (numberParagraph === '3')}
                <h3 id="para_{nowParagraphText}"><ion-icon name="chevron-down-outline" id="down_arrow_{nowParagraphNum}" class="down_arrow" on:click="{() => click_title(`${nowParagraphNum}`)}"></ion-icon><a href="#index" id="num_{nowParagraphNum}">{nowParagraphText}.</a><span id="headline_{nowParagraphNum}" class="headline">&nbsp;{match[1]}</span></h3>
            {:else if (numberParagraph === '4')}
                <h4 id="para_{nowParagraphText}"><ion-icon name="chevron-down-outline" id="down_arrow_{nowParagraphNum}" class="down_arrow" on:click="{() => click_title(`${nowParagraphNum}`)}"></ion-icon><a href="#index" id="num_{nowParagraphNum}">{nowParagraphText}.</a><span id="headline_{nowParagraphNum}" class="headline">&nbsp;{match[1]}</span></h4>
            {/if}

            {#if (indexMatch === lengthMatches-1)}
                <ParagraphContents
                        content="{content.slice(match.index + match[0].length)}"
                        countParagraph="{indexMatch+1}"
                        dictVisible="{dictVisible}" />
            {:else}
                <ParagraphContents
                        content="{content.slice(match.index + match[0].length, matchesParagraph[indexMatch+1].index)}"
                        countParagraph="{indexMatch+1}"
                        dictVisible="{dictVisible}" />
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