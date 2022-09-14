import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, Typography, makeStyles } from "@material-ui/core";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import { yellow, green, pink, blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (n: any) => {
      if (n.category === "work") {
        return yellow[700];
      }
      if (n.category === "money") {
        return green[500];
      }
      if (n.category === "todos") {
        return pink[500];
      }
      return blue[500];
    }
  }
});

export default function NoteCard({ n }) {
  const classes = useStyles(n) as any;
  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {n.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => console.log("kkk")}>
              <DeleteOutlineOutlined />
            </IconButton>
          }
          title={n.title}
          subheader={n.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {n.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
