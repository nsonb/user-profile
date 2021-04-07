import { DefaultContainer } from './common/container'
import { Heading1 } from './common/typography'
import { SwitchButton } from './common/interactibles'
import { setSyntheticLeadingComments } from 'typescript'

const Header = (props: {setTheme: () => void}) => {
  return (
    <DefaultContainer>
      <Heading1 onClick={() => {console.log('go home')}}>
        wholesome-app
      </Heading1>
      <SwitchButton onClick={() => {props.setTheme()}}>
        daymode
      </SwitchButton>
    </DefaultContainer>
  )
}

export default Header