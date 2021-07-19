import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { actionCreators as imageActions } from "../redux/module/upload";
import { actionCreators as previewActions } from "../redux/module/preview";

const ImgUploadBox = () => {
  const imageInput = useRef();
  const videoInput = useRef();
  const dispatch = useDispatch();
  const imagePreview = useSelector((state) => state.preview.images);
  const videoPreview = useSelector((state) => state.preview.videos);

  const selectImgFile = (e, type) => {
    const reader = new FileReader();
    const file = imageInput.current.files[0];
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      const param = { file: file, preview: reader.result };
      dispatch(previewActions.setImagePreview(param));
    };

    // dispatch(imageActions.uploadImageFB(file));
  };

  const selectVideoFile = (e, type) => {
    const reader = new FileReader();
    const file = videoInput.current.files[0];
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      const param = { file: file, preview: reader.result };
      dispatch(previewActions.setVideoPreview(param));
    };

    // dispatch(imageActions.uploadImageFB(file));
  };

  const handleDeleteImg = (value) => {
    dispatch(previewActions.deleteOneImagePreview(value));
  };

  const handleDeleteVideo = (value) => {
    dispatch(previewActions.deleteOneVideoPreview(value));
  };
  return (
    <ImgUploadBoxContainer>
      {imagePreview.map(({ preview }) => {
        return (
          <UploadedImgBox>
            <UploadedImg src={preview}></UploadedImg>
            <UploadedImgDelete
              onClick={() => {
                handleDeleteImg(preview);
              }}
            ></UploadedImgDelete>
          </UploadedImgBox>
        );
      })}
      {videoPreview.map(({ preview }) => {
        return (
          <UploadedImgBox>
            <UploadedImg src={preview}></UploadedImg>
            <UploadedImgDelete
              onClick={() => {
                handleDeleteVideo(preview);
              }}
            ></UploadedImgDelete>
          </UploadedImgBox>
        );
      })}
      <input
        type="file"
        name="profileImg"
        id="profileImg"
        accept="image/png, image/gif, image/jpeg"
        onChange={selectImgFile}
        ref={imageInput}
        style={{ display: "none" }}
      />
      <label htmlFor="profileImg">
        <ImgUpload style={{ marginRight: "2px" }}>
          <ImgUploadContents>
            <ImgUploadPlus>+</ImgUploadPlus>
            <ImgUploadText>사진</ImgUploadText>
          </ImgUploadContents>
        </ImgUpload>
      </label>
      <input
        type="file"
        name="profileVideo"
        id="profileVideo"
        accept=" video/*"
        onChange={selectVideoFile}
        ref={videoInput}
        style={{ display: "none" }}
      />
      <label htmlFor="profileVideo">
        <ImgUpload>
          <ImgUploadContents>
            <ImgUploadPlus>+</ImgUploadPlus>
            <ImgUploadText>동영상</ImgUploadText>
          </ImgUploadContents>
        </ImgUpload>
      </label>
    </ImgUploadBoxContainer>
  );
};

const ImgUploadBoxContainer = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  padding-left: 8px;
  width: 100%;
  flex-wrap: wrap;
`;

const UploadedImgBox = styled.div`
  width: 78px;
  height: 78px;
  position: relative;
  margin-right: 2px;
  margin-bottom: 2px;
`;

const UploadedImgDelete = styled.div`
  position: absolute;
  left: -5px;
  top: -10px;
  background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/WqfvRWsLYuk.png");
  background-repeat: no-repeat;
  background-size: 82px 475px;
  background-position: 0 -357px;
  height: 24px;
  width: 24px;
`;

const UploadedImg = styled.img`
  width: 100%;
  height: 100%;
  display: inline-block;
`;

const ImgUpload = styled.div`
  border: 1px dashed #c9ccd3;
  width: 78px;
  height: 78px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const ImgUploadContents = styled.div`
  width: 100%;
  height: 47px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgUploadPlus = styled.div`
  color: #c9ccd3;
`;

const ImgUploadText = styled.div`
  color: #c9ccd3;
`;
export default ImgUploadBox;
