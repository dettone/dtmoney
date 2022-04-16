import React from "react";
import { createRoot } from "react-dom/client";
import { createServer, Model } from "miragejs";

import { App } from "./App";

createServer({

  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [{
        id: 1,
        title: 'Padaria',
        category: 'Alimentação',
        type: 'deposit',
        amount: 100,
        createdAt: new Date('2022-04-11 09:00:00'),
      },
      {
        id: 2,
        title: 'Supermercado',
        category: 'Alimentação',
        type: 'withdraw',
        amount: 100,     
        createdAt: new Date('2022-04-12 09:00:00'),
    },
  ],
})
  },
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all('transaction');
    },
    
    );
    this.post("/transactions", (schema, request) =>{
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });

  },
});

const container = document.getElementById("root") as Element | DocumentFragment;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
