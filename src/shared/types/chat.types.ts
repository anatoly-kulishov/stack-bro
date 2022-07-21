export type ChatMessageTypeWithID = {
  id: string | number;
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

export enum ChatStatusMessageTypeEnum {
  PENDING = 'pending',
  READY = 'ready',
  ERROR = 'error',
}
