modules.define('video-item', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name,
{
	onSetMod: {
		'js': {
			'inited': function() {
				var url = 'url('+this.elemParams('preview').imgUrl+')';
				$(this.elem('preview')).css('background-image', url);
			}
		},
	}

}));

});
