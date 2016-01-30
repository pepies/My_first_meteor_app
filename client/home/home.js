Template.home.helpers({
	get_fakulta: function(){
	  return Fakulty.find({}, {
	    /*
	    sort: Sort specifier,
	    skip: Number,
	    limit: Number,
	    fields: Field specifier,
	    reactive: Boolean,
	    transform: Function
	    */
	  })
	}
})

Template.home.onRendered(function () {
	$('#search-select').dropdown({
	 onChange: function(value, text) {
	 	Router.go('/'+value);
	 }
	});
});