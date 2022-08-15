const tmi = require('tmi.js'),
    { channel,username, password } = require('./settings.json');

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username,
        password
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('connected', () => {
    client.say(channel, 'connect')
});

client.on('message', (channel, user, message, self) => {
    if(self) return;


    if(message == '@HAHAHAHAHAHAHAHAXDD') {
        client.say(channel, `@${user.username} hej kolego `);
    }
    if(message == 'Nie pisz/sugeruj/próbuj pisać rasistowskich rzeczy. Nie łam zasad Twitch ToS. Nie zachęcaj innych do łamania zasad Twitch ToS.') {
        client.say(channel, `Nie pisz/sugeruj/próbuj pisać rasistowskich rzeczy. Nie łam zasad Twitch ToS. Nie zachęcaj innych do łamania zasad Twitch ToS.  `);
    }
      if(message == '!zjeb') {
        client.say(channel, `@${user.username} wylosowal sie adamcy_ adamcyPomidor `); 
    }
    
})
