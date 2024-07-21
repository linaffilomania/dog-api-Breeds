import './App.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Home from './Home.tsx'
import Navbar from './Navbar.tsx'

function App() {
  const queryClient = new QueryClient()
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Navbar/>
                <Home/>
            </QueryClientProvider>

        </>
    );
}

export default App;
