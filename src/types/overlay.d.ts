import type {
  PostNamazuCommandValue,
  OverlayCallValue,
  OverlayEventValue
} from '@src/utils/enum'

declare global {

  function callOverlayHandler<T extends OverlayCallValue>(option: {
    call: T
  } & (T extends 'broadcast' ? {
    source: string,
    msg: {
      [key: string]: any
    }
  } : {
    c: PostNamazuCommandValue,
    p: string
  })): void

  function addOverlayListener(event: OverlayEventValue, callback: (data) => void)

  function startOverlayEvents(): void

}
