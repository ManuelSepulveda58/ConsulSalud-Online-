import { Route, Routes } from 'react-router-dom';

export function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/' element={<Inicio />} />
      </Routes>
    </>
  );
}
