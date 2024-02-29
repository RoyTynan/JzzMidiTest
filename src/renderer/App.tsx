
import React, { useEffect, useState } from 'react';
import './App.scss';
import { IMidiConfiguration, IMidiDeviceInfo } from '../Common/model';
import { ipc } from '.';
import { FileChannelName } from '../Common/constants';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const parseMidiInfo = (jInfo  : any) : IMidiConfiguration => {
  const inputsArray: IMidiDeviceInfo[] = [];
  const outputsArray: IMidiDeviceInfo[] = [];
  
  for (const input of jInfo.inputs) {
      const inp: IMidiDeviceInfo = {
        id: input.id,
        name: input.name,
        manufacturer: input.manufacturer,
        version: input.version,
        engine: input.engine
      };
      inputsArray.push(inp);
    }
    for (const output of jInfo.outputs) {
      const out: IMidiDeviceInfo = {
        id: output.id,
        name: output.name,
        manufacturer: output.manufacturer,
        version: output.version,
        engine: output.engine
      };
      outputsArray.push(out);
  }
  const dev : IMidiConfiguration = {
    engine: jInfo.engine,
    inputs : inputsArray,
    name : jInfo.name,
    outputs : outputsArray,
    sysex : jInfo.sysex,
    ver : jInfo.ver,
    version : jInfo.version,
  }
  return dev;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~
const App: React.FC = () => {

  const [midiInfo, setMidiInfo] = useState<IMidiConfiguration>();

  //~~~~~~~~~~~~~~~
  // on start up request the midi info 
  useEffect(() => {
    ipc.requestMidiFile(FileChannelName);
  }, []);

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // receive the midi json object sent from main.ts
  ipc.sendMidiFile(FileChannelName, (_event: any , jzzInfo :  any) => {
    const info = parseMidiInfo(jzzInfo);
    setMidiInfo(info);
  });

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // just render the midi outputs in this example
  const renderMidiOutputPorts = () => {
    if (midiInfo) {
      return midiInfo.outputs.map((midiOutPort, index) => (
        <div className="midiInfo" key={index}>
          {midiOutPort.id + " : " + midiOutPort.name  + " : " + midiOutPort.version}
        </div>
      ));
    }
  };
  
  return (
    <div>    
     {renderMidiOutputPorts()}
    </div>
  );
}

export default App;


