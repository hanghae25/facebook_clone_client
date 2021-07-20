import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { actionCreators as imageActions } from '../redux/modules/image';

const Upload = (props) => {
  const dispatch = useDispatch();
  const is_uploading = useSelector((state) => state.image.uploading);
  const fileInput = React.useRef();

  const selectFile = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      //   console.log(reader.result);
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  const uploadDB = () => {
    let image = fileInput.current.files[0];
    dispatch(imageActions.uploadImageFB(image));
  };

  return (
    <React.Fragment>
      <label
        style={{
          padding: '6px 8px',
          color: 'black',
          cursor: 'pointer',
          height: '20px',
          fontSize: '20px',
          display: 'flex',
        }}
        htmlFor="input-file"
        // onClick={uploadDB}
      >
        <div style={{ margin: '0px 4px' }}>
          <CameraImg></CameraImg>
        </div>
        커버 사진 추가
      </label>
      <input
        type="file"
        id="input-file"
        style={{ display: 'none' }}
        onChange={selectFile}
        ref={fileInput}
        disabled={is_uploading}
      />
      <button onClick={uploadDB}>업로드</button>
    </React.Fragment>
  );
};

const CameraImg = styled.div`
  background-image: url(https://www.facebook.com/rsrc.php/v3/y-/r/NkweCMyK5Ry.png);
  background-position: 0px -45px;
  background-size: 25px 207px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  display: inline-block;
`;

export default Upload;
