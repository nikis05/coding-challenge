import { Dispatch, FC, useRef } from "react";
import { OptionType } from "./../../container/App";
import Option from "./../Option/Option";
import { Wrapper } from "./selectedBoxStyles";

interface Props {
  options: OptionType[];
  showSelectedBox: boolean;
  setShowSelectedBox: Dispatch<boolean>;
  handleSelectedOption: (option: OptionType) => void;
}

const SelectedBox: FC<Props> = ({
  options,
  showSelectedBox,
  setShowSelectedBox,
  handleSelectedOption,
}) => {

  return (
    <Wrapper showSelectedBox={showSelectedBox}>
      {options.map((option) => (
        <Option
          key={option.id}
          option={option}
          handleSelectedOption={handleSelectedOption}
        />
      ))}
    </Wrapper>
  );
};

export default SelectedBox;
