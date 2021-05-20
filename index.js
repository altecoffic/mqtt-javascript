console.log("index.js");

// var client  = mqtt.connect({ host:'test.mosquitto.org', port: 8081})
// or
var client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')

var topic = document.getElementById('topic')
var subtopic = document.getElementById('subtopic')

client.on('connect', function() {
    console.log('connected')
})

var Topic = document.getElementById('topic').value;
var Payload = document.getElementById('payload').value;

client.on('message', function(Topic, Payload) {
    $(".table tbody").append("<tr><td>" + Topic + "</td><td>" + Payload + "</td></tr>")

})

$(document).ready(function() {
    $('#publish').click(function() {
        client.publish(topic.value, payload.value)
    })
    $('#subscribe').click(function() {
            var res = subtopic.value == "" ? alert("Please Fill up the Field") : client.subscribe(subtopic.value);
        })
        // $('#unsubscribe').click(function() {
        //     client.subscribe("")
        // })
    $('#clear').click(function() {
        $('#Table tbody').fadeOut("slow")
    })
})