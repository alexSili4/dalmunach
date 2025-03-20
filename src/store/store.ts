import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import appStore from './app/app.store';
import { IAppState } from '@/types/appStore.types';

export const useAppStore = create<IAppState>()(
  devtools(appStore.store, appStore.params)
);
