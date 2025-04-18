// User Model
export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    phone: string;
    refreshToken?: string;
    notifications: Notify[];
    devices: Device[];
    settings: Setting[];
  };
  
  // Notify Model
  export type Notify = {
    id: string;
    message: string;
    read: boolean;
    userId: string;
    user: User;
    createdAt: Date;
  };
  
  // Device Model
  export type Device = {
    id: string;
    name: string;
    userId: string;
    user: User;
    data: DeviceData[];
    settings: DeviceSetting[];
  };
  
  // DeviceData Model
  export type DeviceData = {
    id: string;
    deviceId: string;
    device: Device;
    value: number;
    time: Date;
    action: string;
  };
  
  // Setting Model
  export type Setting = {
    id: string;
    timeStart: Date;
    timeEnd: Date;
    status: string;
    userId: string;
    user: User;
    devices: DeviceSetting[];
  };
  
  // DeviceSetting Model
  export type DeviceSetting = {
    DeviceSettingId: string;
    deviceId: string;
    settingId: string;
    valueStart: number;
    valueEnd: number;
    action: string;
    device: Device;
    setting: Setting;
  };
  