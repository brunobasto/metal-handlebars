import { ComponentRegistry } from 'metal-component';
import HandlebarsComponent from '../../../src/HandlebarsComponent';

class Parent extends HandlebarsComponent {
	render() {
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