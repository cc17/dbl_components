
require('../css/demo.less');

/***dialog***/
var dialog = require('./components/dialog');
$('.dialog-show').each(function(index,item){
  $(item).click(function(){
    eval($(this).siblings('pre').html());
  });
});
/***dialog***/


/*slider*/
var slider = require('./components/slider');
$('.slider-demo').each(function(index,item){
  eval($(item).siblings('pre').html());
});


var jPages = require('./components/pagination');
eval($('#pagination-demo').html());