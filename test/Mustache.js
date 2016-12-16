'use strict';

import dom from 'metal-dom';
import MustacheComponent from '../src/MustacheComponent';

describe('Soy', function() {
	var component;

	afterEach(function() {
		if (component) {
			component.dispose();
		}
	});

	describe('Rendering', function() {
		it('should render contents from component\'s "render" function', function() {
			class TestComponent extends MustacheComponent {
				render() {
					return '<div class="test">Hello <b>{{ name }}</b>!</div>';
				}
			}

			TestComponent.STATE = {
				name: {
					required: true
				}
			};

			component = new TestComponent({
				name: 'World'
			});

			assert.strictEqual('DIV', component.element.tagName);
			assert.ok(dom.hasClass(component.element, 'test'));
			assert.strictEqual('Hello World!', component.element.textContent);
		});
	});
});
