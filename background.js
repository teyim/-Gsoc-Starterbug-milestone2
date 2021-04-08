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


   // Extension's background code
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if(request.greeting == "getInfo"){ // Check the URL with a custom function
    sendResponse({systemInfo:systemData});
    return true
  }
}
);
