export type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

export type RouteType = keyof RootStackParamList;

export type FnAction<I = any, O = void> = (arg: I) => O;
