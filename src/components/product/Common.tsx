import React from "react";
import { styled } from "styled-components";
import coationFilter from "../../img/products/기술 응용 분야/다목적 복합 필터 기술/FILTER1_KR.png";
import Filter from "../../img/products/기술 응용 분야/다목적 복합 필터 기술/FILTER2_KR.png";
import FilterDetail from "../../img/products/기술 응용 분야/다목적 복합 필터 기술/FILTER3_KR.png";
import before from "../../img/products/기술 응용 분야/다목적 복합 필터 기술/diagram_before_KR.png";
import after from "../../img/products/기술 응용 분야/다목적 복합 필터 기술/diagram_after_KR.png";
import bac_before from "../../img/products/기술 응용 분야/다목적 복합 필터 기술/bacteria_before.png";
import bac_after from "../../img/products/기술 응용 분야/다목적 복합 필터 기술/bacteria_after.png";
import chamber from "../../img/products/기술 응용 분야/다목적 복합 필터 기술/chamber.png";
import report from "../../img/products/기술 응용 분야/다목적 복합 필터 기술/test_report.png";
import Air from "../../img/products/기술 응용 분야/다목적 복합 필터 기술/img_air.jpg";
const Common = () => {
  return (
    <StCommon.Container>
      <StCommon.CoatingBox>
        <StCommon.LineBox>
          <StCommon.Title>WELTOUCH® Coating Filter의 역할</StCommon.Title>
          <StCommon.Liney />
        </StCommon.LineBox>
        <StCommon.CoatingImg src={coationFilter} alt="placeholder" />
      </StCommon.CoatingBox>
      <StCommon.CoatingBox>
        <StCommon.LineBox>
          <StCommon.Title>Filter 작동 원리</StCommon.Title>
          <StCommon.Liney />
        </StCommon.LineBox>
        <StCommon.FilterImgBox>
          <StCommon.FilterImg src={Filter} alt="placeholder" />
          <StCommon.FilterImg src={FilterDetail} alt="placeholder" />
        </StCommon.FilterImgBox>
      </StCommon.CoatingBox>
      <StCommon.CoatingBox>
        <StCommon.LineBox>
          <StCommon.Title>실제 공기질 비교 성적</StCommon.Title>
          <StCommon.Liney />
        </StCommon.LineBox>
        <StCommon.AirBox>
          <StCommon.AirText>
            대전 D 센터에서 오직 Filter만 실제 적용한 결과
            <br />
            실내 공기 질 관리 규제 수치에 비해 WELTOUCH® Coating Filter를 설치한 이후
            <br />
            미세먼지, 포름알데히드 등 유해 물질의 수치가 현저히 낮아졌습니다.
          </StCommon.AirText>
          <StCommon.AirImg src={Air} alt="placeholder" />
        </StCommon.AirBox>
        <StCommon.PyoBox>
          <StCommon.PyoRow>
            <StCommon.PyoTitle bgColor="#eee" width="352px">
              측정항목
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#eee" width="352px">
              기준 수치
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="rgba(204, 239, 244, 1)" width="705px" color="white">
              WELTOUCH® Coation Filter 설치
            </StCommon.PyoTitle>
          </StCommon.PyoRow>
          <StCommon.PyoRow>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              미세먼지
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              100 ㎍/m³ 이하
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="rgba(76, 198, 215, 1)" width="705px" line="true" color="white">
              40.1 ㎍/m³ 이하
            </StCommon.PyoTitle>
          </StCommon.PyoRow>
          <StCommon.PyoRow>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              초미세먼
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              100 ㎍/m³ 이하
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="rgba(76, 198, 215, 1)" width="705px" line="true" color="white">
              36.0 ㎍/m³ 이하
            </StCommon.PyoTitle>
          </StCommon.PyoRow>
          <StCommon.PyoRow>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              포름알데히드
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              100 ppm 이하
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="rgba(76, 198, 215, 1)" width="705px" line="true" color="white">
              56.0 ppm
            </StCommon.PyoTitle>
          </StCommon.PyoRow>
          <StCommon.PyoRow>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              총부유세균
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              800 CFU/m³
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="rgba(76, 198, 215, 1)" width="705px" line="true" color="white">
              38 CFU/m³
            </StCommon.PyoTitle>
          </StCommon.PyoRow>
          <StCommon.PyoRow>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              일산화탄소
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              10 ppm 이하
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="rgba(76, 198, 215, 1)" width="705px" line="true" color="white">
              1.9 ppm
            </StCommon.PyoTitle>
          </StCommon.PyoRow>
        </StCommon.PyoBox>
      </StCommon.CoatingBox>
      <StCommon.CoatingBox>
        <StCommon.LineBox>
          <StCommon.Title>미세먼지 제거 Test</StCommon.Title>
          <StCommon.Liney />
        </StCommon.LineBox>
        <StCommon.DustBox gap="150px">
          <StCommon.AirText>
            WELTOUCH® Coating Filter의 미세먼지 제거 Test 결과
            <br />
            무처리 Filter 대비 Filter의 제거 효율이 큰 폭으로 상승하였습니다.
          </StCommon.AirText>
          <StCommon.DustImgBox>
            <StCommon.DustImg src={before} alt="placeholder" />
            <StCommon.DustImg src={after} alt="placeholder" />
          </StCommon.DustImgBox>
        </StCommon.DustBox>
        <StCommon.PyoBox>
          <StCommon.PyoRow>
            <StCommon.PyoTitle bgColor="#eee" width="352px">
              입자크기
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#eee" width="352px">
              무처리 Filter
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#eee" width="352px">
              WELTOUCH® Coation Filter
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="rgba(204, 239, 244, 1)" width="352px">
              제거 효율
            </StCommon.PyoTitle>
          </StCommon.PyoRow>
          <StCommon.PyoRow>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              0.3 μm
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              22
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              7
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#4CC6D7" width="352px" line="true" color="white">
              68.18%
            </StCommon.PyoTitle>
          </StCommon.PyoRow>
          <StCommon.PyoRow>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              0.5 μm
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              218
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              20
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#4CC6D7" width="352px" line="true" color="white">
              90.83%
            </StCommon.PyoTitle>
          </StCommon.PyoRow>
          <StCommon.PyoRow>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              1.0 μm
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              3,120
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              59
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#4CC6D7" width="352px" line="true" color="white">
              98.11%
            </StCommon.PyoTitle>
          </StCommon.PyoRow>
          <StCommon.PyoRow>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              2.5 μm
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              29,917
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              56
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#4CC6D7" width="352px" line="true" color="white">
              99.81%
            </StCommon.PyoTitle>
          </StCommon.PyoRow>
          <StCommon.PyoRow>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              5.0 μm
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              10,279
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              16
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#4CC6D7" width="352px" line="true" color="white">
              99.84%
            </StCommon.PyoTitle>
          </StCommon.PyoRow>
          <StCommon.PyoRow>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              10.0 μm
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              94,606
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#fefefe" width="352px" line="true">
              73
            </StCommon.PyoTitle>
            <StCommon.PyoTitle bgColor="#4CC6D7" width="352px" line="true" color="white">
              99.92%
            </StCommon.PyoTitle>
          </StCommon.PyoRow>
        </StCommon.PyoBox>
      </StCommon.CoatingBox>
      <StCommon.CoatingBox>
        <StCommon.LineBox>
          <StCommon.Title>부유낙하균 제거 Test</StCommon.Title>
          <StCommon.Liney />
        </StCommon.LineBox>
        <StCommon.DustBox gap="260px" mt="80px">
          <StCommon.AirText>
            MRSA균과 폐렴균을 상대로 WELTOUCH® Coating Filter
            <br />
            무처리 Filter 대비 Filter의 제거 효율이 큰 폭으로 상승하였습니다.
          </StCommon.AirText>
          <StCommon.DustBox gap="60px">
            <StCommon.BacImgBox>
              <StCommon.BacImgBox>
                <StCommon.BacImg src={bac_before} alt="" />
                <span>&lt;무처리&gt;</span>
              </StCommon.BacImgBox>
              <StCommon.BacImgBox>
                <StCommon.BacImg src={bac_after} alt="" />
                <span>&lt;WELTOUCH® Coating Filter&gt;</span>
              </StCommon.BacImgBox>
            </StCommon.BacImgBox>
            <StCommon.BacImgBox>
              <StCommon.BacImg src={chamber} alt=""></StCommon.BacImg>
              <span>&lt;시험 chamber&gt;</span>
            </StCommon.BacImgBox>
          </StCommon.DustBox>
        </StCommon.DustBox>
        <StCommon.CircleContainer>
          <StCommon.CircleBox>
            <StCommon.Circle>
              <StCommon.CircleTitle>99.9%</StCommon.CircleTitle>
              <span>3시간 가동 후</span>
              <span>세균 감소율</span>
            </StCommon.Circle>
            <StCommon.CircleText>
              <StCommon.CircleTextTitle>MRSA에 의한 항균 시험</StCommon.CircleTextTitle>
              <StCommon.CircleTextRow>
                <StCommon.SSContainer>
                  <StCommon.SSBox>
                    1.0 × 10<StCommon.CircleTextRowSS>4</StCommon.CircleTextRowSS>
                  </StCommon.SSBox>
                  <StCommon.CircleTextRowS>
                    초기농도
                    <br />
                    (CF U/ml)
                  </StCommon.CircleTextRowS>
                </StCommon.SSContainer>
                <span>→</span>
                <div>
                  <StCommon.SSBox>
                    &lt;10<StCommon.CircleTextRowSS>4</StCommon.CircleTextRowSS>
                  </StCommon.SSBox>
                  <StCommon.CircleTextRowS>
                    가동 후 농도
                    <br />
                    (CF U/ml)
                  </StCommon.CircleTextRowS>
                </div>
              </StCommon.CircleTextRow>
            </StCommon.CircleText>
          </StCommon.CircleBox>
          <StCommon.CircleBox>
            <StCommon.Circle>
              <StCommon.CircleTitle>99.9%</StCommon.CircleTitle>
              <span>3시간 가동 후</span>
              <span>세균 감소율</span>
            </StCommon.Circle>
            <StCommon.CircleText>
              <StCommon.CircleTextTitle>폐렴균 의한 항균 시험</StCommon.CircleTextTitle>
              <StCommon.CircleTextRow>
                <StCommon.SSContainer>
                  <StCommon.SSBox>
                    1.0 × 10<StCommon.CircleTextRowSS>4</StCommon.CircleTextRowSS>
                  </StCommon.SSBox>
                  <StCommon.CircleTextRowS>
                    초기농도
                    <br />
                    (CF U/ml)
                  </StCommon.CircleTextRowS>
                </StCommon.SSContainer>
                <span>→</span>
                <div>
                  <StCommon.SSBox>
                    &lt;10<StCommon.CircleTextRowSS>4</StCommon.CircleTextRowSS>
                  </StCommon.SSBox>
                  <StCommon.CircleTextRowS>
                    가동 후 농도
                    <br />
                    (CF U/ml)
                  </StCommon.CircleTextRowS>
                </div>
              </StCommon.CircleTextRow>
            </StCommon.CircleText>
          </StCommon.CircleBox>
        </StCommon.CircleContainer>
      </StCommon.CoatingBox>
      <StCommon.CoatingBox>
        <StCommon.LineBox>
          <StCommon.Title>탈취 Test</StCommon.Title>
          <StCommon.Liney />
        </StCommon.LineBox>
        <StCommon.DustBox gap="360px">
          <StCommon.AirText>
            원단에 WELTOUCH®를 코팅하여 Test한 결과
            <br />
            악취의 원인물질인 암모니아나 트리메틸아민이 한시간 안에 1ppm 이하로 감소하는
            <br />
            결과를 보였습니다.
          </StCommon.AirText>
          <StCommon.ReportImg src={report} alt="placeholder" />
        </StCommon.DustBox>
        <StCommon.PyoBox>
          <StCommon.PyoRow>
            <StCommon.PyoTitle width="100px" bgColor="#eee" line="true" bt="true">
              시험 항목
            </StCommon.PyoTitle>
            <StCommon.PyoTitle width="605px" bgColor="white" line="true" bt="true">
              탈취 시험
            </StCommon.PyoTitle>
            <StCommon.PyoTitle width="100px" bgColor="#eee" line="true" bt="true">
              시험 가스
            </StCommon.PyoTitle>
            <StCommon.PyoTitle width="605px" bgColor="white" line="true" bt="true">
              암모니아, 트리메탈아민
            </StCommon.PyoTitle>
          </StCommon.PyoRow>
          <StCommon.PyoRow>
            <StCommon.PyoTitle width="100px" bgColor="#eee" line="true" bt="true" db="true">
              결과
            </StCommon.PyoTitle>
            <StCommon.PyoFlexColumn>
              <StCommon.PyoTitle width="605px" bgColor="white" line="true" bt="true">
                암모니아 &nbsp;<StCommon.Emeral>100 ppm → 1ppm 이하</StCommon.Emeral>
              </StCommon.PyoTitle>
              <StCommon.PyoTitle width="605px" bgColor="white" line="true" bt="true">
                트리메탈아민 &nbsp;<StCommon.Emeral>30 ppm → 1ppm 이하</StCommon.Emeral>
              </StCommon.PyoTitle>
            </StCommon.PyoFlexColumn>
            <StCommon.PyoTitle width="100px" bgColor="#eee" line="true" bt="true" db="true">
              시험 기관
            </StCommon.PyoTitle>
            <StCommon.PyoTitle width="605px" bgColor="white" line="true" bt="true" db="true">
              한국화학윱합시험연구원(KTR)
            </StCommon.PyoTitle>
          </StCommon.PyoRow>
        </StCommon.PyoBox>
      </StCommon.CoatingBox>
    </StCommon.Container>
  );
};

export default Common;
export const StCommon = {
  Container: styled.div``,
  Title: styled.span`
    font: normal normal bold 48px/67px Pretendard;
    color: #333333;
    padding: 0 20px;
    background-color: white;
  `,
  Liney: styled.div`
    width: 100vw;
    border-top: 2px dashed black;
    position: absolute;
    top: 60%;
    z-index: -20;
  `,
  CoatingBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  CoatingImg: styled.img`
    width: 600px;
    margin-top: 80px;
  `,
  FilterImgBox: styled.div`
    margin-top: 80px;
    display: flex;
    gap: 30px;
  `,
  FilterImg: styled.img`
    width: 500px;
    height: 286px;
  `,
  AirBox: styled.div`
    display: flex;
    gap: 220px;
    margin-top: 80px;
  `,
  AirText: styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font: normal normal 300 20px/28px Pretendard;
    color: #555555;
  `,
  AirImg: styled.img`
    width: 500px;
    height: 280px;
    border-radius: 20px;
  `,
  PyoBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font: normal normal normal 16px/19px Pretendard;
    margin-top: 60px;
  `,
  PyoRow: styled.div`
    display: flex;
  `,
  PyoTitle: styled.div<{ bgColor: string; width: string; line?: string; color?: string; bt?: string; db?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width};
    height: ${({ db }) => (db === "true" ? "100px" : "50px")};
    border-bottom: ${(props) => (props.line === "true" ? "1px solid #E5E5E5" : "none")};
    border-top: ${(props) => (props.bt === "true" ? "1px solid #E5E5E5" : "none")};
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color ?? "#333333"};
  `,
  DustBox: styled.div<{ gap: string; mt?: string }>`
    display: flex;
    gap: ${(props) => props.gap};
    justify-content: center;
    align-items: center;
    margin-top: ${(props) => props.mt ?? "0px"};
  `,
  DustImgBox: styled.div`
    display: flex;
    gap: 40px;
    margin-top: 80px;
  `,
  DustImg: styled.img`
    width: 206px;
  `,
  BacImgBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  `,
  BacImg: styled.img`
    width: 200px;
    height: 200px;
    border-radius: 20px;
  `,
  Circle: styled.div`
    width: 160px;
    height: 160px;
    border-radius: 80px;
    border: 6px solid #00afc8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font: normal normal normal 18px/21px Pretendard;
  `,
  CircleTitle: styled.p`
    font: normal normal bold 24px/34px Pretendard;
  `,
  CircleContainer: styled.div`
    display: flex;
    gap: 115px;
  `,
  CircleBox: styled.div`
    display: flex;
    gap: 55px;
    margin-top: 60px;
  `,
  CircleTextTitle: styled.p`
    background-color: #00afc8;
    padding: 6px 12px;
    border-radius: 4px;
    color: white;
  `,
  CircleText: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 16px;
    font: normal normal bold 24px/34px Pretendard;
  `,
  CircleTextRow: styled.div`
    font: normal normal 300 24px/34px Pretendard;
    letter-spacing: 0px;
    color: #555555;
    display: flex;
    align-items: center;
    gap: 24px;
  `,
  SSContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  SSBox: styled.p`
    text-align: center;
    display: flex;
    flex-direction: center;
    align-items: flex-start;
  `,
  CircleTextRowS: styled.span`
    font: normal normal normal 18px/21px Pretendard;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  CircleTextRowSS: styled.span`
    font: normal normal normal 12px/17px Pretendard;
  `,
  LineBox: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 150px;
  `,
  ReportImg: styled.img`
    width: 360px;
    margin-top: 80px;
  `,
  PyoFlexColumn: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Emeral: styled.span`
    color: #00afc8;
  `,
};
