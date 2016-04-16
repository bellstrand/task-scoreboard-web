import './setup';
import {App} from '../src/app';

class RouterStub {
	options = {};

	configure(handler) {
		handler(this);
	}

	map(routes) {
		this.routes = routes;
	}
}

class HttpStub {
	configure(handler) {

	}
}

describe('the App module', () => {
	let sut, mockedRouter, mockedHttpClient;

	beforeEach(() => {
		mockedRouter = new RouterStub();
		mockedHttpClient = new HttpStub();
		sut = new App(mockedHttpClient);
		sut.configureRouter(mockedRouter, mockedRouter);
	});

	it('contains a router property', () => {
		expect(sut.router).toBeDefined();
	});

	it('configures the router title', () => {
		expect(sut.router.title).toEqual('Task Scoreboard');
	});

	it('should have a scoreboard route', () => {
		expect(sut.router.routes).toContain({ route: '', name: 'scoreboard',  moduleId: 'scoreboard', nav: true, title: 'Scoreboard' });
	});
});
