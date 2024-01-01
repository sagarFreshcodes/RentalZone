import React from "react";
import { ReactIcon } from "./helperFunction";
import { Link } from "react-router-dom";
import { HOME_ROUTE } from "../../../Route/RouthPath";

const BackNavigation = ({ link }) => {
  return (
    <Link to={link || HOME_ROUTE}>
      <div>
        <ReactIcon
          iconName={"AiOutlineArrowLeft"}
          attr={{ className: "commonBackIcon" }}
        />
      </div>
    </Link>
  );
};

export default BackNavigation;
