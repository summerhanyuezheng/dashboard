import React, { useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./FrontEnd.css"

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
      <div className="left-img">
        <img
          src="https://greakproject.vercel.app/images/pages/boy-with-rocket-light.png
"
          alt=""
        />
      </div>
      <div className="right-side">
        <h1>Sneat</h1>
        <h3>Welcome to Sneat</h3>
        <p>Please sign-in to your account and start the adventure</p>
        <div className="log-info">
          <p>Admin: admin@sneat.com / Pass: admin</p>
          <p>Client: client@sneat.com / Pass: client</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}
