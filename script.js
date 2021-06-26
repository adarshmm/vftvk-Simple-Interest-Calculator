function simple_interest() {
    var p, t, r, si, year;
    p = document.getElementById("first").value;
    t = document.getElementById("second").value;
    r = document.getElementById("third").value;
    year = parseInt(new Date().getFullYear()) + parseInt(t)
    if (parseInt(p) <= 0) {
        alert('enter a positive number')
        location.reload()
    } else {
        si = parseInt((p * t * r) / 100);
        amount = p * Math.pow((1 + r / 100), t);
        document.getElementById('num').innerHTML = "If you deposit : " + p + "<br>at an interest of  " + r + "<br>you will recieve an amount of  " + si + "<br>in the year  " + year;
    }
}