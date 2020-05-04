import { SPACING } from "../constants/styles";

const Component: React.FC<{}> = ({ children }) => (
  <div>
    {children}
    <style jsx>
      {`
        div {
          flex: 1;
          padding-top: 0px;
          padding-bottom: ${SPACING}px;
          padding-left: ${SPACING}px;
          padding-right: ${SPACING}px;
        }
      `}
    </style>
  </div>
);

export default Component;
