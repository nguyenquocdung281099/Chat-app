import React, { useState } from "react";

import Modal from "src/common/Modal";
import Button from "src/common/Button";
import Radio from "src/common/Radio";
import { muteTimes } from "src/constant/const";

import * as S from "./styled";

interface Props {
  show: boolean;
  onConfirm: (muteType: number, muteTime: number) => void;
  onClose: () => void;
}

enum stepType {
  muteType = "muteType",
  muteTime = "muteTime",
}

const MuteNotificationModal: React.FC<Props> = ({ show, onConfirm, onClose }) => {
  const [state, setState] = useState<{ step: stepType; muteType: number; muteTime: number }>({
    step: stepType.muteType,
    muteType: 1,
    muteTime: 1,
  });
  return (
    <Modal
      show={show}
      title={state.step === stepType.muteType ? "Mute conversation" : "Mute message notifications"}
      onClose={onClose}
    >
      {state.step === stepType.muteType && (
        <S.Content>
          <div>
            {muteTimes.map((muteType) => (
              <Radio
                name="mutetype"
                label={muteType.label}
                checked={state.muteTime === muteType.value}
                onClick={() => setState((s) => ({ ...s, muteTime: muteType.value }))}
              />
            ))}
            <p>Chat windows will stay closed and you won't receive push notifications on your phone.</p>
          </div>
          <S.ActionButtons>
            <Button onClick={onClose} color="light">
              Cancel
            </Button>
            <Button onClick={() => setState((s) => ({ ...s, step: stepType.muteTime }))}>Next</Button>
          </S.ActionButtons>
        </S.Content>
      )}
      {state.step === stepType.muteTime && (
        <S.Content>
          <div>
            {muteTimes.map((muteTime) => (
              <Radio
                name="muteTime"
                label={muteTime.label}
                checked={state.muteTime === muteTime.value}
                onClick={() => setState((s) => ({ ...s, muteTime: muteTime.value }))}
              />
            ))}
            <p>Chat windows will stay closed and you won't receive push notifications on your phone.</p>
          </div>
          <S.ActionButtons>
            <Button onClick={() => setState((s) => ({ ...s, step: stepType.muteType }))} color="light">
              Back
            </Button>
            <Button
              onClick={() => {
                onConfirm(state.muteType, state.muteTime);
                setState((s) => ({ ...s, step: stepType.muteType }));
              }}
            >
              Mute
            </Button>
          </S.ActionButtons>
        </S.Content>
      )}
    </Modal>
  );
};

export default MuteNotificationModal;
