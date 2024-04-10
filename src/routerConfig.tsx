import DemoIndex from './components/DemoIndex';
import Dialog from './components/Dialog';
import demos from './demo';
import { navConfig } from './navConfig';


console.log("====demo组件====", demos)
export const routerConfig = navConfig.reduce(
  (accumulate, current) => {
    const currentList = current.list.map((item: any) => {
      const Comp = (demos as any)[item.code];
      return { path: item.code, element: <Comp /> };
    });
    return [...accumulate, ...currentList];
  },
  [{ path: '/DemoIndex', element: <DemoIndex /> }, { path: '/', element: <Dialog /> }],
);
