// Fonction d'ajout de caractère
function addCar(info, tab) {
 for (var j = 0; j < menuItem[0].length; j++) {
    if (info.menuItemId == menuItem[0][j]) {
        chrome.tabs.sendRequest(tab.id, menuItem[1][j]);
    }
 }
}

// Création du menu

var menuItem = new Array(new Array(), new Array("—", "«", "»", "À", "É"));

var parent = chrome.contextMenus.create({"title": "Typonazi", "contexts":["editable"]});
for (var i = 0; i < menuItem[1].length; i++) {
  menuItem[0][i] = chrome.contextMenus.create({"title": menuItem[1][i], "contexts":["editable"], "parentId": parent, "onclick": addCar});
}