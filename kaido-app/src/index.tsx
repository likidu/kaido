import { h } from "preact"
import { useReducer } from "preact/hooks"
import { ThemeProvider } from "theme-ui"
import KaiUI from "./theme/kaiui"

import { AppContext, createAppContext, LayoutTextsReducer } from "./contexts"

import { AuthService } from "../../kaido-core/src/services"

import App from "./components/app"
import "./theme/global.css"

// if ((module as any).hot) {
if (process.env.NODE_ENV === `development`) {
  /* eslint-disable global-require */
  require(`preact/debug`)
  /* eslint-enable global-require */
}

const Root: preact.FunctionalComponent = () => {
  window.navigator.spatialNavigationEnabled = false

  const authService = new AuthService()
  authService.handleRedirectCallback()

  const defaultTexts = {
    header: `KaiDo`,
  }
  const [texts, dispatch] = useReducer(LayoutTextsReducer, defaultTexts)

  const context = createAppContext({
    auth: authService,
    layoutTexts: texts,
    dispatch,
  })

  return (
    <AppContext.Provider value={context}>
      <ThemeProvider theme={KaiUI}>
        <App />
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default Root
