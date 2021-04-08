import { DefaultContainer } from './common/container'
import { Heading1, Emphasis, Quote } from './common/typography'
import { SwitchButton } from './common/interactibles'
import styled from 'styled-components'

const randomQuoteFromTheInternet = `Congratulations!
  Today is your day.
  You're off to Great Places!
  You're off and away!

  You have brains in your head.
  You have feet in your shoes.
  You can steer yourself
  any direction you choose.
  You're on your own. And you know what you know.
  And YOU are the guy who'll decide where to go.

  You'll look up and down streets. Look 'em over with care.
  About some you will say, "I don't choose to go there."
  With your head full of brains and your shoes full of feet,
  you're too smart to go down any not-so-good street.

  And you may not find any
  you'll want to go down.
  In that case, of course,
  you'll head straight out of town.

  It's opener there
  in the wide open air.

  Out there things can happen
  and frequently do
  to people as brainy
  and footsy as you.

  And then things start to happen,
  don't worry. Don't stew.
  Just go right along.
  You'll start happening too.

  OH!
  THE PLACES YOU'LL GO!
`

const HeaderQuote = styled(Quote)`
  width: 32rem;
  height: 30rem;
`
const Header = (props: {setTheme: () => void, mode: string}) => {
  return (
    <DefaultContainer>
      <Heading1 onClick={() => {console.log('go home')}}>
        People of the <br/>
        <Emphasis 
          onClick={() => {
            props.setTheme()
          }}> {`<${props.mode}>`}</Emphasis>
      </Heading1>
      <HeaderQuote>
        {randomQuoteFromTheInternet}<br/>
        <Emphasis>Dr.Seuss</Emphasis>
      </HeaderQuote>

    </DefaultContainer>
  )
}

export default Header