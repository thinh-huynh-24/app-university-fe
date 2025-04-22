// pages/login.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Thay vì 'next/router'

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
  
    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
  
      try {
        const response = await fetch("http://localhost:8000/api/v1/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: email,
            password: password,
          }),
        });
  
        const data = await response.json();
  
        if (response.status === 201) {
          const { token } = data.data;
  
          // Lưu thông tin user và token vào localStorage
          localStorage.setItem("access_token", token.access_token);
  
          // Điều hướng đến trang dashboard
          router.push("/");
          console.log(token)
        } else {
            
          setError("Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin.");
        }
      } catch (error) {
        setError("Có lỗi xảy ra, vui lòng thử lại.");
      }
    };
  
    return (
      <div>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    );
  };
  
  export default LoginPage;