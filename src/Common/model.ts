

export interface IMidiDeviceInfo {
  id: string;
  name: string;
  manufacturer: string;
  version: string;
  engine: string;
}

export interface IMidiConfiguration {
  engine: string;
  inputs: IMidiDeviceInfo[];
  name: string;
  outputs: IMidiDeviceInfo[];
  sysex: boolean;
  ver: string;
  version: string;
}