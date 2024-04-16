export class PageMemberJoin {
    execute() {
        let $content = document.querySelector("#content");
        let tag = "";

        tag += 
        `
        <style>
            #content-memberJoin {
                margin: 0 auto;
                border: 1px solid black;
            }
        </style>
        `;

        tag +=
        `
        <table id="content-memberJoin">
            <tr>
                <td>아이디</td>
                <td><input type="text" id="input-memberId"></td>
            </tr>
            <tr>
                <td>비밀번호</td>
                <td><input type="text" id="input-memberPw"></td>
            </tr>
            <tr>
                <td>비밀번호 확인</td>
                <td><input type="text" id="input-memberPw2"></td>
            </tr>
            <tr>
                <td colspan="2">
                    <button id="button-memberLoginPro">회원가입</button>
                </td>
            </tr>
        </table>
        `;

        $content.innerHTML = tag;
    }
}