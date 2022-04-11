import React, { useState } from "react";

import Modal from "common/Modal";
import Button from "common/Button";
import Row from "common/Row";
import Col from "common/Col";
import { themeColors } from "./constant";

import * as S from "./styled";

interface Props {
  show: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const ChangeThemeModal: React.FC<Props> = ({ show, onConfirm, onClose, children }) => {
  const [selectedTheme, setSelectedTheme] = useState<number | undefined>();
  return (
    <Modal show={show} title="Colour" onClose={onClose}>
      <S.Content>
        <S.ThemeColors>
          <Row>
            {themeColors.map((theme, index) => (
              <Col key={index} smallTablet={3} tablet={2}>
                <S.ThemeItemWrapper selected={selectedTheme === index} onClick={() => setSelectedTheme(index)}>
                  <S.ThemeItem bgColor={theme.bgColor} bgImg={theme.bgImg} />
                </S.ThemeItemWrapper>
              </Col>
            ))}
          </Row>
        </S.ThemeColors>
        <S.ActionButtons>
          <Button onClick={onClose} color="light">
            Cancel
          </Button>
          <Button onClick={onConfirm}>Save</Button>
        </S.ActionButtons>
        {children}
      </S.Content>
    </Modal>
  );
};

export default ChangeThemeModal;
