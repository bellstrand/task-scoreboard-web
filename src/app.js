export class App {
	configureRouter(config, router) {
		config.title = 'Task Scoreboard';
		config.map([
			{ route: ['', 'scoreboard'], name: 'scoreboard',      moduleId: 'scoreboard',      nav: true, title: 'Scoreboard' }
		]);

		this.router = router;
	}
}
