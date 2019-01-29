import { Message } from 'element-ui'

export function throwIfMissing (name) {
  Message.error({ message: `Missing parameter: ${name}`, duration: 0 })
  throw new Error(`Missing parameter: ${name}`)
}

export function error (text) {
  Message.error({ message: `${text}`, duration: 0 })
  throw new Error(text)
}
