<script>
    import inputNnumber from './../App.svelte'
</script>
<header>
    <div id="head_title">
        <div id="head_line_div">
            <p id="title">{inputNnumber}/박도현</p>
            <p id="time">최근 수정 시각: 2024-03-12 10:08:37</p>
        </div>
        <div id="head_div">
            <div id="head_button">
                <div>
                    <input type="checkbox" id="modal" class="edit_box" data-v-f71337ee="">
                    <label for="modal" class="edit_button" data-v-f71337ee="">
                        <span class="edit1">
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"></path>
                            </svg> 
                            <span>편집</span> 
                        </span>  
                    </label>
                </div>
                <!-- <a href="/" class="discuss1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                        <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"></path>
                    </svg>
                토론</a>-->
                <a href="/" class="history1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z">
                </path>
                </svg>
                     역사
                </a>
            </div>
            <div>

            </div>
        </div>
    </div>
</header>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap');

    header {
        padding: 20px;
    }
    #title {
        margin: 0px;
        margin-top: 15px;
        font-size: 30px;
        font-family: "Nanum Gothic", sans-serif;
        font-weight: 700;
        font-style: normal;
    }
    #time {
        margin: 3px;
        font-size: 13px;
        font-family: "Nanum Gothic", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    .discuss1, .history1, .edit1 {
        border-left-width: 0;
        margin: 0;
        height: 1.75em;
        align-items: center;
        background-color: #fff;
        border: 1px solid #dadada;
        color: rgb(33, 37, 41, .749);
        justify-content: center;
        display: flex;
        padding: 0.25rem 0.75rem;
        text-decoration: none;
        cursor: pointer;
    }
    .discuss1 {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
    }
    .history1 {
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }
    .edit1 {
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
    }
    .edit_box {
        display: none;
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
        box-sizing: border-box;
        background: initial;
        cursor: default;
        appearance: auto;
        padding: initial;
        margin: initial;
    }
    .edit_button {
        cursor: pointer;
    }
    svg {
        fill: currentColor;
        margin: 0 0.5rem 0 0;
        height: 1em;
        overflow: hidden;
        box-sizing: border-box;
        cursor: pointer;
    }
    #edit {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        border-left-width: 0;
        height: 2.25rem;
        margin: 0 0 0 0.5rem;

    }
    #head_title, #head_div, #head_button{
        display: flex;
    }
    #head_line_div {
        display: flex;
        flex: 1;
        flex-direction: column;
    }
    #head_button {
        align-items: flex-start;
        font-size: 14px;
    }
    #head_title {
        align-items: center;
    }
</style>