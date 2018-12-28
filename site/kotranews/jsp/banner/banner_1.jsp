<%@ page language='java' contentType='text/html; charset=UTF-8'%>
<%@ taglib uri='http://www.springframework.org/tags' prefix='s'%>
<%@ taglib uri='http://www.springframework.org/tags/form' prefix='form'%>
<%@ taglib uri='http://java.sun.com/jsp/jstl/functions' prefix='fn'%>
<%@ taglib uri='http://java.sun.com/jsp/jstl/core' prefix='c'%>
<%@ taglib uri='http://java.sun.com/jsp/jstl/fmt' prefix='fmt'%>

<c:set var="now" value="<%=new java.util.Date()%>" />
<c:set var="getDate"><fmt:formatDate value="${now}" pattern="yyyy-MM-dd" /></c:set>

<link href='/site/kotranews/jsp/banner/css/banner_1.css' rel='stylesheet' type='text/css'/>
<script src='/site/kotranews/jsp/banner/js/banner_1.js'></script>

<c:set var="memberIdxTmp" value="|${memberIdx}|" />
<c:set var="bannerManager_1" value="" />
<c:if test='${fn:contains(bannerManager_1, memberIdxTmp) || memberAuthM || memberGrant == "S"}'>
<div class="seedFunctionBtn"><a href="/gtm/kotranews/1/bannerDataList.do#bannerSetList" class="functionEdit">bannerManager</a></div>
</c:if>

<div class='banner_1'>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://president.globalwindow.org/'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160908134813_4e732ced3463d06de0ca9a15b6153677.jpg' style='width:207px; height:66px;' alt='정상외교경제활용포털' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.ois.go.kr/portal/page?_pageid=93,674897&_dad=portal&_schema=PORTAL&page=main'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160830141602_f457c545a9ded88f18ecee47145a72c0.png' style='width:207px; height:66px;' alt='해외투자진출 정보포털' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://keri.koreaexim.go.kr/site/main/index007'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160830141545_e2c0be24560d78c5e599c2a9c9d0bbd2.png' style='width:207px; height:66px;' alt='한국수출입은행 해외경제연구소 ' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.smba.go.kr/kr/index.do;jsessionid=JCCzrYgUqm+g6Bz8COoOF3rO.node01'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160830141527_d1fe173d08e959397adf34b1d77e88d7.png' style='width:207px; height:66px;' alt='중소기업청' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.pps.go.kr/gpass/index.do'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160922091528_84d9ee44e457ddef7f2c4f25dc8fa865.jpg' style='width:207px; height:66px;' alt='조달청 해외조달정보센터 배너' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.investkorea.org/en/index.do'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160830141511_ccb0989662211f61edae2e26d58ea92f.png' style='width:207px; height:66px;' alt='인베스트코리아 외국인투자유치' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.mofa.go.kr/main/index.jsp'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160830141455_cdc0d6e63aa8e41c89689f54970bb35f.png' style='width:207px; height:66px;' alt='외교부' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.kiet.re.kr/'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160830141432_7bcdf75ad237b8e02e301f4091fb6bc8.png' style='width:207px; height:66px;' alt='KIET 산업연구원' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.bizinfo.go.kr/uat/uia/actionMain.do'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160830141416_c3c59e5f8b3e9753913f4d435b53c308.png' style='width:207px; height:66px;' alt='비즈인포' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.kati.net/'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160830141401_f770b62bc8f42a0b66751fe636fc6eb0.png' style='width:207px; height:66px;' alt='농수산식품수출지원정보' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.mosf.go.kr/'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160830141334_f4f6dce2f3a0f9dada0c2b5b66452017.png' style='width:207px; height:66px;' alt='기획제정부' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.contactkorea.go.kr/index.do'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160830141130_e70611883d2760c8bbafb4acb29e3446.png' style='width:207px; height:66px;' alt='글로벌인재채용 고용추천서발급' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.kotra.or.kr/kh/service/KHSBGT040M.do?TOP_MENU_CD=F0261&LEFT_MENU_CD=F0273&MENU_CD=F0273&PARENT_MENU_CD=F0273'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160830141108_3dd48ab31d016ffcbf3314df2b3cb9ce.png' style='width:207px; height:66px;' alt='KOTRA 글로벌연수원' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.customs.go.kr/kcshome/main/index.do'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160830141048_7750ca3559e5b8e1f44210283368fc16.png' style='width:207px; height:66px;' alt='관세청' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><img src='/site/kotranews/upload/banner/1/1_20160830141032_d395771085aab05244a4fb8fd91bf4ee.png' style='width:207px; height:66px;' alt='http://www.knowtbt.kr/' /></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.tradenavi.or.kr/'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160830141016_e57c6b956a6521b28495f2886ca0977a.png' style='width:207px; height:66px;' alt='TRADE NAVI' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://meka.kotra.or.kr/ma/main/MAMAIN010M.html'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160830141001_f57a2f557b098c43f11ab969efe1504b.png' style='width:207px; height:66px;' alt='MEKA' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.lgeri.com/'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160830140948_3ad7c2ebb96fcba7cda0cf54a2e802f5.png' style='width:207px; height:66px;' alt='LG경제연구원' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.kiep.go.kr/index.do'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160830141847_1534b76d325a8f591b52d302e7181331.png' style='width:207px; height:66px;' alt='KIEP 대외경제정책연구원' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.ip-navi.or.kr/newindex.navi'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160830140918_2dea61eed4bceec564a00115c4d21334.png' style='width:207px; height:66px;' alt='IP-NAVI' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.gep.or.kr/frt/main/mainPage.do'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160902170307_90794e3b050f815354e3e29e977a88ab.png' style='width:207px; height:66px;' alt='GEP글로벌전시포털' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.kotra.or.kr/kh/main/KHMIUI010M.html'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160711131158_bbcbff5c1f1ded46c25d28119a85c6c2.jpg' style='width:207px; height:66px;' alt='KOTRA' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.gov30.go.kr/'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160711130748_847cc55b7032108eee6dd897f3bca8a5.jpg' style='width:207px; height:66px;' alt='정부3.0' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.seri.org/'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160711130801_47d1e990583c9c67424d369f3414728e.jpg' style='width:207px; height:66px;' alt='SERI' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.buykorea.org/main/BKBKMA010M.html'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160711130733_371bce7dc83817b7893bcdeed13799b5.jpg' style='width:207px; height:66px;' alt='buyKOREA' /></a></div></c:if>
			<c:if test='${"F" == "F" || (getDate >= "null" &&  getDate <= "null")}'><div><a href='http://www.motie.go.kr/www/wwwMain/main.do'  target='_blank'><img src='/site/kotranews/upload/banner/1/1_20160711130718_959a557f5f6beb411fd954f3f34b21c3.jpg' style='width:207px; height:66px;' alt='산업통상자원부' /></a></div></c:if>
	</div>

