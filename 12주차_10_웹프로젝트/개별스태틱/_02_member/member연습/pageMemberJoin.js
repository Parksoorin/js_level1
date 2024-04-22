import { MemberDAO } from "./_memberDAO.js";
import { ControllerMain } from "./_controllerMain.js";

export class PageMemberJoin {
    idCheck = false;
    emailCheck = false;

    $inputMemberId = null;
    $buttonMemberIdCheckPro = null;
    $inputMemberPw = null;
    $inputMemberPwRe = null;
    $inputMemberName = null;
    $inputMemberEmail = null;
    $buttonMemberEmailCheckPro = null;
    $inputMemberPhone = null;
    
    $inputMemberZonecode = null;
    $inputMemberAddress = null;
    $inputMemberAddressDetail = null;
    $buttonDaumPostAPI = null;

    $radioMemberGender = null;
    $selectMemberRoute = null;
    $checkMemberAllTerms = null;
    $checkMemberTerms = null;
    $btnMemberJoinPro = null;

    execute(data) {
        let $content = document.querySelector("#content");  

        let tag = "";
        tag += 
        `
        <style>
            #content-join {
                margin: 0 auto;
                width: 600px;
            }
            #title, #joinPro {
                text-align: center;
            }
        </style>
        `;

        tag +=
        `
        <table id="content-join">
            <tr>
                <td colspan="3" id="title"><h2>회원가입</h2></td>
            </tr>
            <tr>
                <td rowspan="2">아이디</td>
                <td><input id="input-memberId" type="text" placeholder="아이디를 입력해주세요" value="qwer1234"></td>
                <td><button id="button-memberIdCheckPro">중복확인</button></td>
            </tr>
            <tr>
                <td id="msg-memberId" colspan="2"></td>
            </tr>
            <tr>
                <td rowspan="2">비밀번호</td>
                <td colspan="2"><input id="input-memberPw" type="text" placeholder="비밀번호를 입력해주세요" value="Qwer1234!"></td>
            </tr>
            <tr>
                <td id="msg-memberPw" colspan="2"></td>
            </tr>
            <tr>
                <td rowspan="2">비밀번호확인</td>
                <td colspan="2"><input id="input-memberPwRe" type="text" placeholder="비밀번호를 한번 더 입력해주세요" value="Qwer1234!"></td>
            </tr>
            <tr>
                <td id="msg-memberPwRe" colspan="2"></td>
            </tr>
            <tr>
                <td rowspan="2">이름</td>
                <td colspan="2"><input id="input-memberName" type="text" placeholder="이름을 입력해주세요" value="홍길동"></td>
            </tr>
            <tr>
                <td id="msg-memberName" colspan="2"></td>
            </tr>
            <tr>
                <td rowspan="2">이메일</td>
                <td><input id="input-memberEmail" type="text" placeholder="이메일을 입력해주세요" value="qwer@naver.com"></td>
                <td><button id="button-memberEmailCheckPro">중복확인</button></td>
            </tr>
            <tr>
                <td id="msg-memberEmail" colspan="2"></td>
            </tr>
            <tr>
                <td rowspan="2">휴대폰</td>
                <td colspan="2"><input id="input-memberPhone" type="text" placeholder="숫자만 입력해주세요" value="01012345678"></td>
            </tr>
            <tr>
                <td id="msg-memberPhone" colspan="2"></td>
            </tr>
            <tr>
                <td rowspan="2">우편번호</td>
                <td><input id="input-memberZonecode" type="text" placeholder="우편번호를 입력해주세요" value="02830"></td>
                <td><button id="button-daumPostAPI">우편번호검색</button></td>
            </tr>
            <tr>
                <td id="msg-memberZonecode" colspan="2"></td>
            </tr>
            <tr>
                <td rowspan="2">도로명 주소</td>
                <td colspan="2"><input id="input-memberAddress" type="text" placeholder="도로명 주소를 입력해주세요" value="서울 성북구 아리랑로 3"></td>
            </tr>
            <tr>
                <td id="msg-memberAddress" colspan="2"></td>
            </tr>
            <tr>
                <td rowspan="2">남은 주소</td>
                <td colspan="2"><input id="input-memberAddressDetail" type="text" placeholder="남은 주소를 입력해주세요" value="남은주소"></td>
            </tr>
            <tr>
                <td id="msg-memberAddressDetail" colspan="2"></td>
            </tr>
            <tr>
                <td>성별</td>
                <td colspan="2">
                    <label><input type="radio" class="radio-memberGender" name="gender" value="1">남자</label>
                    <label><input type="radio" class="radio-memberGender" name="gender" value="2">여자</label>
                    <label><input type="radio" class="radio-memberGender" name="gender" value="0" checked>선택안함</label>
                </td>
            </tr>
            <tr>
                <td>유입 경로</td>
                <td colspan="2">
                    <select id="select-memberRoute">
                        <option value="1">인터넷 검색</option>
                        <option value="2">지인 권유</option>
                        <option value="3">SNS</option>
                        <option value="4">광고</option>
                        <option value="0" selected>기타</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td rowspan="2">이용약관동의</td>
                <td colspan="2">
                    <label><input id="check-memberAllTerms" type="checkbox">전체 동의</label>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <label><input class="check-memberTerms" type="checkbox" value="1">이용약관 동의 (필수)<br></label>
                    <label><input class="check-memberTerms" type="checkbox" value="2">개인정보취급 동의 (필수)<br></label>
                    <label><input class="check-memberTerms" type="checkbox" value="3">만 14세 이상입니다. (필수)<br></label>
                    <label><input class="check-memberTerms" type="checkbox" value="0">마케팅 메일 수신 동의 (선택)<br></label>
                </td>
            </tr>
            <tr>
                <td colspan="3" id="joinPro">
                    <button id="button-memberJoinPro">가입하기</button>
                </td>
            </tr>
        </table>        
        `;

        $content.innerHTML = tag;

        this.idCheck = false;
        this.emailCheck = false;

        // 회원가입 아이디 인풋(아직 구현 x)
        this.$inputMemberId = document.querySelector("#input-memberId");
        this.$inputMemberId.addEventListener("input", this.inputMemberIdInput);

        // 회원가입 아이디 중복확인 버튼
        this.$buttonMemberIdCheckPro = document.querySelector("#button-memberIdCheckPro");
        this.$buttonMemberIdCheckPro.addEventListener("click", this.buttonMemberIdCheckProClick);
    
            
        // 비밀번호 인풋 
        this.$inputMemberPw = document.querySelector("#input-memberPw");
        this.$inputMemberPw.addEventListener("input", this.inputMemberPwInput);

        // 비밀번호 재확인
        this.$inputMemberPwRe = document.querySelector("#input-memberPwRe");
        this.$inputMemberPwRe.addEventListener("input", this.inputMemberPwReInput);

        // 이름 확인
        this.$inputMemberName = document.querySelector("#input-memberName");
        this.$inputMemberName.addEventListener("input", this.inputMemberNameInput);

        // 이메일 인풋
        this.$inputMemberEmail = document.querySelector("#input-memberEmail");
        this.$inputMemberEmail.addEventListener("input", this.inputMemberEmailInput);
    
    
        // 이메일 중복 버튼
        this.$buttonMemberEmailCheckPro = document.querySelector("#button-memberEmailCheckPro");
        this.$buttonMemberEmailCheckPro.addEventListener("click", this.buttonMemberEmailCheckProClick);
    
        // 전화번호 인풋
        this.$inputMemberPhone = document.querySelector("#input-memberPhone");
        this.$inputMemberPhone.addEventListener("input", this.inputMemberPhoneInput);

        // 우편번호 인풋
        this.$inputMemberZonecode = document.querySelector("#input-memberZonecode");

        // 우편번호 검색 버튼
        this.$buttonDaumPostAPI = document.querySelector("#button-daumPostAPI");
        this.$buttonDaumPostAPI.addEventListener("click", this.execDaumPostcode);

        // 주소 인풋(도로명 주소)
        this.$inputMemberAddress = document.querySelector("#input-memberAddress");

        // 주소 인풋(남은 주소)
        this.$inputMemberAddressDetail = document.querySelector("#input-memberAddressDetail");

        // 성별 라디오버튼
        this.$radioMemberGender = document.querySelectorAll(".radio-memberGender");

        // 유입 경로 셀렉트
        this.$selectMemberRoute = document.querySelector("#select-memberRoute");

        // 약관동의 전체 선택
        this.$checkMemberAllTerms = document.querySelector("#check-memberAllTerms");
        this.$checkMemberAllTerms.addEventListener("click", this.checkMemberAllTermsClick);

        // 약관 동의 개별 선택
        this.$checkMemberTerms = document.querySelectorAll(".check-memberTerms");
        for(let i=0; i<this.$checkMemberTerms.length; i++) {
            this.$checkMemberTerms[i].addEventListener("click", this.checkMemberTermsClick);
        }

        // 회원가입 버튼
        this.$btnMemberJoinPro = document.querySelector("#button-memberJoinPro");
        this.$btnMemberJoinPro.addEventListener("click", this.buttonMemberJoinProClick);
    }

    // 회원가입 아이디 인풋
    inputMemberIdInput = (event) => {
        
    }

    // 아이디 중복확인 버튼 클릭
    buttonMemberIdCheckProClick = (event) => {
        let regExp = RegExp(/^[A-Za-z0-9_\-]{6,16}$/);

        if(this.$inputMemberId.value == ""){
            alert("아이디를 입력해주세요.");
            this.$inputMemberId.focus();
        } else if(!regExp.test(this.$inputMemberId.value)){
            alert("6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합하여 만들어주세요.");
            this.$inputMemberId.value = "";
            this.$inputMemberId.focus();
        } else {
            let check = MemberDAO.memberIdCheckPro(this.$inputMemberId.value);
            if(check == false){
                this.idCheck = true;
                alert("사용할 수 있는 아이디 입니다.");
            } else {
                this.$inputMemberId.value = "";
                this.$inputMemberId.focus();
                alert("사용할 수 없는 아이디 입니다.");
            }
        }
    }

    // 비밀번호 확인
    inputMemberPwInput = (event) => {
        let $msgMemberPw = document.querySelector("#msg-memberPw");
        let regExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/);
        if(regExp.test(this.$inputMemberPw.value)){
            $msgMemberPw.innerHTML = "";
        } else {
            $msgMemberPw.innerHTML = "<span style='color:#F03F40; font-size:12px;'>영문 대문자와 소문자, 숫자, 특수문자를 하나 이상 포함하여 8~16자 조합</span>";
        }
    }

    // 비밀번호 재확인
    inputMemberPwReInput = (event) => {
        let $memberPwRe = document.querySelector("#msg-memberPwRe");
        if(this.$inputMemberPw != this.$inputMemberPwRe){
            $memberPwRe.innerHTML = "<span style='color:#F03F40; font-size:12px;'>동일한 비밀번호를 입력하세요.</span>";
        }
    }

    // 이름 확인
    inputMemberNameInput = (event) => {
        let $msgmemberName = document.querySelector("#msg-memberName");
        let regExp = RegExp(/^[가-힣]{2,6}$/);
        if(!regExp.test(this.$inputMemberName.value)){
            $msgmemberName.innerHTML = "<span style='color:#F03F40; font-size:12px;'>2~6글자의 한글만 입력하세요.</span>"
        }
    }

    // 이메일 인풋
    inputMemberEmailInput = (event) => {
        let $msgMemberEmail = document.querySelector("#msg-memberEmail");
        let regExp = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);

        if(!regExp.test(this.$inputMemberEmail.value)){
            $msgMemberEmail.innerHTML = "<span style='color:#F03F40; font-size:12px;'>이메일 형식으로 입력해 주세요.</span>";
        }
    }

    // 이메일 중복 버튼
    buttonMemberEmailCheckProClick = (event) => {
        let regExp = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);

        if(this.$inputMemberEmail.value == ""){
            alert("이메일을 입력해주세요.");
            this.$inputMemberEmail.focus();
        } else if(!regExp.test(this.$inputMemberEmail.value)){
            alert("이메일 형식으로 입력해 주세요.");
            this.$inputMemberEmail.value = "";
            this.$inputMemberEmail.focus();
        } else {
            let check = MemberDAO.memberEmailCheckPro(this.$inputMemberEmail.value);
            if(check == false){
                this.emailCheck = true;
                alert("사용이 가능한 이메일입니다.");
            } else {
                alert("사용이 불가능한 이메일입니다.");
                this.$inputMemberEmail.value = "";
                this.$inputMemberEmail.focus();
            }
        }
    }

    // 전화번호 인풋
    inputMemberPhoneInput = (event) => {
        let $msgMemberPhone = document.querySelector("#msg-memberPhone");
        let regExp = RegExp(/^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/);
        if(!regExp.test($msgMemberPhone.value)){
            $msgMemberPhone.innerHTML = "<span style='color:#F03F40; font-size:12px;'>휴대폰 형식으로 입력해 주세요.</span>";
        }
    }

    // 우편번호 검색
    execDaumPostcode = (event) => {
        new daum.Postcode( {
            oncomplete: function(data) {
                document.querySelector("#input-memberZonecode").value = data.zonecode;
                document.querySelector("#input-memberAddress").value = data.address;
                document.querySelector("#input-memberAddressDetail").focus();
            }
        } ).open();
    }

    // 약관동의 전체 선택
    checkMemberAllTermsClick = (event) => {
        if(this.$checkMemberAllTerms.checked){
            for(let i = 0; i < this.$checkMemberTerms.length; i++){
                this.$checkMemberTerms[i].checked = true;
            } 
        }else {
            for(let i = 0; i < this.$checkMemberTerms.length; i++){
                this.$checkMemberTerms[i].checked = false;
            }
        }
    }

    // 약관 동의 개별 클릭
    checkMemberTermsClick = (event) => {
        let count = 0;
        for(let i=0; i<this.$checkMemberTerms.length; i++) {
            if(this.$checkMemberTerms[i].checked) {
                count += 1;
            }
        }
        if(count == this.$checkMemberTerms.length) {
            this.$checkMemberAllTerms.checked = true;
        } else {
            this.$checkMemberAllTerms.checked = false;
        }
    }

    // 회원가입 버튼 클릭
    buttonMemberJoinProClick = (event) => {
        
    }

}