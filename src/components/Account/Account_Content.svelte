<script>
    let email = '';
    let password = '';

    async function post_form(){
        const user = {
            "email": email,
            "password": password
        }

        let res = await fetch("/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            response.json()
                .then((j) => {
                    if (j.success) {window.location.href = "/";}
                    else {alert('이메일 / 비밀번호가 올바르지 않습니다!');}
                })
        })
        .catch(error => {
          console.log('error');
        });
    }


</script>

<article>
    <div id="Login_Title">
        <div id="Login_Title_2">
            <h1 id="Login_Text">회원가입</h1>
        </div>
    </div>
    <div>
        <div>
            <form method="post" id="LoginForm" on:submit|preventDefault={post_form}>
                <div class="usernameBox">
                    <label for="usernameInput">이메일</label>
                    <input type="text" id="usernameInput" name="email" bind:value={email}>
                </div>
                <div class="usernameBox">
                    <label for="passwordInput">인증코드</label>
                    <input type="password" id="passwordInput" name="password" bind:value={password}>
                </div>
                <div id="buttonBox">
                    <button id="CheckButton" type="submit">인증</button>
                </div>
                <div id="buttonBox">
                    <button id="LoginButton" type="submit">회원가입</button>
                </div>
            </form>
        </div>
    </div>
</article>

<style>
    article {
        background-color: #fff;
        margin: 0;
        padding: 1rem;
    }
    #Login_Title {
        flex-direction: column;
        display: flex;
        margin: 0 0 1rem 0;
    }
    #Login_Title_2 {
        flex-direction: column;
        display: flex;
        flex: 1;
    }
    #Login_Text {
        flex: 1;
        font-size: 2rem;
        font-weight: 600;
        line-height: 1;
        margin: 0;
        display: block;
    }
    label {
        margin-bottom: 0.5rem;
        display: block;
        cursor: default;
        font-size: 14px;
    }
    #usernameInput {
        background-color: #fff;
        background-image: none;
        border: 0.0625rem solid #ccc;
        border-radius: 0;
        color: #55595c;
        display: inline-block;
        font-size: .9rem;
        line-height: 1.5;
        margin: 0 0 0 0.7rem;
        padding: 0.25rem 0.5rem;
        width: calc(100% - 0.7rem);
        font-family: inherit;
        padding-block: 1px;
        padding-inline: 2px;
    }
    #passwordInput {
        background-color: #fff;
        background-image: none;
        border: 0.0625rem solid #ccc;
        border-radius: 0;
        color: #55595c;
        display: inline-block;
        font-size: .9rem;
        line-height: 1.5;
        margin: 0 0 0 0.7rem;
        padding: 0.25rem 0.5rem;
        width: calc(100% - 0.7rem);
        font-family: inherit;
        padding-block: 1px;
        padding-inline: 2px;
    }
    .usernameBox {
        margin-bottom: 15px;
    }
    #LoginForm {
        margin: 0 auto;
        width: 28rem;
        display: block;
    }
    #autoLoginLabel {
        cursor: pointer;
        font-weight: 400;
        margin-bottom: 0;
        display: block;
    }
    #autoLoginBox {
        display: inline-block;
        position: relative;
    }
    span {
        cursor: pointer;
        font-weight: 400;
        font-size: 14px;
    }
    #findID {
        float: right;
        color: #0275d8;
        text-decoration: none;
        cursor: pointer;
        font-size: 14px;
    }
    #LoginButton {
        font-size: 0.9rem;
        background-color: #0275d8;
        border-color: #0275d8;
        color: #fff;
        border: 0.0625rem solid #ccc;
        cursor: pointer;
        display: inline-block;
        font-weight: 400;
        line-height: 1.5;
        margin: 0;
        padding: 0.2rem 0.7rem;
        text-align: center;
        touch-action: manipulation;
        user-select: none;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        text-transform: none;
        font-family: inherit;

    }
    #CheckButton {
        font-size: 0.9rem;
        background-color: #fff;
        border-color: #ccc;
        color: #55595c;
        border: 0.0625rem solid #ccc;
        cursor: pointer;
        display: inline-block;
        font-weight: 400;
        line-height: 1.5;
        margin: 0;
        padding: 0.2rem 0.7rem;
        text-align: center;
        touch-action: manipulation;
        user-select: none;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        text-transform: none;
        font-family: inherit;

    }
    #MakeProfile {
        background-color: #fff;
        border: 0.0625rem solid #ccc;
        color: #373a3c !important;
        cursor: pointer;
        display: inline-block;
        font-size: 0.8rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 0.2rem 0.7rem;
        text-align: center;
        text-decoration: none !important;
        touch-action: manipulation;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        vertical-align: middle;
        white-space: nowrap;
    }
    #buttonBox {
        margin-top: 2rem;
        text-align: right;
        display: block;
    }
    #buttonBox2 {
        margin-top: 2rem;
        text-align: left;
        display: block;
    }   
</style>