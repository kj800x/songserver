import styled from "styled-components";

export const Button = styled.div`
  border: 1px solid grey;
  padding: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 15px;
  background: ${({ use }) => (use === "delete" ? "#611e1e" : "#33331b")};
  line-height: 15px;
  cursor: pointer;
  user-select: none;
  margin-left: 8px;

  input[readonly] {
    cursor: pointer;
  }
`;
