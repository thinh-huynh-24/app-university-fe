
const modes = ["Tự động", "Lên lịch", "Thủ công"];

function Render({ mode, deviceinfo }: { mode: string; deviceinfo: string }) {
    return (
        <div className="my-2">
            <label className="flex items-center space-x-2 cursor-pointer">
                <input
                    type="radio"
                    name="mode"
                    value={mode}
                    className="hidden peer"
                    checked={deviceinfo === mode}
                    // onChange={}
                />
                <div className="w-5 h-5 border-2 border-mau1 rounded-full flex items-center justify-center peer-checked:bg-mau1">
                    <div className="w-2.5 h-2.5 bg-mau3 rounded-full hidden peer-checked:block"></div>
                </div>
                <span className="text-black font-josefin text-base">{mode}</span>
            </label>
        </div>
    );
}

function Mode({ device }: { device: { mode: string } }) {
    const listMode = modes.map((mode) => (
        <Render key={mode} mode={mode} deviceinfo={device.mode} />
    ));
    return (
        <div className="gap-2 flex flex-col">
            <div>
                <h2 className="font-josefin font-bold text-xl">Chế độ:</h2>
            </div>
            <div>{listMode}</div>
        </div>
    );
}

export default Mode;