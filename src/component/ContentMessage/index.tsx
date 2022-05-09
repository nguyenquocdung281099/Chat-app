import Avatar from "src/common/Avatar";
import React, { memo, useEffect, useRef, useState } from "react";
import { IoCall } from "react-icons/io5";
import { BsFillCameraVideoFill, BsFileEarmarkImageFill } from "react-icons/bs";
import {
  AiOutlineExclamation,
  AiFillPlusCircle,
  AiOutlineFileGif,
  AiOutlineClose,
} from "react-icons/ai";
import _ from "lodash";

import * as S from "./styles";
import { Text } from "src/common/Text";
import theme from "src/constant/theme";
import SearchForm from "./component/SearchForm";
import ModalChooseEmoji from "./component/modalChooseEmoji";

interface ContentMessageProps {
  showSearchMessage: boolean;
  onCloseSearchMessage: () => void;
}

const ContentMessage: React.FC<ContentMessageProps> = ({
  showSearchMessage,
  onCloseSearchMessage,
}) => {
  const [message, setMessage] = useState<string>("");
  const [isShowEmoij, setIsShowEmoij] = useState<boolean>(false);

  const uploadFileRef = useRef(null);
  const [fileImages, setImages] = useState<(string | ArrayBuffer | null)[]>([]);

  useEffect(() => {
    const dropArea = uploadFileRef.current;
    if (dropArea) {
      ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
        // @ts-ignore
        dropArea?.addEventListener(eventName, preventDefaults, false);
      });

      // @ts-ignore
      dropArea?.addEventListener("drop", handleDrop, false);
    }

    return () => {
      if (dropArea) {
        ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
          // @ts-ignore
          dropArea?.removeEventListener(eventName, preventDefaults, false);
        });
        // @ts-ignore
        dropArea?.removeEventListener("drop", handleDrop, false);
      }
    };
  }, [fileImages]);

  const handleDrop = (e: React.DragEvent) => {
    const files = e?.dataTransfer.files;
    handleFiles(files[0]);
  };

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e?.target.value;
    handleFiles(files);
  };

  const handleFiles = (files: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onloadend = function () {
      setImages([...fileImages, reader.result]);
    };
  };

  const preventDefaults = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDeleteImage = (file: any) => {
    setImages((images) => images.filter((image) => image !== file));
  };

  return (
    <S.ContentMessageWrapper ref={uploadFileRef}>
      <S.ContentMessageHeader>
        <S.ContentMessageHeaderLeft>
          <Avatar
            url="https://upanh123.com/wp-content/uploads/2020/10/anh-gai-xinh-toc-ngang-vai-sk4-1.jpg"
            size="40px"
            online={true}
          ></Avatar>
          <S.ContentMessageHeaderNameAndStatus>
            <Text truncate fontSize="16px">
              Nguyen Quoc Dung
            </Text>
            {true && (
              <Text color={theme.graySoft13} fontSize="14px">
                Đang hoạt động
              </Text>
            )}
          </S.ContentMessageHeaderNameAndStatus>
        </S.ContentMessageHeaderLeft>
        <S.ContentMessageHeaderRight>
          <IoCall size={25} color={theme.bluePrimary2} />
          <BsFillCameraVideoFill
            size={25}
            color={theme.bluePrimary2}
          ></BsFillCameraVideoFill>

          <AiOutlineExclamation size={25} color={theme.bluePrimary2} />
        </S.ContentMessageHeaderRight>
        {showSearchMessage && (
          <S.SearchMessageForm>
            <SearchForm
              onSearch={(value) => alert(value)}
              onCloseSearchMessage={onCloseSearchMessage}
            />
          </S.SearchMessageForm>
        )}
      </S.ContentMessageHeader>
      <S.ContentMessageContain>{message}</S.ContentMessageContain>
      <S.EditorMessage>
        <S.EditorMessageLeft>
          <AiFillPlusCircle
            size={25}
            color={theme.bluePrimary2}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsShowEmoij(true);
            }}
          />
          {isShowEmoij && (
            <ModalChooseEmoji
              emoji={"cloud"}
              onConfirm={(value: any) => {
                setMessage(message?.concat(` ${value?.native} `));
              }}
              closeEmoij={() => setIsShowEmoij(false)}
            />
          )}
          <label htmlFor="uploadImage">
            <BsFileEarmarkImageFill size={25} color={theme.bluePrimary2} />
          </label>
          <input id="upload" type="file" />
          <AiOutlineFileGif size={25} color={theme.bluePrimary2} />
        </S.EditorMessageLeft>
        <S.EditorMessageArea isHaveImage={!_.isEmpty(fileImages)}>
          {fileImages && (
            <S.ImagePreview>
              {fileImages.map((item) => (
                <S.ImagePreviewItemWrapper>
                  <S.ImagePreviewItem src={item?.toString()} alt="img" />
                  <AiOutlineClose
                    onClick={() => {
                      handleDeleteImage(item);
                    }}
                  />
                </S.ImagePreviewItemWrapper>
              ))}
            </S.ImagePreview>
          )}
          <input
            type="file"
            className="uploadFile"
            accept="image/*"
            id="uploadImage"
            onChange={handleUploadFile}
          />
          <textarea
            value={message}
            placeholder="Aa"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
            className="editor-message"
            rows={1}
          />
        </S.EditorMessageArea>
      </S.EditorMessage>
    </S.ContentMessageWrapper>
  );
};
export default memo(ContentMessage);
