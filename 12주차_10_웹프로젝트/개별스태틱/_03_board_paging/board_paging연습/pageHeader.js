import { ControllerMain } from "./_controllerMain.js";

export class PageHeader {
    execute(data){
        let $header = document.querySelector("#header");

        let tag = "";
        tag +=
        `
        <style>
            table, tr, td {
                border-collapse: collapse;
                border: 1px solid black;
            }
            #header-menu {
                margin: 0 auto;
                text-align: center;
                width: 500px;
                height: 100px;
            }
        </style>
        `;

        // [로그아웃] 상태 화면
        if(ControllerMain.log == null) {
            tag += 
            `
            <table id="header-menu">
                <tr>
                    <td>
                        <button id="btn-indexPage">메인화면</button>
                    </td>
                    <td>
                        <button id="btn-memberJoinPage">회원가입</button>
                    </td>
                    <td>
                        <button id="btn-memberLoginPage">로그인</button>
                    </td>
                </tr>
            </table>
            `;
        } else {
            // [로그인] 상태 화면
            tag += 
            `
            <table id="header-menu">
                <tr>
                    <td>
                        <button id="btn-indexPage">메인화면</button>
                    </td>
                    <td>
                        <button id="btn-memberListPage">회원 전체목록</button>
                    </td>
                    <td>
                        <button id="btn-memberLogoutPro">로그아웃</button>
                    </td>
                    <td>
                        <button id="btn-boardListPage">게시판</button>
                    </td>
                </tr>
            </table>
            `;
        }

        $header.innerHTML = tag;

        if(ControllerMain.log == null){
            document.querySelector("#btn-indexPage").addEventListener("click", this.indexPageClick);
            document.querySelector("#btn-memberJoinPage").addEventListener("click", this.memberJoinPageClick);
            document.querySelector("#btn-memberLoginPage").addEventListener("click", this.memberLoginPageClick);
        } else {
            document.querySelector("#btn-indexPage").addEventListener("click", this.indexPageClick);
            document.querySelector("#btn-memberListPage").addEventListener("click", this.memberListPageClick);
            document.querySelector("#btn-memberLogoutPro").addEventListener("click", this.memberLogoutProClick);
            document.querySelector("#btn-boardListPage").addEventListener("click", this.boardListPageClick);
        }
    }


    // header의 메인화면 버튼 클릭 시 
    indexPageClick = (event) => {
        ControllerMain.changePage("page-index", null);
    }

    // header의 회원가입 버튼 클릭 시 
    memberJoinPageClick = (event) => {
        ControllerMain.changePage("page-memberJoin", null);
    }

    // header의 로그인 버튼 클릭 시 
    memberLoginPageClick = (event) => {
        ControllerMain.changePage("page-memberLogin", null);
    }

    // 멤버리스트 클릭 시 
    memberListPageClick = (event) => {
        ControllerMain.changePage("page-memberList", null);
    }

    // 로그아웃 버튼 클릭 시 
    memberLogoutProClick = (event) => {
        alert("로그아웃 되었습니다.");

        ControllerMain.log = null;
        ControllerMain.changePage("page-header", null);
        ControllerMain.changePage("page-index", null);
    }
}