import { Observable } from 'rxjs';
const headerMounted = () => {
  Observable.fromPromise(requestHeaderData);
}

export const headerMountedObserable = Observable.fromPromise(requestHeaderData);

const requestHeaderData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        campusId: '1',
        gradeId: '1',
        classId: '1',
      })
    }, 500)
  })
}