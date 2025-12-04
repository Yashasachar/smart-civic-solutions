import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  const [backendHealth, setBackendHealth] = useState("checking...");

  useEffect(() => {
    // Adjust this URL to match your backend health endpoint
    fetch("http://localhost:8000/health")
      .then((res) => {
        if (!res.ok) throw new Error("Backend error");
        return res.json().catch(() => ({}));
      })
      .then(() => setBackendHealth("ok"))
      .catch(() => setBackendHealth("error"));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "1.5rem" }}>
      <h1>Smart Civic Solutions</h1>
      <p>Backend health: {backendHealth}</p>

      <nav style={{ marginTop: "1rem" }}>
        <Link to="/login">Login</Link>{" | "}
        <Link to="/register">Register</Link>{" | "}
        <Link to="/submit">Submit Complaint</Link>{" | "}
        <Link to="/my-complaints">My Complaints</Link>
      </nav>
    </div>
  );
}

function Login() {
  return (
    <div style={{ padding: "1.5rem" }}>
      <h2>Login</h2>
      <p>Login form goes here.</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}

function Register() {
  return (
    <div style={{ padding: "1.5rem" }}>
      <h2>Register</h2>
      <p>Registration form goes here.</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}

function SubmitComplaint() {
  return (
    <div style={{ padding: "1.5rem" }}>
      <h2>Submit Complaint</h2>
      <p>Complaint submission form goes here.</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}

function MyComplaints() {
  return (
    <div style={{ padding: "1.5rem" }}>
      <h2>My Complaints</h2>
      <p>List of your complaints goes here.</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/submit" element={<SubmitComplaint />} />
      <Route path="/my-complaints" element={<MyComplaints />} />
    </Routes>
  );
}
