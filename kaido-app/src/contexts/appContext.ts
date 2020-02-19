import { createContext } from "preact"

import { AuthServiceInterface } from "../../../kaido-core/src/services/authService"

/**
 * Reducer for setting KaiOS app layout texts:
 * Header, SoftKey and OptionMenu
 */
const SET_HEADER_TEXTS = `SET_HEADER_TEXTS`

type State = {}
type Action = { type: `SET_HEADER_TEXTS`; layoutTexts: { header: string } }

export const LayoutTextsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_HEADER_TEXTS:
      return {
        ...state,
        header: action.layoutTexts.header,
      }
    default:
      throw new Error(`You have to specify an action type for the UI components reducer.`)
  }
}

type LayOutTextsProps = {
  header: string
}

export interface AppContextProps {
  auth: AuthServiceInterface
  layoutTexts: LayOutTextsProps
  dispatch: (action: Action) => void
}

type createContextOptions = {
  auth: AuthServiceInterface
  layoutTexts: {
    header: string
  }
  dispatch: (action: Action) => void
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)

export const createAppContext = ({ auth, layoutTexts, dispatch }: createContextOptions): AppContextProps => ({
  auth,
  layoutTexts,
  dispatch,
})
