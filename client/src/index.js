import React from 'react';
import ReactDOM from 'react-dom';

// components
import App from './App';

// rQuery
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from './rQuery_provider'

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

