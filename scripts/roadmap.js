require('../sdk/scripts/VSS.SDK.js');

VSS.require(["VSS/Service", "TFS/WorkItemTracking/RestClient"],  
    function (VSS_Service, TFS_Wit_WebApi) {
        let projectId = VSS.getWebContext().project.id;
        let div = document.getElementById("projectId");
        div.textContent = roadmap();
    }
);
