// Here you can define types that
// you'll be using across your application

export interface Link {
	id: number;
	url: string;
	name: string;
}

export interface System {
	import(request: string): Promise<any>;
}

let System: System;

export type Refs<T extends Record<string, unknown>> = Vue['$refs'] & T;