
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

}