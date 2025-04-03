import React from "react";
import onlineIcon from "./assets/online.svg";
import busyIcon from "./assets/busy.svg";
import { IAuthor } from "../../../../types/product";

const onlineStatusMap: Record<IAuthor["onlineStatus"], string> = {
  online: onlineIcon,
  busy: busyIcon,
  // TODO: add idle and offline icons
  idle: "",
  offline: "",
};

const Author: React.FC<IAuthor> = ({
  firstName,
  lastName,
  avatar,
  onlineStatus,
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <img
          src={avatar}
          alt={firstName}
          className="h-8 w-8 rounded-full bg-white"
        />
        {onlineStatusMap[onlineStatus] && (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-black rounded-full flex items-center justify-center">
            <img
              src={onlineStatusMap[onlineStatus]}
              alt={onlineStatus}
              className=" h-3 w-3"
            />
          </div>
        )}
      </div>
      <span className="text-xs text-white">
        {firstName} {lastName}
      </span>
    </div>
  );
};

export default Author;
