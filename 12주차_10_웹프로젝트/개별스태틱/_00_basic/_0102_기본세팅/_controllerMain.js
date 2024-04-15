import { PageHeader } from "./pageHeader.js";
import { PageIndex } from "./pageIndex.js";
import { PageMemberLogin } from "./pageMemberLogin.js";


// 다른 파일에서 이 클래스를 사용할 수 있다. 
// 파일 이름은 소문자로 시작, 클래스 이름은 대문자로 시작한다. 
export class ControllerMain {

    static pageList = {};

    static start() {
        this.setPageList();
        this.changePage("page-header");
        this.changePage("page-index");
    }
    static setPageList() {
        this.pageList["page-header"] = new PageHeader();
        this.pageList["page-index"] = new PageIndex();
        this.pageList["page-memberLogin"] = new PageMemberLogin();
    }
    static changePage(pageName) {
        this.pageList[pageName].execute();
    }

}