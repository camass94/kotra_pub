<%@ page language='java' contentType='text/html; charset=UTF-8'%>
<%@ taglib uri='http://java.sun.com/jsp/jstl/core' prefix='c' %>
<%@ taglib uri='http://www.springframework.org/tags/form' prefix='form'%>

<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="ko"><![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="ko"><![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="ko"><![endif]-->
<!--[if IE 9 ]><html class="ie ie9" lang="ko"><![endif]-->
<!--[if (gte IE 10)|!(IE)]><!--><html lang="ko"><!--<![endif]--> 
<head>
    <meta charset="UTF-8">
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->
    <title>KOTRA 해외시장뉴스</title>
    <link rel="SHORTCUT ICON" href="/site/main/images/common/favicon.ico">
    <link rel="stylesheet" href="/site/main/css/reset.css">
    <link rel="stylesheet" href="/site/main/css/space.css">
    <link rel="stylesheet" href="/site/main/css/main.css">
    <link rel="stylesheet" href="/site/main/css/kotra_common.css">
    <link rel="stylesheet" href="/site/main/css/gnb_new.css">
    <link rel="stylesheet" href="/site/main/css/main_new.css">
    <script src="/site/main/js/jquery.dotdotdot.js"></script>
    <script src="/site/main/js/kotra_common.js"></script>
    <script src="/site/main/js/gnb_bar_main.js"></script>
</head>
<body>
    <div class="skipNavi">
        <a href="#gnb" onclick="document.getElementById('gnb').tabIndex = -1;document.getElementById('gnb').focus();return false;">대메뉴바로가기</a>
        <a href="#right-cotents-box" onclick="document.getElementById('sub-page-content').tabIndex = -1;document.getElementById('sub-page-content').focus();return false;">본문바로가기</a>
    </div>
    <div class="wrap">
        <!-- S : header -->
        <header>
            <!-- S : top-menu -->
            <div class="top-menu-wrap">
                <div class="inner-wrap cf">
                    <ul class="kotra-sns cf">
                        <li><a href="https://www.kotra.or.kr" title="새창" target="_blank"><img src="/site/kotranews/images/common/kotra-pdf.png" alt="kotra" /></a></li>
                        <li><a href="https://www.facebook.com/globalwindow.kotra" title="새창" target="_blank">facebook</a></li>
                        <li><a href="https://twitter.com/globalwindow" title="새창" target="_blank" >twitter</a></li>
                        <li><a href="/kotranews/subIndex/65.do">RSS</a></li>
                        <li><a href="http://www.youtube.com/user/KOTRAglobalwindow" title="새창" target="_blank"> youtube</a></li>
                    </ul>
                    <ul class="member-area cf">
                        <li><a href="/common/proc/kotranews/kotraLogin/globalKotraLogout.do"><strong>로그아웃</strong></a></li>
                        <li><a href="/kotranews/subIndex/71.do">마이페이지</a></li>
                        <li><a href="/user/extra/kotranews/242/login/login/jsp/LayOutPage.do"><strong>로그인</strong></a></li>
                        <li><a href="http://www.kotra.or.kr/kh/member/KHMMMJ010M.html?&MENU_CD=F0150&TOP_MENU_CD=F0145&LEFT_MENU_CD=F0150&PARENT_MENU_CD=F0150?uniqueUrl=GW" target="_blank" title="새창">회원가입</a></li>
                        <li><a href="/user/extra/kotranews/63/siteMap/siteMap/jsp/LayOutPage.do">사이트맵</a></li>
                    </ul>
                </div>
            </div>
            <!-- E : top-menu -->
            <div class="logo_search_area cf">
                <h1 id="newLogo" class="fl">
                  <a href="/main/index.do">KOTRA 해외시장뉴스</a>
                </h1>
                <form action="#" method="post" id="total_search_form" class="fl">
                    <fieldset class="cf">
                        <legend>통합검색</legend>
                        <select name="total_search_cat" id="total_search_cat" title="통합검색 옵션" class="fl">
                            <option value="통합검색" selected>통합검색</option>
                            <option value="11">11</option>
                            <option value="22">22</option>
                        </select>
                        <input type="text" name="total_search_word" id="total_search_word" title="검색어" class="fl">
                        <input type="submit" value="검색" class="fl">
                    </fieldset>
                </form>
            </div>
            <div class="inner-wrap">
                <nav class="gnb-wrap cf" id="gnb">
                    <button type="button" class="btn-total-menu" value="">전체메뉴<span></span><span></span></button>
                    <!--@seed:/main/main/top/menu.do--><c:import url="/main/main/top/menu.do"></c:import><!--@seed:/main/main/top/menu.do-->
            </div>
        </header>
        <!-- E : header -->
