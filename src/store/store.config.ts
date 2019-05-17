import { AuthStateModule } from './auth/auth.state';
import { DashboardStates, DashboardStateModule } from './dashboard';
import { NgxsConfig } from '@ngxs/store/src/symbols';
import { NgxsDevtoolsOptions } from '@ngxs/devtools-plugin/src/symbols';
import { NgxsLoggerPluginOptions } from '@ngxs/logger-plugin/src/symbols';

import { environment } from "~env/environment";

export const STATES_MODULES = [AuthStateModule, DashboardStateModule, ...DashboardStates];

export const OPTIONS_CONFIG: Partial<NgxsConfig> = {
  developmentMode: !environment.production
};

export const DEVTOOLS_REDUX_CONFIG: NgxsDevtoolsOptions = {
  disabled: environment.production
};

export const LOGGER_CONFIG: NgxsLoggerPluginOptions = {
  disabled: environment.production
};
