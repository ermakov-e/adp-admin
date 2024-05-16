import React, { useState } from "react";
import "./index.scss";

interface CustomSerachProp {
  onChange: (value: string) => void;
  value: string;
}

const CustomSerach: React.FC<CustomSerachProp> = ({ onChange, value }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="search">
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(event) => onChange(event.target.value)}
        value={value}
        type="text"
        placeholder="Поиск"
      />
      <div className={`search__icon ${isFocused ? "active" : ""}`}>
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 16L12.3809 12.3809M12.3809 12.3809C12.9999 11.7618 13.491 11.0269 13.826 10.218C14.1611 9.40917 14.3335 8.54225 14.3335 7.66676C14.3335 6.79127 14.1611 5.92435 13.826 5.1155C13.491 4.30665 12.9999 3.57172 12.3809 2.95265C11.7618 2.33358 11.0269 1.84251 10.218 1.50748C9.40917 1.17244 8.54225 1 7.66676 1C6.79127 1 5.92435 1.17244 5.1155 1.50748C4.30665 1.84251 3.57172 2.33358 2.95265 2.95265C1.70239 4.20291 1 5.89863 1 7.66676C1 9.4349 1.70239 11.1306 2.95265 12.3809C4.20291 13.6311 5.89863 14.3335 7.66676 14.3335C9.4349 14.3335 11.1306 13.6311 12.3809 12.3809Z"
            stroke={`${isFocused ? "#fff" : "#445371"}`}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomSerach;
