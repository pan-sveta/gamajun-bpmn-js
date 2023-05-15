import inherits from 'inherits';

import Viewer from "bpmn-js/lib/Viewer";

import ZoomScrollModule from 'diagram-js/lib/navigation/zoomscroll';
import MoveCanvasModule from 'diagram-js/lib/navigation/movecanvas';
import TouchModule from 'diagram-js/lib/features/touch';

import CustomLoggingModule from './features/logging';


/**
 * A Modeler that includes mouse navigation and other goodies.
 *
 * @param {Object} options
 */
export default function CustomViewer(options) {
    Viewer.call(this, options);
}

inherits(CustomViewer, Viewer);

CustomViewer.prototype._customModules = [
    ZoomScrollModule,
    MoveCanvasModule,
    TouchModule,
    CustomLoggingModule
];

CustomViewer.prototype._modules = [].concat(
    Viewer.prototype._modules,
    CustomViewer.prototype._customModules
);