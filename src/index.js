import "./styles.css";

var _foo = "FOOOO!";

function setFoo(foo) {
  _foo = foo;
  $("#toll").html(_foo);
}

function barChanged() {
  var wert = $("#bar").val();
  setFoo(wert);
}
