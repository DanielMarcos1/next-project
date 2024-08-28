"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login attempt with:", email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 h-96 bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
        <div className="h-full flex flex-col justify-between p-8">
          <div className="text-center">
            <Image
              src="/vercel.svg"
              alt="Logo"
              width={80}
              height={20}
              className="mx-auto"
            />
            <h2 className="mt-2 text-2xl font-extrabold text-gray-900">
              Digitaliza
            </h2>
          </div>
          <form className="space-y-4 flex-grow flex flex-col justify-center" onSubmit={handleSubmit}>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="rounded-md px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="rounded-md px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </form>
          <div className="text-sm text-center">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
