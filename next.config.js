module.exports = {
	webpack: (config, param) => {
		if (param.dev) {
			config.module.rules.push({
				test: /\.js$/,
				exclude: [/node_modules/],
				loader: 'eslint-loader'
			})
		}
		return config
	}
}