import { ComponentRegistry } from 'metal-component';
import HandlebarsComponent from '../../../src/HandlebarsComponent';

class PerormanceTest extends HandlebarsComponent {
	render() {
		return `<div>{{#each array}}{{ this }}{{/each}}</div>`;
	}
}

PerormanceTest.STATE = {
	array: {
		required: true
	}
};

ComponentRegistry.register(PerormanceTest);

export default PerormanceTest;