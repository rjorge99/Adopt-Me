import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Details from './Details';
import SearchParams from './SearchParams';
import './style.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity
        }
    }
});

const App = () => {
    return (
        <div className='p-0 m-0'>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <header className='mb-10 w-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 p-7 text-center'>
                        <Link to='/'>Adopt me</Link>
                    </header>
                    <Routes>
                        <Route path='/details/:id' element={<Details />} />
                        <Route path='/' element={<SearchParams />} />
                    </Routes>
                </QueryClientProvider>
            </BrowserRouter>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
