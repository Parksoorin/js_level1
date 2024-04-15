import { PageHeader } from "./pageHeader.js";
import { PageIndex } from "./pageIndex.js";
import { PageMemberLogin } from "./pageMemberLogin.js";

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

    // 이벤트 시 바뀌는 화면
    static changePage(pageName) {
        this.pageList[pageName].execute();
    }
}