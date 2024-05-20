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
문단: [[H1~6:텍스트]]            Paragraph  (나무위키 기준, 문단 1은 사용 주의.)  h2 태그 사용하는듯??
    -> [[H1~6:텍스트]] or [[H1~6:텍스트]]
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

// function convertSignToHTML(text) {
//     const syntaxReplacements = [
//         { regex: /\[\[H([1-6]):([^\[\]]*)\]\]/g, replacement: '<h$1> $2 </h$1>'},
//         { regex: /\[\[L([^\[\]]*)\]\]/g, replacement: '$1'},
//         { regex: /\[\[F([^\[\]]*)\]\]/g, replacement: '$1'},
//         { regex: /\[\[P([^\[\]]*)\]\]/g, replacement: '$1'},
//     ];
//
//     syntaxReplacements.forEach(replacement => {
//         text = text.replace(replacement.regex, replacement.replacement);
//     });
//
//     console.log(text)
//
//     return
//
//
//     const p = /\[\[([^\[\]]*)\]\]/g
//     let matches = [...text.matchAll(p)];
//
//     console.log(matches)
//
//     matches.forEach((match) => {
//         let textMatch = match[1].split(':');
//         let syntaxs = textMatch[0].split('|'); textMatch = textMatch[1];
//
//         console.log()
//
//
//         for (const syntax of syntaxs) {
//             textMatch = `<${SyntaxToHtml[syntax]}>${textMatch}</${SyntaxToHtml[syntax]}>`;
//         }
//
//         text = text.replace(match[0], textMatch)
//     });
//
//     // 최종 HTML 문자열을 반환
//     return `${text}`;
// }

function convertWordToHtml(text) {
    const p = /\[\[([^\[\]]*)\]\]/g

    let matches = [...text.matchAll(p)];

    let countParagraph = 0;
    let countFootnote = 0;

    // if (matches.length) {

        matches.forEach((match) => {
            let textMatch = match[1].split(':');

            if (textMatch[0] === 'O') {
                let syntaxs = textMatch[1].split('|'); textMatch = textMatch[2];

                for (const syntax of syntaxs) {
                    textMatch = `<${SyntaxToHtml[syntax]}>${textMatch}</${SyntaxToHtml[syntax]}>`;
                }

                text = text.replace(match[0], textMatch)

                // `<div>${text}</div>`;
            }

            else {
                switch (textMatch[0][0]) {
                    case 'H':
                        ++countParagraph;
                        const hCount = textMatch[0][1];

                        // text = text.slice(sumAddedLength, sumAddedLength + match.index) + resultText + text.slice(sumAddedLength + lengthMatch + match.index);
                        text = text.replace(match[0], `<h${hCount} id=${countParagraph}> ${textMatch[1]} </h${hCount}>`)

                        break;

                    case 'L':
                        const spiltText = textMatch[1].split('|')

                        if (spiltText.length === 2)
                            text = text.replace(match[0], `<a href="${spiltText[0]}"> ${spiltText[1]} </a>`)
                        else
                            text = text.replace(match[0], `<a href="${spiltText[0]}"> ${spiltText[0]} </a>`)
                        break;

                }

                // console.log(, "1111", textMatch[1])

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
        return finalText
    // }

    // else {
    //     console.log("뿌우웅");
    //     let a = convertSignToHTML(text)
    //     console.log(a)
    // }
}

// let matches = convertTextToHtml(``);
let ans = convertWordToHtml(`[[H2:뭉탱이월드]]
코[[O:B|I:뭉탱이월드]]에는 무엇이 사는가? 바로 [[O:B|S:코괴물]]이 산다!
[[H3:코탱이월드]]
[[L:코코코|월드]]
이것은 코월드의 위치이다.
이것을 보면 [[O:S:죽는다.]]`)
console.log(ans);
