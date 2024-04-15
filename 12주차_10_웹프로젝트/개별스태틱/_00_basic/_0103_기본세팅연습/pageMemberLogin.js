export class PageMemberLogin {
    execute() {
        let $content = document.querySelector("#content");
        let tag = "";

        tag += 
        `
        <style>
            #content-memberLogin {
                margin: 0 auto;
                border: 1px solid black;
            }
        </style>
        `;

        tag +=
        `
        <table id="content-memberLogin">
            <tr>
                <td>아이디</td>
                <td><input type="text" id="input-memberId"></td>
            </tr>
            <tr>
                <td>비밀번호</td>
                <td><input type="text" id="input-memberPw"></td>
            </tr>
            <tr>
                <td colspan="2">
                    <button id="button-memberLoginPro">로그인</button>
                </td>
            </tr>
        </table>
        `;

        $content.innerHTML = tag;
    }
}