
require('../css/demo.less');

var dialog = require('./components/dialog');
$('#demo1').click(function(){
  var d = dialog({
      title: '欢迎',
      content: '欢迎使用 artDialog 对话框组件！'
  });
  d.show();
});

$('#demo2').click(function(){
  var d = dialog({
    title: 'message',
    content: '<input autofocus />'
  });
  d.showModal();
});


/*slider*/
var slider = require('./components/slider');
$('.fading-slider').unslider({
  animation: 'fade', autoplay: true, arrows: false 
});