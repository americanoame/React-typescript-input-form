// import { useRef } from 'react';
import Input from './components/Input.tsx';
import Form from './components/Form.tsx';
import Button from './components/Button.tsx';

// This code defines a simple React app where a Form component 
// contains two Input fields (for name and age) and a Button to 
// submit the form. The Form component wraps the Input components 
// and the Button for layout and structure.

function App() {
  return (
    <main>
      <Form>
        <Input type='text' label='name' id='name' />
        <Input type='number' label='age' id='age'></Input>
        <p>
          <Button>Save</Button>
        </p>
      </Form>
      
    </main>
  );
}

export default App;
