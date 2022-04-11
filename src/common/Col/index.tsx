import React from "react";

import * as S from "./styled";

type twelveColLayout = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface IColProps {
  smallTablet?: twelveColLayout;
  tablet?: twelveColLayout;
  laptop?: twelveColLayout;
}

const Col: React.FC<IColProps> = ({ smallTablet, tablet, laptop, children }) => {
  return (
    <S.Col smallTablet={smallTablet} tablet={tablet} laptop={laptop}>
      {children}
    </S.Col>
  );
};
export default Col;
