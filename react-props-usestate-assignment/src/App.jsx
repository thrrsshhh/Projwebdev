import React from 'react';
import Welcome from './components/Welcome';
import ListItems from './components/ListItems';
import Button from './components/Button';
import ProfileCard from './components/ProfileCard';
import Toggle from './components/Toggle';
import Counter from './components/Counter';
import Card from './components/Card';
import StatusIndicator from './components/StatusIndicator';
import ClickLogger from './components/ClickLogger';
import MultiInputForm from './components/MultiInputForm';
import Tabs from './components/Tabs';
import ProductsList from './components/ProductsList';
import ThemeToggle from './components/ThemeToggle';
import Quiz from './components/Quiz';
import Product from './components/Product';

function App() {
  const logMessage = () => console.log('Button clicked from ClickLogger');
  const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' }
  ];
  const product = { name: 'Camera', price: '$500' };

  return (
    <div style={{ padding: '20px' }}>
      <h2>1. Welcome Component</h2>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
      <hr />

      <h2>2. ListItems Component</h2>
      <ListItems items={['Apple', 'Banana', 'Cherry']} />
      <hr />

      <h2>3. Button Component</h2>
      <Button label="Click Me" onClick={() => console.log('Clicked Click Me')} />
      <Button label="Submit" onClick={() => console.log('Clicked Submit')} />
      <hr />

      <h2>4. ProfileCard Component</h2>
      <ProfileCard name="John Doe" email="john@example.com" avatarUrl="https://ui-avatars.com/api/?name=John+Doe&background=random"/>

      <hr />

      <h2>5. Toggle Component</h2>
      <Toggle />
      <hr />

      <h2>6. Counter Component</h2>
      <Counter />
      <hr />

      <h2>7. Card Component (Using children prop)</h2>
      <Card>
        <h3>This is inside a Card</h3>
        <p>Using children prop</p>
      </Card>
      <hr />

      <h2>8. StatusIndicator Component</h2>
      <StatusIndicator isOnline={true} />
      <StatusIndicator isOnline={false} />
      <hr />

      <h2>9. ClickLogger Component</h2>
      <ClickLogger logMessage={logMessage} />
      <hr />

      <h2>10. MultiInputForm Component</h2>
      <MultiInputForm />
      <hr />

      <h2>11. Tabs Component</h2>
      <Tabs />
      <hr />

      <h2>12. ProductsList Component</h2>
      <ProductsList items={products} />
      <hr />

      <h2>13. ThemeToggle Component</h2>
      <ThemeToggle />
      <hr />

      <h2>14. Quiz Component</h2>
      <Quiz />
      <hr />

      <h2>15. Product Component (Props + useState)</h2>
      <Product product={product} />
      <hr />
    </div>
  );
}

export default App;
