Router.configure({
	layoutTemplate:'layout'
});
Router.map(function(){
  this.route('home', {path: '/'});
  this.route('admin', {path: '/admin'});

  Router.route('/:_id', 
  		function () {
		  //this.wait(Meteor.subscribe('fs', this.params._id));

		  if (this.ready()) {
		    this.render('fakulta', {
			    data: function () {
			      return { router_nadpis: this.params._id };
			    }
  			})
		  } else {
		    this.render('Loading');
		  }
		}
	);
});