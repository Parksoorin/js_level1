import { MemberDAO } from "./_memberDAO.js";
import { ControllerMain } from "./_controllerMain.js";

export class PageMemberJoin {
    idCheck = false;
    emailCheck = false;

    $inputMemberId = null;
    $buttonMemberIdCheckPro = null;

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

        
    }
}