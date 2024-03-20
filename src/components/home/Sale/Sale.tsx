import React from "react";
import { Link } from "react-router-dom";
import Images from "../../../assets/images";
import Image from "../../designLayouts/Image";

const Sale: React.FC = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
        <Link to="/shop">
          <Image
            className="h-full w-full object-cover"
            imgSrc={Images.saleImgOne}
          />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image
              className="h-full w-full object-cover"
              imgSrc={Images.saleImgTwo}
            />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image
              className="h-full w-full object-cover"
              imgSrc={Images.saleImgThree}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
