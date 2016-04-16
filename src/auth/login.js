import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Auth} from './auth';

@inject(Router, Auth)
export class Login {
	constructor(router, auth) {
		this.router = router;
		this.auth = auth;
	}

	login() {
		this.auth.authenticate(this.username, this.password).then(() => {
			this.router.navigateToRoute('scoreboard');
		}).catch(error => {
			//console.log(error);
		});
	}
}
