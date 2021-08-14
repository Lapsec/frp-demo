import { from } from 'rxjs';

const fetchHeaderRes = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      campusId: '2',
      gradeId: '1',
      classId: '1',
      panelGroud: [
        {
          name: 'group1',
          id: 'group1',
          panelList: [
            {
              id: 'ipad_pro',
              name: 'group1 panel1',
            },
            {
              id: 'iphone12',
              name: 'group2 panel2',
            }
          ],
        },
        {
          name: 'group2',
          id: 'group2',
        },
        {
          name: 'group3',
          id: 'group3',
        }
      ]
    })
  }, 500)
})

export const headerMountedObserable$ = from(fetchHeaderRes);
