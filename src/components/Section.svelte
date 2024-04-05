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
            document.getElementById(section_string).style.display = "block";
        }
        else {
            document.getElementById(headline_string).style.color = "#b3b3b3";
            document.getElementById(down_arrow_string).style.color = "#b3b3b3";
            document.getElementById(down_arrow_string).name = "chevron-forward-outline";
            document.getElementById(num_string).style.color = "#80BAEB";
            document.getElementById(section_string).style.display = "none";
        }
    }
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

    <div>
        <!-- {writeOutput.data.content} -->
        {@html convertedContent.text}
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
</style>