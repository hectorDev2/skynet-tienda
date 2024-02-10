/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'
import { tShirts } from './database'

export const useStore = create(() => ({
  tShirts,
  getById: (id: string) => {
    return tShirts.find((tShirt: any) => tShirt.id === id)
  },
}))
