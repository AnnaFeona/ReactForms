import { FC } from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import { useAppSelector } from "../../store/hooks";
import { TileList } from "../../components/tileList/tileList";

export const Home: FC = () => {
  const controlledSubmits = useAppSelector((state) => state.submits.controlled);
  const unControlledSubmits = useAppSelector(
    (state) => state.submits.uncontrolled,
  );
  const isControlled = useAppSelector(
    (state) => state.submits.isControlledChanged,
  );
  const isUnControlled = useAppSelector(
    (state) => state.submits.isUnControlledChanged,
  );

  return (
    <>
      <div className="home__container">
        <div className="info uncontrolled">
          <Link to={"/uncontrolled"} className="home__link">
            Without Controll
          </Link>
          <div className="tiles__container">
            {unControlledSubmits && (
              <TileList data={unControlledSubmits} isActive={isUnControlled} />
            )}
          </div>
        </div>
        <div className="info controlled">
          <Link to={"/controlled"} className="home__link">
            With Controll
          </Link>
          <div className="tiles__container">
            {controlledSubmits && (
              <TileList data={controlledSubmits} isActive={isControlled} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
