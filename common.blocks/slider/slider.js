modules.define('slider', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name,
{
	onSetMod: {
		'js': {
			'inited': function() {
				this._active = this.findElem('item', 'active', true);

				this.fineElem('item').css('background-image', this.params.url);
			}
		}
	},
	next: function() {
		return;
	}
}));

});
