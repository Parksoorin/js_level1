// Json클래스는 싱글톤 패턴
export class MemberDAO {

    static memberList = [];

    static start() {
        this.setSampleData();  
    }

    static setSampleData(){
        this.memberList = [
            {
                "memberNo"       : 1001, 
                "memberId"       : "qwer1234", 
                "memberPw"       : "Qwer1234!", 
                "memberName"     : "송민석", 
                "memberEmail"    : "qwer@naver.com",
                "memberPhone"    : "01012345678",
                "memberZonecode"  : "02830",
                "memberAddress" : "서울 성북구 아리랑로 3",
                "memberAddressDetail" : "아리랑아파트 102동 304호",
                "memberGender"   : 0,
                "memberRoute"    : 1,
                "memberTerms"    : true,
            },
            {
                "memberNo"      : 1002, 
                "memberId"      : "abcd1234", 
                "memberPw"      : "Abcd1234!", 
                "memberName"    : "홍길동", 
                "memberEmail"   : "abcd@daum.net",
                "memberPhone"   : "01023456789",
                "memberZonecode"  : "02830",
                "memberAddress" : "서울 성북구 아리랑로 3",
                "memberAddressDetail" : "아리랑아파트 102동 304호",
                "memberGender"   : 0,
                "memberRoute"    : 1,
                "memberTerms"    : true,
            },
            {
                "memberNo"    : 1003, 
                "memberId"    : "asdf1234", 
                "memberPw"    : "Asdf1234!", 
                "memberName"  : "이수정", 
                "memberEmail" : "asdf@hotmail.com",
                "memberPhone" : "01034567890",
                "memberZonecode"  : "02830",
                "memberAddress" : "서울 성북구 아리랑로 3",
                "memberAddressDetail" : "아리랑아파트 102동 304호",
                "memberGender"   : 0,
                "memberRoute"    : 1,
                "memberTerms"    : true,
            },
        ];  
    }

    // 아이디 중복 검사
    static memberIdCheckPro(memberId) {
        let check = false;
        for(let i = 0; i < this.memberList.length; i++){
            if(this.memberList[i].memberId == memberId){
                check = true;
                break;
            }
        }
        return check;
    }

    // 이메일 중복 검사
    static memberEmailCheckPro(memberEmail) {
        let check = false;
        for(let i = 0; i < this.memberList.length; i++){
            if(this.memberList[i].memberEmail == memberEmail){
                check = true;
                break;
            }
        }
        return check;
    }

    // 회원가입 완료 시
    static addMember(member){
        this.memberList.push(member);
    }

    // 멤버 넘버가 가장 큰 값 가져오기
    static getMaxMemberNo() {
        let maxMemberNo = 0;
        for(let i = 0; i < this.memberList.length; i++){
            if(this.memberList[i].memberNo > maxMemberNo){
                maxMemberNo = this.memberList[i].memberNo;
            }
        }
        return maxMemberNo;
    }

    // 로그인 버튼 클릭 시 
    static loginMember(memberId, memberPw) {
        let result = false;
        for(let i = 0; i < this.memberList.length; i++){
            if(this.memberList[i].memberId == memberId && this.memberList[i].memberPw == memberPw){
                result = true;
                break;
            }
        }
        return result;
    }

    // 멤버리스트 페이지
    static getMemberList() {
        return this.memberList;
    }

}