var socket = io();

    socket.on('connect',function (){
        console.log('connected to server');
        
        socket.emit('createEmail',{
            to:'jen@example.com',
            text:'Hey. this is andew'
        });

        socket.emit('createMessage',{
            to:'enis@example.com',
            text:'New message from client'
        });

    });

    
    socket.on('disconnect',function () {
        console.log('Disconnected from server');
    });



    socket.on('newMessage',function(message){
        console.log('New Message',message);
    });