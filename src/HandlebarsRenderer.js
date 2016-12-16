'use strict';

import IncrementalDomRenderer from 'metal-incremental-dom';
import HTML2IncDom from 'html2incdom-bruno';

/**
 * Renderer that handles Handlebars.
 */
class HandlebarsRenderer extends IncrementalDomRenderer.constructor {
	/**
	 * Overrides the original method from `IncrementalDomRenderer` to handle the
	 * case where developers return a child node directly from the "render"
	 * function.
	 * @param {!Component} component
	 * @override
	 */
	renderIncDom(component) {
		if (component.render) {
			var template = Handlebars.compile(component.render());
			HTML2IncDom.run(template(component.getState()));
		} else {
			super.renderIncDom(component);
		}
	}
}

const mustacheRenderer_ = new HandlebarsRenderer();
mustacheRenderer_.RENDERER_NAME = 'handlebars';

export default mustacheRenderer_;