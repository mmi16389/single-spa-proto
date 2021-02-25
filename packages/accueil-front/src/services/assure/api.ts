/*
Appels a l'api P1MF (Micro Frontend)
*/

import { assureAxios, AxiosResponse } from '@/plugins/axios';

export function getWidgets(): Promise<AxiosResponse> {
	return assureAxios.get('/micro-frontend/widgets');
}
