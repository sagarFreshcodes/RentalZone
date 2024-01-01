import React, { useEffect, useRef, useState } from "react";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import { FS10, FS6 } from "../../../../CommonElements/Font/FS";
import TrandingCard from "./TrandingCard";
import lptopImg4 from "../../../../assets/images/Essential/lptopImg4.png";
import { SimpleAnimation } from "../../../Common/Component/helperFunction";
import { motion, useTransform, useScroll } from "framer-motion";
import LaptopPics from "../../../../assets/images/Essential/laptop.png";
import { More } from "../../../../Constant";
const TrandigCardSlider = ({ ProductList, productRef }) => {
  const [sliderItem, setSliderItem] = useState([1, 2, 3]);
  const [totleItem, setTotleItem] = useState(3);
  const [isMore, setIsMore] = useState(false);
  const [trandingListSize, setTrandingListSize] = useState(4);
  const [MouseOn, setMouseOn] = useState(false);
  const productSliderRef = useRef(null);
  useEffect(() => {
    setTotleItem(ProductList.length || 3);
  }, []);
  const ChangeSlide = (type) => {
    if (type == "next") {
      const newAdding = sliderItem[2] >= totleItem ? 1 : sliderItem[2] + 1;
      setSliderItem([sliderItem[1], sliderItem[2], newAdding]);
    } else {
      const newAdding = sliderItem[0] == 1 ? totleItem - 1 : sliderItem[0] - 1;
      setSliderItem([sliderItem[1], sliderItem[2], newAdding]);
    }
  };
  const test = () => {
    // handleScroll();
    window.scrollTo(798, 1200);
  };

  useEffect(() => {
    setTimeout(() => {
      ChangeSlide("next");
    }, 5000);

    // SimpleAnimation({
    //   className: ".showImg",
    //   scale1: 0.1,
    //   scale2: 1,
    //   edition: true,
    //   duration1: 0.1,
    //   //   delay1: 0.5,
    //   duration2: 1,
    // });
  }, [sliderItem]);

  const handleScroll = (event) => {
    const targetDiv = document.querySelector(".TrendingsContainer"); // Replace with your class name
    if (targetDiv) {
      // Logic to scroll the targeted div
      targetDiv.scrollLeft += 100; // You can change the scroll behavior as needed
    }
  };

  const StopScroll = (e) => {
    const { offsetHeight, offsetWidth, offsetTop, clientHeight } = e.target;
    // test();
    // handleScroll();
    console.log(`code1254`, offsetHeight, offsetWidth, offsetTop, clientHeight);
  };

  const MoreLess = () => {
    setIsMore(!isMore);
    isMore
      ? setTrandingListSize(ProductList?.length || -1)
      : setTrandingListSize(4);
  };
  return (
    <ContentBox attr={{ className: "TrendingsSlider2" }}>
      <div className="ContentCenter" onClick={test}>
        <FS10>Top Trendings For Your City</FS10>
      </div>
      {/* <div className="sliderScroll" onScrollCapture={StopScroll}>
        <div className="scrollDown"></div> */}
      <div
        className="TrendingsContainer"
        ref={productSliderRef}
        // onScroll={StopScroll}
        // onMouseMove={StopScroll}
        onWheelCapture={StopScroll}
      >
        {/* {ProductList.slice(0, 4)?.map((item, index) => { */}
        {ProductList.slice(0, trandingListSize)?.map((item, index) => {
          return (
            <TrandingCard
              className={""}
              title={item?.product_name}
              price={item?.price}
              address1={item?.address1}
              address2={item?.address2}
              like={item?.like}
              statics={item?.static}
              view={item?.view}
              share={item?.share}
              picture={
                `${item?.product_image}`.includes("/")
                  ? item?.product_image
                  : lptopImg4
              }
              d1={item?.d1}
              d2={item?.d2}
              d3={item?.d3}
              d4={item?.d4}
              specification={[item?.description]}
              id={item.id}
              item={item}
            />
          );
        })}
      </div>
      <div className="moreTrading" onClick={MoreLess}>
        <FS6> {isMore ? "More" : "Less"}</FS6>
      </div>
      {/* <div className="scrollUp"></div>
      </div>{" "} */}
    </ContentBox>
  );
};

export default TrandigCardSlider;

// ==================================================================================================
export const Example = ({ ProductList, productRef }) => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel ProductList={ProductList} />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = ({ ProductList }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {/* {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })} */}

          {ProductList?.map((item, index) => {
            return (
              <div
                key={index}
                className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
              >
                <TrandingCard
                  className={""}
                  title={item?.product_name}
                  price={item?.price}
                  address1={item?.address1}
                  address2={item?.address2}
                  like={item?.like}
                  statics={item?.static}
                  view={item?.view}
                  share={item?.share}
                  picture={
                    `${item?.product_image}`.includes("/")
                      ? item?.product_image
                      : lptopImg4
                  }
                  d1={item?.d1}
                  d2={item?.d2}
                  d3={item?.d3}
                  d4={item?.d4}
                  specification={[item?.description]}
                  id={item.id}
                  item={item}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "https://images.unsplash.com/photo-1682685797742-42c9987a2c34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1703783010857-9bd7a7b97c50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1682686580849-3e7f67df4015?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1682686581660-3693f0c588d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://images.unsplash.com/photo-1682687980918-3c2149a8f110?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://images.unsplash.com/photo-1682687980918-3c2149a8f110?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 6",
    id: 6,
  },
  {
    url: LaptopPics,
    title: "Title 7",
    id: 7,
  },
];
