import config from './config';
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class App {
	constructor(http) {
		http.configure(httpConfig => {
			httpConfig.withBaseUrl(config.api);
			httpConfig.withDefaults({
				credentials: 'include',
				headers: {
					'Accept': 'application/json',
					'X-Requested-With': 'Fetch'
				}
			});
			httpConfig.rejectErrorResponses();
		});
	}

	configureRouter(routerConfig, router) {
		routerConfig.title = 'Task Scoreboard';
		routerConfig.options.pushState = true;
		routerConfig.map([
			{ route: '', name: 'scoreboard', moduleId: 'scoreboard', nav: true, title: 'Scoreboard' },
			{ route: 'login', name: 'login', moduleId: 'auth/login', title: 'Login' }
		]);

		this.router = router;
	}
}
