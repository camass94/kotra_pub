/**
 * Since: 2016.09.03
 * Author: Jang Jun-hyeok
 * Contact: woodfuel@naver.com
 * Updated: 2016.09.03
 */
;(function($) {
'use strict';

var app = {};
app.global = this;
app.ui = {};
app.UI_ATTRIBUTE = 'data-app-ui';
app.UI_CLASS = 'app-ui';
app.parseUI = function(data) {
  if( data && typeof data === 'string' ) {
    try {
      data = JSON.parse(data.replace(/'/g, '"'));
    }
    catch(err) {
      data = data;
    }
  }
  return data;
}
app.updateUI = function(elem, data) {
  var key, keys, options, events;
  for( key in data ) {
    keys = key.split('.');
    events = keys.pop();
    options = data[key];
    if( keys.length ) {
      elem
        .on(keys.join(' '), { events: events, options: options }, function(event) {
          if( $.type(event.data.options) === 'array' ) {
            $[event.data.events].apply(null, event.data.options);
          }
          else if( $.type($[event.data.events]) === 'function' ){
            $[event.data.events](event.data.options);
          }
          else {
            elem[event.data.events](event.data.options);
          }
        })
      ;
    }
    else {
      if( $.type(options) === 'array' ) {
        elem[events].apply(null, options);
      }
      else {
        elem[events](options);
      }
    }
  }
}
app.ui.accordion = function(options) {
  var element = this;
  var defaults = {
    header: '.accordion-header',
    body: '.accordion-body',
    duration: 350,
    easing: 'easeOutQuart',
    activeHeader: 'active',
    expandable: false,
    callback: function() {}
  };
  options = $.extend({}, defaults, options);

  element
    .find(options.body)
    .each(function(){
      var accordionBody = $(this);
      if( accordionBody.is(':visible') ) {
          accordionBody.css('display', 'block');
      }
    })
  ;

  element
    .on('click.accordion', options.header, { slideOption: {
      duration: options.duration,
      easing: options.easing,
      queue: false,
      complete: function() {
        $(this).css({ height: '', paddingTop: '', paddingBottom: '' });
        if( $.type(options.callback) === 'function' ) {
          options.callback.call(this);
        }
        // else if( $.type(options.callback) === 'string' ) {
        //   var completeFunc = new Function(options.callback);
        //   completeFunc();
        // }
      }
    }},
    function(event) {
      var accordionHeader = $(this);
      var accordionBody = accordionHeader.next(options.body);
      if( !accordionBody.length ) {
        accordionBody = accordionHeader.nextAll(options.body).eq(0);
      }
      if( !options.expandable ) {
        element
          .find(options.body)
          .not(accordionBody)
          .stop(true, false)
          .slideUp(event.data.slideOption)
        ;
        element
          .find(options.header)
          .not(accordionHeader)
          .removeClass(options.activeHeader)
        ;
      }
      accordionBody
        .stop(true, false)
        .slideToggle(event.data.slideOption)
      ;
      accordionHeader
        .toggleClass(options.activeHeader)
      ;
    })
  ;
  return element;
}
app.ui.stretch = function(options) {
  var element = this;
  var defaults = {
    target: '',
    setHeight: 'max',
  };
  options = $.extend({}, defaults, options);

  var children = !$.trim(options.target) ? element.children() : element.find(options.target);
  var height = children.map(function(idx, elem){ return $(elem).outerHeight() }).get();
  children
    .outerHeight(Math[options.setHeight !== 'min' ? 'max' : 'min'].apply(null, height))
  ;
  return element;
}
app.ui.ellip = function(options) {
  var element = this;
  var defaults = {
    row: 1,
    char: '...',
    callback: function() {}
  };
  options = $.extend({}, defaults, options);
  var text = element.text();
  var origText = text;
  var origLength = origText.length;
  var origHeight = element.height();

  element.text('a');
  var lineHeight =  parseFloat(element.css("lineHeight"), 10);
  var rowHeight = element.height();
  var gapHeight = lineHeight > rowHeight ? (lineHeight - rowHeight) : 0;
  var targetHeight = gapHeight * (options.row - 1) + rowHeight * options.row;

  if( origHeight <= targetHeight ) {
    element.text(text);
    options.callback.call(element);
    return;
  }

  var start = 1;
  var length = 0;
  var end = text.length;

  while( start < end ) {
    length = Math.ceil((start + end) / 2);
    element.text(text.slice(0, length) + options.char);
    if( element.height() <= targetHeight ) {
      start = length;
    }
    else {
      end = length - 1;
    }
  }

  text = text.slice(0, start);
  text += options.char;

  element.text(text);

  options.callback.call(element);

  return element;
}
app.ui.dropdown = function(options) {}
app.ui.tabs = function(options) {}
app.ui.slide = function(options) {}
app.ui.waves = function(options) {}
app.ui.noop = function() {
    return this;
}


// jquery fn extend
$.fn.extend(app.ui);
// global app
app.global.app = app;
// ready
$(document)
  .ready(function(){
    $('['+app.UI_ATTRIBUTE+']')
      .each(function(idx, elem) {
        var selected = $(elem);
        var data = app.parseUI(selected.data(app.UI_CLASS));
        // update ui
        app.updateUI(selected, data);
      })
    ;
  })
;

}).call(this, jQuery);

/*!
 * jQuery.ellipsis
 * http://github.com/jjenzz/jquery.ellipsis
 * --------------------------------------------------------------------------
 * Copyright (c) 2013 J. Smith (@jjenzz)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * adds a class to the last 'allowed' line of text so you can apply
 * text-overflow: ellipsis;
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function e(e,f){function q(){g.text=g.$cont.text(),g.opts.ellipLineClass=g.opts.ellipClass+"-line",g.$el=a('<span class="'+g.opts.ellipClass+'" />'),g.$el.text(g.text),g.$cont.empty().append(g.$el),r()}function r(){return"number"==typeof g.opts.lines&&g.opts.lines<2?void g.$el.addClass(g.opts.ellipLineClass):(o=g.$cont.height(),void("auto"===g.opts.lines&&g.$el.prop("scrollHeight")<=o||j&&(p=a.trim(g.text).split(/\s+/),g.$el.html(c+p.join("</span> "+c)+"</span>"),g.$el.find("span").each(j),null!=k&&s(k))))}function s(a){p[a]='<span class="'+g.opts.ellipLineClass+'">'+p[a],p.push("</span>"),g.$el.html(p.join(" "))}var j,k,m,n,o,p,g=this,h=0,i=[];if(g.$cont=a(e),g.opts=a.extend({},d,f),"auto"===g.opts.lines){var t=function(b,c){var d=a(c),e=d.position().top;if(n=n||d.height(),e===m?i[h].push(d):(m=e,h+=1,i[h]=[d]),e+n>o)return k=b-i[h-1].length,!1};j=t}if("number"==typeof g.opts.lines&&g.opts.lines>1){var u=function(b,c){var d=a(c),e=d.position().top;if(e!==m&&(m=e,h+=1),h===g.opts.lines)return k=b,!1};j=u}if(g.opts.responsive){var v=function(){i=[],h=0,m=null,k=null,g.$el.html(g.text),r()};a(window).on("resize."+b,v)}q()}var b="ellipsis",c='<span style="white-space: nowrap;">',d={lines:"auto",ellipClass:"ellip",responsive:!1};a.fn[b]=function(c){return this.each(function(){try{a(this).data(b,new e(this,c))}catch(a){window.console&&console.error(b+": "+a)}})}});
/*!
 * jQuery Browser Plugin 0.1.0
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2015 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2015 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 23-11-2015
 */!function(a){"function"==typeof define&&define.amd?define(["jquery"],function(b){return a(b)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=a(require("jquery")):a(window.jQuery)}(function(a){"use strict";function b(a){void 0===a&&(a=window.navigator.userAgent),a=a.toLowerCase();var b=/(edge)\/([\w.]+)/.exec(a)||/(opr)[\/]([\w.]+)/.exec(a)||/(chrome)[ \/]([\w.]+)/.exec(a)||/(iemobile)[\/]([\w.]+)/.exec(a)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[],c=/(ipad)/.exec(a)||/(ipod)/.exec(a)||/(windows phone)/.exec(a)||/(iphone)/.exec(a)||/(kindle)/.exec(a)||/(silk)/.exec(a)||/(android)/.exec(a)||/(win)/.exec(a)||/(mac)/.exec(a)||/(linux)/.exec(a)||/(cros)/.exec(a)||/(playbook)/.exec(a)||/(bb)/.exec(a)||/(blackberry)/.exec(a)||[],d={},e={browser:b[5]||b[3]||b[1]||"",version:b[2]||b[4]||"0",versionNumber:b[4]||b[2]||"0",platform:c[0]||""};if(e.browser&&(d[e.browser]=!0,d.version=e.version,d.versionNumber=parseInt(e.versionNumber,10)),e.platform&&(d[e.platform]=!0),(d.android||d.bb||d.blackberry||d.ipad||d.iphone||d.ipod||d.kindle||d.playbook||d.silk||d["windows phone"])&&(d.mobile=!0),(d.cros||d.mac||d.linux||d.win)&&(d.desktop=!0),(d.chrome||d.opr||d.safari)&&(d.webkit=!0),d.rv||d.iemobile){var f="msie";e.browser=f,d[f]=!0}if(d.edge){delete d.edge;var g="msedge";e.browser=g,d[g]=!0}if(d.safari&&d.blackberry){var h="blackberry";e.browser=h,d[h]=!0}if(d.safari&&d.playbook){var i="playbook";e.browser=i,d[i]=!0}if(d.bb){var j="blackberry";e.browser=j,d[j]=!0}if(d.opr){var k="opera";e.browser=k,d[k]=!0}if(d.safari&&d.android){var l="android";e.browser=l,d[l]=!0}if(d.safari&&d.kindle){var m="kindle";e.browser=m,d[m]=!0}if(d.safari&&d.silk){var n="silk";e.browser=n,d[n]=!0}return d.name=e.browser,d.platform=e.platform,d}return window.jQBrowser=b(window.navigator.userAgent),window.jQBrowser.uaMatch=b,a&&(a.browser=window.jQBrowser),window.jQBrowser});
 /*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD (Register as an anonymous module)
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {},
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling $.cookie().
            cookies = document.cookie ? document.cookie.split('; ') : [],
            i = 0,
            l = cookies.length;

        for (; i < l; i++) {
            var parts = cookies[i].split('='),
                name = decode(parts.shift()),
                cookie = parts.join('=');

            if (key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

}));


// function fn_depthCheck(siteMenuIdxs){
//   var mainDepth = siteMenuIdxs.substring(0,2);
//   var subDepth = siteMenuIdxs.substring(0,4)
//   switch( mainDepth ){
//    case "01":
//          $(".hot-rank").show();
//    break;
//   }
//   switch( subDepth ){
//    case "0301":
//          $(".report-hot-rank").show();
//    break;
//    case "0502":
//          $(".video-hot-rank").show();
//    break;
//    case "0503":
//          $(".video-hot-rank").show();
//    break;
//    case "0504":
//          $(".video-hot-rank").show();
//    break;

//   }
// }

$(document).ready(function(){

    $("a[href='#']").click(false);

    ;(function(){
        var modal = $('.gw-modal');

        if( !$.cookie('gwModal') ){
            $(window).resize(function(){
                modal.css('right', ($(window).width() - 1100) / 2).show();
            }).resize();
        }

        modal
            .find('.close')
            .click(function(){
                modal.hide();
            })
        ;
        modal
            .find('#day')
            .change(function(){
                $.cookie('gwModal', '1', { expires:1, path: '/' });
                modal.hide();
            })
        ;

    }());

    //셧다운 팝업
    ;(function(){
        var modal2 = $('.gw-modal2');

        if( !$.cookie('gwModal2') ){
            $(window).resize(function(){
                modal2.css('right', ($(window).width() - 1100) / 2).show();
            }).resize();
        }

        modal2
            .find('.close')
            .click(function(){
                modal2.hide();
            })
        ;
        modal2
            .find('#day')
            .change(function(){
                $.cookie('gwModal2', '1', { expires:1, path: '/' });
                modal2.hide();
            })
        ;

    }());


    if( navigator.appVersion.indexOf('Windows NT 10.0') > -1 && $.browser.msie ) {
        $('.flip-wrap > div')
            .addClass('transtion-none')
        ;
    }
    else {
        $('.flip-wrap > div')
            .addClass('transtion')
        ;
    }

    var agent = navigator.userAgent.toLowerCase();
    if( agent.indexOf('msie 7') > -1 && agent.indexOf('trident') > -1 ) {
        console.log('호환성 보기 상태입니다.')
    }

    var metaObj = {
        // 무역자료실안내
        '06010100000000000000': {
            keyword: 'kotra, globalwindow, 글로벌윈도우, kotra해외시장뉴스, 코트라, 무역자료실 안내',
            description: '국내 무역 투자 전문자료뿐만 아니라 해외무역관을 통해 수집한 각국 자료를 열람하실 수 있습니다. 해외업체 검색, 소장자료 검색, 관세율 조회 및 열람 서비스를 활용해 보세요.'
        },
        // 관세율서비스 - 서비스안내
        '06020201000000000000': {
            keyword: 'kotra, globalwindow, 글로벌윈도우, kotra해외시장뉴스, 코트라, 무역자료실, 관세율서비스',
            description: '무역자료실에서는 간단한 정보의 신속한 서비스를 위하여 소장하고 있는 관세율표 자료에 대하여 신청하신 내용을 복사, FAX로 제공해 드립니다. '
        },
        // 무역통계서비스 - 서비스안내
        '06020301000000000000': {
            keyword: 'kotra, globalwindow, 글로벌윈도우, kotra해외시장뉴스, 코트라, 무역자료실, 무역통계서비스',
            description: '무역자료실에서는 간단한 정보의 신속한 서비스를 위하여 소장하고 있는 무역통계 자료에 대하여 신청하신 내용을 복사, FAX로 제공해 드립니다.'
        },
        // 세미나관련 자료안내
        '06020500000000000000': {
            keyword: 'kotra, globalwindow, 글로벌윈도우, kotra해외시장뉴스, 코트라, 무역자료실, 세미나관련 자료안내',
            description: '무역자료실에서는 세미나관련 자료안내입니다.'
        },
        // 디렉토리 검색사이트
        '06020600000000000000': {
            keyword: 'kotra, globalwindow, 글로벌윈도우, kotra해외시장뉴스, 코트라, 무역자료실, 디렉토리 검색사이트',
            description: '무역자료실에서는 디렉토리별로 검색할수 있는 사이트입니다.'
        },
        // 자료검색
        '06030000000000000000': {
            keyword: 'kotra, globalwindow, 글로벌윈도우, kotra해외시장뉴스, 코트라, 무역자료실, 자료검색',
            description: '무역자료실에서 소장한 자료를 검색할 수 있습니다.'
        },
        // 고객의 소리
        '07060000000000000000': {
            keyword: 'kotra, globalwindow, 글로벌윈도우, kotra해외시장뉴스, 코트라, 열린마당, 고객의소리',
            description: '문의사항 있을시 트레이드탁터 사이트를 통해 문의를 하실 수 있습니다.'
        },
        // 사이트맵
        '07040100000000000000': {
            keyword: 'kotra, globalwindow, 글로벌윈도우, kotra해외시장뉴스, 코트라, 열린마당, 사이트 이용, 사이트맵',
            description: 'KOTRA 해외시장뉴스 사이트의 모든 메뉴에 대해 빠르고 정확하게 찾을 수 있도록 친절하게 안내해 드립니다.'
        },
        // RSS 이용
        '07040300000000000000': {
            keyword: 'kotra, globalwindow, 글로벌윈도우, kotra해외시장뉴스, 코트라, 열린마당, 사이트 이용, RSS 이용',
            description: 'KOTRA 해외시장뉴스 사이트의 최신정보를 RSS 서비스로 빠르게 정보를 받아볼 수 있습니다.'
        },
        // 저작권정책
        '07040400000000000000': {
            keyword: 'kotra, globalwindow, 글로벌윈도우, kotra해외시장뉴스, 코트라, 열린마당, 사이트 이용, 저작권정책',
            description: 'KOTRA 해외시장뉴스에서 제공하는 웹문서, 첨부파일, DB정보 등은 저작권법에 의하여 보호받는 저작물은 별도의 저작권 표시 및 또다른 출처를 명시한 경우를 제외하고는 원칙적으로 KOTRA(코트라)에 저작권이 있습니다.'
        },
        // 개인정보처리방침
        '07040500000000000000': {
            keyword: 'kotra, globalwindow, 글로벌윈도우, kotra해외시장뉴스, 코트라, 열린마당, 사이트 이용, 개인정보처리방침',
            description: 'KOTRA 해외시장뉴스 사이트 이용시 개인 정보 처리 방침의 대해 안내해 드립니다.'
        },
        // 오시는길
        '07040600000000000000': {
            keyword: 'kotra, globalwindow, 글로벌윈도우, kotra해외시장뉴스, 코트라, 열린마당, 사이트 이용, 오시는길',
            description: 'KOTRA에 오시는 길 및 주차 안내의 대한 정보를 제공합니다.'
        }
    }

    // if( !!metaObj[siteMenuIdxs] ){
    //  $.each(metaObj[siteMenuIdxs], function( key, val ){
    //      $('head')
    //          .prepend(
    //              $('<meta />',{
    //                  name: key,
    //                  content: val
    //              })
    //          )
    //      ;
    //  });
    // }


    //gnb
    $(".gnb-wrap > ul > li").on("mouseenter keydown",function(){
        $(".gnb-tit-wrap").removeClass('active');
        $(this).find(".gnb-tit-wrap").addClass('active');

    })

    $(".gnb-wrap").on("mouseleave",function(){
        $(".gnb-tit-wrap").removeClass('active');

    })

    //gnb 태그 감싸기 , 타이틀 입력하기
    var gnbTitle, gnbSubTitle;


    $(".gnb-wrap > ul > li > ul").wrap('<div class="inner-wrap cf"></div>');
    $(".gnb-wrap .inner-wrap").prepend('<div class="gnb-tit cf"><h4>'+ gnbTitle + '</h4><span>'+ gnbSubTitle +'</span></div>');
    $(".gnb-wrap .inner-wrap").wrap("<div class='gnb-tit-wrap'></div>").find('ul').show()

    $(".gnb-wrap > ul > li").each(function(idx, el){
        gnbTitle = $(el).children('a').attr('title');

        if( idx == 0 ){
            //해외시장뉴스
            gnbSubTitle = '전 세계 경제, 산업, 통상, 투자 뉴스를<br>신속하고 생생하게!!';
        }else if( idx == 1 ){
            //국가정보
            gnbSubTitle = '국가별 비즈니스 정보를 총망라한 <br>KOTRA 국가정보';
        }else if( idx == 2 ){
            //kotra 보고서
            gnbSubTitle = 'KOTRA가 분석하는<br>주요 통상.산업 이슈별 보고서';
        }else if( idx == 3 ){
            //비지니스 db정보
            gnbSubTitle = '상품.산업DB, 수요급등 품목 등<br>해외 비즈니스에 필요한 정보는 여기에서';
        }else if( idx == 4 ){
            //포토동영상
            gnbSubTitle = '사진과 동영상으로<br>보는 해외시장정보';
        }else if( idx == 5 ){
            //무역자료실
            gnbSubTitle = 'KOTRA에서 운영하는<br>국내 최대의 무역 전문도서관';
        }else if( idx == 6 ){
            //알림마당
            gnbSubTitle = '고객과 소통하는<br>KOTRA가 되겠습니다';
        }

        $(el).find('h4').text(gnbTitle);
        $(el).find('span').html(gnbSubTitle);

        //2뎁쓰 라인 조정
        if( $(el).find('li').length <= 4 ){
            $(el).find(".gnb-tit").next('ul').width(400)
        }
    })


    //gnb 위드
    $(".gnb-wrap > ul > li ul > li:nth-child(4n)").addClass('positionXY')
    $(".gnb-wrap > ul > li ul > li:nth-child(8n)").addClass('positionXY-2')


    //해외시장뉴스 snb 아래 붙는 내용

    //전체메뉴
    $(".btn-total-menu").on("click keyup", function(){
        $('.total-menu-wrap').toggleClass("on")
        //$(".gnb-tit-wrap").removeClass('active');;
    })
    $("header").on("mouseleave", function(){
        $('.total-menu-wrap').removeClass("on");
    })

    $('.total-menu-wrap').focusout(function(){
        $(this).removeClass("on");
    });



    /* 검색모달 */
    $(".btn-total-search").on("click",function(){

        if( $(".total-menu-wrap").hasClass("on") ) $(".total-menu-wrap").removeClass("on");

        if($(".modal-total-search-wrap").html()==""){
            $.ajax({
                type: 'post',
                async: false,
                dataType: 'text',
                url: "/common/kotranews/totalSearchSet.do",
                success:function(data){
                    var content = data.substring(data.indexOf("<form"), data.indexOf("/form>")+6);
                    $(".modal-total-search-wrap").html(content);
                },
                error:function(request,status,error) {
                    alert("code : "+request.status+"\n"+"message : "+request.responseTest+"\n"+"error : "+error);
                }
            });
        }

        getHeaderPopkeyword();

        $("#headerQuery").val($("#query").val());
        if($("#startDate").val() != null){
            $("#headerStartDate").val($("#startDate").val());
        }
        if($("#endDate").val() != null){
            $("#headerEndDate").val($("#endDate").val());
        }

        $("#headerSort").val($("#sort").val());
        $("#headerSearchField").val($("#searchField").val()).attr("selected","selected");
        $("#headerAreaCode").val($("#areaCode").val()).attr("selected","selected");
        $("#headerNationCode").val($("#nationCode").val()).attr("selected","selected");
        $("#headerIndustryCode").val($("#industryCode").val()).attr("selected","selected");

        $(".modal-total-search-wrap, .overlay").addClass("active");
    });

    $(".overlay").on("click",function(){
        $(".modal-total-search-wrap, .overlay").removeClass("active");
    })



    //텍스트 두줄처리
    $(".ellipsis-two, .ellipsis-two-small, .ellipsis-three, .hot-item-slide-wrap li .hot-item-txt p, .bbs-album-list .list .con, .write-column-wrap .list .tit, .bbs-world-news-area .list li a").dotdotdot({
        wrapper : 'letter',
        ellipsis: '···',
        height : null,
        wrap  : 'word'
    })
    
    /**
     * 헤드라인 메인 슬라이드
     */
    /*var headlineNews = $('.js-headlineNews').bxSlider({
        pager : true,
        auto : true,
        autoHover : true,
        spped : 5000,
        controls : false,
        infiniteLoop : true
    });*/
    /**
     * 최신보고서 슬라이드
     */
    /*var reportNews = $('.js-reportNews').bxSlider({
        pager : true,
        auto : true,
        autoHover : true,
        spped : 5000,
        controls : false,
        infiniteLoop : true
    });*/
    /**
     * 인덱스페이지 포토뉴스
     */
    var photoWrap = $('.js-photoNews');
    // Array
    photoWrap
     .append(function(){
         // pager
         var newsPager = $('<div></div>',{ 'id': 'photo-pager', 'class': 'cf' });
         // get img tag
         var imgs = photoWrap.find(' > ul > li > a > img').map(function( index, elem ){ return elem.outerHTML; }).get();

         for( var i = 0; i < imgs.length; i++ ){
             newsPager
                 .append([
                     '<a href="" data-slide-index="'+ i +'">'+ imgs[i] +'</a>'
                 ].join(''))
             ;
         }
         return newsPager;
     })
     .find(' > ul')
     .bxSlider({
         pagerCustom:'#photo-pager',
         controls : false
     })
    ;

    $('#favoriteButton').on('click', function(e) {
        var bookmarkURL = window.location.href;
        var bookmarkTitle = document.title;
        var triggerDefault = false;

        if (window.sidebar && window.sidebar.addPanel) {
            // Firefox version < 23
            window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
        } else if ((window.sidebar && (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) || (window.opera && window.print)) {
            // Firefox version >= 23 and Opera Hotlist
            var $this = $(this);
            $this.attr('href', bookmarkURL);
            $this.attr('title', bookmarkTitle);
            $this.attr('rel', 'sidebar');
            $this.off(e);
            triggerDefault = true;
        } else if (window.external && ('AddFavorite' in window.external)) {
            // IE Favorite
            window.external.AddFavorite(bookmarkURL, bookmarkTitle);
        } else {
            // WebKit - Safari/Chrome
            alert((navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D 키를 눌러 즐겨찾기에 등록하실 수 있습니다.');
        }

        return triggerDefault;
    });




  function parseJSON(options) {
    if( options && typeof options === 'string' ) {
        try {
            return $.parseJSON(options.replace(/'/g, "\""));
        }
        catch(err) {
            return options;
        }
    }
  }
  $('[data-event-off]')
     .each(function() {
        var events = $(this).data('event-off');
        $(this)
           .off(events)
        ;
     })
  ;
  $('[data-ellip]')
     .each(function(index, elem) {
        var $elem = $(elem);
        var options = $.extend({}, { responsive: true, ellipClass: 'ellip', lines: 2 }, parseJSON($elem.data('ellip')));
        //From: https://github.com/jjenzz/jquery.ellipsis
        if( typeof $elem.ellipsis === 'function' ) {
           $elem
              .ellipsis(options)
           ;
        }
     })
  ;
  $('[data-popup]')
    .click(function() {
      var selected = $(this);
      var options = parseJSON(selected.data('popup'));
      //From: https://github.com/mkdynamic/jquery-popupwindow
      if( typeof $.popupWindow === 'function' ) {
        $.popupWindow(options);
      }
    })
  ;
  $('[data-bxslider]')
    .each(function(index, elem) {
      var $elem = $(elem);
      var op = {
        pager : true,
        auto : true,
        autoHover : true,
        spped : 5000,
        controls : false,
        infiniteLoop : true
      }
      // var options = parseJSON($elem.data('bxslider'));
      var options = $.extend(true, op, parseJSON($elem.data('bxslider')));
      // From http://bxslider.com/
      if( typeof $elem.bxSlider === 'function' ) {
          $elem
            .bxSlider(options)
          ;
      }
    })
  ;
  $('[data-toggle]')
      .each(function(index, elem){
        var $elem = $(elem);
        var options = $.extend({}, { target: '', eventName: 'click', duration: 0 }, parseJSON($elem.data('toggle')));
        if( !options.target ) {
            return;
        }
        var target = $(options.target);
        $elem
            .on(options.eventName, function(){
                target
                    .toggle(options.duration)
                ;
            })
        ;
      })
  ;
  /**
   * data-adjust는 UI 업데이트가 끝난 뒤에 적용한다.
   */
  setTimeout(function() {
      $('[data-adjust]')
        .each(function(index, elem) {
          var $elem = $(elem);
          var options = $.extend({}, { selector: 'children', height: 'max' }, parseJSON($elem.data('adjust')));
          var selector = options.selector !== 'children' ? $elem.find(options.selector) : $elem.children();
          var height = selector.map(function(index, elem){ return $(elem).height() }).get();
          selector
            .height(Math[options.height !== 'max' ? 'min' : 'max'].apply(null, height))
          ;
        })
      ;
  }, 0);




});
function copyURI(str) {
    str = location.protocol+"//"+location.host+str;
     if (window.clipboardData) {
          window.clipboardData.setData("Text", str);
         } else if (window.netscape) {
          netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');

          var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
          if (!clip) return;

          var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
          if (!trans) return;

          trans.addDataFlavor('text/unicode');

          var str = new Object();
          var len = new Object();

          var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);

          var copytext = str;
          str.data = copytext;

          trans.setTransferData("text/unicode",str,copytext.length*2);
          var clipid = Components.interfaces.nsIClipboard;
          if (!clipid) return false;

          clip.setData(trans,null,clipid.kGlobalClipboard);
         }
         alert("클립보드에 복사되었습니다.원하는 곳에 Ctrl-V를 이용하여 붙여 넣기를 하시면 됩니다.");
         return false;
}

function nationListAreaChange(){
    var options = "";
    $.ajax({
        type: 'post',
        async: false,
        dataType: 'json',
        url: "/common/extra/kotranews/ajaxExtraNationList.do?upperCdKey="+$(".nation-list-area-cd").val(),
        success:function(data){
            for(var i=0;i<data.length;i++){
                options += "<option value='"+data[i].cdKey+"'>"+data[i].cdVal1+"</option>";
            }
        },
        error:function(request,status,error) {
            alert("code : "+request.status+"\n"+"message : "+request.responseTest+"\n"+"error : "+error);
        }
    });
    $(".nation-list-nation-cd").html("<option value=''>국가</option>");
    $(".nation-list-nation-cd").append(options);
}

function getHeaderPopkeyword() {

    var target      = "popword";
    var range       = "D";
    var collection  = "GW";
    var datatype   = "json";
    var popwordCount = 6        //인기검색어 노출 개수

    $.ajax({
      type: "POST",
      url: "/user/extra/kotranews/search/popword/jsp/Page.do",
      dataType: "json",
      data: { "target" : target, "range" : range, "collection" : collection , "datatype" : datatype },
      success: function(data) {
        var str = "";
        str += "인기검색어 : ";
         $.each(data.Data.Query, function(index, result) {
            if(index < popwordCount){
                str += "<a href=\"#\" onclick=\"javascript:goKeyword('" + result.content + "');\">" + result.content + "</a>";
                if(index != popwordCount-1){
                    str += ", ";
                }
            }else{
                return false;
            }
        });

        $("#headerPopword").html(str);
      }
    });

}

function goSearch(){

    if ($("#headerQuery").val() == "") {
        alert("검색어를 입력하세요.");
        $("#headerQuery").focus();
        return;
    }

    document.sform.submit();
}

function goKeyword(query) {
    var searchForm = document.sform;
    searchForm.query.value = query;
    searchForm.searchField.value = "TITLE";
    searchForm.startDate.value = "";
    searchForm.endDate.value = "";
    searchForm.sort.value = "";
    searchForm.areaCode.value = "";
    searchForm.nationCode.value = "";
    searchForm.industryCode.value = "";
    searchForm.submit();
}

function showDatepicker(id) {
    $("#"+id).focus();
}
