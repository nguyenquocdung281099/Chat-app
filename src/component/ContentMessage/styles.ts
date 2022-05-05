import styled, { css } from "styled-components";

export const ContentMessageWrapper = styled.div`
  position: relative;
  width: calc(100% - 380px - 400px);
  min-width: 600px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ContentMessageHeader = styled.div`
  height: 65px;
  max-width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.graySoft11};
`;

export const ContentMessageHeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentMessageHeaderNameAndStatus = styled.div`
  margin-left: 15px;
  text-align: start;
`;

export const ContentMessageHeaderRight = styled.div`
  width: 155px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & > svg {
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.bluePrimary};
    }
  }
`;

export const ContentMessageContain = styled.div`
  min-height: calc(100vh - 300px);
`;

export const EditorMessage = styled.div`
  width: 100%;
  position: absolute;
  bottom: 20px;
  display: flex;
  align-items: flex-end;
  padding: 10px;
  & svg {
    margin: 3px;
    cursor: pointer;
  }

  #upload {
    display: none;
  }
`;

export const EditorMessageArea = styled.div<{ isHaveImage: boolean }>`
  width: 75%;
  display: flex;
  flex-direction: column;

  & > div {
    ${({isHaveImage}) =>
      isHaveImage
        ? css`
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            background: ${({ theme }) => theme.graySoft11};
          `
        : css`
            display: none !important;
          `}
  }

  & > input {
    padding: 10px;
    margin-left: 15px;
    border-radius: 20px;
    width: 100%;
    border: none;
    background: ${({ theme }) => theme.graySoft11};
    outline: none;

    &:hover {
      outline: none;
    }
    &:active {
      outline: none;
    }

    ${({ isHaveImage }) =>
      isHaveImage &&
      css`
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      `}
  }

  .uploadFile {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ImagePreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  margin-left: 15px;
  padding: 10px;
`;

export const ImagePreviewItemWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  & > svg {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }
`;

export const ImagePreviewItem = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  margin: 5px;
`;
