var Discordie = require('discordie')
const Events = Discordie.Events;
const client = new Discordie();

client.connect({
  token: 'MzM3Mzc3MDg2NDI1NTMwMzY4.DFF-bw.Q7IqEkdW8hc6hO2XwkU-8DcYME0'
});
client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log('Connected as: ' + client.User.Username);
});
client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
if(e.message.content == 'PING') {
  e.message.channel.sendMessage('PONG');
}

});
