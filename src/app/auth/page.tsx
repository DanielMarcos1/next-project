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
      <div className="login-container bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="login-gradient"></div>
        <div className="login-content">
          <div className="login-header flex flex-col items-center">
            <div className="login-logo mb-4">
              <Image
                src="/vercel.svg"
                alt="Logo"
                width={100}
                height={24}
              />
            </div>
            <h2 className="login-title text-center text-2xl mb-6">
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
                  className="input-field py-3 w-full"
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
                  className="input-field py-3 w-full"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="remember-me"
                />
                <label htmlFor="remember-me" className="remember-me-label ml-2">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="forgot-password">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="submit-button"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}