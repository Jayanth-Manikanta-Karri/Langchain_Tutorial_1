import axios from 'axios'

const ChatApi = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
      'Accept': '*/*',
    }
})

export default ChatApi;