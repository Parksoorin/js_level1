import { PageHeader } from "./pageHeader.js";
import { PageIndex } from "./pageIndex.js";
import { PageMemberLogin } from "./pageMemberLogin.js";


// 다른 파일에서 이 클래스를 사용할 수 있다. 
// 파일 이름은 소문자로 시작, 클래스 이름은 대문자로 시작한다. 
export class ControllerMain {

    static pageList = {};
    
    // (1) main.js에서 전달받아 ControllerMain.js의 start 함수 실행
    static start() {
        // (2) setPageList()의 값들을 가져온다. 
        this.setPageList();
        // (3) changePage() 함수를 통해 해당 페이지의 execute()를 실행시킨다. 
        this.changePage("page-header");
        this.changePage("page-index");
    }
    static setPageList() {
        this.pageList["page-header"] = new PageHeader();
        this.pageList["page-index"] = new PageIndex();
        this.pageList["page-memberLogin"] = new PageMemberLogin();
    }
    static changePage(pageName) {
        // 해당 페이지의 execute() 함수 실행
        this.pageList[pageName].execute();
    }

}