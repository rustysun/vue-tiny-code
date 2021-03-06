/*
 * @Author: jsjzh
 * @Email: kimimi_king@163.com
 * @Date: 2018-6-28 15:13:23
 * @LastEditors: jsjzh
 * @LastEditTime: 2019-03-15 20:34:50
 * @Description: 常用函数包装
 */
import * as R from 'ramda'
import { Message } from 'element-ui'

const OBJECT = '[object Object]'
const ARRAY = '[object Array]'
const NUMBER = '[object Number]'
const FUNCTION = '[object Function]'
const STRING = '[object String]'
const NULL = '[object Null]'
const UNDEFINED = '[object Undefined]'

// 判断两者数据类型是否相等
// 若不相等 返回 true
export function EXtypeof(item, type) {
  return Object.prototype.toString.call(item) === Object.prototype.toString.call(type)
}

/**
 * 合并 promise 请求
 * @param {Array} promises promise 请求
 */
export function mergePromises(promises) {
  if (!EXtypeof(promises, new Array())) return
  return new Promise((resolve, reject) => {
    Promise.all(promises).then(resArr => {
      resolve(resArr)
    })
  })
}

/**
 * 传入数组或者对象 深度遍历 将所有 value 为 null undefined "" 转为 -
 * @param {Object | Array} obj
 */
export function filterObject(obj) {
  if (typeof obj !== 'array' && typeof obj !== 'object') return
  if (Object.prototype.toString.call(obj) === ARRAY) {
    obj.forEach(elem => {
      filterObject(elem)
    })
  } else if (Object.prototype.toString.call(obj) === OBJECT) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        let item = obj[key]
        if (Object.prototype.toString.call(item) === OBJECT) {
          filterObject(item)
        } else if (Object.prototype.toString.call(item) === ARRAY) {
          filterObject(item)
        } else {
          obj[key] = item !== null && item !== undefined && item !== '' ? item : '-'
        }
      }
    }
  }
}

/**
 * 递归删除树状图的 data 的 type
 * @param {Object} todoData
 * @param {String} type
 */
export function recursionData(todoData, type) {
  return todoData.filter(item => {
    item.children.length ? (item.children = recursionData(item.children, type)) : ''
    return item.type !== type
  })
}

export function bindResize() {
  if (this.instance) {
    this.instance.resize()
  }
  if (this.chartObj) {
    this.chartObj.resize()
  }
}

export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * 将数组组中相同 key 的数组的 item 合并
 * @param {String} key key
 * @param  {...any} args
 */
export function mergeArrByKey(key, ...args) {
  return args.splice(0, 1)[0].map(item => {
    args.forEach(arg => {
      let obj = arg.find(ite => ite[key] === item[key])
      obj && (item = { ...item, ...obj })
    })
    return item
  })
}
/**
 * 按照 byArr 的顺序排序数组
 * @param {Array} byArr name 组成的数组
 * @param {Array} arr 待排序的数组
 */
export function sortByName(byArr, arr, key = 'name') {
  let rtn = []
  byArr.forEach(it => {
    for (let idx = 0; idx < arr.length; idx++) {
      if (it === arr[idx][key]) {
        rtn.push(arr[idx])
        arr.splice(idx, 1)
        break
      }
    }
  })
  return rtn.concat(arr)
}

export const diffPro = R.curry(function(target, a, b) {
  if (!target) return a - b
  return a[target] - b[target]
})

export const diff = diffPro(null)
export const diffSort = diffPro('sort')

export function filterZtreeDataByType(data, type) {
  if (!Array.isArray(data)) {
    data = data.children || []
  }
  data.forEach(item => {
    if (item.type === type - 1) {
      item.children = []
    } else {
      filterZtreeDataByType(item.children, type)
    }
  })
}

/**
 * 拍平树状图数据
 * @param {Array Object} data 树状图 data
 * @param {String} key 树状图表示子代的 key
 */
export function flatZtreeData(data, key = 'children') {
  if (!Array.isArray(data)) {
    data = [data]
  }
  return data.reduce((pre, curr) => {
    if (Array.isArray(curr[key])) {
      return [...pre, curr, ...flatZtreeData(curr[key])]
    } else {
      return [pre]
    }
  }, [])
}

export function flatLayoutData(data, key = 'children') {
  if (!Array.isArray(data)) {
    data = [data]
  }

  return data.reduce((pre, curr) => {
    if (!curr[key]) {
      return [...pre, curr]
    } else {
      return [...pre, ...flatLayoutData(curr[key])]
    }
  }, [])
}

export function mapZtreeDataByType(data, type) {
  if (!Array.isArray(data)) {
    data = [data]
  }
  return flatZtreeData(data).filter(item => item.type === type)
}

export function filterByKey(key = 'col', data) {
  let arr = []
  data.forEach(item => {
    if (arr.findIndex(it => it[key] === item[key]) === -1) {
      arr.push(item)
    }
  })
  return arr
}

export function transLineChartData({ valueKey, nameKey, toValueKey = 'value', toNameKey = 'name' }, data) {
  return data.reduce(
    (pre, curr) => {
      pre[[toValueKey]].push(curr[[valueKey]])
      pre[[toNameKey]].push(curr[[nameKey]])
      return pre
    },
    { [toValueKey]: [], [toNameKey]: [] }
  )
}

export function transPieChartData({ valueKey, nameKey, toValueKey = 'value', toNameKey = 'name' }, data) {
  return data.map(item => ({ [toValueKey]: item[valueKey], [toNameKey]: item[nameKey] }))
}

export function transBarChartData({ valueKey, nameKey, toValueKey = 'value', toNameKey = 'name' }, data) {
  return data.reduce(
    (pre, curr) => {
      pre[[toValueKey]].push(curr[[valueKey]])
      pre[[toNameKey]].push(curr[[nameKey]])
      return pre
    },
    { [toValueKey]: [], [toNameKey]: [] }
  )
}

export function mixinData(item, mixinData) {
  return { ...item, ...mixinData }
}

export function transUrlParams(url) {
  const paramStr = url.split('?')[1]
  if (!paramStr) return {}
  return JSON.parse(`{"${paramStr.replace(/&/g, '","').replace(/=/g, '":"')}"}`)
}

export function hyphen2hump(str) {
  return str.replace(/-(\w)/g, ($0, $1) => $1.toUpperCase())
}

export function $msg(message = '0_操作成功', callback, duration = 1500) {
  let arr = ['success', 'error', 'info']
  let dealArr = message.split('_')
  let type = arr[~~dealArr[0]] || 'info'
  message = dealArr[1] || '未知信息'
  Message({
    type,
    showClose: true,
    message,
    duration
  })
  if (typeof callback === 'function') callback(true)
  return Promise.resolve(true)
}
