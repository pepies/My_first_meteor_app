Router.configure({
	layoutTemplate:'layout'
});
Router.map(function(){
  this.route('home', {path: '/'});
  this.route('admin', {path: '/admin'});
  this.route('/:_id', function () {
		  this.wait(Meteor.subscribe('items'));
		  this.wait(Meteor.subscribe('uploads'));

		  if (this.ready()) {
		    this.render('fakulta', {
			data : function(){
				 return { router_nadpis: this.params._id };
				}
  			})
		  } else {
		    this.render('Loading');
		  }
		}
	);
});