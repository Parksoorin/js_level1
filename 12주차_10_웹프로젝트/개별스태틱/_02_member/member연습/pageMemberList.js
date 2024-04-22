import { MemberDAO } from "./_memberDAO.js";

export class PageMemberList {
    excute(data) {
        let $content = document.querySelector("#content");

        let tag = "";
        tag += 
        `
        <style>
            table, tr, td {
                border: 1px solid black;
                border-collapse: collapse;
            }
            #content-memberList {
                margin: 0 auto;
                width: 1200px;
                text-align: center;
            }
        </style>
        `;

        tag += 
        `
        <table id="content-memberList">
            <tr>
                <td colspan="12"><h1>회원 전체 목록</h1></td>
            </tr>
            <tr>
                <td>번호</td>
                <td>아이디</td>
                <td>비밀번호</td>
                <td>이름</td>
                <td>이메일</td>
                <td>연락처</td>
                <td>우편번호</td>
                <td>도로명</td>
                <td>나머지주소</td>
                <td>성별</td>
                <td>유입경로</td>
                <td>메일 수신동의</td>
            </tr>
               
        `;

        
    }
}