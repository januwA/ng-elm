import { Action, Selector, State, StateContext } from '@ngxs/store';
import { OpenHeaerDetial, CloseHeaerDetial } from "./global.actions";

export interface GlobalStateModel {
  isOpen: boolean;
}

@State<GlobalStateModel>({
  name: 'globalStates',
  defaults: {
    isOpen: false,
  }
})
export class GlobalState {
  @Selector()
  public static isOpenHeaderDetial(state: GlobalStateModel): boolean {
    return state.isOpen;
  }

  @Action(OpenHeaerDetial)
  open(ctx: StateContext<GlobalStateModel>) {
    ctx.patchState({
      isOpen: true,
    });
  }

  @Action(CloseHeaerDetial)
  close(ctx: StateContext<GlobalStateModel>) {
    ctx.patchState({
      isOpen: false,
    });
  }
}
