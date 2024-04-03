<aside>
    <div id="index">
        <p id="index_text">목차</p> <!-- TODO: 이거 목차는 어떻게 구성하지? 데이터베이스에 넣어놓기엔 좀 그런데.. regex로 파싱하고 for문 돌려서 개수 세기?-->
        <div id="index_content">
            <span><a href="">1</a>. 개요</span>
            <span><a href="">2</a>. 상세</span>
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
    #index {
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