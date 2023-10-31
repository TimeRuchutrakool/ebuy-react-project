import{QueryClient,QueryClientProvider} from "react-query"
import Routes from "./routes/Routes";

const queryClient = new QueryClient()
function App() {
  
  
  return <QueryClientProvider client={queryClient}>
          <Routes />;
         </QueryClientProvider>
}

export default App;
