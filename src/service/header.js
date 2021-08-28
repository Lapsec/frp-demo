import {
  from,
  BehaviorSubject,
  Subject,
  of,
  merge,
  switchMap,
  catchError,
  defer
} from 'rxjs';
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

const originReqParam = {
  campusId: '2',
  gradeId: '2',
  classId: '2',
}

// 用来接受校区、年级、班级等点击事件产、生的变化
const headerClickSubject$ = new Subject();
export const headerClickHandler = (payload) => {
  headerClickSubject$.next(Object.assign(mockHeaderData, payload));
};

const headerConfigOrigin$ = of(originReqParam);

export const headerBehaviorSubject$ = new BehaviorSubject({});

export const headerService$ =  merge(headerConfigOrigin$, headerClickSubject$).pipe(
  switchMap((reqParam) => from(fetchHeaderData(reqParam))),
  catchError(err => err)
).subscribe(headerBehaviorSubject$)


// todo: 写一个针对main的filter，在页面里subscribe;
// todo: 针对header的option change，提供一个subject，然后所有panel和headerRequest去监听