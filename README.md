# textareaAutoResize
Automatically resizes a textarea to content

## Use:

html:
```html
<script src='jquery.textareaAutoResize.min.js'></script>
<textarea rows="2"></textarea>
```
style:
```css
textarea {
  max-height: 70px;
}
```
javascript:
```js
$(function(){
  $('textarea').textareaAutoResize();
});
```
