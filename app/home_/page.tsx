// "use client"
import Panner from "../ui/home/panner";
import { ListItems } from "../ui/home/items";
import Slider from "../ui/home/slider";
import Footer from "../ui/home/footer";
import { fetchItems } from "../lib/data";
import { Items } from "../lib/definitions";

export default async function Home(){
    // const items = fetchItems()
    const items = await fetchItems();
    console.log(items)
    
    return(
        <>
            <div>
                <Panner></Panner>
            </div>
            <div>
                <ListItems items={items}/>
                {/* <ListItems /> */}
            </div>
            <div>
                <Slider></Slider>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    )
}