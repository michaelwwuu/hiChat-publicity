/**
 * cookie操作
    1.name and value given , set cookie;
    2.name given, value is null, delete cookie;
    3.name given, value is undefined, get cookie;
 */
var getCookie = function (name, value, options) {
  if (typeof value != 'undefined') { // name and value given, set cookie
    options = options || {};
    if (value === null) {
      value = '';
      options.expires = -1;
    }
    var expires = '';
    if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
      var date;
      if (typeof options.expires == 'number') {
        date = new Date();
        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
      } else {
        date = options.expires;
      }
      expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
    }
    var path = options.path ? '; path=' + options.path : '';
    var domain = options.domain ? '; domain=' + options.domain : '';
    var s = [cookie, expires, path, domain, secure].join('');
    var secure = options.secure ? '; secure' : '';
    var c = [name, '=', encodeURIComponent(value)].join('');
    var cookie = [c, expires, path, domain, secure].join('')
    document.cookie = cookie;
  } else { // only name given, get cookie
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
};
/**
 * 获取浏览器语言类型
 * @return {string} 浏览器国家语言
 */
var getNavLanguage = function () {
  if (navigator.appName == "Netscape") {
    var navLanguage = navigator.language;
    return navLanguage.substr(0, 2);
  }
  return false;
}
/* 设置语言类型： 默认为中文 */
var i18nLanguage = "zh-CN";
/* 设置一下网站支持的语言种类 */
var webLanguage = ['en-US', 'en', 'zh-CN', 'zh-TW'];


var LANGUAGE_CODE = "zh-CN"; //标识语言

function loadProperties(type) {
  if (type === 'en-US' || type === 'en') {
    $('.logo').attr('src', './static/img/brand.png');
    $('.logo-footer').attr('src', './static/img/brand-footer.png');
    $('.mobile-1').attr('src', './static/img/mobile/records-en.png');
    $('.mobile-2').attr('src', './static/img/mobile/home-en.png');
    $('.string_privacyPolicy').css("right","315px")
    $('.string_userAgreement').css("right","410px")
    $('.string_desc').addClass("english")

    $(".string_app_google_img").attr("src", './static/img/icon/btn-googleplay-en.png');
    $(".string_app_android_img").attr("src", './static/img/icon/btn-android-en.png');
    $(".string_app_browser_img").attr("src", './static/img/icon/btn-browser-en.png');
    $('.dropdown button').html('<span>English</span> '); // 下拉選單
    
  } else {
    $('.logo').attr('src', './static/img/brand.png');
    $('.logo-footer').attr('src', './static/img/brand-footer.png');
    $('.mobile-1').attr('src', './static/img/mobile/records-zh.png');
    $('.mobile-2').attr('src', './static/img/mobile/home-zh.png');
    $('.string_privacyPolicy').removeAttr("style")
    $('.string_userAgreement').removeAttr("style")
    if (type === 'zh-TW') {
      $(".string_app_google_img").attr("src", './static/img/icon/btn-googleplay-tc.png');
      $(".string_app_android_img").attr("src", './static/img/icon/btn-android-tc.png');
      $(".string_app_browser_img").attr("src", './static/img/icon/btn-browser-tc.png');
      $('.dropdown button').html('<span>繁體中文</span> '); // 下拉選單
    } else {
      $(".string_app_google_img").attr("src", './static/img/icon/btn-googleplay.png');
      $(".string_app_android_img").attr("src", './static/img/icon/btn-android.png');
      $(".string_app_browser_img").attr("src", './static/img/icon/btn-browser.png');
      $('.dropdown button').html('<span>简体中文</span> '); // 下拉選單
    }
  }

  jQuery.i18n.properties({
    name: 'strings', // 资源文件名称
    path: './static/i18n/', // 资源文件所在目录路径
    mode: 'map', // 模式：变量或 Map 
    language: type, // 对应的语言
    cache: false,
    encoding: 'UTF-8',
    callback: function () { // 回调方法
      $('.string_title').html($.i18n.prop('string_title'));
      $('.string_headline').html($.i18n.prop('string_headline'));
      $('.string_desc').html($.i18n.prop('string_desc'));
      $('.string_app_apk').html($.i18n.prop('string_app_apk'));
      $('.string_qr_download').html($.i18n.prop('string_qr_download'));
      $('.string_qr_block_1').html($.i18n.prop('string_qr_block_1'));
      $('.string_qr_block_1_1_1').html($.i18n.prop('string_qr_block_1_1_1'));
      $('.string_qr_block_1_1_2').html($.i18n.prop('string_qr_block_1_1_2'));
      $('.string_qr_block_1_2_1').html($.i18n.prop('string_qr_block_1_2_1'));
      $('.string_qr_block_1_2_2').html($.i18n.prop('string_qr_block_1_2_2'));
      $('.string_qr_block_1_3_1').html($.i18n.prop('string_qr_block_1_3_1'));
      $('.string_qr_block_1_3_2').html($.i18n.prop('string_qr_block_1_3_2'));
      $('.string_qr_block_2').html($.i18n.prop('string_qr_block_2'));
      $('.string_qr_block_2_1').html($.i18n.prop('string_qr_block_2_1'));
      $('.string_qr_block_3').html($.i18n.prop('string_qr_block_3'));
      $('.string_qr_block_3_1').html($.i18n.prop('string_qr_block_3_1'));
      $('.string_qr_block_4').html($.i18n.prop('string_qr_block_4'));
      $('.string_qr_block_4_1').html($.i18n.prop('string_qr_block_4_1'));
      $('.string_qr_block_5').html($.i18n.prop('string_qr_block_5'));
      $('.string_qr_block_5_1').html($.i18n.prop('string_qr_block_5_1'));
      $('.string_copyright').html($.i18n.prop('string_copyright'));
      $('.string_userAgreement').html($.i18n.prop('string_userAgreement'));
      $('.string_privacyPolicy').html($.i18n.prop('string_privacyPolicy'));
      $('.string_app_google').html($.i18n.prop('string_app_google'));
      $('.string_app_apk_url').html($.i18n.prop('string_app_apk_url'));
      $('.string_app_browser').html($.i18n.prop('string_app_browser'));
    }
  });
}

/* 转换语系 */
function switchLang(LANGUAGE_CODE) {
  getCookie("Language", LANGUAGE_CODE, {
    expires: 30,
    path: '/'
  });
  loadProperties(LANGUAGE_CODE);
}

$(document).ready(function () {
  /* 获取用户浏览器设备之前选择过的语言类型 */
  if (getCookie("Language")) {
    i18nLanguage = getCookie("Language");
  } else {
    // 获取浏览器语言
    var navLanguage = getNavLanguage();
    if (navLanguage) {
      // 判断是否在网站支持语言数组里
      var charSize = $.inArray(navLanguage, webLanguage);
      if (charSize > -1) {
        i18nLanguage = navLanguage;
        getCookie("Language", navLanguage, {       // 存到缓存中
          expires: 30,
          path: '/'
        });
      };
    } else {
      console.log("not navigator");
      return false;
    }
  }

  loadProperties(i18nLanguage);

  /* 点击显示 QRcode */
  // $('.download-btn').on('click', function() {
  //     $('.download-qr').toggleClass('show');
  // })
  $('.download-qr').on('click', function () {
    $('.download-qr').removeClass('show');
  })

  $('.download-qr-googleplay').on('click', function () {
    $('.download-qr-googleplay').removeClass('show');
  })


  $.fn.isOnScreen = function () {
    var win = $(window);
    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    if (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom)) {
      this.classList.add("ani");
    } else {
      this.classList.remove("ani");
    }
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
  };
})




