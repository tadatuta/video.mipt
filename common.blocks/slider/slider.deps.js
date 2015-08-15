({
	shouldDeps: [
		{
			elems: [
				'content',
				'title',
				'item'
			]
		},
		{
			block: 'title',
			mods: { level: '1' }
		},
		{
			block: 'text',
			tech: 'bemhtml'
		}
	],
	mustDeps: [
		{
			block: 'jquery',
			tech: 'js'
		}
	]

})
