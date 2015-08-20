modules.define('slider', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name,
{
	onSetMod: {
		'js': {
			'inited': function() {
				var items = this.elem('item');
				var controls = this.elem('control');

				this.length = this.elem('item').length;

				this.setMod($(this.elem('item')[0]), 'active');

				var i;
				for (i = 0; i < items.length; i++) {
					items[i].style.backgroundImage = "url(" + this.elemParams($(items[i])).url + ")";
				}
				var controlsWeight = 0,
				    controlsHeight = 0;
				for (i = 0; i < controls.length; i++) {
					console.log(controls[i].style.width);
				}

				this.bindTo(this.elem('control'), 'click', function(e) {
					var newIndex = $(e.target).index();
					this.newActiveItem(newIndex);
				})

			},
		}
	},

	onElemSetMod: {
		'item': {
			'active': {
				'true': function(elem) {
					this.activeIndex = elem.index();
					this.setMod($(this.elem('control')[this.activeIndex]), 'active');
				},

				'': function(elem) {
					this.delMod($(this.elem('control')[this.activeIndex]), 'active');
				}
			}

		}
	},

	next: function() {
		var nextIndex = this.activeIndex;


		if (nextIndex < this.length - 1) {
			nextIndex += 1;
		} else {
			nextIndex= 0;
		}

		this.newActiveItem(nextIndex);
	},

	newActiveItem: function(index) {
		var items = this.elem('item'),
			active = this.elem('item', 'active', true);

		this.delMod(active, 'active')
			.setMod($(items[index]), 'active');
	}

}));

});
