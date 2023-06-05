import React from "react";
import { useNavigate } from "react-router-dom";

export const windowScrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <footer id="footer">
      <div className="inner">
        <div className="footer-content">
          <div className="info">
            <div className="logo">
              <img src="/assets/logo_f.png" alt="" />
            </div>
            <div>
              <i className="fa-solid fa-location-dot"></i> <span>충북 청주시 흥덕구 봉명로 31 T1타워 402~405호</span>
            </div>
            <div>
              <i className="fa-sharp fa-solid fa-envelope"></i> <a>weltouch@weltouch.net</a>
            </div>
            <div>
              <i className="fa-solid fa-phone"></i> <a href="tel:+82 43-224-8825">+82 43-224-8825</a>
            </div>
          </div>
          <div className="gnb">
            <ul>
              <li>
                <div className="gnb_title">WELTOUCH®</div>
                <ul>
                  <li
                    onClick={() => {
                      navigate("/about/brand");
                      windowScrollTop();
                    }}
                  >
                    <a>ABOUT US</a>
                  </li>
                  <li
                    onClick={() => {
                      navigate("/about/relationship");
                      windowScrollTop();
                    }}
                  >
                    <a>주요 관계사</a>
                  </li>
                  <li
                    onClick={() => {
                      navigate("/about/price");
                      windowScrollTop();
                    }}
                  >
                    <a>인증 & 수상내역</a>
                  </li>
                </ul>
              </li>
              <li>
                <div
                  className="gnb_title"
                  onClick={() => {
                    navigate("/product/noshine");
                    windowScrollTop();
                  }}
                >
                  Products
                </div>
                <ul>
                  <li
                    onClick={() => {
                      navigate("/product/noshine");
                      windowScrollTop();
                    }}
                  >
                    <a>자기구동형 무광촉매</a>
                  </li>
                  <li>
                    <a>기술 응용 분야</a>
                  </li>
                </ul>
                <ul>
                  <li
                    onClick={() => {
                      navigate("/product/technical/multi");
                      windowScrollTop();
                    }}
                  >
                    <a>다목적 복합 필터 기술</a>
                  </li>
                  <li
                    onClick={() => {
                      navigate("/product/technical/fresh");
                      windowScrollTop();
                    }}
                  >
                    <a>신선도 유지 기술</a>
                  </li>
                  <li
                    onClick={() => {
                      navigate("/product/technical/air");
                      windowScrollTop();
                    }}
                  >
                    <a>상시 방역 & 공기질 개선 기술</a>
                  </li>
                  <li
                    onClick={() => {
                      navigate("/product/technical/water");
                      windowScrollTop();
                    }}
                  >
                    <a>수질 개선 기술</a>
                  </li>
                  <li
                    onClick={() => {
                      navigate("/product/technical/build");
                      windowScrollTop();
                    }}
                  >
                    <a>건축 자재 적용 기술</a>
                  </li>
                  <li
                    onClick={() => {
                      navigate("/product/redchec");
                      windowScrollTop();
                    }}
                  >
                    <a>Redchec®</a>
                  </li>
                </ul>
              </li>
              <li
                onClick={() => {
                  navigate("/media");
                  windowScrollTop();
                }}
              >
                <a className="gnb_title">Media</a>
              </li>
              <li
                onClick={() => {
                  navigate("/contact/stepOne");
                  windowScrollTop();
                }}
              >
                <a className="gnb_title">문의하기</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">©2023. WELTOUCH®. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
