<section>
    <div>
        <h2><ion-icon name="chevron-down-outline" id="down_arrow_1" class="down_arrow"></ion-icon><a href="/" id="num_1">1.</a><span id="headline_1" class="headline">&nbsp개요</span></h2>
        <div id="section_1">
            <div id="text_contents">
                21기 WP평균. 그중 커뮤니티 영역을 맡고있다. 前 테트리스 고인물 現 김승억 사무국장 놀리기 챔피언이다.
            </div>
        </div>
        <h2><ion-icon name="chevron-down-outline" id="down_arrow_2" class="down_arrow"></ion-icon><a href="/" id="num_2">2.</a><span id="headline_2" class="headline">&nbsp빌런력</span></h2>
        <div id="section_2">
            <div id="text_contents">
                빌런력 890 <br>
                무시무시한 빌런력의 소유자다.  vrchat 갤러리에서 음지글을 작성하다 고로시당한 전적이 있다. 21기 테러단체 "Disablo"에 속해있다.
            </div>
        </div>
    </div>
</section>

<script>
    window.onload = function () {
        var e1_1 = document.getElementById("down_arrow_1");
        var e1_2 = document.getElementById("headline_1");
        var e2_1 = document.getElementById("down_arrow_2");
        var e2_2 = document.getElementById("headline_2");
        e1_1.onclick = function() {click_title("1")};
        e1_2.onclick = function() {click_title("1")};
        e2_1.onclick = function() {click_title("2")};
        e2_2.onclick = function() {click_title("2")};
    }
    function click_title(n)  {
        var headline_string = "headline_" + n;
        var down_arrow_string = "down_arrow_" + n;
        var num_string = "num_" + n;
        var section_string = "section_" + n;
        if(document.getElementById(down_arrow_string).name === "chevron-forward-outline")
        {
            document.getElementById(headline_string).style.color = "black";
            document.getElementById(down_arrow_string).style.color = "black";
            document.getElementById(down_arrow_string).name = "chevron-down-outline";
            document.getElementById(num_string).style.color = "#0275d8";
            document.getElementById(section_string).style.display = "block";
        }
        else
        {
            document.getElementById(headline_string).style.color = "#b3b3b3";
            document.getElementById(down_arrow_string).style.color = "#b3b3b3";
            document.getElementById(down_arrow_string).name = "chevron-forward-outline";
            document.getElementById(num_string).style.color = "#80BAEB";
            document.getElementById(section_string).style.display = "none";
        }
    }
</script>
<style>
    section {
        padding: 20px;
        height: 300%;
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
</style>