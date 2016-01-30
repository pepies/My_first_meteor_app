Template.fileView.helpers({
  file: function () {
    return Files.find(); // Where Images is an FS.Collection instance
  }
});