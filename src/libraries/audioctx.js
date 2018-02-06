audioFileLoader = (fileDirectory) =>{
     var soundObj = {};

     soundObj.fileDirectory = fileDirectory;

     // soundObj.tunaNode;
     var getSound = new XMLHttpRequest();
     getSound.open("GET", soundObj.fileDirectory, true);
     getSound.responseType = "arraybuffer";
     getSound.onload = () => {
         this._audioCtx.decodeAudioData(getSound.response, function(buffer) {
             soundObj.soundToPlay = buffer;

         });
     }

     getSound.send();

     soundObj.schedulePlay = () => {
         this.isPLaying = true;
         var playSound = this._audioCtx.createBufferSource();
         playSound.buffer = soundObj.soundToPlay;
         playSound.connect(soundObj.this.audioCtx);
         playSound.start(timeVal);
     }
     return soundObj;
   }
