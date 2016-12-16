'use strict';

import IncrementalDomRenderer from 'metal-incremental-dom';
import HTML2IncDom from 'html2incdom-bruno';
// import Mustache from 'mustache';

/**
 * Renderer that handles Mustache.
 */
class MustacheRenderer extends IncrementalDomRenderer.constructor {
	/**
	 * Overrides the original method from `IncrementalDomRenderer` to handle the
	 * case where developers return a child node directly from the "render"
	 * function.
	 * @param {!Component} component
	 * @override
	 */
	renderIncDom(component) {
		if (component.render) {
			const string = Mustache.render(component.render(), component.getState());
			HTML2IncDom.run(string);
		} else {
			super.renderIncDom(component);
		}
	}
}

const mustacheRenderer_ = new MustacheRenderer();
mustacheRenderer_.RENDERER_NAME = 'mustache';

export default mustacheRenderer_;