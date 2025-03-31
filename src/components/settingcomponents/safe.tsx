import Image from "next/image";
import { useState } from "react";

function Safe({ device }: { device: { minValue: number; maxValue: number } }) {
    const [minValue, setMinValue] = useState(device.minValue);
    const [maxValue, setMaxValue] = useState(device.maxValue);

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (/^\d*$/.test(newValue)) {
            setMinValue(newValue === "" ? 0 : parseInt(newValue, 10));
        }
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (/^\d*$/.test(newValue)) {
            setMaxValue(newValue === "" ? 0 : parseInt(newValue, 10));
        }
    };

    return (
        <div className="w-full h-fit flex flex-col gap-1 py-3">
            <h2 className="font-josefin font-bold text-xl">Cài đặt an toàn:</h2>
            <div className="flex justify-between px-4">
                <div className="flex items-center">
                    <span className="text-lg font-dosis text-black">Mức an toàn dưới</span>
                </div>
                <div className="flex gap-3">
                    <div className="bg-mau1 p-1 rounded-xl">
                        <input
                            type="number"
                            value={minValue}
                            onChange={handleMinChange}
                            className="bg-mau1 font-dosis text-mau3 text-xl w-10 h-10 text-center"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <Image
                            alt="Up"
                            src={"/icon/Up.svg"}
                            width={24}
                            height={24}
                            onClick={() => setMinValue((prev) => prev + 1)}
                        />
                        <Image
                            alt="Down"
                            src={"/icon/Down.svg"}
                            width={24}
                            height={24}
                            onClick={() => setMinValue((prev) => Math.max(0, prev - 1))}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-between px-4">
                <div className="flex items-center">
                    <span className="text-lg font-dosis text-black">Mức an toàn trên</span>
                </div>
                <div className="flex gap-3">
                    <div className="bg-mau1 p-1 rounded-xl">
                        <input
                            type="number"
                            value={maxValue}
                            onChange={handleMaxChange}
                            className="bg-mau1 font-dosis text-mau3 text-xl w-10 h-10 text-center"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <Image
                            alt="Up"
                            src={"/icon/Up.svg"}
                            width={24}
                            height={24}
                            onClick={() => setMaxValue((prev) => prev + 1)}
                        />
                        <Image
                            alt="Down"
                            src={"/icon/Down.svg"}
                            width={24}
                            height={24}
                            onClick={() => setMaxValue((prev) => Math.max(0, prev - 1))}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Safe;