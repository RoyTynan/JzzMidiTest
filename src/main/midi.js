const JZZ = require('jzz');
const JME = require('jazz-midi-electron');
const fs = require('fs');

function getInfoAsync() {
    return new Promise((resolve) => {
      const jzzInfo =  JZZ.info(); 
      resolve(jzzInfo);
    });
  }
  
  function getMidiInfo() {
    return getInfoAsync().then(jzzInfo => {
      console.log(jzzInfo);
      return jzzInfo;
    });
  }
  
  export function testMidiInfo(){
    getMidiInfo().then(jzzInfo => {
        fs.writeFile('test.txt', JSON.stringify(jzzInfo), err => {
          if (err) {
            console.error(err);
          } else {
            // file written successfully
          }
        });
      });
  }
