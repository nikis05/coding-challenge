import React, { FC } from "react";
import { OptionType } from "./../../container/App";
import { OptionEl } from "./optionStyles";

interface Props {
  option: OptionType;
  handleSelectedOption: (option: OptionType) => void;
}

const Option: FC<Props> = ({ option, handleSelectedOption }) => {
  const {isSelected, text, isHover} = option
  return (
    <OptionEl onClick={() => handleSelectedOption(option)} isSelected={isSelected} isHover={isHover}>
      {text}
    </OptionEl>
  );
};

export default Option;
