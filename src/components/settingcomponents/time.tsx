import Image from "next/image";

function Time({ device }: { device: { startTime: string; endTime: string } }) {
    return (
        <div className="w-full h-fit flex flex-col gap-3 py-3">
            <h2 className="font-josefin font-bold text-xl">Cài đặt lên lịch:</h2>
            <div className="flex justify-center gap-3 px-3">
                <div className="bg-mau1 py-3 px-5 rounded-lg">
                    <input
                        type="time"
                        value={device.startTime}
                        className="text-mau3 bg-mau1 font-dosis text-base w-full"
                        onChange={(e) => console.log("Start Time:", e.target.value)} // Thay đổi logic xử lý tại đây
                    />
                </div>
                <Image alt="To" src={"/icon/To.svg"} width={24} height={24} />
                <div className="bg-mau1 py-3 px-5 rounded-lg w-full ">
                    <input
                        type="time"
                        value={device.endTime}
                        className="text-mau3 bg-mau1 font-dosis text-base"
                        onChange={(e) => console.log("End Time:", e.target.value)} // Thay đổi logic xử lý tại đây
                    />
                </div>
            </div>
        </div>
    );
}

export default Time;