import { DefaultContainer } from './common/container'
import { Heading1, Emphasis } from './common/typography'
import { SwitchButton } from './common/interactibles'

const Header = (props: {setTheme: () => void, mode: string}) => {
  return (
    <DefaultContainer>
      <Heading1 onClick={() => {console.log('go home')}}>
        People of the 
        <Emphasis 
          onClick={() => {
            props.setTheme()
          }}> {`<${props.mode}>`}</Emphasis>
      </Heading1>
    </DefaultContainer>
  )
}

export default Header