
import { contextBridge, ipcRenderer } from 'electron';
import { FileChannel } from '../Common/constants';

ipcRenderer.setMaxListeners(20);

const electronHandler = {

  ipcRenderer: {

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // request midi info
    requestMidiFile(channel: FileChannel,...args: unknown[]) {
      ipcRenderer.send(channel,  ...args);
    },

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //send midi info
    sendMidiFile(channel: FileChannel, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },

  }
    
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
