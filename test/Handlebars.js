'use strict';

import dom from 'metal-dom';
import HandlebarsComponent from '../src/HandlebarsComponent';

describe('Handlebars', function() {
	var component;

	afterEach(function() {
		if (component) {
			component.dispose();
		}
	});

	describe('Rendering', function() {
		it('should render contents from component\'s "render" function', function() {
			class TestComponent extends HandlebarsComponent {
				render() {
					return '<p>Hello, my name is <b>{{name}}</b>.</p>';
				}
			}

			TestComponent.STATE = {
				name: {
					required: true
				}
			};

			component = new TestComponent({
				name: 'Chema'
			});

			assert.strictEqual('P', component.element.tagName);
			assert.strictEqual('Hello, my name is Chema.', component.element.textContent);
		});
	});
});
