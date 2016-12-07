import member_quiz from "./quiz";
import config from "./config";

var members = member_quiz.personal_quiz.map(v => v.name);

// shuffle
for(var i = 0; i < members.length; i++){
 var l= Math.floor(Math.random()*(members.length-i));
 var tmp = members[i];
 members[i] = members[i+l];
 members[i+l] = tmp;
}


var seat_length = config.table.seat *
 config.seatingChart.horizontal *
 config.seatingChart.vertical;

members = members.concat(Array.from({
 length: Math.max(seat_length - members.length, 0)
}, ()=>""));

export default members;
