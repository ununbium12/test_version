/* Code generated with AutoHTML Plugin for Figma */
import "../css/Menu.css";

export const Menu = ({ ...props }) => {
  return (
    
    <div className="menu">

      <div className="login">
        <div className="name-rectangle">
          <div className="user">홍길동</div>
        </div>
        <div className="date-rectangle">
          <div className="YDM">2023년 01월 15일</div>
        </div>

        <div className="sysAlarm1">
          <div className="notice-rectangle">
            <div className="alarms">알림</div>
          </div>
          <div className="URalarms">
            안읽은 알람 <div className="numscolor">2</div> 건
          </div>
        </div>

        <div className="sysAlarm2">
          <div className="notice-rectangle2">
            <div className="report">신고</div>
          </div>
          <div className="URreport">
            안읽은 신고 <div className="numscolor">2</div> 건
          </div>
        </div>
      </div>

      <div className="SUList">
        <div className="category-top">
          <div className="JInfo">단지 정보</div>

          <div className="IAMN">소음 확인·관리</div>

          <div className="NCH">소음 신고 내역</div>
        </div>

        <div className="category-bottom">
          <div className="sngList">소음 발생 예정 내역</div>

          <div className="MRds">입주민 관리</div>

          <div className="NCH">기타 추가 메뉴</div>
        </div>
      </div>
    </div>
  );
};
