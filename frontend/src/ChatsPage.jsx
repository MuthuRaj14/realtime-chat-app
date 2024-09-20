import React from 'react'
import {PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
  return (
    <div style={{height:'100vh'}}>
        <PrettyChatWindow
            projectId='c8dbbbd4-0436-4870-bc16-6445e06448da'
            username={props.user.username}
            secret={props.user.secret}
            style={{height:'100%'}}
        />
    </div>
  )
}

export default ChatsPage