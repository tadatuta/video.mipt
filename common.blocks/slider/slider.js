modules.define('slider', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name,
{
	onSetMod: {
		'js': {
			'inited': function() {
				this.activeIndex = this.findElem('item', 'active', true).index();
				this.bindTo('click', this.next);

				var items = this.findElem('item');
				for (var i = 0; i < items.length; i++) {
					items[i].style.backgroundImage = "url(" + this.elemParams($(items[i])).url + ")";
				}
			},
		},

		'active':  {
			true: function() {
				console.log('lol');
				//$(this.findElem('content')).animate({'opacity': '1'});
			}
		}
	},

	next: function() {
		var items = this.elem('item'),
			active = this.elem('item', 'active', true);

		if (this.activeIndex < items.length - 1) {
			this.activeIndex += 1;
		} else {
			this.activeIndex = 0;
		}

		this.delMod(active, 'active')
			.setMod($(items[this.activeIndex]), 'active');

		return;
	}
}));

});
