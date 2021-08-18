import { from, BehaviorSubject } from 'rxjs';
// import { filter } from 'rxjs/operators'

const fetchHeaderRes = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      campusId: '2',
      gradeId: '1',
      classId: '1',
      panelGroup: [
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

// 这个promise期望能触发一个subject
// 同时完成cache存储
export const headerBehaviorSubject$ = new BehaviorSubject({});
export const headerfetchDataObservable$ = from(fetchHeaderRes);

headerfetchDataObservable$.subscribe(headerBehaviorSubject$);
