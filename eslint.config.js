import antfu from '@antfu/eslint-config'

export default antfu({
	typescript: true,
	vue: true,
	rules: {
		'no-use-before-define': 'off',
		'ts/no-use-before-define': 'off',
		'no-tabs': 'off',
	},
	stylistic: {
		indent: 'tab',
		quotes: 'single',
	},
})
