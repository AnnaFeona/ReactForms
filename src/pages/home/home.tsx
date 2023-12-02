import { FC } from "react";
import { Link } from "react-router-dom";
import './home.scss';

export const Home: FC = () => {
  return (
    <>
      <div className="home__container">
        <Link to={"/uncontrolled"} className="home__link">Without Controll</Link>
        <Link to={"/controlled"} className="home__link">With Controll</Link>
      </div>
    </>
  );
};
