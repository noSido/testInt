import ReactDOM from 'react-dom/client'

import './index.css'
import {QueryClientProvider} from "react-query";
import {queryClient} from "./api/queryClient.ts";
import {FactButton} from "./components/FactButton/FactButton.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
      <QueryClientProvider client={queryClient}>
        <FactButton />
      </QueryClientProvider>
)
