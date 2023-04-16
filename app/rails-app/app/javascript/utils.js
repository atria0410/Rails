// ローカルストレージに値を保存
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value)
}

// ローカルストレージから値を取得
export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
}
