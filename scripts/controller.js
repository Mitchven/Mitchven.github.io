//  // basic functionalities
// var connect = document.getElementById('btn-connect')
// var disconnect = document.getElementById('btn-disconnect')
// var status = document.getElementById('status')
// var publish = document.getElementById('btn-publish')
// var subscribe = document.getElementById('btn-subscribe')
// var unsubscribe = document.getElementById('btn-unsubscribe')

// //client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
// document.getElementById('address').value = "wss://test.mosquitto.org:8081/mqtt"

// connect.addEventListener('click', function (e) {
// 	e.preventDefault();
// 	client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
// 	document.getElementById('status').value = "Connected successfully!";

// 	subscribe.addEventListener('click', function () {
// 		client.subscribe(document.getElementById('topic').value)
// 	})

// 	unsubscribe.addEventListener('click', function () {
// 		client.subscribe(document.getElementById('topic').value)
// 		document.getElementById('sub-topic').value = "";
// 	})

// 	publish.addEventListener('click', function () {
// 		client.on("message", function (topic, payload) {
// 			console.log([topic, payload].join(": "));
// 		})
// 	})
// })

// disconnect.addEventListener('click', function () {
// 	client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
// 	client.end();
// 	document.getElementById('status').value = "Disconnected!";
// })
// basic functionalities
var client;



// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo")


var topicArray = []

// client.publish("mqtt/demo", "hello world!")
$('#btn-connect').on('click', function () {
	// connect
	console.log("connect button clicked..")
	client = mqtt.connect($("#address").val())
	client.on("connect", function(){
		console.log("Successfully connected");
		console.log("address: "+$("#address").val());
	})
	$("#status").val("Connected Successfully!")
	$("#status").css("color", "yellowgreen")
	$("#status").css("font-weight", "bold")
	client.on("message", function (topic, payload) {
		console.log("Received { topic:"+topic+"; payload: "+payload+" }");
		$('tbody').append('<tr><td style="color:lightpink">' + topic + '</td><td style="color:lightskyblue">' + payload + '</td><td style="color:red">'+moment().format('MMMM Do YYYY, h:mm:ss a') + '</td></tr>');
	})
})

$("#btn-disconnect").click(function () {
	client.end();
	console.log("Disconnected!")
	$("#status").val("Disconnected");
	$("#status").css("color", "red");
})//end disconnect

//Publish 
$("#btn-publish").click(function () {
	var topic = $("#pub-topic").val();
	var message = $("#payload").val();
	client.publish(topic, message);
	console.log("Published {topic:"+topic+"; payload:"+message+"}");
})

//Subscribe
$("#btn-subscribe").click(function () {
	var topic = $("#sub-topic").val();
	topicArray.push(topic);
	client.subscribe(topic);
	console.log("Subscribed {topic:"+topic+"}");
})
$("#btn-unsubscribe").click(function () {
	var topic = $("#sub-topic").val();
	client.unsubscribe(topic);
	console.log("Unsubscribed {topic:"+topic+"}");
})//end unsubscribe
//Message



















// basic functionalities
// var client;

// var btnPublish = $("#publish-btn")


// // client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// // client.subscribe("mqtt/demo")




// // client.publish("mqtt/demo", "hello world!")
// $('#btn-connect').on('click', function () {
//   // connect
//   console.log("connect button clicked..")
//   client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
//   $("#status").text("Connecting....")
//   $("#status").css("color", "yellow")
//   $("#status").css("font-style", "italic")
//   $("#status").css("font-weight", "bold")
//   // $("#status").removeClass("alert-secondary")
//   // $("#status").addClass("alert-warning")
//   client.on("connect", function () {
//     console.log("success")
//     $("#status").text("Connected Successfully!")
//     $("#status").css("color", "green")
//     $("#status").css("font-style", "italic")
//     $("#status").css("font-weight", "bold")
//     // $("#status").removeClass("alert-warning")
//     // $("#status").addClass("alert-success")
//   });// end connect

//   $("#btn-disconnect").click(function () {
//     client.end();
//     $("#status").text("Disconnected")
//     $("#status").css("color", "red")

//   })//end disconnect

//   //Publish 
//   $("#btn-publish").click(function () {
//     var topic = $("#topic").val();
//     var message = $("#message").val();
//     if (topic == "" || message == "") {
//       Swal.fire({
//         type: 'error',
//         title: 'All Input is Required',
//       })
//     } else {
//       client.publish(topic, message);
//       Swal.fire({
//         type: 'success',
//         title: 'Publish Successfully!',
//       })
//     }
//   })

//   //Subscribe
//   $("#btn-subscribe").click(function () {
//     var topsub = $("#topic-sub").val();
//     if (topsub == "") {
//       Swal.fire({
//         type: 'error',
//         title: 'Topic is Required',
//       })
//     } else {
//       client.subscribe(topsub);
//       Swal.fire({
//         type: 'success',
//         title: 'Subscribe Successfully',
//       })
//     }
//   })
//   $("#btn-unsubscribe").click(function () {
//     var topsub = $("#topic-sub").val();
//     if (topsub == "") {
//       Swal.fire({
//         type: 'error',
//         title: 'Topic is Required',
//       })
//     } else {
//       client.unsubscribe(topsub);
//       Swal.fire({
//         type: 'success',
//         title: 'Unsubscribe Successfully',
//       })
//     }
//     $("#btn-unsubscribe").removeClass("alert-success")
//     $("#btn-unsubscribe").addClass("alert-secondary")
//   })//end unsubscribe
//   //Message
//   client.on("message", function (topic, payload) {
//     var row = $("<tr>")
//     $("<td>").text(topic).appendTo($(row))
//     $("<td>").text(payload).appendTo($(row))
//     $("<td>").text(moment().format('MMMM Do YYYY, h:mm:ss a')).appendTo($(row))
//     $("tbody").append($(row))
//     // console.log([topic, payload].join(": "));


//   })

// })//end of click



// client.subscribe("mqtt/demo")

// btnPublish.on('click', function (e) {
//   e.preventDefault();
//   console.log("publish button clicked..")
//   client.publish("mqtt/demo", "hi I'm Jessa Mae good Morning")

//   client.on("message", function (topic, payload) {
//     console.log([topic, payload].join(": "));
//     // client.end();



//   })
//   // client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")

// })


// // advance functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo", function (err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("subscribed")
//   }
// })

// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!", function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("published")
//   }
// })

// // advance functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo", function (err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("subscribed")
//   }
// })

// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!", function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("published")
//   }
// })
