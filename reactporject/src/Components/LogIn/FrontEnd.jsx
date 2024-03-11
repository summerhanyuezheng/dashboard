import React, { useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./FrontEnd.css"
import logo from "./logo&name.jpg"

export default function LogInCom() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
      console.log(response.data)
      // 登录成功跳转到主页
      navigate("/home")
    } catch (error) {
      console.error("Login failed:", error)
      // Handle login failure
    }
  }

  return (
    <div className="whole-page">
      <div className="container-left-img">
        <div className="left-img">
          <img src="https://greakproject.vercel.app/images/pages/boy-with-rocket-light.png" alt="" />
        </div>
      </div>

      <div className="right-side">
        <img src={logo} alt="" />
        <h3>Welcome to Sneat!👋 </h3>
        <p>Please sign-in to your account and start the adventure</p>
        <div className="log-info">
          <p style={{ marginTop: "15px" }}>
            Admin: <b>admin</b>@<b>sneat.com</b> / Pass: <b>admin</b>
          </p>
          <p>
            Client: <b>client</b>@<b>sneat.com</b> / Pass: <b>client</b>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input className="email" ref={emailRef} type="email" placeholder="Email" />
          <br></br>
          <input className="password" ref={passwordRef} type="password" placeholder="Password" />
          <br />
          <button className="login" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}
