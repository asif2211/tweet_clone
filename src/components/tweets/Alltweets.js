import { getproductData, getUsers } from "../../components/Utils/Utils";
import { useState, useEffect } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import './style.css'

const Alltweets = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "" : "",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
   
  }));
  const [getapi, setGetApi] = useState("");
  const [users, setUsers] = useState("");

  useEffect(() => {
    getproductData(setGetApi);
    getUsers(setUsers);
  }, []);

  const getUserName = (id) => {
    // eslint-disable-next-line no-lone-blocks
    {
     return users &&
        users.map((user) => {
          if (user.id === id) {
            return user.username;
          }
        });
    }
  };

  console.log(users);
  return (
    <div className="wrapper">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} style={{ padding: "1rem"}}>
          {getapi &&
            getapi.map((item) => (
              <>
              
                <Grid item xs={2} className="post">
                  {getUserName(item.userId)}
                </Grid>
                <Grid item xs={10} className="post">
                  {item.title} {item.userId}
                </Grid>
                <Grid item xs={12} className="gap">
                  &nbsp;
                </Grid>
               
                </>
                
            ))}
        </Grid>
      </Box>
    </div>
  );
};
export default Alltweets;
