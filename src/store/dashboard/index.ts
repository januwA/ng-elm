import { State } from '@ngxs/store';
import { GlobalState } from "./states/global/global.state";

export const DashboardStates = [GlobalState];

@State({
  name: 'dashboardStateModule',
  children: DashboardStates
})
export class DashboardStateModule { }
