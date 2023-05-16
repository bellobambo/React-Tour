import { TourProvider } from '@reactour/tour'
import { steps } from './steps.js'
import Main from './Main.js'

export default function App () {
  return (
    <TourProvider steps={steps}>
      <Main />
    </TourProvider>
  )
}