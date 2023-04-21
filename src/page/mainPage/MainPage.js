import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const move = useNavigate();

  return (
    //jshint ignore:start
    <div className="notlogin">
      <aside>
        <div className="login">
          <div className="logo-pad">
            <img
              alt="everyhansung"
              src="img/everyhansung.png"
              className="logo-image cursor-pointer"
              onClick={() => move("/membermain")}
            />
          </div>
          <Link to="/login" className="button login">
            로그인
          </Link>

          <Link to="/register" className="button regis">
            회원가입
          </Link>
          <p className="find">
            <a href="/forgot">아이디/비밀번호 찾기</a>
          </p>
          <hr />
        </div>
      </aside>

      <section className="service white">
        <h2>
          한성대 학생의 커뮤니티
          <br />
          <strong>
            "에브리한성"
            <br />
          </strong>
          <p>
            <br />
            <img
              alt="sangsangs"
              src="img/sangsangs.png"
              className="sangsangs cursor-pointer"
              onClick={() => move("/membermain")}
            />
            <div className="grey"> (그림을 클릭하면 페이지로 이동합니다.)</div>
          </p>
        </h2>
        <div className="paragraph">
          <p>
            학교 서비스에 손쉽게
            <strong> 접근</strong>
            이 가능하고,
            <br />
            유용한
            <strong> 학교 생활 정보</strong>
            를 접할 수 있으며,
            <br />
            교내 학생들과 소통하는
            <strong> 익명 커뮤니티</strong>를 이용할 수 있습니다.
          </p>
        </div>
        <section className="footer white" style={{ paddingLeft: "22%" }}>
          <ul className="links">
            <li>
              <a href="/page/serviceagreement">서비스 이용약관</a>
            </li>
            <li className="privacy">
              <a href="/page/rules">커뮤니티 이용규칙</a>
            </li>

            <li>
              <a href="/page/privacy">개인정보처리방침</a>
            </li>
            <li>
              <a href="/page/youthpolicy">청소년 보호정책</a>
            </li>
            <li>
              <p>문의: capstone23m@gmail.com</p>
            </li>
            <li className="copyright">
              <a href="/">© 에브리 한성</a>
            </li>
          </ul>
        </section>
      </section>
    </div>
    //jshint ignore:end
  );
};

export default MainPage;
