`
볼드: [[O:B:텍스트]]         Bold
기울이기: [[O:I:텍스트]]      Italic
취소선: [[O:S:텍스트]]       Strikescore
밑줄: [[O:U:텍스트]]         Underscore
위첨자: [[O:WU:텍스트]]      WordUp
아래첨자: [[O:WD:텍스트]]     WordDown
// 루비문자: 흠
// 글자크게: [[O:+1~5:텍스트]]
// 글자작게: [[O:-1~5:텍스트]]
// 색상: [[O:#RRGGBB:텍스트]]
====================================
문단: [[H2~4:텍스트]]            Paragraph  (나무위키 기준, 문단 1은 사용 주의.)  h2 태그 사용하는듯?? 1부커 6 있긴 함.
링크: [[L:문서명]] or [[L:문서명|표시형식]]         https://namu.wiki/w/나무위키:편집 도움말#s-7.1
각주: 텍스트[[F:각주내용]]   Footnote  여러개를 한번에 묶는 거는 못하겠음;
이미지: [[P:링크]]


틀은 이거 다 만들고 할까말까나 생각해봄;

옵션들은 O:B|I|S:텍스트 등으로 구분
`

const SyntaxToHtml = {
    B: 'strong',
    I: 'em',
    S: 'del',
    U: 'u',
    WU: 'sup',
    WD: 'sub',
}

export function convertWordToHtml(text) {
    const p = /\[\[([^\[\]]*)\]\]/g

    let matches = [...text.matchAll(p)];

    let countParagraph = 0;
    let countFootnote = 0;

    let contentParagraph = [];

    let listNumberParagraph = [0, 0, 0]

    matches.forEach((match) => {
        let textMatch = match[1].split(':');

        if (textMatch[0] === 'O') {
            let syntaxs = textMatch[1].split('|'); textMatch = textMatch[2];

            for (const syntax of syntaxs) {
                textMatch = `<${SyntaxToHtml[syntax]}>${textMatch}</${SyntaxToHtml[syntax]}>`;
            }

            text = text.replace(match[0], textMatch)

        }

        else {
            switch (textMatch[0][0]) {
                case 'H':
                    ++countParagraph;  // TODO: 이거 대제목, 중제목, 소제목 다 따로 분류되게 하기!
                    let hCount = textMatch[0][1];
                    let numberParagraph = '';

                    switch (hCount) {
                        case '2':
                            numberParagraph = `${++listNumberParagraph[0]}`
                            listNumberParagraph[1] = listNumberParagraph[2] = 0;
                            break;
                        case '3':
                            numberParagraph = `${listNumberParagraph[0]}-${++listNumberParagraph[1]}`
                            listNumberParagraph[2] = 0;
                            break;
                        default:  // 4 and more
                            numberParagraph = `${listNumberParagraph[0]}-${listNumberParagraph[1]}-${++listNumberParagraph[2]}`
                            hCount = 4;
                            break;
                    }

                    contentParagraph += `<span><a>${'&nbsp;'.repeat(4 * (hCount - 2))}</a><a href="">${numberParagraph}</a>. ${textMatch[1]}</span>\n`

                    // text = text.replace(match[0], `${countParagraph === 1 ? "" : "</div>"}<h${hCount} id=${countParagraph}> ${numberParagraph}. ${textMatch[1]} </h${hCount}><div id="section_${countParagraph}">`);
                    text = text.replace(match[0], `${countParagraph === 1 ? "" : "</div>"} <h${hCount} id=${countParagraph}><ion-icon name="chevron-down-outline" id="down_arrow_${countParagraph}" class="down_arrow" on:click="{() => click_title('${countParagraph}')}"></ion-icon><a href="/" id="num_1">1.</a><span id="headline_1" class="headline">&nbsp${textMatch[1]}</span></h>`);
                    break;

                case 'L':
                    const spiltText = textMatch[1].split('|')

                    if (spiltText.length === 2)
                        text = text.replace(match[0], `<a href="${spiltText[0]}"> ${spiltText[1]} </a>`)
                    else
                        text = text.replace(match[0], `<a href="${spiltText[0]}"> ${spiltText[0]} </a>`)
                    break;
            }
        }
    });

    let finalText = '';
    let splitText = text.split('\n');

    // 최종 HTML 문자열을 반환
    splitText.forEach((element) => {
        if (element.includes('<img') || element.includes('<h')) {
            finalText += element + '\n';
            return;
        }
        else {
            finalText += `<div>${element.slice()}</div>\n`;
            return;
        }
    });
    return {
        text: finalText + '</div>',
        paragraph: contentParagraph.slice(0, -1),
        footnote: ''
    }
}

// let matches = convertTextToHtml(``);
let ans = convertWordToHtml(`[[H2:뭉탱이월드]]
코[[O:B|I:뭉탱이월드]]에는 무엇이 사는가? 바로 [[O:B|S:코괴물]]이 산다!
[[H3:코탱이월드]]
[[L:코코코|월드]]
이것은 코월드의 위치이다.
이것을 보면 [[O:S:죽는다.]]
[[H4:실물]]
그의 실물을 본 사람은 [[O:B:없다.]]
[[H2:근황]]
그는 현재 뭉탱이월드를 파괴했다.
[[H3:그의 코]]
너무 거대하다.`)
console.log(ans);
