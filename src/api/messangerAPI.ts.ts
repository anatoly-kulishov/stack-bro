import {ChatMessageType, Nullable} from "../types";

type SubscribersType = (messages: ChatMessageType[]) => void;

let subscribers = [] as SubscribersType[];

let ws: Nullable<WebSocket> = null;
const closeHandler = () => {
    console.log('Close WS')
    setTimeout(createChanel, 3000);
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers.forEach(s => s(newMessages))
};

function createChanel() {
    ws?.removeEventListener('close', closeHandler);
    ws?.close();
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    ws?.addEventListener('close', closeHandler);
    ws?.addEventListener('message', messageHandler)
}

const messengerAPI = {
    start() {
        createChanel();
    },
    stop() {
        subscribers = [];
        ws?.removeEventListener('close', closeHandler);
        ws?.removeEventListener('message', messageHandler);
        ws?.close()
    },
    subscribe: (callback: SubscribersType) => {
        subscribers.push(callback);
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },
    unsubscribe(callback: SubscribersType) {
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}

export default messengerAPI;