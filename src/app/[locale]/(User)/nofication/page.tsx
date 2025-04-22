import Navigate from "@/components/navigate/navigate";
import Header from "@/components/header/header";
import NofiCard from "@/components/nofiCard/nofi";

function getData() {
    // Simulate fetching data from an API
    
}

export default function Nofication() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <h1 className="font-josefin font-black text-3xl text-center my-10 text-mau3">Yolo Farm</h1>
            <div className="flex-1 overflow-y-auto min-h-main-size gap-3 flex flex-col rounded-t-xl py-5 px-3 bg-mau3">
                <NofiCard/>
            </div>
            <Navigate />
        </div>
    );
}