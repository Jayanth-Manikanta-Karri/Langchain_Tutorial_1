import React, { useEffect, useState } from 'react'
import ChatApi from '../api/nodeapi'

function Chat() {
    const [msg, setMsg] = useState("")
    const [ans, setAns] = useState("")

    function handleSubmit() {
        ChatApi.post('/chat',{
            'question':msg
        }).then((response) => {
            setAns(response.data)
        })
    }

    function handleInput(e) {
        setMsg(e?.target?.value);
    }

    return (
        <>
            <div>Chatbot</div>
            <input type='text' value={msg} onChange={(e) => handleInput(e)} />
            <button onClick={()=> handleSubmit()}>Submit</button>
            {ans}
        </>
    )
}

export default Chat