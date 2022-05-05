import React from "react";

import * as S from "./styles";

interface Props {
  size?: string;
  url: string;
  alt?: string;
  online?: boolean;
}

const Avatar: React.FC<Props> = ({ size, url, alt, online }) => {
  return <S.AvatarContent size={size} online={online || false} >
    <S.AvatarImg src={url} alt={alt}/>
  </S.AvatarContent>;
};
export default Avatar;
