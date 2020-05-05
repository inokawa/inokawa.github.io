import { SPACING, CONTENT_WIDTH } from "../../constants/styles";

const Component: React.FC<{}> = ({ children }) => (
  <div>
    {children}
    <style jsx>
      {`
        div {
          flex: 1;
          align-self: center;
          width: 100%;
          max-width: ${CONTENT_WIDTH}px;
          padding-top: 0px;
          padding-bottom: ${SPACING * 2}px;
          padding-left: ${SPACING * 2}px;
          padding-right: ${SPACING * 2}px;
        }
      `}
    </style>
  </div>
);

export default Component;
