import React from "react";
import Dashboard from "../Dashboard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function Home() {
  return (
    <div>
      <Box sx={{ display: "flex", margin: "30px" }}>
        <Dashboard />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Home</h1>
          <Typography paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            voluptate, quia voluptatem blanditiis quas tempora repellat sequi
            ea? Nostrum, optio iure. Distinctio, autem iusto, nisi officiis
            dolor fugiat explicabo atque nesciunt necessitatibus laborum illo!
            Est enim repellendus et quos vitae nemo amet nam error quas eligendi
            tempore ad, ea nulla corporis ducimus commodi in? Minima eveniet
            quae ad asperiores culpa quos, vitae soluta, vel deleniti veniam,
            delectus porro. Iusto, aperiam rem. Quo non illo fugiat ratione,
            voluptatibus quaerat fuga, voluptatem corrupti animi eveniet
            laboriosam optio voluptates dicta quidem nam ipsa. Inventore,
            incidunt fuga expedita corrupti asperiores quia rem doloribus
            laborum.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
