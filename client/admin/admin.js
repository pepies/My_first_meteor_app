Template.newfakulta.events({
  'submit .new_fakulta': function (event) {
    console.log(event);
    event.preventDefault();

    Fakulty.insert({
      univerzita: event.target.univerzita.value,
      fakulta: event.target.fakulta.value,
      id: event.target.id.value,
      mesto: event.target.mesto.value,
      createdAt: new Date()
    });

    event.target.univerzita.value = ""
    event.target.fakulta.value = ""
    event.target.id.value = ""
    event.target.mesto.value = ""
  }
})