import { WebComponent, html, render } from 'ebuilder';
const StyleSheet = require('./ebuilder-test.less');

export default class EbuilderTest extends WebComponent {

    constructor() {
        super();

        // 初始样式表
        this.StyleSheet = StyleSheet;
        this.Style = StyleSheet.locals || {};

        this.state = {
        };

    }

    render() {
        const { Style } = this;

        return html`
            <div class="${ Style.text }">Hello World !</div>
        `;
    }

    update(change): void {
        if( change.show ){
            this.style.display = "block"
        }
    }


}

customElements.define("ebuilder-test", EbuilderTest );