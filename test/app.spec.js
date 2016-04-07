import './setup';
import {App} from '../src/app';

class RouterStub {
	configure(handler) {
		handler(this);
	}

	map(routes) {
		this.routes = routes;
	}
}

describe('the App module', () => {
	let sut;
	let mockedRouter;

	beforeEach(() => {
		mockedRouter = new RouterStub();
		sut = new App({});
		sut.configureRouter(mockedRouter, mockedRouter);
	});

	it('contains a router property', () => {
		expect(sut.router).toBeDefined();
	});

	it('configures the router title', () => {
		expect(sut.router.title).toEqual('Task Scoreboard');
	});

	it('should have a scoreboard route', () => {
		expect(sut.router.routes).toContain({ route: ['', 'scoreboard'], name: 'scoreboard',  moduleId: 'scoreboard', nav: true, title: 'Scoreboard' });
	});
});
