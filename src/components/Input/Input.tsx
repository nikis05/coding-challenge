import { FC } from "react";
import { InputEl } from "./inputStyles";

interface Props {
  placeholder: string;
  showPlaceholder: boolean;
  handleSearchInOption: (e: any) => void;
}

const Input: FC<Props> = ({
  placeholder,
  showPlaceholder,
  handleSearchInOption,
}) => {
  return (
    <InputEl
      type="text"
      placeholder={`${showPlaceholder ? placeholder : ""}`}
      onChange={handleSearchInOption}
    />
  );
};

export default Input;
