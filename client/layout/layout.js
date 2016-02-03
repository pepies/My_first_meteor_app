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

Template.inputUpload.helpers({
  specificFormData: function() {
    return {
      id: this._id,
      other: this.other,
      hard: 'Lolcats'
    }
  }
});