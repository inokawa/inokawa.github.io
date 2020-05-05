import { SPACING, BORDER_RADIUS, COLOR } from "../constants/styles";

const Component: React.FC<{}> = ({ children }) => (
  <span>
    {children}
    <style jsx>
      {`
        span {
          background-color: ${COLOR.LIGHT_GRAY};
          border-radius: ${BORDER_RADIUS}px;
          margin: ${SPACING / 2}px;
          padding: ${SPACING / 2}px;
        }
      `}
    </style>
  </span>
);

export default Component;
