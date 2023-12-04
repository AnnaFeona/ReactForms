import { FC } from "react";

import "./tileList.scss";
import { User } from "../../model";
import { Tile } from "../tile/tile";

interface TileListProps {
  data: User[];
  isActive?: boolean;
}

export const TileList: FC<TileListProps> = ({ data, isActive }) => {
  return (
    <>
      {data.map((item, index) => (
        <Tile key={item.email+item.password} {...item} isActive={(index === data.length-1) && isActive} />
      ))}
    </>
  );
};
