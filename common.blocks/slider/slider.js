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

				for (var i = 0; i < items.length; i++) {
					items[i].style.backgroundImage = "url(" + this.elemParams($(items[i])).url + ")";
				}

				this.bindTo('control', 'click', function(e) {
					var newIndex = $(e.target).index();
					this._newActiveItem(newIndex);
				})

				this.bindTo('mouseenter', this.pause)
				    .bindTo('mouseleave', this.cycle);

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

	cycle: function(e) {
		this.interval = setInterval($.proxy(this.next, this), 4000);

		return this;
	},

	pause: function(e) {
		clearInterval(this.interval);
		this.interval = null;
		return this;
	},

	next: function() {
		var nextIndex = this.activeIndex;


		if (nextIndex < this.length - 1) {
			nextIndex += 1;
		} else {
			nextIndex= 0;
		}

		this._newActiveItem(nextIndex);
	},

	_newActiveItem: function(index) {
		var items = this.elem('item'),
			active = this.elem('item', 'active', true);

		this.delMod(active, 'active')
			.setMod($(items[index]), 'active');
	}

}));

});
