//https://github.com/tomitrescak/meteor-uploads
Meteor.startup(function() {
  //Uploader.uploadUrl = Meteor.absoluteUrl("upload"); // Cordova needs absolute URL
  Uploader.finished = function(index, fileInfo, templateContext) {
    Uploads.insert(fileInfo);
  }
});
Uploader.localisation = {
    browse: "Prehľadať",
    cancelled: "Zrušené",
    remove: "Odstráň",
    upload: "Nahraj",
    done: "Vybavené",
    cancel: "Zruš"
}
Uploader.logLevel = Uploader.logLevels.debug
