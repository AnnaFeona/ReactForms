import { FC } from "react";
import cn from "classnames";

import "./tile.scss";
import { User } from "../../model";

interface TileProps extends User {
  isActive?: boolean;
}

export const Tile: FC<TileProps> = ({
  name,
  age,
  email,
  gender,
  country,
  image,
  isActive,
}) => {
  return (
    <>
      <div className={cn("tile", { active: isActive })}>
        <img className="avatar" src={image as string} alt="image" width={150} />
        <div className="tile__container">
          <h3>Name: {name}</h3>
          <p>
            Age: {age}, gender: {gender}{" "}
          </p>
          <p>Email: {email}</p>
          <p>country: {country}</p>
        </div>
      </div>
    </>
  );
};
