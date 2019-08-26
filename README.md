# Ebuilder-Quick-Start

一个简单的ebuilder应用

### 组件基本代码
``` html
<!-- html  -->

<ebuilder-test></ebuilder-test>
	
<script>
    if( !window.customElements ){
        document.write('<script src="https://raw.githubusercontent.com/kimchen003/ebuilder/master/polyfill/dist/index.js"><\/script>');
    }
</script>
```

``` js
// ts
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
```

### 安装依赖运行
```
yarn install
yarn start
```

### 发布
```
yarn build
```
