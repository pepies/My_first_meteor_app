Router.configure({
	layoutTemplate:'layout'
});
Router.map(function(){
	this.route('admin', {path: '/admin'});
	this.route('/', function () {
		this.wait(Meteor.subscribe('fakulty'));
		if (this.ready()) {
			this.render('home');
		} else {
			this.render('Loading');
		}
	});
	this.route('/:_id', function () {
		this.wait(Meteor.subscribe('items'));
		this.wait(Meteor.subscribe('uploads'));

		if (this.ready()) {
			this.render('fakulta', {
				data : function(){
					return { router_nadpis: this.params._id,
						item: Items.findOne(),
						uploads: Uploads.find()
					}
				}
			})
		} else {
			this.render('Loading');
		}
	}
	);
});