
// -----------------------------------------------------------------------------
// Obtain the stored data for the filter and send it to the function filterGet()
// -----------------------------------------------------------------------------
window.onload = function (){
    filterGet({
        quality: localStorage.getItem("quality"),
        translate: localStorage.getItem("translate"),
        type: localStorage.getItem("type")
    });
};
// -----------------------------------------------------------------------------

var i = 0;

var quality = "allQuality",     qualityId = 0;      // Default All
var translate = "allTranslate", translateId = 0;    // Default All
var type = "allType",           typeId = 0;         // Default All

// Analysis of the data obtained
function filterGet(items) {

    if (items.hasOwnProperty('quality')) {

        quality = items["quality"];

        if (quality == "idealQuality") {
            qualityId = 3;
        }
        else if (quality == "goodQuality") {
            qualityId = 2;
        }
        else if (quality == "badQuality") {
            qualityId = 1;
        }
        else if (quality == "kpkQuality") {
            qualityId = 4;
        }

    }

    if (items.hasOwnProperty('translate')) {

        translate = items["translate"];

        if (translate == "idealTranslate") {
            translateId = 1;
        }
        else if (translate == "profTranslate") {
            translateId = 2;
        }
        else if (translate == "authorTranslate") {
            translateId = 3;
        }
        else if (translate == "amateurTranslate") {
            translateId = 4;
        }
        else if (translate == "subTranslate") {
            translateId = 5;
        }

    }

    if (items.hasOwnProperty('type')) {

        type = items["type"];

        if (type == "extendedType") {
            typeId = 1;
        }
        else if (type == "theatricalType") {
            typeId = 2;
        }
        else if (type == "directedType") {
            typeId = 3;
        }
        else if (type == "alternativeType") {
            typeId = 4;
        }

    }

    document.getElementById("menuTranslate").textContent = storageGet("menuTranslate");
    document.getElementById("menuQuality").textContent   = storageGet("menuQuality");
    document.getElementById("menuType").textContent      = storageGet("menuType");
    document.getElementById("menuAbout").textContent     = storageGet("menuAbout");
    document.getElementById("menuHelp").textContent      = storageGet("menuHelp");

    var translateArr = [
        ["idealTranslate",   storageGet("idealTranslate")],
        ["profTranslate",    storageGet("profTranslate")],
        ["authorTranslate",  storageGet("authorTranslate")],
        ["amateurTranslate", storageGet("amateurTranslate")],
        ["subTranslate",     storageGet("subTranslate")],
        ["allTranslate",     storageGet("allTranslate")]
    ];

    var qualityArr = [
        ["idealQuality",     storageGet("idealQuality")],
        ["goodQuality",      storageGet("goodQuality")],
        ["badQuality",       storageGet("badQuality")],
        ["kpkQuality",       storageGet("kpkQuality")],
        ["allQuality",       storageGet("allQuality")]
    ];

    var typeArr = [
        ["extendedType",     storageGet("extendedType")],
        ["theatricalType",   storageGet("theatricalType")],
        ["directedType",     storageGet("directedType")],
        ["alternativeType",  storageGet("alternativeType")],
        ["allType",          storageGet("allType")]
    ];

    var helpArr = [
        "onlineHelp",
        "downloadHelp",
        "magnetHelp",
        "updownHelp",
        "linkHelp"
    ];

    for (i = 0; i < helpArr.length; i++) {

        var menuHelpSpan1 = document.createElement('span');
        var menuHelpSpan2 = document.createElement('span');
        var menuHelpSpan3 = document.createElement('span');
        var menuHelpI1    = document.createElement('i');
        var menuHelpI2    = document.createElement('i');

        if (helpArr[i] == "onlineHelp") {
            menuHelpI2.setAttribute("class", "fa fa-youtube-play fa-stack-1x text-danger");
        }
        else if (helpArr[i] == "downloadHelp") {
            menuHelpI2.setAttribute("class", "fa fa-cloud-download fa-stack-1x text-success");
        }
        else if (helpArr[i] == "magnetHelp") {
            menuHelpI2.setAttribute("class", "fa fa-magnet fa-stack-1x text-warning");
        }
        else if (helpArr[i] == "updownHelp") {
            menuHelpI2.setAttribute("class", "fa fa-thumbs-up fa-flip-horizontal fa-stack-1x text-success");
        }
        else if (helpArr[i] == "linkHelp") {
            menuHelpI2.setAttribute("class", "fa fa-external-link fa-stack-1x text-muted");
        }

        menuHelpSpan1.setAttribute("class", "fa-stack fa-lg");
        menuHelpI1.setAttribute("class", "fa fa-square fa-stack-2x");
        menuHelpSpan1.appendChild(menuHelpI1);
        menuHelpSpan1.appendChild(menuHelpI2);
        menuHelpSpan2.textContent = " - " + storageGet(helpArr[i]);
        menuHelpSpan3.appendChild(menuHelpSpan1);
        menuHelpSpan3.appendChild(menuHelpSpan2);
        document.getElementById(helpArr[i]).appendChild(menuHelpSpan3);

    }

    for (i = 0; i < translateArr.length; i++) {

        var translateI      = document.createElement('i');
        var translateStrong = document.createElement('strong');
        var translateSpan   = document.createElement('span');

        if (translate == translateArr[i][0]) {
            translateI.setAttribute("class", "fa fa-dot-circle-o");
            translateStrong.textContent = " " + translateArr[i][1];
            document.getElementById(translateArr[i][0]).appendChild(translateI);
            document.getElementById(translateArr[i][0]).appendChild(translateStrong);
        }
        else {
            translateI.setAttribute("class", "fa fa-circle-o");
            translateSpan.textContent = " " + translateArr[i][1];
            document.getElementById(translateArr[i][0]).appendChild(translateI);
            document.getElementById(translateArr[i][0]).appendChild(translateSpan);
        }

    }

    for (i = 0; i < qualityArr.length; i++) {

        var qualityI = document.createElement('i');
        var qualityStrong = document.createElement('strong');
        var qualitySpan = document.createElement('span');

        if (quality == qualityArr[i][0]) {
            qualityI.setAttribute("class", "fa fa-dot-circle-o");
            qualityStrong.textContent = " " + qualityArr[i][1];
            document.getElementById(qualityArr[i][0]).appendChild(qualityI);
            document.getElementById(qualityArr[i][0]).appendChild(qualityStrong);
        }
        else {
            qualityI.setAttribute("class", "fa fa-circle-o");
            qualitySpan.textContent = " " + qualityArr[i][1];
            document.getElementById(qualityArr[i][0]).appendChild(qualityI);
            document.getElementById(qualityArr[i][0]).appendChild(qualitySpan);
        }
    }

    for (i = 0; i < typeArr.length; i++) {

        var typeI      = document.createElement('i');
        var typeStrong = document.createElement('strong');
        var typeSpan   = document.createElement('span');

        if (type == typeArr[i][0]) {
            typeI.setAttribute("class", "fa fa-dot-circle-o");
            typeStrong.textContent = " " + typeArr[i][1];
            document.getElementById(typeArr[i][0]).appendChild(typeI);
            document.getElementById(typeArr[i][0]).appendChild(typeStrong);
        }
        else {
            typeI.setAttribute("class", "fa fa-circle-o");
            typeSpan.textContent = " " + typeArr[i][1];
            document.getElementById(typeArr[i][0]).appendChild(typeI);
            document.getElementById(typeArr[i][0]).appendChild(typeSpan);
        }
    }
}

// Save of the data obtained
function filterSave(quality, translate, type) {

    var alertI = document.createElement('i');
    var alertSpan1 = document.createElement('span');
    var alertSpan2 = document.createElement('span');
    alertSpan1.setAttribute("class", "text-success");
    alertI.setAttribute("class", "fa fa-check");
    alertSpan2.textContent = " OK";
    alertSpan1.appendChild(alertI);
    alertSpan1.appendChild(alertSpan2);

    if (quality != false) {

        document.getElementById('menuQualitySave').classList.remove('caret');
        document.getElementById("menuQualitySave").textContent = "";
        document.getElementById("menuQualitySave").appendChild(alertSpan1);
        localStorage.setItem("quality", quality);

    }

    if (translate != false) {

        document.getElementById('menuTranslateSave').classList.remove('caret');
        document.getElementById("menuTranslateSave").textContent = "";
        document.getElementById("menuTranslateSave").appendChild(alertSpan1);
        localStorage.setItem("translate", translate);

    }

    if (type != false) {

        document.getElementById('menuTypeSave').classList.remove('caret');
        document.getElementById("menuTypeSave").textContent = "";
        document.getElementById("menuTypeSave").appendChild(alertSpan1);
        localStorage.setItem("type", type);

    }

    var alertInfoDiv1 = document.createElement('div');
    var alertInfoDiv2 = document.createElement('div');
    alertInfoDiv1.setAttribute("class", "panel panel-success");
    alertInfoDiv1.setAttribute("style", "margin: 20px;");
    alertInfoDiv2.setAttribute("class", "panel-body text-center");
    alertInfoDiv2.textContent = storageGet("alertSave");
    alertInfoDiv1.appendChild(alertInfoDiv2);

    document.getElementById('information').classList.remove('hide');
    document.getElementById("information").textContent = "";
    document.getElementById("information").insertBefore(alertInfoDiv1, document.getElementById("information").firstChild);

}

// -----------------------------------------------------------------------------
// Obtain title, url, etc. and send it to the function get()
// -----------------------------------------------------------------------------
safari.application.addEventListener("popover", performCommand, false);
function performCommand(event) {
    if (event.target.identifier == "popup") {
        get([{"title": safari.application.activeBrowserWindow.activeTab.title, "url": safari.application.activeBrowserWindow.activeTab.url}]);
    }
}
// -----------------------------------------------------------------------------

// Retrieving data (title, url, etc.)
function get(tab) {

    if (tab[0].url == "search") {

        torrent([{"title": tab[0].title, "url": "search"}]);

    }
    else {

        torrent(tab);

    }

}

// Wait for the download page
document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('search').addEventListener('click', function() {

        return get([{"title": document.getElementById('query').value, "url": "search"}]);

    });

    document.onkeyup = function (e) {

        e = e || window.event;

        if (e.keyCode === 13) {

            document.getElementById('menu').click();

            return get([{"title": document.getElementById('query').value, "url": "search"}]);

        }

        return false;

    };

    document.getElementById("query").setAttribute("placeholder", storageGet("menuSearchPlaceholder"));

    var searchI = document.createElement('i');
    var searchSpan = document.createElement('span');
    searchI.setAttribute("class", "fa fa-search");
    searchSpan.textContent = " " + storageGet("menuSearch");
    document.getElementById("search").appendChild(searchI);
    document.getElementById("search").appendChild(searchSpan);

    var progressI = document.createElement('i');
    var progressDiv = document.createElement('div');
    progressI.setAttribute("class", "fa fa-spinner fa-spin fa-5x text-success");
    progressDiv.setAttribute("style", "margin:100px auto; text-align:center;");
    progressDiv.appendChild(progressI);
    document.getElementById("information").appendChild(progressDiv);

    document.getElementById("menuFilterOn").textContent = storageGet("menuFilterOn");
    document.getElementById("menuFilterOff").textContent = storageGet("menuFilterOff");
    document.getElementById("menuOnline").textContent = storageGet("menuOnline");

    document.getElementById('menuOnline').addEventListener('click', function() {
        document.getElementById('menuFilterOn').classList.remove('disabled');
        document.getElementById('menuFilterOff').classList.remove('disabled');
        document.getElementById('menuOnline').classList.add('disabled');

        document.getElementById('information').classList.add('hide');
        document.getElementById('contentFilterOn').classList.add('hide');
        document.getElementById('contentFilterOff').classList.add('hide');
        document.getElementById('contentOnline').classList.remove('hide');
    });
    document.getElementById('menuFilterOn').addEventListener('click', function() {
        document.getElementById('menuOnline').classList.remove('disabled');
        document.getElementById('menuFilterOff').classList.remove('disabled');
        document.getElementById('menuFilterOn').classList.add('disabled');

        document.getElementById('information').classList.add('hide');
        document.getElementById('contentOnline').classList.add('hide');
        document.getElementById('contentFilterOff').classList.add('hide');
        document.getElementById('contentFilterOn').classList.remove('hide');
    });
    document.getElementById('menuFilterOff').addEventListener('click', function() {
        document.getElementById('menuOnline').classList.remove('disabled');
        document.getElementById('menuFilterOn').classList.remove('disabled');
        document.getElementById('menuFilterOff').classList.add('disabled');

        document.getElementById('information').classList.add('hide');
        document.getElementById('contentOnline').classList.add('hide');
        document.getElementById('contentFilterOn').classList.add('hide');
        document.getElementById('contentFilterOff').classList.remove('hide');
    });

    document.getElementById('idealQuality').addEventListener('click', function() {
        return filterSave("idealQuality", false, false);
    });
    document.getElementById('goodQuality').addEventListener('click', function() {
        return filterSave("goodQuality", false, false);
    });
    document.getElementById('badQuality').addEventListener('click', function() {
        return filterSave("badQuality", false, false);
    });
    document.getElementById('kpkQuality').addEventListener('click', function() {
        return filterSave("kpkQuality", false, false);
    });
    document.getElementById('allQuality').addEventListener('click', function() {
        return filterSave("allQuality", false, false);
    });

    document.getElementById('idealTranslate').addEventListener('click', function() {
        return filterSave(false, "idealTranslate", false);
    });
    document.getElementById('profTranslate').addEventListener('click', function() {
        return filterSave(false, "profTranslate", false);
    });
    document.getElementById('authorTranslate').addEventListener('click', function() {
        return filterSave(false, "authorTranslate", false);
    });
    document.getElementById('amateurTranslate').addEventListener('click', function() {
        return filterSave(false, "amateurTranslate", false);
    });
    document.getElementById('subTranslate').addEventListener('click', function() {
        return filterSave(false, "subTranslate", false);
    });
    document.getElementById('allTranslate').addEventListener('click', function() {
        return filterSave(false, "allTranslate", false);
    });

    document.getElementById('extendedType').addEventListener('click', function() {
        return filterSave(false, false, "extendedType");
    });
    document.getElementById('theatricalType').addEventListener('click', function() {
        return filterSave(false, false, "theatricalType");
    });
    document.getElementById('directedType').addEventListener('click', function() {
        return filterSave(false, false, "directedType");
    });
    document.getElementById('alternativeType').addEventListener('click', function() {
        return filterSave(false, false, "alternativeType");
    });
    document.getElementById('allType').addEventListener('click', function() {
        return filterSave(false, false, "allType");
    });

});

// Load online
function online(tabs) {

    var online = new XMLHttpRequest();
    online.open("POST", "http://api.qimdb.com/online", true);
    online.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    online.onreadystatechange = function() {

        if (online.readyState == 4) {

            var onlineXml = online.responseXML.querySelectorAll('online');

            // Clear
            while(document.getElementById("contentOnline").firstChild){
                document.getElementById("contentOnline").removeChild(document.getElementById("contentOnline").firstChild);
            }

            if (onlineXml && onlineXml.length >= 1) {

                for (var i = 0; i < onlineXml.length; i++) {

                    if (!onlineXml[i]) continue;

                    var ii = i+1;

                    var onlineDataPanel = document.createElement('div');
                    onlineDataPanel.setAttribute("class", "panel panel-info");
                    onlineDataPanel.setAttribute("id", "play" + ii);
                    onlineDataPanel.setAttribute("style", "margin: 20px;");

                    var onlineDataHeading = document.createElement('div');
                    onlineDataHeading.setAttribute("class", "panel-heading text-left");
                    onlineDataHeading.setAttribute("id", "playTitle" + ii);
                    onlineDataHeading.textContent = onlineXml[i].getAttribute("title");

                    var onlineDataBody = document.createElement('div');
                    onlineDataBody.setAttribute("class", "panel-body text-center");

                    var onlineDataA = document.createElement('a');
                    onlineDataA.setAttribute("onclick", "safari.application.activeBrowserWindow.openTab().url = '" + onlineXml[i].getAttribute("href") + "'");
                    onlineDataA.setAttribute("href", "#online");
                    onlineDataA.setAttribute("target", "_blank");
                    onlineDataA.setAttribute("id", "linkOnline" + ii);

                    var onlineDataImg = document.createElement('img');
                    onlineDataImg.setAttribute("src", "img/play.png");
                    onlineDataImg.setAttribute("class", "img-thumbnail");

                    onlineDataA.appendChild(onlineDataImg);
                    onlineDataBody.appendChild(onlineDataA);
                    onlineDataPanel.appendChild(onlineDataHeading);
                    onlineDataPanel.appendChild(onlineDataBody);
                    document.getElementById("contentOnline").appendChild(onlineDataPanel);

                }

            }
            else {

                document.getElementById('menuOnline').classList.remove('disabled');
                document.getElementById('menuOnline').classList.remove('btn-success');
                document.getElementById('menuOnline').classList.add('btn-danger');

                var contentOnlineDiv1 = document.createElement('div');
                var contentOnlineDiv2 = document.createElement('div');
                contentOnlineDiv1.setAttribute("class", "panel panel-success");
                contentOnlineDiv1.setAttribute("style", "margin: 20px;");
                contentOnlineDiv2.setAttribute("class", "panel-body text-center");
                contentOnlineDiv2.textContent = storageGet("alertNotData");
                contentOnlineDiv1.appendChild(contentOnlineDiv2);
                document.getElementById("contentOnline").appendChild(contentOnlineDiv1);

                if (document.getElementById("contentFilterOff").textContent == storageGet("alertNotData") && document.getElementById("contentFilterOn").textContent == storageGet("alertNotData")) {
                    document.getElementById('contentOnline').classList.add('hide');
                    information();
                }

            }

        }

    };
    online.send("format=xml&title=" + encodeURIComponent(tabs[0].title) + "&url=" + encodeURIComponent(tabs[0].url));

}

// Load torrent link
function torrent(tabs) {

    var torrent = new XMLHttpRequest();
    torrent.open("POST", "http://api.qimdb.com/torrent", true);
    torrent.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    torrent.onreadystatechange = function() {

        if (torrent.readyState == 4) {

            var torrentXml = torrent.responseXML.querySelectorAll("torrent");

            while(document.getElementById("contentFilterOn").firstChild){
                document.getElementById("contentFilterOn").removeChild(document.getElementById("contentFilterOn").firstChild);
            }

            while(document.getElementById("contentFilterOff").firstChild){
                document.getElementById("contentFilterOff").removeChild(document.getElementById("contentFilterOff").firstChild);
            }

            var onlineText = storageGet("online");
            var downloadText = storageGet("download");

            if (torrentXml && torrentXml.length >= 1) {

                var colorOff           = "#ffffff";
                var colorOn            = "#ffffff";
                var zebraOff           = 0;
                var zebraOn            = 0;

                for (var i = 0; i < torrentXml.length; i++) {

                    if (!torrentXml[i]) continue;

                    var space = document.createElement('span');
                    space.textContent = " ";

                    var filterTranslate    = false;
                    var userId             = torrentXml[i].getAttribute("tracker") + '_' + torrentXml[i].getAttribute("tracker_id") +'_'+ tabs[0].id + tabs[0].width + tabs[0].height;
                    var torrentTitle       = (torrentXml[i].getAttribute("title").length > 45) ? torrentXml[i].getAttribute("title").substr(0, 45) + '...' : torrentXml[i].getAttribute("title");

// UP **************
                    var torrentUp = document.createElement('a');
                    var torrentUpSpan = document.createElement('span');
                    var torrentUpI = document.createElement('i');
                    var torrentUpText = document.createElement('span');

                    if (torrentXml[i].getAttribute("tracker") + '_' + torrentXml[i].getAttribute("tracker_id") +'_'+ torrentXml[i].getAttribute("rating_last_id") != userId) {
                        torrentUp.setAttribute("href", "#upRating");
                        torrentUp.setAttribute("style", "text-decoration: none;");
                        torrentUp.setAttribute("class", "up up" + userId);
                        torrentUp.setAttribute("alt", userId);
                        torrentUpSpan.setAttribute("class", "label label-default");
                        torrentUpSpan.setAttribute("style", "margin: 0 1px 0 0;");
                        torrentUpI.setAttribute("class", "fa fa-thumbs-up fa-flip-horizontal text-success");
                        torrentUpText.setAttribute("class", "text-success");
                        torrentUpText.setAttribute("id", "thumbs-up" + userId);
                        torrentUpText.textContent = " " + torrentXml[i].getAttribute("rating_up");
                        torrentUpSpan.appendChild(torrentUpI);
                        torrentUpSpan.appendChild(torrentUpText);
                        torrentUp.appendChild(torrentUpSpan);
                    }
                    else {
                        torrentUpSpan.setAttribute("class", "label label-default");
                        torrentUpSpan.setAttribute("style", "margin: 0 1px 0 0;");
                        torrentUpI.setAttribute("class", "fa fa-thumbs-up fa-flip-horizontal text-muted");
                        torrentUpText.setAttribute("class", "text-muted");
                        torrentUpText.setAttribute("id", "thumbs-up" + userId);
                        torrentUpText.textContent = " " + torrentXml[i].getAttribute("rating_up");
                        torrentUpSpan.appendChild(torrentUpI);
                        torrentUpSpan.appendChild(torrentUpText);
                        torrentUp = torrentUpSpan;
                    }

// DOWN ************
                    var torrentDown = document.createElement('a');
                    var torrentDownSpan = document.createElement('span');
                    var torrentDownI = document.createElement('i');
                    var torrentDownText = document.createElement('span');

                    if (torrentXml[i].getAttribute("tracker") + '_' + torrentXml[i].getAttribute("tracker_id") +'_'+ torrentXml[i].getAttribute("rating_last_id") != userId) {
                        torrentDown.setAttribute("href", "#downRating");
                        torrentDown.setAttribute("style", "text-decoration: none;");
                        torrentDown.setAttribute("class", "down down" + userId);
                        torrentDown.setAttribute("alt", userId);
                        torrentDownSpan.setAttribute("class", "label label-default");
                        torrentDownSpan.setAttribute("style", "margin: 0 1px;");
                        torrentDownI.setAttribute("class", "fa fa-thumbs-down text-danger");
                        torrentDownText.setAttribute("class", "text-danger");
                        torrentDownText.setAttribute("id", "thumbs-down" + userId);
                        torrentDownText.textContent = torrentXml[i].getAttribute("rating_down") + " ";
                        torrentDownSpan.appendChild(torrentDownText);
                        torrentDownSpan.appendChild(torrentDownI);
                        torrentDown.appendChild(torrentDownSpan);
                    }
                    else {
                        torrentDownSpan.setAttribute("class", "label label-default");
                        torrentDownSpan.setAttribute("style", "margin: 0 1px;");
                        torrentDownI.setAttribute("class", "fa fa-thumbs-down text-muted");
                        torrentDownText.setAttribute("class", "text-muted");
                        torrentDownText.setAttribute("id", "thumbs-down" + userId);
                        torrentDownText.textContent = torrentXml[i].getAttribute("rating_down") + " ";
                        torrentDownSpan.appendChild(torrentDownText);
                        torrentDownSpan.appendChild(torrentDownI);
                        torrentDown = torrentDownSpan;
                    }

// DOWNLOAD ********
                    var torrentDownload = document.createElement('a');
                    var torrentDownloadI = document.createElement('i');
                    var torrentDownloadText = document.createElement('span');
                    torrentDownload.setAttribute("onclick", "safari.application.activeBrowserWindow.openTab().url = 'http://torrent.qimdb.com/download/" + torrentXml[i].getAttribute("tracker") + "_" + torrentXml[i].getAttribute("tracker_id") + "'");
                    torrentDownload.setAttribute("href", "#download");
                    torrentDownload.setAttribute("style", "text-decoration: none;");
                    torrentDownload.setAttribute("target", "_blank");
                    torrentDownloadI.setAttribute("class", "fa fa-cloud-download text-success");
                    torrentDownloadText.textContent = downloadText + " ";
                    torrentDownload.appendChild(torrentDownloadText);
                    torrentDownload.appendChild(torrentDownloadI);

// MAGNET **********
                    var torrentMagnet = document.createElement('a');
                    var torrentMagnetI = document.createElement('i');
                    torrentMagnet.setAttribute("onclick", "safari.application.activeBrowserWindow.openTab().url = 'magnet:?xt=urn:btih:" + torrentXml[i].getAttribute("download") + "&dn=FILMEGO&tr=udp%3A%2F%2Fbt.firebit.org%3A2710%2Fannounce&tr=udp%3A%2F%2Fbt.rutor.org%3A2710%2Fannounce&tr=udp%3A%2F%2Fannounce.opensharing.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.publicbt.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.istole.it%3A6969%2Fannounce'");
                    torrentMagnet.setAttribute("href", "#magnet");
                    torrentMagnet.setAttribute("style", "margin: 0 3px;");
                    torrentMagnet.setAttribute("target", "_blank");
                    torrentMagnetI.setAttribute("class", "fa fa-magnet text-warning");
                    torrentMagnet.appendChild(torrentMagnetI);

// ONLINE **********
                    var torrentOnline = document.createElement('a');
                    var torrentOnlineI = document.createElement('i');
                    var torrentOnlineText = document.createElement('span');
                    torrentOnline.setAttribute("onclick", "safari.application.activeBrowserWindow.openTab().url = 'http://torrent.qimdb.com/download/" + torrentXml[i].getAttribute("tracker") + "_" + torrentXml[i].getAttribute("tracker_id") + "'");
                    torrentOnline.setAttribute("href", "#online");
                    torrentOnline.setAttribute("style", "text-decoration: none;");
                    torrentOnline.setAttribute("target", "_blank");
                    torrentOnlineI.setAttribute("class", "fa fa-youtube-play text-danger");
                    torrentOnlineText.textContent = " " + onlineText;
                    torrentOnline.appendChild(torrentOnlineI);
                    torrentOnline.appendChild(torrentOnlineText);

// TRACKER LINK ****
                    var torrentTrackerLink = document.createElement('a');
                    var torrentTrackerLinkI = document.createElement('i');
                    torrentTrackerLink.setAttribute("onclick", "safari.application.activeBrowserWindow.openTab().url = 'http://torrent.qimdb.com/tracker/" + torrentXml[i].getAttribute("tracker") + "_" + torrentXml[i].getAttribute("tracker_id") + "'");
                    torrentTrackerLink.setAttribute("href", "#tracker");
                    torrentTrackerLink.setAttribute("style", "margin: 0 3px 0 0;");
                    torrentTrackerLink.setAttribute("target", "_blank");
                    torrentTrackerLinkI.setAttribute("class", "fa fa-external-link text-muted");
                    torrentTrackerLink.appendChild(torrentTrackerLinkI);

// SIZE ************
                    var torrentSize = document.createElement('span');
                    var torrentSizeI = document.createElement('i');
                    var torrentSizeText = document.createElement('span');

                    if (torrentXml[i].getAttribute("size") <= 1024) {
                        torrentSize.setAttribute("class", "label label-warning");
                    }
                    else if (torrentXml[i].getAttribute("size") <= 3500) {
                        torrentSize.setAttribute("class", "label label-info");
                    }
                    else if (torrentXml[i].getAttribute("size") <= 100000) {
                        torrentSize.setAttribute("class", "label label-success");
                    }
                    else {
                        torrentSize.setAttribute("class", "label label-default");
                    }

                    torrentSize.setAttribute("style", "margin: 0 1px;");
                    torrentSizeI.setAttribute("class", "fa fa-hdd-o");
                    torrentSizeText.textContent = " " + (torrentXml[i].getAttribute("size")/1024).toFixed(2) + " GB";
                    torrentSize.appendChild(torrentSizeI);
                    torrentSize.appendChild(torrentSizeText);

// QUALITY *********
                    var torrentQuality = document.createElement('span');
                    var torrentQualityI = document.createElement('i');
                    var torrentQualityText = document.createElement('span');

                    if (torrentXml[i].getAttribute("quality") != 0) {

                        if (torrentXml[i].getAttribute("quality") == 1) {
                            torrentQuality.setAttribute("class", "label label-danger");
                        }
                        else if (torrentXml[i].getAttribute("quality") == 2) {
                            torrentQuality.setAttribute("class", "label label-info");
                        }
                        else if (torrentXml[i].getAttribute("quality") == 3) {
                            torrentQuality.setAttribute("class", "label label-success");
                        }
                        else if (torrentXml[i].getAttribute("quality") == 4) {
                            torrentQuality.setAttribute("class", "label label-warning");
                        }

                        torrentQuality.setAttribute("style", "margin: 0 1px;");
                        torrentQualityI.setAttribute("class", "fa fa-picture-o");
                        torrentQualityText.textContent = " " + storageGet("torrentQuality" + torrentXml[i].getAttribute("quality"));
                        torrentQuality.appendChild(torrentQualityI);
                        torrentQuality.appendChild(torrentQualityText);

                    }

// TRANSLATE *******
                    var torrentTranslate  = document.createElement('span');
                    var torrentTranslateI = document.createElement('i');
                    var torrentTranslateText = document.createElement('span');

                    var translate = torrentXml[i].getAttribute("translate");
                    translate = translate.split("");
                    translate.sort();
                    var length = translate.length;
                    while (length--) {
                        if (translate[length] == translate[length-1]) {
                            translate.splice(length, 1);
                            if (translateId != 0 && translateId == translate[length]) {
                                filterTranslate = true;
                            }
                        }
                    }

                    if (translate.length >= 2) {
                        var text = "";
                        for (var tt = 0; tt < translate.length; tt++) {
                            if (text == "") {
                                text = " " + storageGet("torrentTranslate" + translate[tt]);
                            }
                            else {
                                text = text + " + " + storageGet("torrentTranslate" + translate[tt]);
                            }
                        }
                        torrentTranslate.setAttribute("class", "label label-default");
                        torrentTranslate.setAttribute("style", "margin: 0 1px;");
                        torrentTranslateI.setAttribute("class", "fa fa-volume-up");
                        torrentTranslateText.textContent = text;
                        torrentTranslate.appendChild(torrentTranslateI);
                        torrentTranslate.appendChild(torrentTranslateText);
                    }
                    else if (translate[0] != 0) {
                        for (var ttt = 0; ttt < translate.length; ttt++) {
                            if (translate[ttt] == 1) {
                                if (torrentXml[i].getAttribute("quality") == 1) {
                                    torrentTranslate.setAttribute("class", "label label-default");
                                }
                                else {
                                    torrentTranslate.setAttribute("class", "label label-success");
                                }
                            }
                            else if (translate[ttt] == 2) {
                                torrentTranslate.setAttribute("class", "label label-info");
                            }
                            else if (translate[ttt] == 3) {
                                torrentTranslate.setAttribute("class", "label label-warning");
                            }
                            else if (translate[ttt] == 4) {
                                torrentTranslate.setAttribute("class", "label label-warning");
                            }
                            else if (translate[ttt] == 5) {
                                torrentTranslate.setAttribute("class", "label label-default");
                            }
                            else if (translate[ttt] == 6) {
                                torrentTranslate.setAttribute("class", "label label-danger");
                            }
                            torrentTranslate.setAttribute("style", "margin: 0 1px;");
                            torrentTranslateI.setAttribute("class", "fa fa-volume-up");
                            torrentTranslateText.textContent = " " + storageGet("torrentTranslate" + translate[ttt]);
                            torrentTranslate.appendChild(torrentTranslateI);
                            torrentTranslate.appendChild(torrentTranslateText);
                        }
                    }

// TYPE ************
                    var torrentType = document.createElement('span');
                    var torrentTypeI = document.createElement('i');
                    var torrentTypeText = document.createElement('span');

                    if (torrentXml[i].getAttribute("type") != 0) {

                        torrentType.setAttribute("class", "label label-default");
                        torrentType.setAttribute("style", "margin: 0 0 0 1px;");
                        torrentTypeI.setAttribute("class", "fa fa-tags");
                        torrentTypeText.textContent = " " + storageGet("torrentType" + torrentXml[i].getAttribute("type"));
                        torrentType.appendChild(torrentTypeI);
                        torrentType.appendChild(torrentTypeText);

                    }

// LIST ************
                    var filterOffList = document.createElement('li');
                    var filterOffDiv1 = document.createElement('div');
                    var filterOffDiv2 = document.createElement('div');
                    var filterOffSpan1 = document.createElement('span');

                    var filterOnList = document.createElement('li');
                    var filterOnDiv1 = document.createElement('div');
                    var filterOnDiv2 = document.createElement('div');
                    var filterOnSpan1 = document.createElement('span');

                    if ((qualityId != 0 && qualityId != 5 && qualityId == torrentXml[i].getAttribute("quality")) || (typeId != 0 && typeId == torrentXml[i].getAttribute("type")) || filterTranslate == true) {
                        if (zebraOn%2) {colorOn = "#F3F3F3";} else {colorOn = "#ffffff";} zebraOn++;

                        filterOnList.setAttribute("class", "list-group-item text-left");
                        filterOnList.setAttribute("style", "background:" + colorOn + "; margin: 0; padding: 5px 2px;");
                        filterOnDiv1.setAttribute("style", "font-size: 10px; color: #959595;");
                        filterOnSpan1.setAttribute("title", torrentXml[i].getAttribute("title"));
                        filterOnSpan1.textContent = torrentTitle;
                        filterOnDiv2.setAttribute("style", "float: right; font-size: 10px;");

                        filterOnDiv2.appendChild(torrentDownload);
                        filterOnDiv2.appendChild(torrentMagnet);
                        filterOnDiv2.appendChild(torrentOnline);
                        filterOnDiv1.appendChild(torrentTrackerLink);
                        filterOnDiv1.appendChild(filterOnSpan1);
                        filterOnDiv1.appendChild(filterOnDiv2);
                        filterOnList.appendChild(filterOnDiv1);
                        filterOnList.appendChild(torrentUp);
                        filterOnList.appendChild(torrentDown);
                        filterOnList.appendChild(torrentSize);
                        filterOnList.appendChild(torrentQuality);
                        filterOnList.appendChild(torrentTranslate);
                        filterOnList.appendChild(torrentType);

                        document.getElementById("contentFilterOn").appendChild(filterOnList);
                    }
                    else {
                        if (zebraOff%2) {colorOff = "#F3F3F3";} else {colorOff = "#ffffff";} zebraOff++;

                        filterOffList.setAttribute("class", "list-group-item text-left");
                        filterOffList.setAttribute("style", "background:" + colorOff + "; margin: 0; padding: 5px 2px;");
                        filterOffDiv1.setAttribute("style", "font-size: 10px; color: #959595;");
                        filterOffSpan1.setAttribute("title", torrentXml[i].getAttribute("title"));
                        filterOffSpan1.textContent = torrentTitle;
                        filterOffDiv2.setAttribute("style", "float: right; font-size: 10px;");

                        filterOffDiv2.appendChild(torrentDownload);
                        filterOffDiv2.appendChild(torrentMagnet);
                        filterOffDiv2.appendChild(torrentOnline);
                        filterOffDiv1.appendChild(torrentTrackerLink);
                        filterOffDiv1.appendChild(filterOffSpan1);
                        filterOffDiv1.appendChild(filterOffDiv2);
                        filterOffList.appendChild(filterOffDiv1);
                        filterOffList.appendChild(torrentUp);
                        filterOffList.appendChild(torrentDown);
                        filterOffList.appendChild(torrentSize);
                        filterOffList.appendChild(torrentQuality);
                        filterOffList.appendChild(torrentTranslate);
                        filterOffList.appendChild(torrentType);

                        document.getElementById("contentFilterOff").appendChild(filterOffList);
                    }

                }

            }

            document.getElementById('information').classList.add('hide');
            document.getElementById('menuNav').classList.remove('hide');
            // Empty ALL
            document.getElementById('menuFilterOn').classList.remove('btn-danger');
            document.getElementById('menuFilterOff').classList.remove('btn-danger');
            document.getElementById('menuOnline').classList.remove('btn-danger');
            document.getElementById('menuFilterOn').classList.remove('disabled');
            document.getElementById('menuFilterOff').classList.remove('disabled');
            document.getElementById('menuOnline').classList.remove('disabled');
            document.getElementById('menuFilterOn').classList.add('btn-success');
            document.getElementById('menuFilterOff').classList.add('btn-success');
            document.getElementById('menuOnline').classList.add('btn-success');
            document.getElementById("contentFilterOn").classList.add('hide');
            document.getElementById("contentFilterOff").classList.add('hide');
            document.getElementById("contentOnline").classList.add('hide');

// *********
            var contentFilterOnDiv1 = document.createElement('div');
            var contentFilterOnDiv2 = document.createElement('div');

            contentFilterOnDiv1.setAttribute("class", "panel panel-success");
            contentFilterOnDiv1.setAttribute("style", "margin: 20px;");
            contentFilterOnDiv2.setAttribute("class", "panel-body text-center");
            contentFilterOnDiv2.textContent = storageGet("alertNotData");

            contentFilterOnDiv1.appendChild(contentFilterOnDiv2);
// *********
            var contentFilterOffDiv1 = document.createElement('div');
            var contentFilterOffDiv2 = document.createElement('div');

            contentFilterOffDiv1.setAttribute("class", "panel panel-success");
            contentFilterOffDiv1.setAttribute("style", "margin: 20px;");
            contentFilterOffDiv2.setAttribute("class", "panel-body text-center");
            contentFilterOffDiv2.textContent = storageGet("alertNotData");

            contentFilterOffDiv1.appendChild(contentFilterOffDiv2);
// *********

            if (document.getElementById("contentFilterOff").textContent != "") {
                if (document.getElementById("contentFilterOn").textContent != "") {
                    document.getElementById('menuFilterOff').classList.remove('disabled');
                    document.getElementById('menuFilterOn').classList.add('disabled');
                    document.getElementById('contentFilterOn').classList.remove('hide');
                }
                else {
                    document.getElementById('menuFilterOn').classList.remove('disabled');
                    document.getElementById('menuFilterOn').classList.remove('btn-success');
                    document.getElementById('menuFilterOn').classList.add('btn-danger');
                    document.getElementById('menuFilterOff').classList.add('disabled');
                    document.getElementById('contentFilterOff').classList.remove('hide');
                    document.getElementById("contentFilterOn").appendChild(contentFilterOnDiv1);
                }
            }
            else {
                document.getElementById('menuFilterOn').classList.remove('disabled');
                document.getElementById('menuFilterOn').classList.remove('btn-success');
                document.getElementById('menuFilterOn').classList.add('btn-danger');
                document.getElementById('menuFilterOff').classList.remove('disabled');
                document.getElementById('menuFilterOff').classList.remove('btn-success');
                document.getElementById('menuFilterOff').classList.add('btn-danger');
                document.getElementById('menuOnline').classList.add('disabled');
                document.getElementById('contentOnline').classList.remove('hide');
                document.getElementById("contentFilterOff").appendChild(contentFilterOffDiv1);
                document.getElementById("contentFilterOn").appendChild(contentFilterOnDiv1);
            }

            loadRating();
            online(tabs);
            version();

        }

    };
    torrent.send("format=xml&title=" + encodeURIComponent(tabs[0].title) + "&url=" + encodeURIComponent(tabs[0].url));

}

// Voting rating
function loadRating() {

    var up = document.getElementsByClassName("up"),
        down = document.getElementsByClassName("down");

    for (var i_up=0;i_up<up.length;i_up++) {

        up[i_up].addEventListener('click', function() {

            var id = this.getAttribute("alt");
            rating("up", id);

        }, false);

    }

    for (var i_down=0;i_down<down.length;i_down++) {

        down[i_down].addEventListener('click', function() {

            var id = this.getAttribute("alt");
            rating("down", id);

        }, false);

    }

}

// Send rating
function rating(type, id) {

    var up = (type == "up") ? 1 : 0;
    var down = (type == "down") ? 1 : 0;

    var upIcon = (type == "up") ? 'fa-spinner fa-spin' : 'fa-thumbs-up fa-flip-horizontal';
    var downIcon = (type == "down") ? 'fa-spinner fa-spin' : 'fa-thumbs-down';

    var newUp = up + parseInt(document.getElementById("thumbs-up" + id).textContent);
    var oldUp = document.getElementsByClassName("up" + id);

    var torrentUpSpan = document.createElement('span');
    var torrentUpI = document.createElement('i');
    var torrentUpText = document.createElement('span');

    torrentUpSpan.setAttribute("class", "label label-default");
    torrentUpSpan.setAttribute("style", "margin: 0 1px 0 0;");
    torrentUpI.setAttribute("class", upIcon + " fa text-muted");
    torrentUpText.setAttribute("class", "text-muted");
    torrentUpText.textContent = " " + newUp;
    torrentUpSpan.appendChild(torrentUpI);
    torrentUpSpan.appendChild(torrentUpText);

    for(var span_up = 0; span_up < oldUp.length; span_up++){
        oldUp[span_up].parentNode.insertBefore(torrentUpSpan, oldUp[span_up]);
        oldUp[span_up].parentNode.removeChild(oldUp[span_up]);
    }

    var newDown = down+parseInt(document.getElementById("thumbs-down"+id).textContent);
    var oldDown = document.getElementsByClassName("down"+id);

    var torrentDownSpan = document.createElement('span');
    var torrentDownI = document.createElement('i');
    var torrentDownText = document.createElement('span');

    torrentDownSpan.setAttribute("class", "label label-default");
    torrentDownSpan.setAttribute("style", "margin: 0 1px;");
    torrentDownI.setAttribute("class", downIcon + " fa text-muted");
    torrentDownText.setAttribute("class", "text-muted");
    torrentDownText.textContent = newDown + " ";
    torrentDownSpan.appendChild(torrentDownText);
    torrentDownSpan.appendChild(torrentDownI);

    for(var span_down = 0; span_down < oldDown.length; span_down++){
        oldDown[span_down].parentNode.insertBefore(torrentDownSpan, oldDown[span_down]);
        oldDown[span_down].parentNode.removeChild(oldDown[span_down]);
    }

    var rating = new XMLHttpRequest();
    rating.open("POST", "http://api.qimdb.com/torrent/rating", true);
    rating.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    rating.onreadystatechange = function() {

        if (rating.readyState == 4) {

            torrentUpI.setAttribute("class", "fa fa-thumbs-up fa-flip-horizontal text-muted");

            for(var span_up = 0; span_up < oldUp.length; span_up++){
                oldUp[span_up].parentNode.insertBefore(torrentUpSpan, oldUp[span_up]);
                oldUp[span_up].parentNode.removeChild(oldUp[span_up]);
            }

            torrentDownI.setAttribute("class", "fa fa-thumbs-down text-muted");

            for(var span_down = 0; span_down < oldDown.length; span_down++){
                oldDown[span_down].parentNode.insertBefore(torrentDownSpan, oldDown[span_down]);
                oldDown[span_down].parentNode.removeChild(oldDown[span_down]);
            }

        }

    };
    rating.send("idi=" + id + "&typ=" + type);

}

// New version alert
function version() {

    var version = new XMLHttpRequest();
    version.open("POST", "http://filmego.org/version", true);
    version.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    version.onreadystatechange = function() {

        if (version.readyState == 4) {

            if ('' + version.responseText != '2.0.15.4') {

                document.getElementById('ver').classList.remove('hide');

                while(document.getElementById("ver").firstChild){
                    document.getElementById("ver").removeChild(document.getElementById("ver").firstChild);
                }

                var ver = document.createElement('span');
                var verText = document.createElement('span');
                var verSpan = document.createElement('span');
                var verA = document.createElement('a');

                verText.setAttribute("style", "margin: 10px 0 10px 0;");
                verSpan.textContent = storageGet("yeahNewVersion") + " " + version.responseText + " » ";
                verA.setAttribute("onclick", "safari.application.activeBrowserWindow.openTab().url = 'http://filmego.org/update'");
                verA.setAttribute("href", "#update");
                verA.setAttribute("target", "_blank");
                verA.setAttribute("style", "color: #d2d2d2;");
                verA.textContent = storageGet("updateNewVersion");

                verText.appendChild(verSpan);
                verText.appendChild(verA);
                ver.appendChild(verText);
                document.getElementById("ver").appendChild(ver);

            }

        }

    };
    version.send();

}

// Load main information
function information() {

    var information = new XMLHttpRequest();
    information.open("POST", "http://filmego.org/information", true);
    information.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    information.onreadystatechange = function() {

        if (information.readyState == 4) {

            var info = information.responseXML.querySelectorAll('information');

            while(document.getElementById("information").firstChild){
                document.getElementById("information").removeChild(document.getElementById("information").firstChild);
            }

            document.getElementById('information').classList.remove('hide');

            var informationDiv1 = document.createElement('div');
            var informationDiv2 = document.createElement('div');
            var informationDiv3 = document.createElement('div');
            var informationImg = document.createElement('img');

            informationDiv1.setAttribute("class", "panel panel-success");
            informationDiv1.setAttribute("style", "margin: 20px;");
            informationDiv2.setAttribute("class", "panel-body text-justify");
            informationDiv2.textContent = info[0].getAttribute("text");
            informationDiv3.setAttribute("class", "text-center");
            informationImg.setAttribute("src", "img/gif2.gif");
            informationImg.setAttribute("style", "width: 235px; margin-bottom: 20px;");
            informationImg.setAttribute("class", "img-thumbnail");

            informationDiv1.appendChild(informationDiv2);
            informationDiv3.appendChild(informationImg);
            informationDiv1.appendChild(informationDiv3);

            document.getElementById("information").appendChild(informationDiv1);
        }

    };
    information.send();

}

// Receiving data (_locales)
function storageGet(name) {

    var getTranslate = {
        "name": {
            "message": "Смотри и скачай своё кино! [FE]",
            "description": "Название"
        },
        "description": {
            "message": "Надоело искать фильмы на торрентах, ВК, онлайн-кинотеатрах? Смотрите и скачивайте сразу на любом киносайте (КиноПоиск и др.)",
            "description": "Описание"
        },

        "menuTranslate": {
            "message": "Качество озвучивания",
            "description": "Меню (озвучивание)"
        },
        "idealTranslate": {
            "message": "Идеальное (дубляж)",
            "description": "Тип озвучивания"
        },
        "profTranslate": {
            "message": "Профессиональное (одноголосое / двухголосое)",
            "description": "Тип озвучивания"
        },
        "authorTranslate": {
            "message": "Авторское (Гоблин / Гаврилов / Сербин и др.)",
            "description": "Тип озвучивания"
        },
        "amateurTranslate": {
            "message": "Любительское (одноголосое / двухголосое)",
            "description": "Тип озвучивания"
        },
        "subTranslate": {
            "message": "Субтитры",
            "description": "Тип озвучивания"
        },
        "allTranslate": {
            "message": "Любое",
            "description": "Тип озвучивания"
        },
        "torrentTranslate1": {
            "message": "идеальное",
            "description": "Тип озвучивания для бейджа"
        },
        "torrentTranslate2": {
            "message": "профессиональное",
            "description": "Тип озвучивания для бейджа"
        },
        "torrentTranslate3": {
            "message": "авторское",
            "description": "Тип озвучивания для бейджа"
        },
        "torrentTranslate4": {
            "message": "любительское",
            "description": "Тип озвучивания для бейджа"
        },
        "torrentTranslate5": {
            "message": "субтитры",
            "description": "Тип озвучивания для бейджа"
        },
        "torrentTranslate6": {
            "message": "с кинотеатра",
            "description": "Тип озвучивания для бейджа"
        },

        "menuQuality": {
            "message": "Качество видео",
            "description": "Меню (качество)"
        },
        "idealQuality": {
            "message": "Идеальное (DVD5, DVD9, Blue-Ray)",
            "description": "Тип качества"
        },
        "goodQuality": {
            "message": "Хорошее (DVDRip, BDRip)",
            "description": "Тип качества"
        },
        "badQuality": {
            "message": "Плохое (CAMRip, TS)",
            "description": "Тип качества"
        },
        "kpkQuality": {
            "message": "Для планшета (меньше 700 Мб)",
            "description": "Тип качества"
        },
        "allQuality": {
            "message": "Любое",
            "description": "Тип качества "
        },
        "torrentQuality1": {
            "message": "плохое",
            "description": "Тип качества для бейджа"
        },
        "torrentQuality2": {
            "message": "хорошее",
            "description": "Тип качества для бейджа"
        },
        "torrentQuality3": {
            "message": "идеальное",
            "description": "Тип качества для бейджа"
        },
        "torrentQuality4": {
            "message": "для планшета",
            "description": "Тип качества для бейджа"
        },

        "menuType": {
            "message": "Версия видео",
            "description": "Меню (версия)"
        },
        "extendedType": {
            "message": "Расширенная (дополнительные сцены)",
            "description": "Тип версии"
        },
        "theatricalType": {
            "message": "Театральная (адаптирована для театра)",
            "description": "Тип версии"
        },
        "directedType": {
            "message": "Режиссерская (как хотел режиссер)",
            "description": "Тип версии"
        },
        "alternativeType": {
            "message": "Альтернативная (другая концовка фильма)",
            "description": "Тип версии"
        },
        "allType": {
            "message": "Любая",
            "description": "Тип версии"
        },
        "torrentType1": {
            "message": "расширенная",
            "description": "Тип версии для бейджа"
        },
        "torrentType2": {
            "message": "театральная",
            "description": "Тип версии для бейджа"
        },
        "torrentType3": {
            "message": "режиссерская",
            "description": "Тип версии для бейджа"
        },
        "torrentType4": {
            "message": "альтернативная",
            "description": "Тип версии для бейджа"
        },
        "torrentType5": {
            "message": "трейлер",
            "description": "Тип версии для бейджа"
        },

        "menuAbout": {
            "message": "Нашли ошибку?",
            "description": "Меню (ошибка)"
        },

        "menuHelp": {
            "message": "Краткая помощь новичку",
            "description": "Меню (помощь)"
        },
        "onlineHelp": {
            "message": "просмотр торрентов онлайн (через ACE Stream)",
            "description": "Меню (онлайн)"
        },
        "downloadHelp": {
            "message": "скачивание торрента (работает НЕ всегда)",
            "description": "Меню (скачать торрент)"
        },
        "magnetHelp": {
            "message": "скачивание по magnet-ссылке (работает всегда)",
            "description": "Меню (скачать magnet)"
        },
        "updownHelp": {
            "message": "голосование за раздачи",
            "description": "Меню (голосование)"
        },
        "linkHelp": {
            "message": "переход на трекер раздачи",
            "description": "Меню (трекер)"
        },

        "menuFilterOn": {
            "message": "Под Ваш фильтр",
            "description": "Меню (фильтр включен)"
        },
        "menuFilterOff": {
            "message": "Все ссылки",
            "description": "Меню (фильтр выключен)"
        },
        "menuOnline": {
            "message": "Онлайн",
            "description": "Меню (онлайн)"
        },

        "alertNotData": {
            "message": "Нет данных!",
            "description": "Сообщение (нет данных)"
        },
        "alertSave": {
            "message": "Изменения сохранены! Закройте и снова откройте приложение!",
            "description": "Сообщение (сохранения фильтра)"
        },
        "alertSaveMenu": {
            "message": "сохранено",
            "description": "Сообщение в меню (сохранения фильтра)"
        },
        "menuSearch": {
            "message": "искать",
            "description": "Меню (поиск)"
        },
        "menuSearchPlaceholder": {
            "message": "название фильма ...",
            "description": "Меню (подсказка в поиске)"
        },
        "download": {
            "message": "скачать",
            "description": "В списке ссылок"
        },
        "online": {
            "message": "смотреть",
            "description": "В списке ссылок"
        },

        "yeahNewVersion": {
            "message": "Обновитесь до версии",
            "description": "Оповещение"
        },
        "updateNewVersion": {
            "message": "как?",
            "description": "Оповещение"
        }
    };

    return getTranslate[name].message;

}