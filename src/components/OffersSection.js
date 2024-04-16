import { useDispatch } from "react-redux";

import { setChatWithBot } from "../utils/gptSlice";

const OffersSection = (props) => {
  const dispatch = useDispatch();
  const {wishlistOffer} = props;
  
  const facilties = {
    authentic: ["check_mark.png", "100% Authentic", "All our products are directly sourced from brands"],
    shipping: ["pickup_loaded.png", "Free Shipping", "On all orders above ₹299"],
    advisor: ["user_female.png", "Certified Beauty Advisors", "Get expert consultations"],
    returns: ["refund.png", "Easy Returns", "Hassle-free pick-ups and refunds"]
  }
  
  const handleChatBot = () => {
    dispatch(setChatWithBot())
  }

  return (
    <div className="mx-12 my-9 px-9">
      <label className="mx-6 px-3 text-2xl font-sans">For Your Wishlist</label>
      <div className="flex flex-nowrap overflow-hidden overflow-x-scroll no-scrollbar">
        {wishlistOffer.map((offer) => {
          return (
            <div key={offer.variationId}  className="m-6 p-3" >
              <img className="rounded-lg max-w-64" alt="wishlist" src={offer.imageDesktop} />
              <label>{offer.imageCaption}</label>
            </div>
          );
        })}
      </div>
      <div className="p-4 m-4 ">
      <img className="rounded-lg" alt="footer-banner" src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/original/theme-image-1710135312510.jpeg?dpr=1"/>
      </div>
      <div className="border border-violet-400 rounded-lg bg-violet-300 p-2 m-8">
        <div className="flex">
        <img className="w-12 h-12 p-2" alt="ballon-icon" src={require("../icons/speech_ballon.png")} />
        <label className="text-xl font-sans p-2">Confused about what to buy? Connect with Riva, our AI Beauty Advisor.</label>
        </div>
        <div onClick={handleChatBot} className="flex mx-6 px-8">
        <label className="text-xl font-sans pr-1">Chat Now</label>
        <img alt="arrowRight-icon" src={require("../icons/arrow_right2.png")}/>
        </div>
        </div>

        <div className="flex bg-orange-100 border border-orange-200 rounded-lg px-24 py-12">
            {Object.entries(facilties).map((i) => {
                return (<div key={i[0]} className="w-64 p-18 m-4">
                    <img className="pb-4" alt="socialMedia-icon" src={require("../icons/" + i[1][0])}/>
                    <label className="text-xl">{i[1][1]}</label>
                    <br/>
                    <br/>
                    <label className="mt-4">{i[1][2]}</label>
                </div>)
            })}
                
        </div>
        
      </div>       
  );
};

export default OffersSection;
