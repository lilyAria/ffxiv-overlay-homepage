declare module 'element-plus/dist/locale/zh-cn.mjs'

interface ObjectConstructor {
  hasOwn<T extends string>(target: object, property: T): target is object & {[key in T]: any}
}