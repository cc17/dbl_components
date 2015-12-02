<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Examples</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
</head>

<body id="demo">
    <pre>
    var d = dialog({
        title: '欢迎',
        content: '欢迎使用 artDialog 对话框组件！'
    });
    d.show();
  </pre>
  <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" id="demo1">
    Launch demo modal
  </button>


  <pre>
    var d = dialog({
        title: 'message',
        content: '<input autofocus />'
    });
    d.showModal();
  </pre>
  <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" id="demo2">
    Launch demo2 modal
  </button>


  <!-- slider -->
  <div class="demo">
    <h2>Automatic fade animation</h2>

    <div class="unslider" style="position:relative;">
      <div class="fading-slider unslider-fade" style="overflow: hidden;height:350px;">
      <ul class="unslider-wrap">
        <li class="velocity-animating" style="opacity: 0;"><img src="http://unslider.com/img/cat1.jpg" alt="Cats!"></li>
        <li class="velocity-animating" style="opacity: 0;"><img src="http://unslider.com/img/cat2.jpg" alt="Cats!"></li>
        <li class="velocity-animating" style="opacity: 1;"><img src="http://unslider.com/img/cat3.jpg" alt="Cats!"></li>
        <li class="unslider-active velocity-animating" style="opacity: 0;"><img src="http://unslider.com/img/cat5.jpg" alt="Cats!"></li>
        <li class="velocity-animating" style="opacity: 0;"><img src="http://unslider.com/img/cat5.jpg" alt=">:)"></li>
        <li class="velocity-animating" style="opacity: 0;"><img src="http://unslider.com/img/cat6.jpg" alt="Cats!"></li>
      </ul>
    </div>
  </div>
  <pre class="demo-usage">
    $('.fading-slider').unslider({
      <span class="hilite">
      animation: 'fade',
      autoplay: true,
      arrows: false
      </span>
    });
  </pre>


  <!-- pagenation -->
  <!--! end of #sidebar -->
    <div id="content" class="defaults">
      <!-- navigation holder -->
      <div class="holder">
      </div>
    </div>
    <!--! end of #content -->


    <script src="http://g.alicdn.com/aliyun/new-aliyun-www/0.0.1/vendor/jquery/jquery-1.9.0.js"></script>
    <script data-debug src="/__build/common.js"></script>
    <script data-debug src="/__build/demo.js"></script>
</body>

</html>
