在没有设定元素高度的情况下基于vue实现 `展开/收起` 动画过渡插件vue-collapse-transition，插件实现原理是利用 `vue` 过渡动画的事件钩子，计算元素的高度并添加或删除元素的类名`collapse-transition`而实现。

## 安装
```bash
    npm install vue-collapse-transition --save
```
## 使用
```js
// js
import Vue from 'vue'
import vueCollapseTransition from 'vue-collapse-transition'
Vue.use(vueCollapseTransition)
```
```html
<!--html-->
<transition @beforeEnter="$collapse.beforeEnter"
                  @enter="$collapse.enter"
                  @afterEnter="$collapse.afterEnter"
                  @beforeLeave="$collapse.beforeLeave"
                  @leave="$collapse.leave"
                  @afterLeave="$collapse.afterEnter">
        <div v-show="show">
          <div class="demo-content">
           vue collapse transition!
          </div>
        </div>
</transition>
```
```css
.collapse-transition { // 必须
  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
}
.demo-content {
    width: 50px;
    font-size: 18px;
    white-space: pre-wrap;
    word-break: break-all;
  }
```

