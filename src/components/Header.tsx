import { DefaultContainer } from './common/container'
import { Heading1 } from './common/typography'

const Header = () => {
  return (
    <DefaultContainer>
      <Heading1 onClick={() => {console.log('go home')}}>
        wholesome-app
      </Heading1>
    </DefaultContainer>
  )
}

export default Header