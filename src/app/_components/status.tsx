import { statusOptions } from "@/lib/constants";
import React from "react";

type StatusOption = {
  label: string;
  value: string;
  bgColor: string;
  textColor: string;
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const statusOption = statusOptions.find((option) => option.value === status);

  if (!statusOption) return null;

  return (
    <span
      style={{
        backgroundColor: statusOption.bgColor,
        color: statusOption.textColor,
        padding: "5px 10px",
        borderRadius: "5px",
      }}
    >
      {statusOption.label}
    </span>
  );
};

export default StatusBadge;
