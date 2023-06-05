import React from "react";

import Header from "../../components/Header";
import Footer, { windowScrollTop } from "../../components/Footer";
import Popup from "../../components/intro/Popup";

import img1 from "../../img/demo/CK_pc0040545882_.jpg";
import img2 from "../../img/demo/AdobeStock_93452229-scaled.jpg";
import img3 from "../../img/demo/AdobeStock_375987102-scaled.jpg";
import img4 from "../../img/demo/AdobeStock_427584265-scaled.jpg";
import img5 from "../../img/demo/AdobeStock_261344590.jpg";
import img6 from "../../img/demo/AdobeStock_416872788-1-scaled.jpg";
import img7 from "../../img/demo/AdobeStock_270639335-scaled.jpg";
import img8 from "../../img/demo/CK_cm080902129_tiny2.jpg";
import img9 from "../../img/demo/1920x521@2x.jpg";

import logo1 from "../../img/logo/symbol_white.png";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { transferAtom } from "../../recoil/transferAtom";
const transferLanguage = [
  [
    "WELTOUCH®는 흔들리지 않는 믿음을 바탕으로 우리의 삶의 공간에 건강한 환경을 만들어주겠다는 영원한 과제이자 목표를 향해 이 순간에도 최선을 다합니다.",
    "자기구동형 무광촉매",
    "기술 응용 분야",
    "빛의 유·무와 상관없이 공기중의 산소(O2)와 습도(H2O)만 있다면 강력한 산화·환원반응으로 항균, 살균, 탈취, 방오 등의 다양한 분야에 적용할 수 있는 초격차(Super gap) 기술 무광촉매 WELTOUCH®",
    "{transferLanguage[language][4]}",
    "다목적 복합 필터 기술",
    "WELTOUCH® 다목적 복합 필터 기술은 기존에 미세먼지 제거, 악취 제거, 살균 효과들을 위해 여러 장치들과 필터들이 필요 했던 것을 하나의 필터로 같은 효과를 낼 수 있게 해주는 기술입니다.",
    "신선도 유지 기술",
    "WELTOUCH® 신선도 유지 기술은 종이, 박스, 원단 등과 같은 소재에 다양하게 적용해 음식의 패키지 및 용기(트레이)에 음식의 부패 방지 효과를 부여하는 기술입니다.",
    "상시 방역 & 공기질 개선 기술",
    "WELTOUCH® 상시 방역 기술은 악취의 원인물질을 분해·제거하고 새집증후군, 새가구증후군, 바이러스의 전염 등을 예방하여 쾌적한 환경을 제공하는 기술입니다.",
    "수질 개선 기술",
    "WELTOUCH® 수질 개선 기술은 유수분리 기능과 총인제거 기능으로 수질을 개선해주는 기술입니다.",
    "건축 자재 적용 기술",
    "WELTOUCH® 건축자재 적용 기술 미세먼지 전구물질인 NOx, SOx, VOCs 등을 분해·제거하여 미세먼지를 제거해주고 건축자재의 오염을 막아주고 수명을 늘려주는 기술입니다.",
    "제휴 제안",
    "WELTOUCH®는 소재부터 완제품까지 수많은 분야에서 여러분과 협력하여 WELTOUCH®의 기술이 들어간 고품질의 제품을 만들 것입니다.",
    "Media",
    "WELTOUCH®의 뛰어난 효과를 담은 순간들을 확인해 보세요.",
  ],
  [
    "On the basis of undisturbed belief, WELTOUCH® thoroughly endeavors to overcome the seemingly permanent challenge and achieve our goal of creating a healthy environment even at this moment.",
    "SELF-ACTUATED PHOTOCATALYST",
    "APPLICATION FIELDS",
    "Super gap technology Self-actuated photocatalyst WELTOUCH® that can be applied to various fields such as antibacterial, sterilization, deodorization, and antisoil with strong oxidation and reduction reactions, as long as oxygen (O2) and humidity (H2O) are in the air, no matter light are exist or not.",
    "Find more",
    "Multi-purpose composite filter",
    "WELTOUCH® multifunctional filter technology is making a single filter can achieve the same effects as devices and filters required for fine dust, odor removal, and sterilization.",
    "Maintenance of freshness",
    "WELTOUCH® Freshness Maintenance Technology is a technology that applies various applications to materials such as paper, boxes, and fabrics, giving food’s anti-corruption effect to food packages and containers(tray).",
    "Air quality improvement",
    "WELTOUCH® constant prevention technology is a technology that decomposes and removes substances that cause odors and provides a pleasant environment by preventing new house syndrome and virus transmission.",
    "Water Quality Improvement",
    "WELTOUCH® water quality improvement technology improves water quality with oil and water separation and total phosphorus removal.",
    "Application to construction materials",
    "WELTOUCH® construction material application technology is a technology that removes fine dust by decomposing and removing fine dust precursors such as NOx, SOx, and VOCs, preventing contamination of construction materials, and extending life.",
    "Affiliate/Proposal",
    "WELTOUCH® will work with you to create high-quality products with WELTOUCH® technology, from materials to finished products.",
    "Media",
    "Check out WELTOUCH®'s outstanding moments.",
  ],
  [
    "WELTOUCH® melakukan yang terbaik saat ini menuju fungsi dan tujuan yang konsisten untuk menciptakan lingkungan yang sehat di ruang hidup kita berdasarkan keyakinan yang tak tergantikan.",
    "Fotokatalis yang digerakkans sendiri",
    "Aplikasi Teknis",
    "Teknologi supergap Self-actuated photocatalyst ( fotokatalis yang digerakkan sendiri ) WELTOUCH® yang dapat diaplikasikan pada berbagai bidang seperti antibakteri, sterilisasi, penghilang bau badan, dan antisoil dengan reaksi oksidasi dan reduksi yang kuat, selama oksigen (O2) dan kelembapan (H2O) ada di udara, tidak peduli cahaya ada atau tidak.",
    "Pelajari lebih lanjut",
    "Teknologi filter multi fungsi",
    "Teknologi filter multifungsi WELLTOUCH® membuat satu filter dapat mencapai efek yang sama seperti perangkat dan filter yang diperlukan untuk debu halus, penghilangan bau, dan sterilisasi.",
    "Teknologi Pemeliharaan Kesegaran",
    "WELTOUCH® Freshness Maintenance Technology adalah teknologi yang menerapkan berbagai aplikasi pada bahan seperti kertas, kotak, dan kain, memberikan efek anti-korupsi makanan pada kemasan dan wadah (tray) makanan.",
    "Peningkatan kualitas udara",
    "Teknologi pencegahan penyakit menular dan peningkatan kualitas udara konstan WELTOUCH® adalah teknologi yang menguraikan dan menghilangkan zat penyebab bau dan menyediakan lingkungan yang menyenangkan dengan mencegah sindrom baru di rumah , furnitur , dan penularan virus.",
    "Teknologi peningkatan kualitas air",
    "Teknologi Peningkatan Kualitas Air WELTOUCH® meningkatkan kualitas air dengan pemisahan minyak dan air serta penghilangan fosfor total. Aplikasi pada teknologi bahan konstruksi.",
    "Aplikasi pada teknologi bahan konstruksi",
    "Teknologi aplikasi material konstruksi WELTOUCH® adalah teknologi yang menghilangkan debu halus dengan menguraikan dan menghilangkan prekursor debu halus seperti NOx, SOx, dan VOC, mencegah kontaminasi material konstruksi, dan memperpanjang umur.",
    "AFILIASI/PROPOSAL",
    "WELTOUCH® akan bekerja dengan Anda untuk menciptakan produk berkualitas tinggi dengan teknologi WELTOUCH®, dari bahan hingga produk jadi",
    "Media",
    "Lihat momen luar biasa WELTOUCH®.",
  ],
  [
    "WELTOUCH® hace todo lo posible incluso en este momento para la eterna tarea y el objetivo de crear un entorno saludable en nuestro espacio vital basado en una fe inquebrantable.",
    "Fotocatalizador auto accionado ",
    "Campo de aplicaciones tecnológicas",
    "Fotocatalizador WELTOUCH® con tecnología Super Gap que se puede aplicar a varios campos como antibacteriano, esterilización, desodorización y antiincrustante a través de fuertes reacciones de oxidación, reconversión cuando solo hay oxígeno (O2) y humedad (H2O) en el aire, independientemente de la luz.",
    "Leer más",
    "Tecnología de filtro compuesto versátil",
    "La tecnología de filtro compuesto multipropósito WELTOUCH® es una tecnología que le permite lograr el mismo efecto con un solo filtro que antes requería múltiples dispositivos y filtros para la eliminación de polvo fino, eliminación de olores y efectos de esterilización.",
    "Teknologi Pemeliharaan Kesegaran",
    "La tecnología de conservación de la frescura WELTOUCH® se aplica a varios materiales como papel, cajas y telas para dar a los envases y recipientes (bandejas) de alimentos para el efecto de evitar el deterioro de los alimentos.",
    "Peningkatan kualitas udara",
    "La tecnología de prevención regular WELTOUCH® para bacteria descompone y elimina las sustancias que causan olor y proporciona un ambiente agradable al prevenir el síndrome de la casa nueva, el síndrome del mueble nuevo y la transmisión de virus.",
    "Tecnología de mejora de la calidad del agua",
    "La tecnología de mejora de la calidad del agua WELTOUCH® mejora la calidad del agua mediante la separación de aceite y agua, y la eliminación total de fósforo.",
    "Aplikasi pada teknologi bahan konstruksi",
    "La tecnología WELTOUCH® aplicada a los materiales de construcción descompone y elimina los NOx, SOx y VOCs, que elimina el polvo fino, evita la contaminación de los materiales de construcción y prolonga su vida útil.",
    "Propuesta / Asociación",
    "WELTOUCH® trabajará con usted en numerosos campos, desde materiales hasta productos terminados, para crear productos de alta calidad que contengan la tecnología WELTOUCH®.",
    "Medio",
    "Compruebe los momentos capturados de WELTOUCH® con excelente eficacia.",
  ],
];

const Intro: React.FC = () => {
  const [tab, setTab] = React.useState<boolean>(true);
  const navigate = useNavigate();
  const language = useRecoilValue(transferAtom);
  const contactHandler = () => {
    navigate("/contact/stepOne");
    windowScrollTop();
  };
  return (
    <main id="main">
      <Popup />
      <Header />
      <div className="container vh-container">
        <article className="visual_area">
          <div className="video_wrap">
            <video src="assets/main.mp4" poster="" muted loop autoPlay typeof="video/mp4" />
            <div className="slogan">
              <img src="assets/logo_slogan.png" alt="" />
            </div>
          </div>
        </article>
        <article className="banner_area" id="banner_001">
          <div className="background_img">
            <img src={img1} alt="" />
          </div>
          <div className="banner_content">
            <div className="content_title">Our Mission</div>
            <div className="content_text">{transferLanguage[language][0]}</div>
            <div className="content_btn" onClick={contactHandler}>
              <a className="btn_more">
                Learn more about us <div className="arrow"></div>
              </a>
            </div>
          </div>
        </article>
        <article className="banner_area" id="banner_002">
          <div className="banner_content">
            <div className="content_title white">Our Products</div>
            <div className="tab_wrap">
              <div className="tab_area twinBox">
                <button
                  className="tab_btn active"
                  onClick={() => setTab(true)}
                  style={{ backgroundColor: tab ? "#00AFC8" : "#2E98A7" }}
                >
                  <img src={logo1} alt="" />
                  {transferLanguage[language][1]}
                </button>
                <button
                  className="tab_btn"
                  onClick={() => setTab(false)}
                  style={{ backgroundColor: !tab ? "#00AFC8" : "#2E98A7" }}
                >
                  <img src={logo1} alt="" />
                  {transferLanguage[language][2]}
                </button>
              </div>
              <div className="tab_content">
                {tab && (
                  <div className="tab_item active">
                    <div className="twinBox">
                      <div className="txtBox">
                        <div className="text">{transferLanguage[language][3]}</div>
                        <a className="btn_more white" onClick={contactHandler}>
                          {transferLanguage[language][4]} <div className="arrow"></div>
                        </a>
                      </div>
                      <div className="imgBox">
                        <img src={img2} alt="" />
                      </div>
                    </div>
                  </div>
                )}
                {!tab && (
                  <div className="tab_item active">
                    <div className="twinBox">
                      <div className="txtBox">
                        <div className="title">{transferLanguage[language][5]}</div>
                        <div className="text">{transferLanguage[language][6]}</div>
                        <a className="btn_more white" onClick={contactHandler}>
                          {transferLanguage[language][4]} <div className="arrow"></div>
                        </a>
                      </div>
                      <div className="imgBox">
                        <img src={img3} alt="1" />
                      </div>
                    </div>
                    <div className="twinBox">
                      <div className="txtBox">
                        <div className="title">{transferLanguage[language][7]}</div>
                        <div className="text">{transferLanguage[language][8]}</div>
                        <a className="btn_more white" onClick={contactHandler}>
                          {transferLanguage[language][4]} <div className="arrow"></div>
                        </a>
                      </div>
                      <div className="imgBox">
                        <img src={img7} alt="" />
                      </div>
                    </div>
                    <div className="twinBox">
                      <div className="txtBox">
                        <div className="title">{transferLanguage[language][9]}</div>
                        <div className="text">{transferLanguage[language][10]}</div>
                        <a className="btn_more white" onClick={contactHandler}>
                          {transferLanguage[language][4]} <div className="arrow"></div>
                        </a>
                      </div>
                      <div className="imgBox">
                        <img src={img4} alt="" />
                      </div>
                    </div>
                    <div className="twinBox">
                      <div className="txtBox">
                        <div className="title">{transferLanguage[language][11]}</div>
                        <div className="text">{transferLanguage[language][12]}</div>
                        <a className="btn_more white" onClick={contactHandler}>
                          {transferLanguage[language][4]} <div className="arrow"></div>
                        </a>
                      </div>
                      <div className="imgBox">
                        <img src={img5} alt="" />
                      </div>
                    </div>
                    <div className="twinBox">
                      <div className="txtBox">
                        <div className="title">{transferLanguage[language][13]}</div>
                        <div className="text">{transferLanguage[language][14]}</div>
                        <a className="btn_more white" onClick={contactHandler}>
                          {transferLanguage[language][4]} <div className="arrow"></div>
                        </a>
                      </div>
                      <div className="imgBox">
                        <img src={img6} alt="" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>
        <article className="banner_area" id="banner_003">
          <div className="background_img">
            <img src={img8} alt="" />
          </div>
          <div className="banner_content">
            <div className="content_title white">{transferLanguage[language][15]}</div>
            <div className="content_text white">{transferLanguage[language][16]}</div>
            <div className="content_btn">
              <a className="btn_more white" onClick={contactHandler}>
                Click Here for Proposal
                <div className="arrow"></div>
              </a>
            </div>
          </div>
        </article>
        <article className="banner_area" id="banner_004">
          <div className="background_img">
            <img src={img9} alt="" />
          </div>
          <div className="banner_content">
            <div className="content_title">{transferLanguage[language][17]}</div>
            <div className="content_text">{transferLanguage[language][18]}</div>
            <div className="content_btn">
              <a className="btn_more" onClick={contactHandler}>
                Discover more
                <div className="arrow"></div>
              </a>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
};

export default Intro;
