import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";

const CustomCheckBox = ({
  label1,
  label2,
  isChecked,
  handleChange,
  form,
  setForm
}) => {
  // const [checked, setChecked] = useState(false);

  return (
    <label className="cursor-pointer">
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-2">
          <input
          name="isChecked"
            type="checkbox"
            className="hidden"
            checked={isChecked}
            onChange={handleChange}
          />
          <span
            className={`w-5 h-5 border-2 mt-[0.125rem] border-x-gray-300 rounded-md flex items-center justify-center transition-colors ${
              isChecked ? "bg-orange" : "bg-white"
            }`}
          >
            {isChecked && (
              <div className="flex items-center justify-center ">
                <i className="bx bx-check text-white w-4 h-4 relative left-[9px] " />
                <div className="border-2 border-orange rounded-md p-[7.5px] relative right-[8px]" />
              </div>
            )}
          </span>

          <span className="text-[15px]">{label1}</span>
        </div>
        <div className="text-[15px]">{label2}</div>
      </div>
    </label>
  );
};

export default CustomCheckBox;
