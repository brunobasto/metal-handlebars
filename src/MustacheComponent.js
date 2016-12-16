'use strict';

import { validators, Config } from 'metal-state';
import Component from 'metal-component';
import IncrementalDomRenderer from 'metal-incremental-dom';
import MustacheRenderer from './MustacheRenderer';

/**
 * A component that has built-in integration with Mustache templates. Example:
 *
 * <code>
 * class MyComponent extends MustacheComponent {
 *   render() {
 *     return <div>Hello World</div>
 *   }
 * }
 * </code>
 */
class MustacheComponent extends Component {
	/**
	 * Creates and renders the given function, which can either be a simple
	 * Mustache function or a component constructor.
	 * @param {!function()} fnOrCtor Either be a simple jsx dom function or a
	 *     component constructor.
	 * @param {Object=} opt_data Optional config data for the function.
	 * @param {Element=} opt_element Optional parent for the rendered content.
	 * @return {!Component} The rendered component's instance.
	 * @override
	 */
	static render(...args) {
		return IncrementalDomRenderer.render(...args);
	}
}

MustacheComponent.RENDERER = MustacheRenderer;

export default MustacheComponent;
export { validators, Config, MustacheComponent };