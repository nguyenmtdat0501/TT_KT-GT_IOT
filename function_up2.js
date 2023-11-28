  // Firebase setting
  const firebaseConfig = {
    apiKey: "AIzaSyABxrjk5MnJz2aK3VrEKwmlpb2tWAd1wrA",
    authDomain: "project-iot-50a34.firebaseapp.com",
    databaseURL: "https://project-iot-50a34-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project-iot-50a34",
    storageBucket: "project-iot-50a34.appspot.com",
    messagingSenderId: "350603937946",
    appId: "1:350603937946:web:642e47dcd80bfcbf6b3723",
    measurementId: "G-N1V6W8P0DN"
  };

  var image1 = document.getElementById("control1");
  var image2 = document.getElementById("control2");
  var image3 = document.getElementById("control3");
  var image4 = document.getElementById("control4");


firebase.initializeApp(firebaseConfig);

const database = firebase.database();
firebase.analytics();


var humiditySolid = document.getElementById('humiditySolid_value');
var dbRef1 = firebase.database().ref('Area2').child('humiditySolid');
dbRef1.on('value', snap => humiditySolid.innerText = snap.val());

var humidityAir = document.getElementById('humidityAir_value');
var dbRef2 = firebase.database().ref('Area2').child('humidityAir');
dbRef2.on('value', snap => humidityAir.innerText = snap.val());

var light = document.getElementById('light_value');
var dbRef3 = firebase.database().ref('Area2').child('lightValue');
dbRef3.on('value', snap => light.innerText = snap.val());

var temperature = document.getElementById('temperature_value');
var dbRef4 = firebase.database().ref('Area2').child('temperature');
dbRef4.on('value', snap => temperature.innerText = snap.val());

//TOGGLE1
var switchCheckbox1 = document.getElementById('btn1');
const databaseRef = firebase.database().ref('Area2');
function toggle1() {
  if (switchCheckbox1.checked) {
    databaseRef.child('pump').set(true);
  } else {
    databaseRef.child('pump').set(false);
  }
}
function updateState1(value) {
  if (value == true) {
    switchCheckbox1.checked = true;
    image1.style.filter = "none";
  } else {
    switchCheckbox1.checked = false;
    image1.style.filter = "grayscale(100%)";
  }
}

databaseRef.child('pump').once('value', (snapshot) => {
  const value1 = snapshot.val();
  updateState1(value1);
});
databaseRef.child('pump').on('value', (snapshot) => {
  const value1 = snapshot.val();
  updateState1(value1);
});

//TOGGLE 2
var switchCheckbox2 = document.getElementById('btn2');
function toggle2() {
  if (switchCheckbox2.checked) {
    databaseRef.child('nebulizer').set(true);
  } else {
    databaseRef.child('nebulizer').set(false);
  }
}
function updateState2(value) {
  if (value == true) {
    switchCheckbox2.checked = true;
    image2.style.filter = "none";
  } else {
    switchCheckbox2.checked = false;
    image2.style.filter = "grayscale(100%)";
  }
}

databaseRef.child('nebulizer').once('value', (snapshot) => {
  const value2 = snapshot.val();
  updateState2(value2);
});
databaseRef.child('nebulizer').on('value', (snapshot) => {
  const value2 = snapshot.val();
  updateState2(value2);
});

//TOGGLE 3
var switchCheckbox3 = document.getElementById('btn3');
function toggle3() {
  if (switchCheckbox3.checked) {
    databaseRef.child('light').set(true);
  } else {
    databaseRef.child('light').set(false);
  }
}
function updateState3(value) {
  if (value == true) {
    switchCheckbox3.checked = true;
    image3.style.filter = "none";
  } else {
    switchCheckbox3.checked = false;
    image3.style.filter = "grayscale(100%)";
  }
}

databaseRef.child('light').once('value', (snapshot) => {
  const value3 = snapshot.val();
  updateState3(value3);
});
databaseRef.child('light').on('value', (snapshot) => {
  const value3 = snapshot.val();
  updateState3(value3);
});

//TOGGLE 4
var switchCheckbox4 = document.getElementById('btn4');

function toggle4() {
  if (switchCheckbox4.checked) {
    databaseRef.child('airconditioner').set(true);

  } else {
    databaseRef.child('airconditioner').set(false);
    
  }
}
function updateState4(value) {
  
  if (value == true) {
    switchCheckbox4.checked = true;
    image4.style.filter = "none";
    
  } else {
    switchCheckbox4.checked = false;
    image4.style.filter = "grayscale(100%)";
  }
}

databaseRef.child('airconditioner').once('value', (snapshot) => {
  const value4 = snapshot.val();
  updateState4(value4);
});
databaseRef.child('airconditioner').on('value', (snapshot) => {
  const value4 = snapshot.val();
  updateState4(value4);
});


function toggleImage1() {
  var image1 = document.getElementById("control1");
  var checkbox1 = document.getElementById("btn1");

  if (checkbox1.checked) {
    image1.style.filter = "none"; // Đặt filter thành none để màu bình thường
  } else {
    image1.style.filter = "grayscale(100%)"; // Đặt filter thành grayscale để chuyển về hệ gray
  }
}


function toggleImage2() {
  var image2 = document.getElementById("control2");
  var checkbox2 = document.getElementById("btn2");

  if (checkbox2.checked) {
    image2.style.filter = "none"; // Đặt filter thành none để màu bình thường
  } else {
    image2.style.filter = "grayscale(100%)"; // Đặt filter thành grayscale để chuyển về hệ gray
  }
}

function toggleImage3() {
  var image3 = document.getElementById("control3");
  var checkbox3 = document.getElementById("btn3");

  if (checkbox3.checked) {
    image3.style.filter = "none"; // Đặt filter thành none để màu bình thường
  } else {
    image3.style.filter = "grayscale(100%)"; // Đặt filter thành grayscale để chuyển về hệ gray
  }
}

function toggleImage4() {
  var image4 = document.getElementById("control4");
  var checkbox4 = document.getElementById("btn4");

  if (checkbox4.checked) {
    image4.style.filter = "none"; // Đặt filter thành none để màu bình thường
  } else {
    image4.style.filter = "grayscale(100%)"; // Đặt filter thành grayscale để chuyển về hệ gray
  }
}




/chart/ 

const yValues1 = [];
const xValues1 = [1,2,3,4,5,6,7,8,9,10,11,12];

const chart = new Chart("myChart1", {
  type: "line",
  data: {
    labels: xValues1,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues1
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:100}}],
    }
  }
});

function updateValue() {
  if (yValues1.length >= 12) {
    yValues1.shift();
  }

  var dbRef1 = database.ref('Area2').child('humiditySolid');
  dbRef1.once('value', function(snapshot) {
    var newValue = snapshot.val(); // Lấy giá trị từ snapshot
    yValues1.push(newValue);

    // Cập nhật lại dữ liệu cho biểu đồ
    chart.data.datasets[0].data = yValues1;
    chart.update();
  });
}

setInterval(updateValue, 5000);

// chart 2
const yValues2 = [];
const xValues2 = [1,2,3,4,5,6,7,8,9,10,11,12];

const chart2 = new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValues2,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues2
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:100}}],
    }
  }
});

function updateValue2() {
  if (yValues2.length >= 12) {
    yValues2.shift();
  }

  var dbRef1 = database.ref('Area2').child('humidityAir');
  dbRef1.once('value', function(snapshot) {
    var newValue = snapshot.val(); // Lấy giá trị từ snapshot
    yValues2.push(newValue);

    // Cập nhật lại dữ liệu cho biểu đồ
    chart2.data.datasets[0].data = yValues2;
    chart2.update();
  });
}

setInterval(updateValue2, 5000);
// chart 3
const yValues3 = [];
const xValues3 = [1,2,3,4,5,6,7,8,9,10,11,12];

const chart3 = new Chart("myChart3", {
  type: "line",
  data: {
    labels: xValues3,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues3
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:1}}],
    }
  }
});

function updateValue3() {
  if (yValues3.length >= 12) {
    yValues3.shift();
  }

  var dbRef3 = database.ref('Area2').child('lightValue');
  dbRef3.once('value', function(snapshot) {
    var newValue = snapshot.val(); // Lấy giá trị từ snapshot
    yValues3.push(newValue);

    // Cập nhật lại dữ liệu cho biểu đồ
    chart3.data.datasets[0].data = yValues3;
    chart3.update();
  });
}
setInterval(updateValue3, 5000);
// chart 4
const yValues4 = [];
const xValues4 = [1,2,3,4,5,6,7,8,9,10,11,12];

const chart4 = new Chart("myChart4", {
  type: "line",
  data: {
    labels: xValues4,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues4
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: -40, max:80}}],
    }
  }
});

function updateValue4() {
  if (yValues4.length >= 12) {
    yValues4.shift();
  }

  var dbRef4 = database.ref('Area2').child('temperature');
  dbRef4.once('value', function(snapshot) {
    var newValue = snapshot.val(); // Lấy giá trị từ snapshot
    yValues4.push(newValue);

    // Cập nhật lại dữ liệu cho biểu đồ
    chart4.data.datasets[0].data = yValues4;
    chart4.update();
  });
}

setInterval(updateValue4, 5000);
// thay doi mau anh
window.onload = function() {
  updateState1(value);
  updateState2(value);
  updateState3(value);
  updateState4(value);
  toggleImage1();
  toggleImage2();
  toggleImage3();
  toggleImage4();
};

// // luu tru data cho chart
// var databaseRef2 = firebase.database().ref('area1_data');
// var data_chart1 = [];

// window.onload = function() {
//   databaseRef2.once('value', function(snapshot) {
//     var data = snapshot.val(); // Lấy dữ liệu từ "area1_data"
//     for (var i = 0; i < 10; i++) {
//       var value1 = data[i]; // Lấy giá trị từ chỉ mục i trong mảng
  
//       // Thêm giá trị vào mảng dataArray
//       data_chart1.push(value1);
//     }
//   });
// };
// dbRef1.on('value', function(snapshot) {
//   var value2 = snapshot.val();

//   // Thêm giá trị mới vào đầu mảng
//   data_chart1.unshift(value2);

//   // Giới hạn mảng chỉ có tối đa 10 giá trị
//   if (data_chart1.length > 10) {
//     data_chart1.pop(); // Xoá giá trị cuối mảng
//   }
//   databaseRef2.set(data_chart1);
// });
