




class ProjectsClass{		
    constructor(contentDiv){		
        this.contentDiv = contentDiv;		
        this.fadeOutAnimation = "animated fadeOutLeftBig";		
        this.fadeInAnimation = "animated fadeInRightBig";		
        this.animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";		
        this.projectsJSON = null;		
        this.readTextFile("file:///C:/your/path/to/file.txt");		
    }		
		
    ajaxCallBack(json) {		
        this.projectsJSON = json;		
        console.log("backgroundLoad finished");                		
        console.log(this.projectsJSON);		
    }

    readTextFile(file) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if(rawFile.readyState === 4) {
                if(rawFile.status === 200 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    alert(allText);
                }
            }
        }
        rawFile.send(null);
    }


}