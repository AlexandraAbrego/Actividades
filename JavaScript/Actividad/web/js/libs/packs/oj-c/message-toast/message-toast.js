var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "preact/jsx-runtime", '@oracle/oraclejet-preact/translationBundle', "@oracle/oraclejet-preact/hooks/UNSAFE_useMessagesContext", "@oracle/oraclejet-preact/UNSAFE_MessageToast", "oj-c/hooks/UNSAFE_useDataProvider/useDataProvider", "ojs/ojcontext", "ojs/ojvcomponent", "preact/hooks", "css!oj-c/message-toast/message-toast-styles.css"], function (require, exports, jsx_runtime_1, translationBundle_1, UNSAFE_useMessagesContext_1, UNSAFE_MessageToast_1, useDataProvider_1, ojcontext_1, ojvcomponent_1, hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MessageToast = void 0;
    translationBundle_1 = __importDefault(translationBundle_1);
    ojcontext_1 = __importDefault(ojcontext_1);
    function MessageToastImpl({ data, detailTemplateValue, iconTemplateValue, messageTemplates, offset = 0, position = 'bottom', onOjClose }) {
        const initialRender = (0, hooks_1.useRef)(true);
        const uniqueId = (0, hooks_1.useRef)((0, ojvcomponent_1.getUniqueId)());
        const rootRef = (0, hooks_1.useRef)();
        const [dpKey, setDpKey] = (0, hooks_1.useState)(Symbol());
        const addBusyState = (0, hooks_1.useCallback)((description = 'MessageToast: busyState') => {
            return rootRef.current
                ? ojcontext_1.default.getContext(rootRef.current).getBusyContext().addBusyState({ description })
                : () => { };
        }, []);
        (0, hooks_1.useEffect)(() => {
            if (initialRender.current) {
                initialRender.current = false;
                return;
            }
            setDpKey(Symbol());
        }, [data]);
        const { data: dataArr } = (0, useDataProvider_1.useDataProvider)({
            data,
            addBusyState
        });
        const UNSAFE_messagesLayerId = `messageToastLayer_${uniqueId.current}`;
        const messagesContext = (0, hooks_1.useMemo)(() => ({ addBusyState, UNSAFE_messagesLayerId }), [addBusyState, UNSAFE_messagesLayerId]);
        return ((0, jsx_runtime_1.jsx)(ojvcomponent_1.Root, { ref: rootRef, "data-oj-messages-layer-id": UNSAFE_messagesLayerId, children: (0, jsx_runtime_1.jsx)(UNSAFE_useMessagesContext_1.MessagesContext.Provider, { value: messagesContext, children: (0, jsx_runtime_1.jsx)(UNSAFE_MessageToast_1.MessageToast, { data: dataArr, detailRendererKey: detailTemplateValue, iconRendererKey: iconTemplateValue, offset: offset, onClose: onOjClose, position: position, renderers: messageTemplates }, dpKey) }) }));
    }
    exports.MessageToast = (0, ojvcomponent_1.registerCustomElement)('oj-c-message-toast', MessageToastImpl, "MessageToast", { "properties": { "data": { "type": "DataProvider" }, "detailTemplateValue": { "type": "string|function" }, "iconTemplateValue": { "type": "string|function" }, "offset": { "type": "number|object" }, "position": { "type": "string", "enumValues": ["bottom", "top", "top-start", "top-end", "bottom-start", "bottom-end", "top-left", "bottom-left", "top-right", "bottom-right"] } }, "extension": { "_DYNAMIC_SLOT": { "prop": "messageTemplates", "isTemplate": 1 } }, "events": { "ojClose": {} } }, { "offset": 0, "position": "bottom" }, {
        '@oracle/oraclejet-preact': translationBundle_1.default
    });
});
