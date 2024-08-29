"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="login-container bg-[#FAF9F9] p-8 rounded-lg shadow-[0px_4px_4px_0px_#00000040] w-full max-w-[600px]">
        <div className="login-gradient"></div>
        <div className="login-content">
          <div className="login-header flex flex-col items-center">
            <div className="login-logo mb-4">
              <Image
                src="/vercel.svg"
                alt="Logo"
                width={150}
                height={36}
              />
            </div>
            <h2 className="login-title text-center text-3xl mb-8">
              Digitaliza
            </h2>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-input-group">
              <div className="mb-6">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input-field w-full py-2 px-3 text-sm"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="input-field w-full py-2 px-3 text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="remember-me"
                />
                <label htmlFor="remember-me" className="remember-me-label ml-3 text-sm">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="forgot-password">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="submit-button w-1/2 py-3 text-sm bg-[#294095] text-white hover:bg-[#3a5bc7] transition-colors duration-300"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}