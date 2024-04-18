export class PageMemberLogin {
    execute(data) {

        let $content = document.querySelector("#content");

        let tag = "";

        tag += 
        `
        <style>
            table, tr, td {
                border-collapse: collapse;
                border: 1px solid black;
            }
            #content-login {
                margin: 0 auto;
            }
            #title, #loginPro {
                text-align: center;
            }
        </style>        
        `;

        tag +=
        `
        <table id="content-login">
            <tr>
                <td colspan="2" id="title"><h1>로그인</h1></td>
            </tr>
            <tr>
                <td>아이디</td>
                <td><input type="text" id="input-memberId" value="qwer1234"></td>
            </tr>
            <tr>
                <td>비밀번호</td>
                <td><input type="text" id="input-memberPw" value="Qwer1234!"></td>
            </tr>
            <tr>
                <td colspan="2" id="loginPro">
                    <button id="button-memberLoginPro">로그인</button>
                </td>
            </tr>
        </table>        
        `;

        $content.innerHTML = tag;
    }
}