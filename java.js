
//熱狗提示窗
function customizeWindowEvent() {
    var popup_window = document.getElementById("window-container");

    popup_window.style.display = "block";

    window.onclick = function close(e) {
        if (e.target == popup_window) {
            popup_window.style.display = "none";
        }
    }
}

//棉花糖提視窗
function showDialogBtn() {
    $(".modal").css("display", "block"); // 顯示modal，遮住畫面背景。
    $(".dialog").css("display", "block"); // 顯示dialog。

    $(".dialog").animate({
        opacity: '1',
        top: '50px' // 決定對話框要滑到哪個位置停止。		   
    }, 550);
};

$(".cancelBtn").click(function () {
    $(".dialog").animate({
        opacity: '0',
        top: '-50px' // 需與CSS設定的起始位置相同，以保證下次彈出視窗的效果相同。			   
    }, 350, function () {
        // 此區塊為callback function，會在動畫結束時被呼叫。
        $(".modal").css("display", "none"); // 隱藏modal。
        $(".dialog").css("display", "none"); // 隱藏dialog。
    });
});


var i, x, text, count, count1; countssr; countsr; countr; countn; money;
text = "";
count = 0;
count1 = 0;//抽卡次數
countssr = 0;
countsr = 0;
countr = 0;
countn = 0;
money = 0;


var luckyman, choose, rValue, money, wait, opportunity;
opportunity = 1;
money = 0;
wait = 60;//計時60秒
let sum = 0;
var myArray = [10, 20, 50, 80, 100];
//var myArray = ["<img src=Picture /money2.png  width: 100px>", "<img src=Picture/money3.png width:100px>"];
var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", set);

//限制抽獎按鈕下次點擊時間
function set() {
    time(this);
    setTimeout(function () { }, 1000);//1秒後再跳出提示窗
}
function time(o) {
    if (wait == 0) {
        o.removeAttribute("disabled");
        wait = 60;
    } else {
        o.setAttribute("disabled", true);
        wait--;
        setTimeout(function () {
            time(o)
        }, 1000)
    }
}

//抽獎
function myFunction() {
    choose = getRandom(myArray.length);
    switch (choose) {
        case 0:
            document.getElementById("number").innerHTML = "<div style='text-align:center;left: 50%;'><img src='Picture/money0.png' width='80px' height='100px'></div>";
            break;
        case 1:
            document.getElementById("number").innerHTML = "<div style='text-align:center;left: 50%;'><img src='Picture/money1.png' width='100px' height='130px'></div>";
            break;
        case 2:
            document.getElementById("number").innerHTML = "<div style='text-align:center;left: 50%;'><img src='Picture/money2.png' width='100px' height='130px'></div>";
            break;
        case 3:
            document.getElementById("number").innerHTML = "<div style='text-align:center;left: 50%;'><img src='Picture/money3.png' width='100px' height='130px'></div>";
            break;
        case 4:
            document.getElementById("number").innerHTML = "<div style='text-align:center;left: 50%;'><img src='Picture/money4.png' width='100px' height='130px'></div>";
            break;
        default:
            document.getElementById("number").innerHTML = 'No medal awarded.';
            break;
    }
    //document.getElementById("number").innerHTML = choose;
    rValue = myArray[choose];
    document.getElementById("luckyman").innerHTML = "恭喜你！獲得 " + rValue + " 代幣";
    sum += myArray[choose];
    document.getElementById("allmoney").innerHTML = sum;
    y = "1分鐘后可再次抽獎";
    document.getElementById("talk").innerHTML = y;
    //myArray = [10, 20, 50, 80, 100];
    //document.getElementById("array").innerHTML = myArray;
}
function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//儲值
function store() {
    var x;
    var r = prompt("請輸入儲值金額!");
    if (r == null) {
        x = "取消輸入!";
    }
    else {
        x = "儲值成功";
    }
    alert(x);
    r = Number(r);
    sum += r;
    document.getElementById("allmoney").innerHTML = sum;
}

function one() {
    sum -= 80;
    if (sum < 0) {
        alert("代幣不足請先儲值");
        sum = 0;
        return;
    }
    document.getElementById("allmoney").innerHTML = sum;

    text = "";
    x = Math.floor(Math.random() * 100) + 1;
    if (x <= 5) {
        ssr();
        countssr = countssr + 1;//計算已抽到的ssr卡張數
        document.getElementById("countssr").innerHTML = countssr;
    };
    if (x > 5 && x <= 25) {
        sr()
        countsr = countsr + 1;//計算已抽到的sr卡張數
        document.getElementById("countsr").innerHTML = countsr;
    };
    if (x > 25 && x <= 60) {
        r()
        countr = countr + 1;//計算已抽到的r卡張數
        document.getElementById("countr").innerHTML = countr;
    };
    if (x > 60 && x <= 100) {
        n()
        countn = countn + 1;//計算已抽到的n卡張數
        document.getElementById("countn").innerHTML = countn;
    };
    playAudio();
    document.getElementById("demo").innerHTML = text;

    //累計抽卡張數
    count = count + 1;
    document.getElementById("count").innerHTML = count;
    count1 = count1 + 1;
    document.getElementById("count1").innerHTML = count1;
}

function ten() {
    if (sum < 650) {
        alert("代幣不足請先儲值");
        sum = sum;
        return;
    }
    sum -= 650;
    document.getElementById("allmoney").innerHTML = sum;

    text = "";
    for (i = 1; i <= 10; i++) {
        x = Math.floor(Math.random() * 100) + 1;
        if (x <= 5) {
            ssr();
            countssr = countssr + 1;//計算已抽到的ssr卡張數
            document.getElementById("countssr").innerHTML = countssr;
        } else if (x <= 25) {
            sr();
            countsr = countsr + 1;//計算已抽到的sr卡張數
            document.getElementById("countsr").innerHTML = countsr;
        } else if (x <= 60) {
            r();
            countr = countr + 1;//計算已抽到的r卡張數
            document.getElementById("countr").innerHTML = countr;
        } else {
            n();
            countn = countn + 1;//計算已抽到的n卡張數
            document.getElementById("countn").innerHTML = countn;
        }
    }

    //音效
    playAudio();
    document.getElementById("demo").innerHTML = text;

    //累計抽卡張數
    count = count + 10;
    document.getElementById("count").innerHTML = count;
    count1 = count1 + 1;
    document.getElementById("count1").innerHTML = count1;

}

function ssr() {
    var ran = Math.floor(Math.random() * 2) + 1;
    text += "<div style='margin:6px 6px;float:left;text-align:center;'><img src='Picture/SSR" + ran + ".jpg' width='180px' height='230px'></div>";
}
function sr() {
    var ran = Math.floor(Math.random() * 2) + 1;
    text += "<div style='margin:6px 6px;float:left;text-align:center;'><img src='Picture/SR" + ran + ".jpg' width='180px' height='230px'></div>";
}
function r() {
    var ran = Math.floor(Math.random() * 2) + 1;
    text += "<div style='margin:6px 6px;float:left;text-align:center;'><img src='Picture/R" + ran + ".jpg' width='180px' height='230px'></div>";
}
function n() {
    var ran = Math.floor(Math.random() * 4) + 1;
    text += "<div style='margin:6px 6px ;float:left;text-align:center;'><img src='Picture/N" + ran + ".jpg' width='180px' height='230px'></div>";
}


function playAudio() {
    document.getElementById("demo").innerHTM = text;
    audio.src = "Music/bk.mp3";
    audio.play();
}
