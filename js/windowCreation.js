function func(buttonValue) {
    remove_div();
    add_div(buttonValue);
}

function add_div(buttonValue) {
    var div = document.createElement('div');
    div.id = "contentBox";
    div.innerHTML += document.getElementById(buttonValue.getAttribute('id')).getAttribute('id');

    document.getElementById('field').appendChild(div);
    console.log("clicked");
}

function remove_div() {
    if (document.getElementById('contentBox') == null) {
      return;
    }
    document.getElementById('contentBox').remove();
}
