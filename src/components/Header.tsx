import { DefaultContainer } from './common/container'
import { Heading1, Emphasis, Quote } from './common/typography'
import styled from 'styled-components'

import { useHistory } from 'react-router-dom'

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

  And you may not find any
  you'll want to go down.
  In that case, of course,
  you'll head straight out of town.

  It's opener there
  in the wide open air.

  And then things start to happen,
  don't worry. Don't stew.
  Just go right along.
  You'll start happening too.

  OH!
  THE PLACES YOU'LL GO!
`

const HeaderQuote = styled(Quote)`
  width: 32rem;
  height: 24rem;
  text-align: right;
`

const Convention = styled(Emphasis)`
  font-family: Lobster, cursive;
  padding: 0 2rem 0 1rem;
`

const Header = (props: {
    setTheme: () => void, 
    mode: string, 
    setConvention: () => void,
    conventionMode: string
  }) => {
    const history = useHistory()
    return (
      <DefaultContainer>
        <Heading1 onClick={() => {history.push('/')}}>
          People of the<br/>
          <Convention onClick={() => {props.setConvention()}}>{props.conventionMode}</Convention>
          <Emphasis onClick={() => {props.setTheme()}}>{`<${props.mode}>`}</Emphasis>
        </Heading1>
        
        <HeaderQuote>
          {randomQuoteFromTheInternet}<br/>
          <Emphasis>Dr.Seuss</Emphasis>
        </HeaderQuote>

      </DefaultContainer>
    )
}

export default Header