let dev = location.port === '3000';

module.exports = {
	dev: dev,
	api: dev ? 'http://localhost:8000/api/' : 'api/'
};
