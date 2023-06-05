import React from "react";
import { styled } from "styled-components";
import { cookie } from "../../constant/cookie";
import { useNavigate } from "react-router-dom";
const checked = cookie.get("popup");

const Popup = () => {
  const [isPopup, setIsPopup] = React.useState(() => (checked === "true" ? false : true));
  const navigate = useNavigate();
  const checkHandler = () => {
    const expires = new Date();
    expires.setDate(expires.getDate() + 1);
    cookie.set(`popup`, "true", { path: "/", expires });
    setIsPopup(false);
  };

  return (
    <StPopup>
      {isPopup && (
        <div className="pop-content">
          <div className="pop-body">
            <div className="pop-text-l">무료 샘플 코팅 신청</div>
            <div className="pop-text-r">
              WELTOUCH®에서는 고객사에서 성능을 직접
              <br />
              확인해보실 수 있게 고객사 분들의 제품에
              <br />
              WELTOUCH®를 무료로 샘플 코팅해드리고 있습니다.
              <br />
              <br />
            </div>
            <div className="pop-text-sb">
              지금 WELTOUCH® 샘플 코팅을 신청해 귀사의 제품에서 광촉매 초격차 기술 WELTOUCH®의 성능을 확인해보세요.
            </div>
            <a className="pop-link" onClick={() => navigate("/contact/stepOne")}>
              샘플 신청 하러 가기 <i className="fa-solid fa-angles-right"></i>
            </a>
          </div>
          <div className="pop-footer">
            <div>
              <input type="checkbox" name="" onClick={checkHandler} />
              <label>하루 동안 다시 열지 않습니다.</label>
            </div>
            <div className="popClose">x</div>
          </div>
        </div>
      )}
    </StPopup>
  );
};

export default Popup;

const StPopup = styled.div`
  position: fixed;
  top: 120px;
  left: 40px;
  z-index: 20;
`;
