import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Navigation, Pagination]);

const SlideImage = (props) => {
  if (props.pictureList.length === 1) {
    return <PostImage src={props.pictureList[0]}></PostImage>;
  } else {
    return (
      <div>
        <Swiper
          className="banner"
          spaceBetween={50}
          slidesPerView={1}
<<<<<<< HEAD
=======
          //   navigation
>>>>>>> aef01b6bc90d56be743b7f4bda9fff641fb4e84f
          pagination={{ clickable: true }}
        >
          {props.pictureList.map((src) => {
            return (
              <SwiperSlide>
                <PostImage src={src}></PostImage>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  }
};

const PostImage = styled.img`
  display: block;
  width: 100%;
  height: 414px;
`;

export default SlideImage;
