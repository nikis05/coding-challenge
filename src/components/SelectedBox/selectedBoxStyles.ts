import styled from "styled-components";

interface Props {
  showSelectedBox: boolean;
}

export const Wrapper = styled.div<Props>`
  max-height: ${({ showSelectedBox }) => (showSelectedBox ? "200px" : "0")};
  overflow-y: scroll;
  transition: 0.5s ease;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  width:100%;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #1b274c;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;