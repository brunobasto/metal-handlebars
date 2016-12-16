import { ComponentRegistry } from 'metal-component';
import HandlebarsComponent from '../../../src/HandlebarsComponent';

class Child extends HandlebarsComponent {
	render() {
		return '<div>I\'m a sub component called <b>{{ name }}.</b></div>';
	}
}

Child.STATE = {
	name: {
		required: true
	}
};

ComponentRegistry.register(Child);

export default Child;