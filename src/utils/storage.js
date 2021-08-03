export function CheckPropDoup(storeArray, propVal) {
  for (let i = 0, k = storeArray.length; i < k; i += 1) {
    if (storeArray[i] === propVal) return true;
  }
  return false;
}

export function saveStore(key, value) {
  if (typeof Storage !== 'undefined') {
    const prevStored = JSON.parse(localStorage.getItem(key)) || [];
    let obj = {};
    obj = Object.assign(obj, value);
    if (!CheckPropDoup(prevStored, value)) prevStored.push(obj);
    localStorage.setItem(key, JSON.stringify(prevStored));
  }
}

export function getStore(key) {
  if (typeof Storage !== 'undefined') {
    return JSON.parse(localStorage.getItem(key)) || [];
  }
}

export function removeStore(key, value) {
  if (typeof Storage !== 'undefined') {
    const prevStored = JSON.parse(localStorage.getItem(key)) || [];
    prevStored.splice(prevStored.indexOf(value), 1);
    localStorage.setItem(key, JSON.stringify(prevStored));
  }
}
