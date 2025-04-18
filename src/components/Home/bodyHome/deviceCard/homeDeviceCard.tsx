import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { DeviceSetting,Device,DeviceData,Setting } from "@/components/data/device";

function DisplayCard({ device }: { device: Device }) {
    console.log(device);
    const setting = device.settings && device.settings.length > 0 ? device.settings[0] : null;


  return (
    <div className="my-3 mx-2 h-[210px] justify-evenly flex gap-3 p-3 bg-mau1 border-mau2 rounded-3xl border-4">
      <div className="flex flex-col gap-2 justify-evenly text-center w-fit px-1 py-5">
        <h2 className="font-josefin font-bold text-xl text-mau3">{device.name}</h2>
        <div className="font-josefin font-bold text-7xl text-mau3">
          {device.data[0].value ?? "N/A"}
        </div>
        <p className="font-josefin font-bold text-sm text-mau3">°C</p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 justify-evenly px-3 text-center">
          <h2 className="font-josefin font-bold text-xl text-mau3">
            {setting?.action ?? "Chưa có hành động"}
          </h2>
          <p className="font-dosis font-light text-xl text-mau3">
            Trong khoảng: {setting?.valueStart ?? "-"} - {setting?.valueEnd ?? "-"} °C
          </p>
        </div>
        <Link
          href={`/deviceSetting/${device.id}`}
          className="flex m-auto w-fit py-3 gap-3 rounded-2xl px-5 bg-mau3"
        >
          <Image alt="Setting" src={"/icon/Setting.svg"} width={24} height={24} />
          <p className="font-josefin font-bold text-xl text-mau1">Cài đặt</p>
        </Link>
      </div>
    </div>
  );
}

export default function Card() {
  const [devices, setDevices] = useState<DeviceWithLatest[]>([]);

  useEffect(() => {
    async function fetchInitialDevices() {
      try {
        const res = await fetch("http://localhost:8000/api/v1/devices");
        const rawData = await res.json();
        console.log("Thiết bị từ API:", rawData);

        const detailedDevices: DeviceWithLatest[] = await Promise.all(
          rawData.data.map(async (dev: any) => {
            const [detailRes, valueRes] = await Promise.all([
              fetch(`http://localhost:8000/api/v1/devices/${dev.id}`),
              fetch(`http://localhost:8000/api/v2/device-values?deviceId=${dev.id}`)
            ]);

            const detailData = await detailRes.json();
            const valueData = await valueRes.json();

            const latestValue = valueData.data?.[0]?.value ?? null;

            return {
              ...detailData.data,
              latestValue
            };
          })
        );

        setDevices(detailedDevices);
      } catch (err) {
        console.error("Lỗi lấy thiết bị:", err);
      }
    }

    fetchInitialDevices();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      const updated = await Promise.all(
        devices.map(async (device) => {
          try {
            const res = await fetch(`http://localhost:8000/api/v2/device-values?deviceId=${device.id}`);
            const data = await res.json();
            const latestValue = data.data?.[0]?.value ?? null;

            return { ...device, latestValue };
          } catch (error) {
            console.error("Lỗi cập nhật giá trị:", error);
            return device;
          }
        })
      );

      setDevices(updated);
    }, 3000);

    return () => clearInterval(interval);
  }, [devices]);

  return (
    <div className="bg-mau3 w-full rounded-t-xl flex flex-col">
      {devices.length === 0 ? (
        <p className="text-center text-white py-10">Không có thiết bị nào</p>
      ) : (
        devices.map((device) => (
          <DisplayCard key={device.id} device={device} />
        ))
      )}
    </div>
  );
}
