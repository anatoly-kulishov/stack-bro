import { StatusMessageType } from '../store/reducers/messengerReducer/messengerReducer';
import { IChatMessage } from '../shared/types/chat.types';
import { Nullable } from '../shared/types';

type EventsNamesType = 'messages-received' | 'status-changed';

type MessagesReceivedSubscribersType = (messages: IChatMessage[]) => void;
type StatusChangedSubscribersType = (messages: StatusMessageType) => void;

const subscribers = {
  'messages-received': [] as MessagesReceivedSubscribersType[],
  'status-changed': [] as StatusChangedSubscribersType[],
};

let ws: Nullable<WebSocket> = null;
const closeHandler = () => {
  notifySubscribersAboutStatus('pending');
  setTimeout(createChanel, 3000);
};

const messageHandler = (e: MessageEvent) => {
  const newMessages = JSON.parse(e.data);
  subscribers['messages-received'].forEach(s => s(newMessages));
};

const openHandler = () => {
  notifySubscribersAboutStatus('ready');
};

const errorHandler = () => {
  notifySubscribersAboutStatus('error');
  console.error('Refresh page');
};

const cleanUp = () => {
  ws?.removeEventListener('close', closeHandler);
  ws?.removeEventListener('message', messageHandler);
  ws?.removeEventListener('open', openHandler);
  ws?.removeEventListener('error', errorHandler);
};

const notifySubscribersAboutStatus = (status: StatusMessageType) => {
  subscribers['status-changed'].forEach(s => s(status));
};

function createChanel() {
  cleanUp();
  ws?.close();
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
  notifySubscribersAboutStatus('pending');
  ws?.addEventListener('close', closeHandler);
  ws?.addEventListener('message', messageHandler);
  ws?.addEventListener('open', openHandler);
  ws?.addEventListener('error', errorHandler);
}

export const messengerAPI = {
  start() {
    createChanel();
  },
  stop() {
    subscribers['messages-received'] = [];
    subscribers['status-changed'] = [];
    cleanUp();
    ws?.close();
  },
  subscribe: (eventName: EventsNamesType, callback: MessagesReceivedSubscribersType | StatusChangedSubscribersType) => {
    // @ts-ignore
    subscribers[eventName].push(callback);
    return () => {
      // @ts-ignore
      subscribers[eventName] = subscribers[eventName].filter(s => s !== callback);
    };
  },
  unsubscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscribersType | StatusChangedSubscribersType) {
    // @ts-ignore
    subscribers[eventName] = subscribers[eventName].filter(s => s !== callback);
  },
  sendMessage(message: string) {
    ws?.send(message);
  },
};
