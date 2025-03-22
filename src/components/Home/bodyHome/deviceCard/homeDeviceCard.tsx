import Image from "next/image";
import { useState } from "react";


function Card(){
    const [tile,changetile] = useState("ÁNH SÁNG");
    const [number,changenumber] = useState(80);
    const [measurement,changemeasurement] = useState("W/mm²");

    const [mode,changemode] = useState("TỰ ĐỘNG");
    const [doing,changedoing] = useState("Giữ ánh sáng trên mức");
    const [parameter,changeparameter] = useState(50);
    
    
    class CardInfo {
        tile: string;
        number: number;
        measurement: string;
        mode: string;
        doing: string;
        parameter: number;

        
    
        constructor(tile: string,
            number: number,
            measurement: string,
            mode: string,
            doing: string,
            parameter: number,) {
            this.tile = tile;
            this.number = number;
            this.measurement = measurement;
            this.mode = mode;
            this.doing = doing;
            this.parameter = parameter;
            
        }

        gettile(): string {
            return this.tile;
        }
        settile(value: string) {
            this.tile = value;
        }

        // Getter & Setter cho number
        getnumber(): number {
            return this.number;
        }
        setnumber(value: number) {
            if (value >= 0) {
                this.number = value;
            } else {
                throw new Error("Number must be a positive value.");
            }
        }

        // Getter & Setter cho measurement
        getmeasurement(): string {
            return this.measurement;
        }
        setmeasurement(value: string) {
            this.measurement = value;
        }

        // Getter & Setter cho mode
        getmode(): string {
            return this.mode;
        }
        setmode(value: string) {
            this.mode = value;
        }

        // Getter & Setter cho doing
        getdoing(): string {
            return this.doing;
        }
        setdoing(value: string) {
            this.doing = value;
        }

        // Getter & Setter cho parameter
        getparameter(): number {
            return this.parameter;
        }
        setparameter(value: number) {
            if (value >= 0) {
                this.parameter = value;
            } else {
                throw new Error("Parameter must be a positive value.");
            }
        }
        
    }
    
    
            function DisplayCard(card:CardInfo, index: number){
                return(
                    <div className=" justify-evenly flex gap-3 p-3 bg-mau1 border-mau2 rounded-3xl border-4">
                        <div className=" flex flex-col gap-2 justify-evenly text-center  w-fit px-1 py-5">
                            <h2 className=" font-josefin font-bold text-xl text-mau3 ">{card.tile}</h2>
                            <div className=" font-josefin font-bold text-7xl text-mau3">{card.number}</div>
                            <p className="font-josefin font-bold text-sm text-mau3">{card.measurement}</p>
                        </div>
            
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-1 justify-evenly px-3 text-center">
                                <h2 className="font-josefin font-bold text-xl text-mau3 ">{card.mode}</h2>
                                <p className="font-dosis font-light text-xl text-mau3 ">{card.doing}</p>
                                <p className="font-dosis font-light text-xl text-mau3 ">{card.parameter} {card.measurement}</p>
                            </div>
                            <div className="flex m-auto  w-full py-3 gap-3 rounded-2xl px-5 bg-mau3">
                                <Image alt='Home' src={'/icon/Setting.svg'} width={24} height={24}/>
                                <p className="font-josefin font-bold text-xl text-mau1 ">Cài đặt</p>
                            </div>
                        </div>
                    </div>
                )
            }
            
        const cardList = [
            new CardInfo("ÁNH SÁNG", 80, "W/mm²", "TỰ ĐỘNG", "Giữ ánh sáng trên mức", 50),
            new CardInfo("NHIỆT ĐỘ", 35, "°C", "TỰ ĐỘNG", "Duy trì nhiệt độ", 70),
            new CardInfo("ÁP SUẤT", 120, "kPa", "THỦ CÔNG", "Ổn định áp suất", 90)
        ];
            
    return(
        <>
            {cardList.map((card: CardInfo, index: number) => DisplayCard(card, index))}
        </>
    );

    
}

export default Card;