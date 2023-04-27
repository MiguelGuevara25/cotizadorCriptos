import "../styles/Spinner.css";
import styled from "@emotion/styled";

const Loader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Spinner = () => {
  return (
    <Loader>
      <span className="loader"></span>
    </Loader>
  );
};

export default Spinner;
