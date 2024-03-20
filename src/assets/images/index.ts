import logo from "./logo.png";
import logoLight from "./logoLight.png";
import bannerImgOne from "./banner/bannerImgOne.png";
import bannerImgTwo from "./banner/bannerImgTwo.png";
import bannerImgThree from "./banner/bannerImgThree.png";
import saleImgOne from "./sale/saleImgOne.png";
import saleImgTwo from "./sale/saleImgTwo.png";
import saleImgThree from "./sale/saleImgThree.png";
// ============== Products Start here ====================
// New Arrivals
import newArrOne from "./products/newArrival/newArrOne.webp";
import newArrTwo from "./products/newArrival/newArrTwo.webp";
import newArrThree from "./products/newArrival/newArrThree.webp";
import newArrFour from "./products/newArrival/newArrFour.webp";

// Best Sellers
import bestSellerOne from "./products/bestSeller/bestSellerOne.webp";
import bestSellerTwo from "./products/bestSeller/bestSellerTwo.webp";
import bestSellerThree from "./products/bestSeller/bestSellerThree.webp";
import bestSellerFour from "./products/bestSeller/bestSellerFour.webp";

// Special Offers
import spfOne from "./products/specialOffer/spfOne.webp";
import spfTwo from "./products/specialOffer/spfTwo.webp";
import spfThree from "./products/specialOffer/spfThree.webp";
import spfFour from "./products/specialOffer/spfFour.webp";

// Year Product
import productOfTheYear from "./products/productOfTheYear.png";
// ============== Products End here ======================
import paymentCard from "./payment.png";
import emptyCart from "../images/emptyCart.png";

interface Images {
  logo: string;
  logoLight: string;
  bannerImgOne: string;
  bannerImgTwo: string;
  bannerImgThree: string;
  saleImgOne: string;
  saleImgTwo: string;
  saleImgThree: string;
  newArrOne: string;
  newArrTwo: string;
  newArrThree: string;
  newArrFour: string;
  bestSellerOne: string;
  bestSellerTwo: string;
  bestSellerThree: string;
  bestSellerFour: string;
  spfOne: string;
  spfTwo: string;
  spfThree: string;
  spfFour: string;
  productOfTheYear: string;
  paymentCard: string;
  emptyCart: string;
}

const Images: Images = {
  logo,
  logoLight,
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
  saleImgOne,
  saleImgTwo,
  saleImgThree,
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
  productOfTheYear,
  paymentCard,
  emptyCart,
};

export default Images;
