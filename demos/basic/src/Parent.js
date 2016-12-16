import { ComponentRegistry } from 'metal-component';
import MustacheComponent from '../../../src/MustacheComponent';
import CancellablePromise from 'metal-promise';

class Parent extends MustacheComponent {
	render() {
		var deferred = CancellablePromise.resolve();

		return `<div>I'm <b>{{ name }}</b>! I have a sub component: <Child name="{{ childName }}"></div>`;
	}
}

Parent.STATE = {
	name: {
		required: true
	},
	childName: {
		required: true
	}
};

ComponentRegistry.register(Parent);

export default Parent;