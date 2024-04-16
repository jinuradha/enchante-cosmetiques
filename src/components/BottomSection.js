const BottomSection = () => {
    const socialMediaIcons = ["facebook.png", "instagram.png", "youtube.png", "twitter.png", "pinterest.png"]
  return (
    <div>
      <div className="m-10 p-4 text-center">
        <label className="text-2xl font-sans m-24">
          Be the first to hear about all things Tira
        </label>
        <br />
        <br />
        <label>
          Stay connected for exclusive offers and latest updates, delivered
          straight to your inbox
        </label>
        <br />
        <br />
        <input
          className="border rounded-lg p-3 h-12 bg-slate-100 text-slate-600"
          type="email"
          placeholder="Enter Your Email Address"
        ></input>
        <button className="py-3 px-6 m-4 bg-slate-400 text-white border rounded-lg">
          Send
        </button>
      </div>

      <div className="bg-slate-200 px-20 ">
        <div className="p-2 flex text-xl font-sans justify-center">
          Show us some love<img className="w-6 h-6 m-1 " src={require("../icons/heart.png")}></img> on
          social media
        </div>
        <div className="flex justify-center">
          {socialMediaIcons.map((iconUrl) => {
            return <img key={iconUrl} className="w-10 h-10 p-2" src={require("../icons/" + iconUrl)} />
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
