import React from "react";
import logo from "../img/logo/logo.png";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { transferAtom } from "../recoil/transferAtom";

import ko from "../img/icon/kor.png";
import en from "../img/icon/en.png";
import id from "../img/icon/id.png";
import es from "../img/icon/es.png";

const transferLanguage = [["ABOUT US", "WELTOUCH® brand", "주요 관계사", "인증 & 수상내역"], [], [], []];

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [language, setLanguages] = useRecoilState(transferAtom);
  const onClickHandler = (e: any) => {
    setLanguages(e.target.value);
  };
  return (
    <header id="header">
      <div className="header-wrap">
        <div className="inner">
          <div className="logo-wrap">
            <a className="logo" title="홈으로">
              <img src={logo} alt="" onClick={() => navigate("/")} />
            </a>
          </div>
          <div className="nav-wrap">
            <nav>
              <ul>
                <li>
                  <div className="nav-title" onClick={() => navigate("/about/brand")}>
                    {transferLanguage[language][0]}
                  </div>
                  <div className="nav-depth">
                    <ul>
                      <li onClick={() => navigate("/about/brand")}>
                        <a>{transferLanguage[language][1]}</a>
                      </li>
                      <li onClick={() => navigate("/about/relationship")}>
                        <a>{transferLanguage[language][2]}</a>
                      </li>
                      <li onClick={() => navigate("/about/price")}>
                        <a>{transferLanguage[language][3]}</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="nav-title" onClick={() => navigate("/product/noshine")}>
                    Products
                  </div>
                  <div className="nav-depth">
                    <ul>
                      <li onClick={() => navigate("/product/noshine")}>
                        <a>자기구동형 무광촉매</a>
                      </li>
                      <li>
                        <div>기술 응용 분야</div>
                        <div className="nav-depth">
                          <ul>
                            <li onClick={() => navigate("/product/technical/multi")}>
                              <a>다목적 복합 필터 기술</a>
                            </li>
                            <li onClick={() => navigate("/product/technical/fresh")}>
                              <a>신선도 유지 기술</a>
                            </li>
                            <li onClick={() => navigate("/product/technical/air")}>
                              <a>상시 방역 & 공기질 개선 기술</a>
                            </li>
                            <li onClick={() => navigate("/product/technical/water")}>
                              <a>수질 개선 기술</a>
                            </li>
                            <li onClick={() => navigate("/product/technical/build")}>
                              <a>건축 자재 적용 기술</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li onClick={() => navigate("/product/redchec")}>
                        <a>Redchec®</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li onClick={() => navigate("/media")}>
                  <a className="nav-title">Media</a>
                </li>
                <li onClick={() => navigate("/contact/stepOne")}>
                  <a className="nav-title">문의하기</a>
                </li>
              </ul>
            </nav>
            <div className="lang">
              <select id="leng" onChange={onClickHandler}>
                <option value={0}>
                  <img src={ko} alt="한국어" />
                  한국어
                </option>
                <option value={1}>
                  <img src={en} alt="English" />
                  English
                </option>
                <option value={2}>
                  <img src={id} alt="Bahasa Indonesia" />
                  Bahasa Indonesia
                </option>
                <option value={3}>
                  <img src={es} alt="Español" />
                  Español
                </option>
              </select>
            </div>
          </div>
          <div className="m_nav_btn">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="mobile-nav-wrap">
            <div className="nav-header">
              <div className="lang">
                <select id="leng" onChange={onClickHandler}>
                  <option value={0}>
                    <img src={ko} alt="한국어" />
                    한국어
                  </option>
                  <option value={1}>
                    <img src={en} alt="English" />
                    English
                  </option>
                  <option value={2}>
                    <img src={id} alt="Bahasa Indonesia" />
                    Bahasa Indonesia
                  </option>
                  <option value={3}>
                    <img src={es} alt="Español" />
                    Español
                  </option>
                </select>
              </div>
              <div className="m_nav_btn">
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
            <nav className="nav-menu">
              <ul>
                <li>
                  <div className="nav-title">ABOUT US</div>
                  <div className="nav-depth">
                    <ul>
                      <li>
                        <a>WELTOUCH® brand</a>
                      </li>
                      <li>
                        <a>주요 관계사</a>
                      </li>
                      <li>
                        <a>인증 & 수상내역</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="nav-title">Products</div>
                  <div className="nav-depth">
                    <ul>
                      <li>
                        <a>자기구동형 무광촉매</a>
                      </li>
                      <li>
                        <div className="depth-title">기술 응용 분야</div>
                        <div className="nav-depth">
                          <ul>
                            <li>
                              <a>다목적 복합 필터 기술</a>
                            </li>
                            <li>
                              <a>신선도 유지 기술</a>
                            </li>
                            <li>
                              <a>상시 방역 & 공기질 개선 기술</a>
                            </li>
                            <li>
                              <a>수질 개선 기술</a>
                            </li>
                            <li>
                              <a>건축 자재 적용 기술</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li onClick={() => navigate("/product/redchec")}>
                        <a>Redchec®</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li onClick={() => navigate("/media")}>
                  <a className="nav-title">Media</a>
                </li>
                <li onClick={() => navigate("/contact/stepOne")}>
                  <a className="nav-title">문의하기</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
