import { useState } from "react";
import axios from "axios";
import "./SignUpPage.css";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

const FindPwPage = () => {
  const [studentId, setStudentId] = useState("");
  const move = useNavigate();

  return (
    <div id="register-container">
      <div className="">
        <div className="mb-3 ">
          <strong
            className="notimportant"
            onClick={(e) => {
              e.preventDefault();
              move("/forgot");
            }}
          >
            학번 찾기
          </strong>
          &nbsp;&nbsp;
          <strong className="important">비밀번호 찾기</strong>
          <div className="input">
            <input
              type="text"
              value={studentId}
              onChange={(e) => {
                setStudentId(e.target.value);
              }}
              placeholder="학번"
            ></input>
          </div>
          <div className="input">
            <button
              className="lec-button mb-3"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                move("/forgot/password/userid");
              }}
            >
              비밀번호 찾기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FindPwPage;
