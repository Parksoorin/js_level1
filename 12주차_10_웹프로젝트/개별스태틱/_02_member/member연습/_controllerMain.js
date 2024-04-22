import { PageHeader } from "./pageHeader.js";
import { PageIndex } from "./pageIndex.js";
import { PageMemberJoin } from "./pageMemberJoin.js";
import { PageMemberLogin } from "./pageMemberLogin.js";
import { PageMemberList } from "./pageMemberList.js";

export class ControllerMain{
    static log = null;
    static pageList = {};

    static start(){
        this.setPageList();
        this.changePage("page-header", null);
        this.changePage("page-index", null);
    }

    static setPageList() {
        this.pageList["page-header"] = new PageHeader();
        this.pageList["page-index"] = new PageIndex();
        this.pageList["page-memberJoin"] = new PageMemberJoin();
        this.pageList["page-memberLogin"] = new PageMemberLogin();
        this.pageList["page-memberList"] = new PageMemberList();
    }

    static changePage(pageName, data){
        this.pageList[pageName].execute(data);
    }

}