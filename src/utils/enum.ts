/**
 * 鲶鱼精指令类型
 */
export const PostNamazuCommand = {
  /** 游戏内指令 */
  COMMOAND: 'command',

  /** 发送按键指令 */
  SEND_KEY: 'sendKey',

  /** 发送队列指令 */
  QUEUE: 'queue'
} as const;
export type TPostNamazuCommand = typeof PostNamazuCommand
export type PostNamazuCommandValue = TPostNamazuCommand[keyof TPostNamazuCommand] 

export const OverlayCall = {
  /** 鲶鱼精 */
  POST_NAMAZU: 'PostNamazu',

  /** 全域广播 */
  BROADCAST: 'broadcast'
} as const;
export type TOverlayCall = typeof OverlayCall
export type OverlayCallValue = TOverlayCall[keyof TOverlayCall]

/** 键盘按键keycode */
export const KeyCode = {
  /** 小键盘0 */
  KEYPAD_0: 96
} as const

export const BroadcastSource = {
  /** 自动搓 */
  AUTO_CRAFT: 'AutoCraft'
} as const

export const OverlayEvent = {
  BROADCAST_MESSAGE: 'BroadcastMessage',
} as const
export type TOverlayEvent = typeof OverlayEvent
export type OverlayEventValue = TOverlayEvent[keyof TOverlayEvent]