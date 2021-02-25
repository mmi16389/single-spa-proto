import { Server } from 'miragejs';
import fixturesWidgets from './fixtures/widgets';

export function makeServer(environment = 'development'): Server{

	return new Server({
		environment,
        fixtures: {
            fixturesWidgets
		},
		routes() {

			this.urlPrefix = window.API_URL;

			this.get('/micro-frontend/widgets', () => {
				return fixturesWidgets;
			});

		}
	});
}
