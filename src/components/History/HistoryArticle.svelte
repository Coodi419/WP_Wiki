<script>
    import { element } from "svelte/internal";

    const histories = [
        '', '', '', '', ''
    ]

    const 문서수정횟수 = 1;

    let visible = 0;
    let invisible = 0;
    var annotation_content = ["도현이는 마우스가 하나도 없다", "도현이는 정상이 하나도 없다"];
    let link_id=1;
    let target;
    let width;
    let instantTarget = [];
    $: targetRectX = target && window.pageXOffset + target.getBoundingClientRect().left;
    $: targetRectY = target && window.pageYOffset + target.getBoundingClientRect().top;
    //let vol = window.pageYOffset + target.getBoundingClientRect().top;
    function onMouse(idx) {
        visible = 1;
        link_id = idx;
        target = instantTarget[idx-1];
    }
    function outMouse() {
        visible = 0
    }
</script>

<article>
    <a href="#fn-1" class="annotation" bind:this={instantTarget[0]}><span id="rfn-1" on:mouseenter={() => onMouse(1)} on:mouseleave={outMouse}>[1]</span></a>
    <br>
    <br>
    <br>
    <br>
    <a href="#fn-2" class="annotation" bind:this={instantTarget[1]}><span id="rfn-2" on:mouseenter={() => onMouse(2)} on:mouseleave={outMouse}>[2]</span></a>
    <div id="Edit_headline">
        <div class="Edit_title_div">
            <h1 class="Edit_title">
                <a href="/">박도현/3학년 4반</a>
                <span class="Edit_title_no_a">(문서 역사)</span>
            </h1>
        </div>
        <div class="Edit_buttons">
            <div class="sort">
                <a href="/editscreen" class="Backbutton">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" class="button_icon">
                        <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"></path>
                    </svg>  
                    <span>편집</span> 
                </a>
                <a href="/backlink/Limbus%20Company/%EC%84%A0%ED%83%9D%EC%A7%80" class="Delbutton">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" class="button_icon">
                        <path d="M320 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm21.1 80C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96c0 33.4 17 62.8 42.9 80H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h32V448H208c-53 0-96-43-96-96v-6.1l7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97 263c-9.4-9.4-24.6-9.4-33.9 0L7 319c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l7-7V352c0 88.4 71.6 160 160 160h80 80c88.4 0 160-71.6 160-160v-6.1l7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-56-56c-9.4-9.4-24.6-9.4-33.9 0l-56 56c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l7-7V352c0 53-43 96-96 96H320V240h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H341.1z"></path>
                    </svg> 역링크
                </a>
            </div>
        </div>
    </div>
    <div id="History_main">
        <form class="history_form">
            <div class="trans_buttons">
                <a href="/" class="arrow_button"><ion-icon name="chevron-back-outline" class="icon"></ion-icon>Prev</a>
                <a href="/" class="arrow_button">Next<ion-icon name="chevron-forward-outline" class="icon"></ion-icon></a>
            </div>
            <ul class="history_ul">
                {#each {length: histories.length} as _, index}
                    <li class="history_li">
                        <time datetime="2024-03-23T11:08:24.000Z">2024-04-19 11:18:20</time>
                        <span class="history_RAW">
                            &#40;
                            <a href="" class="a_RAW">RAW</a>
                            &#41;
                        </span>
                        <input data-v-29e095ff="" type="radio" name="rev" value="680" style="visibility: visible;">
                        <input data-v-29e095ff="" type="radio" name="rev" value="680" style="visibility: visible;">
                        <strong>r&#40;{문서수정횟수}&#41;</strong>
                        <span>&#40;개인수정개수&#41;</span>
                        <div aria-describedby="popover_tzwv0p6jql" class="trigger" style="display: inline-block;"><a class="JlqMeHuq">User_name</a></div>
                        &#40;
                        <span class="memo"></span>
                        &#41;
                    </li>
                {/each}
            </ul>
            <div class="trans_buttons">
                <a href="/" class="arrow_button"><ion-icon name="chevron-back-outline" class="icon"></ion-icon>Prev</a>
                <a href="/" class="arrow_button">Next<ion-icon name="chevron-forward-outline" class="icon"></ion-icon></a>
            </div>
        </form>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <span id="fn-1"><a href="#rfn-1" class="annotation">[1]</a> {annotation_content[0]}</span> <br>
    <span id="fn-2"><a href="#rfn-2" class="annotation">[2]</a> {annotation_content[1]}</span>
    <div on:mouseenter={onMouse(link_id)} on:mouseleave={outMouse}>
        {#if visible}
            <div class="popper" x-placement="top" style="position: absolute; will-change: top, left; top: {targetRectY+15}; left: {targetRectX-width/2};"  bind:clientWidth={width} on:mouseenter={onMouse(link_id)} on:mouseleave={outMouse}> 
                <div class="popper__arrow" style="left: {targetRectX/2+16};"></div><div class="popper__inner">
                    <a href="#fn-{link_id}" class="annotation">[{link_id}]</a>
                    {annotation_content[link_id-1]}
                </div>
            </div>
        {/if}
    </div>
</article>
<style>
    .popper {
        background-attachment: scroll;
        background-clip: border-box;
        background-color: #fff;
        background-image: none;
        background-origin: padding-box;
        background-position-x: 0%;
        background-position-y: 0%;
        background-repeat: repeat;
        background-size: auto;
        color: rgb(33, 37, 41);
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        border-radius: 3px;
        max-width: 50%;
        padding: 15px;
        word-break: break-all;
        box-sizing: border-box;
        z-index: 510;
    }
    .popper_arrow {
        border-bottom-color: transparent;
        border-bottom-style: solid;
        border-bottom-width: 0px;
        border-left-color: transparent;
        border-left-style: solid;
        border-left-width: 5px;
        border-right-color: transparent;
        border-right-style: solid;
        border-right-width: 5px;
        border-top-color: rgb(221, 221, 221);
        border-top-style: solid;
        border-top-width: 5px;
        bottom: -5px;
        box-sizing: border-box;
        color: rgb(33, 37, 41);
        color-scheme: light;
        display: block;
        height: 5px;
        line-height: 22.5px;
        margin-bottom: 0;
        margin-top: 0;
        margin-left: 5px;
        margin-right: 5px;
        position: absolute;
        tab-size: 4;
        text-size-adjust: 100%;
        unicode-bidi: isolate;
        width: 10px;
        word-break: break-all;
    }
    .popper_inner {
        display: block;
        font-size: 15px;
    }
    .annotation {
        color: #0275d8;
        text-decoration: none;
    }
    .marker {
        font-variant-numeric: tabular-nums;
        text-transform: none;
        cursor: default;
        text-indent: 0px !important;
        font-size: 20px !important;
        text-align: start !important;
        text-align-last: start !important;
        padding-right: 5px;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }
    .history_RAW {
        font-size: 10.5px;
    }
    .history_form {
        display: block;
    }
    .a_RAW{
        color: #0A88E3 ;
    }
    .history_ul {
        display: block;
        list-style-type: disc;
        margin-block-end: 6px;
        margin-block-start: 6px;
        margin-bottom: 6px;
        margin-inline-end: 0px;
        margin-inline-start: 22.5px;
        margin-left: 22.5px;
        margin-right: 0px;
        margin-top: 6px;
        padding-inline-start: 8px;
        padding-left: 8px;
        font-size: 14.4px;
        unicode-bidi: isolate;
        content: '';
        display: block;
        clear: left;
    }
    .history_li {
        display: list-item;
        list-style-image: none;
        list-style-position: outside;
        list-style-type: disc;
    }
    #History_main {
        display: block;
        unicode-bidi: isolate;
        color-scheme: light;
        font-size: 15px;
        font-weight: 400;
        line-height: 22.5px;
        tab-size: 4;
        text-size-adjust: 100%;
    }
    article {
		margin: 0;
		padding: 1rem;
		display: block;
		unicode-bidi: isolate;
		border-radius: 0;
		border-top: 0;
		border-bottom: 0;
		border-right-width: 0;
		border-left-width: 0;
        text-wrap: balance;
        visibility: visible;
	}
    h1, h2 {
        width: auto;
    }
    .icon{
        color: #666;
        font-size: 15px;
        font-weight: 400;
        line-height: 1.8em;
        text-align: center;
        width: 0.9em;
        cursor: pointer;
        margin: 0;
        contain: strict;
        height: 15px;
    }
    .arrow_button
    {
        background-color: rgb(255,255,255);
        border-color: rgb(204, 204, 204);
        border-width: 0.666667px;
        border-style: solid;
        cursor: pointer;
        display: block;
        font-size: 14.4px;
        text-align: center;
        margin: 0;
        padding: 3.2px;
        padding-left: 7.2px;
        padding-right: 7.2px;
        text-wrap: nowrap;
        vertical-align: middle;
        text-decoration: none;
        text-decoration-line: none !important;
        float: left;
        touch-action: manipulation;
        user-select: none;
    }
    .arrow_button:hover
    {
        background-color: #E6E6E6;
        border-color: rgb(204, 204, 204);
        border-width: 0.666667px;
        border-style: solid;
        cursor: pointer;
        display: block;
        font-size: 14.4px;
        text-align: center;
        margin: 0;
        padding: 3.2px;
        padding-left: 7.2px;
        padding-right: 7.2px;
        text-wrap: nowrap;
        vertical-align: middle;
        text-decoration: none;
        text-decoration-line: none !important;
        float: left;
        touch-action: manipulation;
        user-select: none;
    }
    .trans_buttons {
        display: inline-block;
        position: relative;
        vertical-align: middle;
    }
    #logInput {
        appearance: auto;
        background-color: rgb(255, 255, 255);
        border-color: rgb(204,204,204);
        padding-top: 4px;
        padding-bottom: 4px;
        margin-top: 7px;
        width: 100%;
    }
    .logInput_div {
        margin-top: 7px;
        font-size: 14px;
        width: 100%;
    }
    .Edit_form {
        display: block;
    }
    .Edit_window {
        height: 480px;
        width: 100%;
    }
    .text_tool {
        float: right;
        display: flex;
    }
    .edit_agree_span {
        display: inline-block;
        text-wrap: wrap;
        width: auto;
    }
    .Save_button {
        align-items: flex-start;
        appearance: button;
        background-color: rgb(2, 117, 216);
        border-bottom-color: rgb(2, 117, 216);
        border-bottom-style: solid;
        color: rgb(255, 255, 255);
        cursor: pointer;
        float: right;
        display: inline-block;
        font-size: 15px;
        margin-bottom: 2rem;
        height: 30px;
        width: 100px;
        padding: .2rem .7rem;
        text-align: center;
        touch-action: manipulation;

    }
    .edit_agree {
        width: 913px;
        text-size-adjust: 100%;
        word-break: break-all;
        display: inline-flex;
        margin-bottom: .5rem;
        box-sizing: border-box;;
        tab-size: 4;
    }
    .Edit_agree_checkbox{
        display: inline-block;
        letter-spacing: normal;
        text-align: start;
        appearance: auto;
        text-rendering: auto;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        padding-block: 1px;
        padding-inline: 2px;
    }
    #Edit_headline {
        display: flex;
        margin-bottom: 24px;
        margin-top: 0;
        margin-left: 0;
        margin-right: 0;
    }
    #Edit_main {
        font-size: 14px;
        display: block;
    }
    .Edit_title_div {
        color-scheme: light;
        display: flex;
        flex-basis: 0%;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 1;
        line-height: 22.5px;
        tab-size: 4;
        text-size-adjust: 100%;
    }
    .Edit_title {
        font-size: 2rem;
        font-weight: 600;
        margin: 0;
        line-height: 1;
    }
    .Edit_title_no_a {
        font-size: 1.75rem;
        font-weight: 600;
        margin-left: 0.75rem;
        line-height: 1;
    }
    .Edit_buttons {
        justify-content: flex-end;
        margin: .75rem 0 0;
        align-items: normal;
        flex-direction: column;
        gap: .5rem;
        display: flex;
    }
    .sort {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        unicode-bidi: isolate;
        display: flex;
        justify-content: flex-end;
    }
    .Text_box{
        height: 100%;
        width: 100%;
        border-top-width: 0px;
        resize: none;
    }
    .Backbutton {
        height: 1.75rem;
        align-items: center;
        background-color: #fff;
        border: 1px solid #dadada;
        border-radius: 0.3rem;
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0.25rem 0.75rem;
        color: rgb(33, 37, 41, .749);
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
    }
    .Movebutton {
        height: 1.75rem;
        align-items: center;
        background-color: #fff;
        border: 1px solid #dadada;
        border-radius: 0.3rem;
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0.25rem 0.75rem;
        color: rgb(33, 37, 41, .749);
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left-width: 0;
    }
    .Delbutton {
        height: 1.75rem;
        align-items: center;
        background-color: #fff;
        border: 1px solid #dadada;
        border-radius: 0.3rem;
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0.25rem 0.75rem;
        color: rgb(33, 37, 41, .749);
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
    }
    .button_icon {
        fill: currentColor;
        margin: 0 .5rem 0 0;
        height: 1rem;
        overflow: hidden;
    }
    a {
        color: #212529;
        text-decoration: none;
        cursor: pointer;
    }
    a:hover {
        text-decoration: underline;
    }
    .osong_button {
        align-items: flex-start;
        appearance: button;
        background-attachment: scroll;
        background-clip: border-box;
        background-color: rgba(0, 0, 0, 0);
        background-image: none;
        background-origin: padding-box;
        background-position-x: 0%;
        background-position-y: 0%;
        background-repeat: repeat;
        background-size: auto;
        border-color: #D3D3D3;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        border-bottom-style: solid;
        border-bottom-width: 0.666667px;
        border-image-outset: 0;
        border-image-repeat: stretch;
        border-image-slice: 100%;
        border-image-source: none;
        border-image-width: 1;
        border-left-style: solid;
        border-left-width: 0.666667px;
        border-right-style: solid;
        border-right-width: 0.666667px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        border-top-style: solid;
        border-top-width: 0.666667px;
        box-sizing: border-box;
        color: rgb(0, 0, 0);
        color-scheme: light;
        cursor: pointer;
        display: block;
        font-family: "Pretendard JP", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans KR", "Noto Sans CJK KR", NanumBarunGothic, Roboto, "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        font-feature-settings: normal;
        font-kerning: auto;
        font-optical-sizing: auto;
        font-size: 14px;
        font-stretch: 100%;
        font-style: normal;
        font-variant-alternates: normal;
        font-variant-caps: normal;
        font-variant-east-asian: normal;
        font-variant-ligatures: normal;
        font-variant-numeric: normal;
        font-variant-position: normal;
        font-variation-settings: normal;
        font-weight: 400;
        height: 35.7292px;
        letter-spacing: normal;
        line-height: 18.4px;
        list-style-image: none;
        list-style-position: outside;
        list-style-type: none;
        margin-bottom: 0px;
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 0px;
        padding-block-end: 8px;
        padding-block-start: 8px;
        padding-bottom: 8px;
        padding-inline-end: 16px;
        padding-inline-start: 16px;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 8px;
        tab-size: 4;
        text-align: center;
        text-indent: 0px;
        text-rendering: auto;
        text-shadow: none;
        text-size-adjust: 100%;
        text-transform: none;
        width: auto;
        word-break: break-all;
        word-spacing: 0px;
        -webkit-border-image: none;
    }
</style>