import { ComponentRegistry } from 'metal-component';
import MustacheComponent from '../../../src/MustacheComponent';

class Child extends MustacheComponent {
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