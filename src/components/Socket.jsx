import React from 'react'

import { useEffect } from 'react';
function Socket ({data,setData,socket})
{
    useEffect( () =>
    {
        
        socket.on( "connection", data =>
        {
            console.log("connected!!")
        } )
        socket.on( "message", message =>
        {
           let messageObj = {
             text: message.text,
             written: "friend",
             writer:message.writer
           };
            console.log(message)
           setData((prev) => [...prev, messageObj]);
        })
    },[])
    return (
        <div>
            
        </div>
    )
}

export default Socket
