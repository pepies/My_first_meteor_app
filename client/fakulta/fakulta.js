Template.fileView.helpers({
   myCallbacks: function() {
    return {
        formData: function() { return { id: "232323", other: Session.get("ReactiveParam") } },
        finished: function(index, fileInfo, context) { }
    }
  }
});
