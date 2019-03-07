export const dragReportData = [
  {
    title: 'drag-report',
    reportKey: 'first-report',
    children: [
      {
        align: 'flex-start',
        height: 250,
        index: 0,
        children: [
          { title: '作业时段分布图', col: 12, initCol: 12, componentKey: 12 },
          // { title: '作业趋势图', col: 12, initCol: 12, componentKey: 13 }
        ]
      }
    ]
  }
]
export const componentDatas = [
  {
    label: '1 --- 占位组件',
    componentKey: 1,
    componentName: 'demo',
    api: '/report/placeholderApi',
    method: 'get',
    dataKey: 'placeholderKey',
    col: 1,
    height: 250,
    previewImage: require('@/assets/img/dragReport/col-1-0.png')
  },
  {
    label: '2 --- 占位组件',
    componentKey: 2,
    componentName: 'demo',
    api: '/report/placeholderApi',
    method: 'get',
    dataKey: 'placeholderKey',
    col: 2,
    height: 250,
    previewImage: require('@/assets/img/dragReport/col-2-0.png')
  },
  {
    label: '3 --- 占位组件',
    componentKey: 3,
    componentName: 'demo',
    api: '/report/placeholderApi',
    method: 'get',
    dataKey: 'placeholderKey',
    col: 3,
    height: 250,
    previewImage: require('@/assets/img/dragReport/col-3-0.png')
  },
  {
    label: '4 --- 占位组件',
    componentKey: 4,
    componentName: 'demo',
    api: '/report/placeholderApi',
    method: 'get',
    dataKey: 'placeholderKey',
    col: 4,
    height: 250,
    previewImage: require('@/assets/img/dragReport/col-4-0.png')
  },
  {
    label: '驾驶评分',
    componentKey: 5,
    componentName: 'text-module',
    api: '/report/getCountData',
    method: 'get',
    dataKey: 'countKey',
    col: 4.8,
    height: 100,
    previewImage: require('@/assets/img/dragReport/col-4.8-1.png')
  },
  {
    label: '高速评分',
    componentKey: 6,
    componentName: 'text-module',
    api: '/report/getCountData',
    method: 'get',
    dataKey: 'countKey',
    col: 4.8,
    height: 100,
    previewImage: require('@/assets/img/dragReport/col-4.8-2.png')
  },
  {
    label: '非高速评分',
    componentKey: 7,
    componentName: 'text-module',
    api: '/report/getCountData',
    method: 'get',
    dataKey: 'countKey',
    col: 4.8,
    height: 100,
    previewImage: require('@/assets/img/dragReport/col-4.8-3.png')
  },
  {
    label: '日间评分',
    componentKey: 8,
    componentName: 'text-module',
    api: '/report/getCountData',
    method: 'get',
    dataKey: 'countKey',
    col: 4.8,
    height: 100,
    previewImage: require('@/assets/img/dragReport/col-4.8-4.png')
  },
  {
    label: '夜间评分',
    componentKey: 9,
    componentName: 'text-module',
    api: '/report/getCountData',
    method: 'get',
    dataKey: 'countKey',
    col: 4.8,
    height: 100,
    previewImage: require('@/assets/img/dragReport/col-4.8-5.png')
  },
  {
    label: '6 --- 占位组件',
    componentKey: 10,
    componentName: 'demo',
    api: '/report/placeholderApi',
    method: 'get',
    dataKey: 'placeholderKey',
    col: 6,
    height: 250,
    previewImage: require('@/assets/img/dragReport/col-6-0.png')
  },
  {
    label: '报警车速分布图',
    componentKey: 11,
    componentName: 'pie-module',
    api: '/report/getPieData',
    method: 'get',
    dataKey: '',
    col: 8,
    height: 250,
    previewImage: require('@/assets/img/dragReport/col-8-1.png')
  },
  {
    label: '作业时段分布图（次）',
    componentKey: 12,
    componentName: 'bar-pie-module',
    api: '/report/getBarData',
    method: 'get',
    dataKey: '',
    col: 12,
    height: 250,
    previewImage: require('@/assets/img/dragReport/col-12-1.png')
  },
  {
    label: '作业趋势图（次）',
    componentKey: 13,
    componentName: 'working-time-tendency',
    api: '/report/placeholderApi',
    method: 'get',
    dataKey: 'placeholderKey',
    col: 12,
    height: 250,
    previewImage: require('@/assets/img/dragReport/col-12-2.png')
  },
  {
    label: '风险类型分布图（TOP5）',
    componentKey: 14,
    componentName: 'table-pie-module',
    api: '/report/getTableData',
    method: 'get',
    dataKey: '',
    col: 16,
    height: 250,
    previewImage: require('@/assets/img/dragReport/col-16-1.png')
  },
  {
    label: '评分图',
    componentKey: 15,
    componentName: 'full-tabs-grade',
    api: '/report/placeholderApi',
    method: 'get',
    dataKey: 'placeholderKey',
    col: 24,
    height: 250,
    previewImage: require('@/assets/img/dragReport/col-24-1.png')
  }
]