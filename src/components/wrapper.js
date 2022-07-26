import styled from "@emotion/styled"

const Wrapper = styled("section")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /*padding-top: 32px,
  padding-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;*/
  ${({ margin }) => (margin ? `margin: ${margin};` : "")}
`

export default Wrapper
