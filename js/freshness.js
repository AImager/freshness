hljs.initHighlightingOnLoad();

MathJax.Hub.Config({
    tex2jax: {
        inlineMath: [
            ['\\(', '\\)'],
            ['$', '$']
        ],
        displayMath: [
            ['\[', '\]'],
            ['$$', '$$']
        ]
    }
});

var array = new Array('language-code', 'language-javascript', 'language-php', 'language-c', 'language-cpp', 'language-java', 'language-lisp', 'language-bash', 'language-matlab', 'language-mathematica', 'language-css', 'language-html', 'language-xml', 'language-cs', 'language-python', 'language-ruby', 'language-latex', 'language-nasm', 'language-masm', 'language-lingo');
var code = document.querySelectorAll("pre>code");
for (var i = 0; i < code.length; i++) {
    if (language = code[i].parentNode.parentNode.className.toLocaleLowerCase().match("language-[^ ]*")) {
        language = language[0];
    } else if (language = code[i].parentNode.parentNode.parentNode.className.toLocaleLowerCase().match("language-[^ ]*")) {
        language = language[0];
    } else {
        language = "degregasfe25343vdg4t3";
    }

    if (array.indexOf(language) != -1) {
        var replace_html = '';
        var line_span_html = '';
        var split_array = code[i].innerHTML.split("\n");
        code[i].innerHTML = split_array[0];
        for (var j = 0; j < split_array.length - 1; j++) {
            replace_html = replace_html + "<span class=\"hljs-number\" ></span>" + split_array[j] + ((j == split_array.length - 2) ? '' : '\n');
            line_span_html = line_span_html + "<span>" + ((j > 8) ? '' : ' ') + (j + 1).toString() + " </span>\n";
        }
        code[i].innerHTML = replace_html;
        code[i].insertAdjacentHTML('beforebegin', '<code class="code_line">' + line_span_html.substring(0, line_span_html.length - 1) + '</code>');
    } else {
        code[i].classList.add("nohighlight");

    }
}

var li_p = document.querySelectorAll("p");
for (var i = 0; i < li_p.length; i++) {
    var index = 1;
    if (li_p[i].parentNode.tagName == "LI" && index == 1) {
        var newNode = document.createTextNode(li_p[i].innerHTML);
        li_p[i].parentNode.insertBefore(newNode, li_p[i]);
        li_p[i].parentNode.removeChild(li_p[i]);
    }
}

all_table = document.getElementsByTagName('table');
for (i = 1; i <= all_table.length; i++) {
    all_table[i - 1].insertAdjacentHTML('beforebegin', '<div class="table-responsive"></div>');
    all_table[i - 1].previousElementSibling.insertAdjacentHTML('afterbegin', all_table[i - 1].outerHTML);
    all_table[i].remove();
}


/**
 * gitment
 * 设置评论组件
 */
var gitment = new Gitment({
    owner: 'AImager',
    repo: 'blog',
    oauth: {
        client_id: 'f6fdc5a924ad8ff6a85d',
        client_secret: '7ce8865d2d9df65ed35b7d769eac1fcf0fb8affa',
    },
})
gitment.render('container_comment')



/**
 * sidebar
 */
// 打开导航栏
$('#content_nav').click(function () {
    $('#toc').toc({
        'selectors': 'h2,h3',
        'highlightOnScroll': true,
        'smoothScrolling': true
    });
    $("#toc").toggle('slow');
    $("#toc_body").show();

    document.getElementById('toc').onmousewheel = function (e) {
        document.getElementById('toc').scrollTop -= e.wheelDeltaY;
        e.preventDefault();
    }
});
// 关闭导航栏
$('#toc_body').click(function () {
    $("#toc").toggle('slow');
    $("#toc_body").hide();
});