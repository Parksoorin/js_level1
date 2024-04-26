import { ControllerMain } from "./_controllerMain.js";

export class BoardDAO {
    boardList = [];
    static start() {
        this.setSampleData();
    }

    static setSampleData() {
        this.boardList = [
            {
                "boardNo"   : 1001,
                "title"     : "제목1",
                "content"   : "내용1",
                "writer"    : "작성자1",
                "regDate"   : "2023-03-19",
                "readCount" : 0,
                "ref"       : 1,
                "reStep"    : 1,
                "reLevel"   : 1
            },
            {
                "boardNo"   : 1002,
                "title"     : "제목2",
                "content"   : "내용2",
                "writer"    : "작성자2",
                "regDate"   : "2023-03-19",
                "readCount" : 0,
                "ref"       : 2,
                "reStep"    : 1,
                "reLevel"   : 1
            },
            {
                "boardNo"   : 1003,
                "title"     : "제목3",
                "content"   : "내용3",
                "writer"    : "작성자3",
                "regDate"   : "2023-03-19",
                "readCount" : 0,
                "ref"       : 3,
                "reStep"    : 1,
                "reLevel"   : 1
            },
        ];
    }

    // 게시판 페이지에서 boardList의 값들을 가져감
    static getBoardList() {
        return this.boardList;
    }

    // 게시판 글 삭제 시
    static deleteBoard(boardNo){
        let index = 0;
        for(let i = 0; i < this.boardList.length; i++){
            if(this.boardList.boardNo == boardNo){
                index = i;
            }
        }
        this.boardList.splice(index, 1);
    }

    // 선택 삭제 버튼 클릭 시
    static checkBoardDeletePro(deleteList){
        for(let i = 0; i < deleteList.length; i++){
            for(let j = 0; j < this.boardList.length; j++){
                if(deleteList[i] == this.boardList[j].boardNo){
                    this.boardList.splice(j, 1);
                }
            }
        }
    }
}