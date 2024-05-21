import React, { useState } from 'react'
import ChatApi from '../../api/nodeapi'

function Chat() {
    const [msg, setMsg] = useState("")
    const [ans, setAns] = useState([])

    function handleSubmit() {
        ChatApi.post('/chat', {
            'question': msg
        }).then((response) => {
            setAns([...ans, response.data])
        })
    }

    function handleInput(e) {
        setMsg(e?.target?.value);
    }

    return (
        <>
            <div>
                <h1>Chat Application</h1>
                <input type='text' value={msg} onChange={(e) => handleInput(e)} />
                <br />
                <button onClick={() => handleSubmit()}>Submit</button>
                <br />
                {
                    ans.map((ansli) => {
                        return (<li>{ansli}</li>)
                    })
                }
            </div>
        </>
    )
}

export default Chat