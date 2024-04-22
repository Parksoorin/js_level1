import { ControllerMain } from "./_controllerMain.js";
import { BoardDAO } from "./_boardDAO.js";

export class PageBoardList {

    $boardNo = null;
    $atagBoardInfoPage = null;
    $buttonBoardModifyPro = null;
    $buttonBoardDeletePro = null;
    $buttonBoardWritePage = null;
    $buttonBoardDummyAddPro = null;
    $checkboxAll = null;
    $checkboxBoard = null;
    $buttonCheckBoardDeletePro = null;

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
            #content-board {
                margin: 0 auto;
                width: 700px;
                text-align: center;
            }
        </style>
        `;

        tag +=
        `
        <table id="content-board">
            <tr>
                <td colspan="8"><h1>게시판 목록</h1></td>
            </tr>
            <tr>
                <td colspan="8" align="right">
                    <button id="button-boardWritePage">새글작성</button>
                    <button id="button-boardDummyAddPro">더미파일 추가하기</button>
                </td>
            </tr>
            <tr>
                <td>
                    <input id="checkbox-all" type="checkbox">전체선택
                </td>
                <td>
                    <button id="button-checkBoardDeletePro">선택 삭제</button>
                </td>
            </tr>
            <tr>
                <td>
                    선택
                </td>
                <td>번호</td>
                <td>제목</td>
                <td>작성자</td>
                <td>작성일</td>
                <td>조회수</td>
                <td>수정</td>
                <td>삭제</td>
            </tr>
        `;

        let boardList = BoardDAO.getBoardList();
        for(let i=0; i<boardList.length; i++) {
            tag += 
            `
                <tr>
                    <td>
                        <input class="checkbox-board" type="checkbox">
                    </td>
                    <td class="boardNo">${boardList[i].boardNo}</td>
                    <td><a class="atag-boardInfoPage" href="#">${boardList[i].title}</a></td>
                    <td>${boardList[i].writer}</td>
                    <td>${boardList[i].regDate}</td>
                    <td>${boardList[i].readCount}</td>
                    <td><button class="button-boardModifyPro">수정</button></td>
                    <td><button class="button-boardDeletePro">삭제</button></td>
                </tr>
            `;
        }
        tag += `</table>`;
        $content.innerHTML = tag;

        // 게시글 번호
        this.$boardNo = document.querySelectorAll(".boardNo");

        // 게시글 제목 클릭
        this.$atagBoardInfoPage = document.querySelectorAll(".atag-boardInfoPage");
        for(let i=0; i<this.$atagBoardInfoPage.length; i++) {
            this.$atagBoardInfoPage[i].addEventListener("click", this.boardInfoPageClick);
        }
    }

    boardInfoPageClick = (event) =>  {
        

    }
}