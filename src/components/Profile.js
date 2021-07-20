import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Upload from '../shared/Upload';

const Profile = () => {
  const preview = useSelector((state) => state.image.preview);

  return (
    <React.Fragment>
      <GridBox width="100%" bg="#fff" is_flex center>
        <GridBox
          bg="#f0f2f5"
          height="160px"
          dp_flex
          is_flex
          item_center
          bottomRadius
          img={preview ? preview : ''}
        >
          {/* <CameraImg></CameraImg> */}
          <Upload />
        </GridBox>
        <GridBox2 center is_flex>
          <Image
            img="https://scontent-gmp1-1.xx.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=r2DZdUdfmL8AX8zjovP&_nc_ht=scontent-gmp1-1.xx&oh=e4f08ca882056ed291e38268194aa795&oe=60F7CE76"
            size="70"
            circle
          ></Image>
          <P bold font-size="24px" margin="8px 0px 0px 0px">
            김건우
          </P>
        </GridBox2>
        <GridBox height="80px"></GridBox>
      </GridBox>
    </React.Fragment>
  );
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  ${(props) => (props.height ? `height: ${props.height}` : `height: 100%`)};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding}` : '')};
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
  ${(props) => (props.bg ? `background-color: ${props.bg}` : '')};
  ${(props) => (props.dp_flex ? `display: flex;` : '')};
  ${(props) => (props.is_flex ? `align-items: center;` : '')}
  ${(props) => (props.center ? `text-align: center;` : '')}
  ${(props) => (props.item_center ? `justify-content: center;` : '')}
  background-image: url(${(props) => props.img});
  background-size: 100% 100%;

  position: relative;
  ${(props) =>
    props.bottomRadius
      ? `border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;`
      : ''}
`;

const GridBox2 = styled.div`
  width: ${(props) => props.width};
  ${(props) => (props.height ? `height: ${props.height}` : `height: 100%`)};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding}` : '')};
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
  ${(props) => (props.bg ? `background-color: ${props.bg}` : '')};
  ${(props) => (props.is_flex ? `align-items: center;` : '')}
  ${(props) => (props.center ? `text-align: center;` : '')}
  ${(props) => (props.flexstart ? `justify-content: flex-start;` : '')}
  ${(props) => (props.spacebetween ? `justify-content: space-between;` : '')}
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Image = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  margin: auto;
  background-image: url(${(props) => props.img});
  background-size: cover;
  ${(props) => (props.circle ? `border-radius: 50%;` : '')}
`;

const P = styled.p`
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')}
`;

const CameraImg = styled.div`
  background-image: url(https://www.facebook.com/rsrc.php/v3/y-/r/NkweCMyK5Ry.png);
  background-position: 0px -46px;
  background-size: 25px 207px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  display: inline-block;
`;

export default Profile;
