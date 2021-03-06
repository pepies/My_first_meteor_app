Template.inputUpload.helpers({
  myFormData: function() {
    return { directoryName: 'images', prefix: this._id, _id: this._id }
  },
  filesToUpload: function() {
    return Uploader.info.get();
  }
});

Template.uploadedInfo.helpers({
  src: function() {
    if (this.type.indexOf('image') >= 0) {
      return 'upload/' + this.path;
    } else return 'img/file_icon.png';
  }
});

Template.uploadedInfo.events({
  'click #open_add_modal': function(event, template) {
  $('.ui.basic.modal').modal('show');
  }
});