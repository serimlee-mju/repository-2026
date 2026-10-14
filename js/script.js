//가장 먼저 하는 일 : console에 log로 해당 파일이 연결되었는지 찍어보기
console.log("complete");
console.log($(window).width());
console.log($(window).height());
//현재 브라우저 창의 가로 너비(px)와 세로길이를 console에 출력.

//현재 브라우저 창의 가로세로 길이를 변수에 각각 저장해서 사요할 수 있ㄷ.
let wWidth = $(window).width();
let wHeight = $(window).height();
//변수에 할당된 값을 확인할 때 또 log를 찍어볼 수 있다.

//console.log(wWidth);
//console.log(wHeight);
//현재 변수에 뭐가 들어갔는지 확인한다.
//ㅡㅡ 화면 크기를 알기 위해ㅡㅡ

//고양이랑 풀숲 배경 조정해보기
$(document).on("mousemove", function (event) {
  console.log(event);
  //마우스 X,Y의 좌표값 변수 전달
  let mouseX = event.pageX;
  let mouseY = event.pageY;

  //1. 마우스 이동에 따라 배경 이미지의 위치 움직이게 하기
  $(".bg-img").css("object-position", `${mouseX / 10}% ${mouseY / 10}%`);
  //  ->  ``는 벡틱이라 부른다, ~를 시프트 없이 쓰면 된다.

  //2. 마우스 커서에 고양이 이미지 따라다니게 하기
  //고양이 이미지에 가로세로 너비를 각각 변수에 할당함.
  let imgWidth = $(".cat-img").width();
  let imgHeight = $(".cat-img").height();
  // -> /2를 뒤에 붙임으로 딱 마우스 중간에 고양이사진이 가게 된다.
  //   let imgWidth = $(".cat-img").width() / 2;
  //   let imgHeight = $(".cat-img").height() / 2;
  // 아니면 아래에
  //    $(".cat-img").css("left", mouseX - imgWidth /2 + "px");
  //    $(".cat-img").css("top", mouseY - imgHeight /2 + "px"); 이렇게 붙여도 된다.
  //변수의 값을 할당할 때 이미지 너비를 미리 2로 나눠서 적용하거나
  //이미지의 포지션 값을 적용할때 고양이 이미지의 절반을 계산해서 넣거나 상황에 따라 선택해 적용할 수 있다.
  //이미지의 left, top값의 변화를 위에서 선언한 mouse X,Y 좌표값을 가져와서 적용함.
  //이미지 가로세로의 절반씩 좌표가 수정되어서 커서 위치에 이미지의 중심이 오도록 설정
  $(".cat-img").css("left", mouseX - imgWidth / 2 + "px");
  $(".cat-img").css("top", mouseY - imgHeight / 2 + "px");
});

//mousemove 이벤트가 일어날때마다 mouse커서의 X,Y값을 구해서 function을 적용할 수 있습니다.
console.log(event);
$(document).mousemove(function (e) {
  //function의 e는 event를 의미, 문서에서 mousemove가 발생할때마다{}의 코드를 실행하라.
  $("#status").html(e.pageX + "," + e.pageY);
  //#을쓰는건 id랑 이어져서 그렇다. + status라는 친구가 적용된 요소의 안쪽 을 기능을 통해 불러와서 표시해라.
  $(".box").css("width", e.pageX);
  $(".box").css("height", e.pageY);
});
//마우스커서를 따라 움직이는 상자와 가로세로 픽셀이 적힌다.
//e 는 매개변수로, 이벤트를 의미한다.
