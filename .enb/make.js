var enbBemTechs = require('enb-bem-techs'),
    borschikTech = require('enb-borschik/techs/borschik'),
    isProd = process.env.YENV === 'production';

module.exports = function (config) {
    config.nodes('*.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [require('enb/techs/file-provider'), { target: '?.bemjson.js' }],
            [enbBemTechs.files],
            [enbBemTechs.deps],
            [enbBemTechs.bemjsonToBemdecl],
            // bemtree
            [require('enb-bemxjst/techs/bemtree-old'), { devMode: process.env.BEMTREE_ENV === 'development' }],
            // css
            [require('enb-stylus/techs/css-stylus-with-nib-rupture-jeet'), {
				target: '?.noprefix.css',
			}],
			[require('enb/techs/js')],
            // bemhtml
            [require('enb-bemxjst/techs/bemhtml-old'), { devMode: process.env.BEMHTML_ENV === 'development' }],
            // html
            [require('enb-bemxjst/techs/html-from-bemjson')],
            // borschik
			[borschikTech, { sourceTarget: '?.js', destTarget: '_?.js', freeze: true, minify: isProd }],
            [borschikTech, { sourceTarget: '?.css', destTarget: '_?.css', tech: 'cleancss', freeze: true, minify: isProd }]
        ]);

        nodeConfig.addTargets([
            '_?.css',
			'?.js',
            '?.ie.css',
            '?.ie8.css',
            '?.ie9.css',
            '?.bemtree.js',
            '?.bemhtml.js',
            '?.html'
        ]);
    });

    config.nodes('*desktop.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: getDesktops(config) }],
            // autoprefixer
            [require('enb-autoprefixer/techs/css-autoprefixer'), {
                browserSupport: ['last 2 versions', 'ie 10', 'ff 24', 'opera 12.1'],
                sourceTarget: '?.noprefix.css'
            }]
        ]);
    });

};

function getDesktops(config) {
    return [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/desktop.blocks', check: false },
		{ path: 'libs/bl-carousel/desktop.blocks', check: false },
        'common.blocks',
        'desktop.blocks'
    ].map(function (level) {
        return config.resolvePath(level);
    });
}
