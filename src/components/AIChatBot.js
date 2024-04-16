import { useEffect, useRef } from "react";
import openai from "../utils/openai";
import { addBotSearchRes, addGptProducts } from "../utils/gptSlice"
import { useDispatch, useSelector } from "react-redux"
import ItemCarousel from "./ItemCarousel"

const AIChatBot = () => {
    const userInput = useRef(null);
    const dispatch = useDispatch();
    const gptSlice = useSelector(store => store.gptSlice)
    const handleSearch = async () => {
        const completion = await openai.chat.completions.create({
            messages: [
              {
                role: "user",
                content:
                  "Act like a beauty advisor and answer the question-" +
                  userInput.current.value +
                  ". Give 5 products only in comma separated not in list. Consider example like this - Keratin, Serum, Shampoo, Conditioner.",
              },
            ],
            model: "gpt-3.5-turbo",
          });

          dispatch(addBotSearchRes((completion.choices[0].message.content.split(", "))))
    }

    const fetchSearchedProduct = async (result) => {
      const data = await fetch("https://www.tirabeauty.com/ext/algolia/application/api/v1.0/products?page_id=%2A&page_size=5&q=" + result);
      const json = await data.json()
      return json.items[0];
    }

    const getItems = async () => {
      const gptResult = gptSlice.searchedResult && gptSlice.searchedResult.map((i) => fetchSearchedProduct(i));
      const items = gptResult && await Promise.all(gptResult);
      console.log(items)
      items && dispatch(addGptProducts(items));
    }

    useEffect(()=> {
      getItems();
    }, [gptSlice.searchedResult])

    return <div className="mx-72">
        <form onSubmit={(e) => e.preventDefault()} className="justify-center">
            <input type="text" ref={userInput} className="border border-slate-300 rounded-md p-3 m-6 w-8/12" placeholder="Please type your query." />
            <button onClick={handleSearch} className="py-3 px-4 border rounded-md  bg-violet-300">Search</button>
        </form>
        <div className="w-[120%] -ml-24">
        { gptSlice.gptProducts.length > 0 && <ItemCarousel title={"Results:"} items={gptSlice.gptProducts[0]}/> }
        { gptSlice.gptProducts.length > 0 && <p className=" text-red-400 text-center">If the Problem is severe, please check with the doctor.</p>}

        </div>
    </div>
}

export default AIChatBot;