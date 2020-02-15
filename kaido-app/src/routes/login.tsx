import { h } from "preact"
import { useEffect, useRef, useContext } from "preact/hooks"
import { Container, Box, Image, Heading } from "theme-ui"

import { useSoftkey, useNavigation } from "../hooks"
import { AppContext } from "../contexts"
import Button from "../components/button"

const Login = () => {
  const containerRef = useRef(null)
  const { auth } = useContext(AppContext)
  const [setNavigation] = useNavigation(`Login`, containerRef, `y`)

  useSoftkey(`Login`, {
    center: `Select`,
    onKeyCenter: () => {
      navigator.spatialNavigationEnabled = true;
      auth.login()
    },
  })

  useEffect(() => setNavigation(0), [])

  return (
    <Container ref={containerRef} variant="kaiui.list">
      <Heading variant="kaiui.h2" sx={{ p: 3 }}>
        Login with your Microsoft account.
      </Heading>
      <Box sx={{ p: 2, textAlign: `center` }}>
        <Image src="assets/kaido-welcome.png" />
      </Box>
      <Button text="Sign in" name="signin" />
    </Container>
  )
}

export default Login
