<script>
    //1.通过js方式来获取名称叫div的所有html元素对象
    var divs = document.getElementsByTagName("div");
    alert(divs.length);    //可以将其当做数组来使用
    //对divs中的所有div让其标签体内容变为aaa
    for (var i = 0;i<divs.length;i++){
        //divs[i].innerHTML = "aaa";
        $(divs[i]).html("ccc");     // js-->jq
    }

    //2.通过JQuery方式来获取名称叫div的所有html元素对象
    var $divs = $("div");
    alert($divs.length)    //也可以当做数组来使用
    //对divs中的所有div让其标签体内容变为bbb  使用jq方式
    $divs.html("bbb");
    //$divs.innerHTML = "bbb";  无效的用法

    /*
    * 1.JQuery在操作对象时更加方便
    * 2.JQuery对象和js对象方法不通用
    * 3.两者相互转换：
    *   jq-->js:
    *   js-->jq: $(js对象)
    */
</script>
