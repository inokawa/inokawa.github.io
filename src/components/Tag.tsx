import { SPACING, BORDER_RADIUS, COLOR } from "../constants/styles";

const Component: React.FC<{}> = ({ children }) => (
  <span>
    {children}
    <style jsx>
      {`
        span {
          background-color: ${COLOR.LIGHT_GRAY};
          border-radius: ${BORDER_RADIUS}px;
          margin: ${SPACING}px;
          padding: ${SPACING}px;
        }
      `}
    </style>
  </span>
);

export default Component;
