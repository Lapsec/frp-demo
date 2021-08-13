import { from } from 'rxjs';

const fetchHeaderRes = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      campusId: '2',
      gradeId: '1',
      classId: '1',
    })
  }, 500)
})

export const headerMountedObserable = from(fetchHeaderRes);