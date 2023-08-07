import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import "./banner.scss";

export default function Banner() {
    const slider = useRef();
    const [banners, setBanners] = useState([
        {
            id: 1,
            url: "https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/images%2Fbanner%2Fbanner_01.avif?alt=media&token=3c110b45-539c-4198-960a-b136db49670e"
        },
        {
            id: 2,
            url: "https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/images%2Fbanner%2Fbanner_02.avif?alt=media&token=d51bb157-af40-438a-973d-f529319dbf46"
        },
        {
            id: 3,
            url: "https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/images%2Fbanner%2Fbanner_03.avif?alt=media&token=544ef359-a8f5-4892-a479-61e50fc19034"
        },
    ]);

    return (
        <>
            <Carousel
                ref={slider}
                autoplay
                autoplaySpeed={2000}
                effect={"fade"}
                dots={true}
                dotPosition={"bottom"}
                waitForAnimate={"true"}
            >
                {banners.map((banner, index) => (
                    <div className="items" key={banner.id + index}>
                        <img style={{ width: "100%" }} className="items-img" src={banner.url} />
                    </div>
                ))}
            </Carousel>
        </>
    );
}