Meteor.publish('items', function() {
  return Items.find();
});

Meteor.publish('uploads', function() {
  return Uploads.find();
})

Meteor.publish('fakulty', function() {
  return Fakulty.find();
})