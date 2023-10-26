import {UserAuth} from 'Auth'
import { PageLink } from 'Views';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App w-auto">
        <Routes>
          <Route path='/' element={<UserAuth />} />
          <Route path='/*' element={<PageLink />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
