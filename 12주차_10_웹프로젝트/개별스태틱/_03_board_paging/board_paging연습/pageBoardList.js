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

        // 전체선택 체크박스 클릭
        this.$checkboxAll = document.querySelector("#checkbox-all");
        this.$checkboxAll.addEventListener("click", this.checkboxAllClick);

        // 체크박스 개별 클릭
        this.$checkboxBoard = document.querySelectorAll(".checkbox-board");
        for(let i=0; i<this.$checkboxBoard.length; i++) {
            this.$checkboxBoard[i].addEventListener("click", this.checkboxBoardClick);
        }

        // 선택 삭제 버튼 클릭
        this.$buttonCheckBoardDeletePro = document.querySelector("#button-checkBoardDeletePro");
        this.$buttonCheckBoardDeletePro.addEventListener("click", this.buttonCheckBoardDeleteProClick);

        // 게시글 삭제 버튼 클릭
        this.$buttonBoardDeletePro = document.querySelectorAll(".button-boardDeletePro");
        for(let i=0; i<this.$buttonBoardDeletePro.length; i++) {
            this.$buttonBoardDeletePro[i].addEventListener("click", this.boardDeleteProClick);
        }

        // 수정 버튼 클릭
        this.$buttonBoardModifyPro = document.querySelectorAll(".button-boardModifyPro");
        for(let i=0; i<this.$buttonBoardModifyPro.length; i++) {
            this.$buttonBoardModifyPro[i].addEventListener("click", this.boardModifyPageClick);
        }

        // 더미파일 추가 버튼 클릭
        this.$buttonBoardDummyAddPro = document.querySelector("#button-boardDummyAddPro");
        this.$buttonBoardDummyAddPro.addEventListener("click", this.buttonBoardDummyAddProClick);

    }

    // 게시글 제목 클릭
    boardInfoPageClick = (event) =>  {
        let index = 0;
        for(let i = 0; i < this.$atagBoardInfoPage.length; i++){
            if(event.target == this.$atagBoardInfoPage[i]){
                index = i;
                break;
            }
        }
        ControllerMain.changePage("page-boardInfo", this.$boardNo[index].innerText);
    }

    // 전체선택 체크박스 클릭
    checkboxAllClick = (event) => {
        if(this.$checkboxAll.checked == true){
            for(let i = 0; i < this.$checkboxBoard.length; i++){
                this.$checkboxBoard[i].checked = true;
            }
        } else {
            for(let i = 0; i < this.$checkboxBoard.length; i++){
                this.$checkboxBoard[i].checked = false;
            }
        }
    }

    // 체크박스 개별 클릭
    checkboxBoardClick = (event) => {
        let cnt = 0;
        for(let i = 0; i < this.$checkboxBoard.length; i++){
            if(this.$checkboxBoard[i].checked){
                cnt++;
            }
        }
        if(cnt == this.$checkboxBoard.length){
            this.$checkboxAll.checked = true;
        } else {
            this.$checkboxAll.checked = false;
        }
    }

    // 게시글 삭제 버튼 클릭
    boardDeleteProClick = (event) => {
        let index = 0;
        for(let i = 0; i < this.$buttonBoardDeletePro.length; i++){
            if(this.$buttonBoardDeletePro[i] == event.target){
                index = i;
                break;
            }
        }
        BoardDAO.deleteBoard(this.$boardNo[index].innerHTML);
        ControllerMain.changePage("page-boardList", null);
    }
    

    // 선택 삭제 버튼 클릭
    buttonCheckBoardDeleteProClick = (event) => {
        let deleteList = [];
        for(let i = 0; i < this.$checkboxBoard.length; i++){
            if(this.$checkboxBoard[i].checked){
                deleteList.push(Number(this.$boardNo[i].innerHTML));
            }
        }
        BoardDAO.checkBoardDeletePro(deleteList);
        ControllerMain.changePage("page-boardList", null);
    }

    // 수정 버튼 클릭
    boardModifyPageClick = (event) => {
        let index = 0;
        for(let i = 0; i < this.$buttonBoardModifyPro.length; i++){
            if(this.$buttonBoardModifyPro[i] == event.target){
                index = i;
                break;
            }
        }
        ControllerMain.changePage("page-boardModify", this.$boardNo[index].innerHTML);
    }

    // 더미파일 추가 버튼 클릭
    buttonBoardDummyAddProClick = (event) => {
        
    }
}