import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PostsComponents from './components/PostsComponent'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponents />
    </QueryClientProvider>
  );
}

export default App
