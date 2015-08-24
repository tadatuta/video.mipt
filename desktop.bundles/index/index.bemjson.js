({
    block: 'page',
    title: 'МФТИ ВИДЕО',
    styles: [
        { elem: 'css', url: '_index.css' },
    ],
    scripts: [
		{ elem: 'js', url: '_index.js'}
    ],
	favicon: '/img/logo-square.png',
    content: [
		{
			elem: 'wrapper',
			mods: { margin: 'none', color: 'white'},
			content: [
				{
					block: 'header',
					tag: 'header',
					content: [
						{
							block: 'logo',
							mods: { col: '3' },
							content: { block: 'image', url: '/img/logo.png', alt: 'МФТИ ВИДЕО' }
						},
						{ block: 'search', mods: { col: '6' }, tag: 'input', js: true },
						{ block: 'account', name: 'Вадим', surname: 'Костин', mods: { col: 3 }}
					]
				}
			]
		},
		{
			elem: 'wrapper',
			row: false,
			mods: { margin: 'none', color: 'blue'},
			content: [
				{
					block: 'menu',
					tag: 'menu',
					mods: { theme: 'main' },
					content: [
						{ name: 'Главная' },
						{ name: 'Библиотека' },
						{ name: 'Коллекции' },
						{ name: 'Подкасты' },
						{ name: 'Загрузить свое видео на портал', mods: {cloud: true} }
					]
				}
			]
		},
		{
			elem: 'wrapper',
			content: [
				{
					block: 'slider',
					mods: { col: '9' },
					content: [
						{
							elem: 'item',
							title: 'Внимание конкурс!',
							text: 'Сегментация рынка традиционно начинает охват аудитории. Геодезическая линия имеет интеграл по бесконечной области. Стратегия сегментации непосредственно допускает бюджет на размещение.',
							url: '/img/photo1.jpg'
						},
						{
							elem: 'item',
							title: 'Второй слайд!',
							text: 'Sit debitis illum eos voluptatum modi? Recusandae iure officia soluta ad ratione. Pariatur culpa doloribus quo odit esse. Placeat exercitationem tempora illum dolorum doloribus. Adipisci earum eum reprehenderit facilis ex',
							url: 'http://mipt.ru/upload/medialibrary/63a/moscow_workshop.jpg'

						},
						{
							elem: 'item',
							title: 'Третий слайд!',
							text: 'Sit debitis illum eos voluptatum modi? Recusandae iure officia soluta ad ratione. Pariatur culpa doloribus quo odit esse. Placeat exercitationem tempora illum dolorum doloribus. Adipisci earum eum reprehenderit facilis ex',
							url: 'http://cdn3.img22.ria.ru/images/92905/70/929057089.jpg'

						}
					]

				},
				{
					block: 'banner',
					mods: { col: '3' },
					title: 'Баннер',
					text: 'Сегментация рынка традиционно начинает охват аудитории. Геодезическая линия имеет интеграл по бесконечной области. Стратегия сегментации непосредственно допускает бюджет на размещение.'

				}
			]
		},
		{
			elem: 'wrapper',
			content: [
				{
					block: 'video-box',
					title: 'Популярные видеоматериалы',
					icon: 'star',
					content: [
						{
							block: 'video-item',
							mods: { col: '3' },
							title: 'Овчинкнин, оптика, подготовка к ГОСу',
							date: '21 января 2015',
							imgUrl: '/img/video-item.jpg'
						},
						{
							block: 'video-item',
							mods: { col: '3' },
							title: 'Реклама жизни в МФТИ',
							date: '25 января 2015',
							imgUrl: '/img/video-item.jpg'
						},
						{
							block: 'video-item',
							mods: { col: '3' },
							title: 'Магнус Карлсен в МФТИ',
							date: '14 июля 2014',
							imgUrl: '/img/video-item.jpg'
						},
						{
							block: 'video-item',
							mods: { col: '3' },
							title: 'Овчинкнин, оптика, подготовка к ГОСу',
							date: '7 декабря 2014',
							imgUrl: '/img/video-item.jpg'
						},
						{
							block: 'video-item',
							mods: { col: '3' },
							title: 'Овчинкнин, оптика, подготовка к ГОСу',

							date: '21 января 2015',
							imgUrl: '/img/video-item.jpg'
						},
						{
							block: 'video-item',
							mods: { col: '3' },
							title: 'Реклама жизни в МФТИ',
							date: '25 января 2015',
							imgUrl: '/img/video-item.jpg'
						},
						{
							block: 'video-item',
							mods: { col: '3' },
							title: 'Магнус Карлсен в МФТИ',
							date: '14 июля 2014',
							imgUrl: '/img/video-item.jpg'
						},
						{
							block: 'video-item',
							mods: { col: '3' },
							title: 'Овчинкнин, оптика, подготовка к ГОСу',
							date: '7 декабря 2014',
							imgUrl: '/img/video-item.jpg'
						}
					]
				}
			]
		},
		{
			elem: 'wrapper',
			content: [
				{
					block: 'video-box',
					title: 'Последние материалы',
					icon: 'clock',
					content: [
						{
							block: 'video-item',
							mods: { col: '4' },
							title: 'Овчинкнин, оптика, подготовка к ГОСу',
							date: '21 января 2015',
							imgUrl: '/img/video-item.jpg'
						},
						{
							block: 'video-item',
							mods: { col: '4' },
							title: 'Реклама жизни в МФТИ',
							date: '25 января 2015',
							imgUrl: '/img/video-item.jpg'
						},
						{
							block: 'video-item',
							mods: { col: '4' },
							title: 'Магнус Карлсен в МФТИ',
							date: '14 июля 2014',
							imgUrl: '/img/video-item.jpg'
						}
					]
				}
			]
		},
		{
			elem: 'wrapper',
			mods: { color: 'white' },
			content: [
				{
					block: 'video-box',
					title: 'Последние материалы',
					mods: { col: 2 },
					content: [
						{
							block: 'video-item',
							mods: { horizontal: true },
							title: 'Овчинкнин, оптика, подготовка к ГОСу',
							date: '21 января 2015',
							imgUrl: '/img/video-item.jpg'
						},
						{
							block: 'video-item',
							mods: { horizontal: true },
							title: 'Реклама жизни в МФТИ',
							date: '25 января 2015',
							imgUrl: '/img/video-item.jpg'
						},
						{
							block: 'video-item',
							mods: { horizontal: true },
							title: 'Магнус Карлсен в МФТИ',
							date: '14 июля 2014',
							imgUrl: '/img/video-item.jpg'
						}
					]
				},
				{
					block: 'video-box',
					title: 'Подкасты',
					mods: { col: 2 },
					link: {
						url: '#',
						name: 'Все подкасты'
					},
					content: [
						{
							block: 'video-item',
							mods: { horizontal: true },
							title: 'Овчинкнин, оптика, подготовка к ГОСу',
							date: '21 января 2015',
							imgUrl: '/img/video-item.jpg'
						},
						{
							block: 'video-item',
							mods: { horizontal: true },
							title: 'Реклама жизни в МФТИ',
							date: '25 января 2015',
							imgUrl: '/img/video-item.jpg'
						},
						{
							block: 'video-item',
							mods: { horizontal: true },
							title: 'Магнус Карлсен в МФТИ',
							date: '14 июля 2014',
							imgUrl: '/img/video-item.jpg'
						}
					]
				}
			]
		},
		{
			elem: 'wrapper',
			mods: { color: 'blue', margin: 'none' },
			content: [
				{
					block: 'footer',
					content: [
						{
							elem: 'copyright',
							content: '© 2015 Московский физико-технический институт лаборатория инновационных образовательных технологий МФТИ'
						},
						{
							elem: 'menu'
						}
					]
				}
			]
		}
    ]
});
