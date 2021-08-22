import { from, BehaviorSubject } from 'rxjs';
// import { filter } from 'rxjs/operators'
const mockHeaderData = {
  campusId: '2',
  gradeId: '2',
  classId: '2',
  panelGroup: [
    {
      name: 'apple',
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
      name: 'tesla',
      id: 'group2',
      panelList: [
        {
          id: 'teslabot',
          name: 'teslabot',
        },
        {
          id: 'models',
          name: 'models',
        }
      ],
    },
    {
      name: 'microsoft',
      id: 'group3',
      panelList: [
        {
          id: 'windows',
          name: 'windows',
        },
        {
          id: 'onenote',
          name: 'onenote',
        }
      ],
    }
  ]
};

const fetchHeaderData = (req: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        {
          ...mockHeaderData,
          ...req,
        }
      );
    }, 500)
  })
}


// 这个promise期望能触发一个subject
// 同时完成cache存储
export const headerBehaviorSubject$ = new BehaviorSubject({});
export const headerfetchDataObservable$ = from(fetchHeaderData({}));

headerfetchDataObservable$.subscribe(headerBehaviorSubject$);

// todo: 写一个针对main的filter，在页面里subscribe;
// todo: 针对header的option change，提供一个subject，然后所有panel和headerRequest去监听