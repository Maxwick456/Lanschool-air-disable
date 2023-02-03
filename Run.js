chrome.management.getAll(function(extensions) {
  for (var i=0; i < extensions.length; i++) {
    if (extensions[i].name == "LanSchool Air Extension for Chromebooks") {
      chrome.management.setEnabled(extensions[i].id, false);
      break;
    }
  }
});
