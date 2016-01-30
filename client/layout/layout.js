Template.layout.events({
  'click #open_sidebar': function(event) {
  	$('#menu').sidebar('toggle');
  }
});
Template.sidebar.events({
  'click #open_add_modal': function(event, template) {
  $('.ui.basic.modal').modal('show');
  }
});

Template.inputUpload.events({
  'change #uploadFileInput': function(event, template) {
    var files = event.target.files;
    for (var i = 0, ln = files.length; i < ln; i++) {
      Files.insert(files[i], function (err, fileObj) {
      	console.log(err);
      });
    }
  }
})