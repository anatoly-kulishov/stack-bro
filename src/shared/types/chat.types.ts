export type StatusMessageType = 'pending' | 'ready' | 'error';

export interface IChatMessageWithID {
  id: string | number;
  message: string;
  photo: string;
  userId: number;
  userName: string;
}

export interface IChatMessage {
  message: string;
  photo: string;
  userId: number;
  userName: string;
}

export interface IChatMessageInput {
  status: StatusMessageType;
}
