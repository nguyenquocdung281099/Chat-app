import React from "react";

import * as S from "./styles";

interface Props {
  size?: string;
  url: string;
  alt?: string;
}

const Avatar: React.FC<Props> = ({ size, url, alt }) => {
  return <S.AvatarContent size={size} src={url} alt={alt} />;
};
export default Avatar;
