let systemData={};
const fetch=()=>{
    setInterval(() => {
        chrome.system.cpu.getInfo(function(info){       
            systemData=info;  
         });
    },30000);
}

chrome.runtime.onInstalled.addListener(function() {
    chrome.system.cpu.getInfo(function(info){       
    systemData=info;  
    });
   fetch();
  }
)

