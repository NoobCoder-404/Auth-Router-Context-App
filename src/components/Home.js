import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen text-gray-400"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-photo/creative-glowing-blue-digital-padlock-interface-dark-background-online-security-safety-concept-3d-rendering_670147-8151.jpg?w=2000")`
        }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Link className="btn  btn-outline text-white font-bold" to="/login">
              Log in
            </Link>
            <span className="m-5">or </span>
            <Link className="btn btn-outline text-white font-bold" to="/registration">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
