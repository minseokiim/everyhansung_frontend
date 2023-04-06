import { useState } from "react";
import axios from "axios";
import "../../../signupPage/SignUpPage.css";
import { useNavigate } from "react-router-dom";
import { FaUserGraduate, FaSchool } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

const Authentication = () => {
  const move = useNavigate();

  return (
    <div className="p-3">
      <strong>
        <AiFillSafetyCertificate />
        인증하기
      </strong>{" "}
      <br />
      <br />
      <div
        className="mini-card p-3 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          move("/auth/student");
        }}
      >
        <strong>
          <FaSchool />
          재학생 인증
        </strong>
        <br />
        <div className="grey">학생증이나, 재학 증명 자료를 통해 이용 가능</div>
      </div>
      <br />
      <div
        className="mini-card p-3 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          move("/auth/graduate");
        }}
      >
        <strong>
          <FaUserGraduate />
          졸업생 인증
        </strong>
        <br />
        <div className="grey">졸업 증명 자료를 통해 이용 가능</div>
      </div>
    </div>
  );
};
export default Authentication;
