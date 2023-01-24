import { OurCoffeesContainer, CoffeeList, Title } from './styles'
import { CoffeeCard } from '../CoffeeCard'
import { coffeesData } from './coffees'

export function OurCoffees() {
  const coffees = coffeesData

  return (
    <OurCoffeesContainer>
      <Title>Nossos Cafés</Title>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
