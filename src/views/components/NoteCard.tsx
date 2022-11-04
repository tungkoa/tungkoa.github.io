import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, Typography, makeStyles } from "@material-ui/core";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import { yellow, green, pink, blue } from "@material-ui/core/colors";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from '@material-ui/core/Button';
import { Draggable } from 'drag-react';
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

export default function NoteCard(props) {
  const classes = useStyles(props.n) as any;
  const [isEdit, setIsEdit] = useState(false);
  function handleEditNote(note) {
    setIsEdit(!isEdit);
  }

  function onNoteChange(e) {
    props.onNoteChange({
      ...props.n,
      content: e.target.value
    });
  }

  function onUpdateNote(e) {
    props.onUpdateNote(props.n).then(res => {
      setIsEdit(false);
    });
  }

  function handleOnDragEnd(e) {
    props.onNoteChange({
      ...props.n,
      position: {
        left: e.left,
        top: e.top
      }
    });
  }
  return (
    <Draggable style={{
      left: (props.n?.position?.left || 100) + 'px',
      top: (props.n?.position?.top || 100) + 'px',
    }} onDragEnd={e => handleOnDragEnd(e)}>
      <Card elevation={1} className="w-300">
        <CardHeader
          avatar={
            // <IconButton onClick={() => console.log("kkk")}>
            //   <EditIcon />
            // </IconButton>
            <Avatar className={classes.avatar} onDoubleClick={handleEditNote}>
              {/*{n.category[0].toUpperCase()}*/}
            </Avatar>
          }
          action={
            <IconButton onClick={() => console.log("kkk")}>
              <DeleteOutlineOutlined />
            </IconButton>
          }
          title={props.n?.title}
          subheader={props.n?.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {!isEdit && props.n?.content}
            {isEdit &&
              <>
                <TextareaAutosize
                  className="textareaNote"
                  aria-label="minimum height"
                  onChange={e => onNoteChange(e)}
                  value={props.n?.content}
                />
                <div className="btnUpdateNote">
                  <Button variant="outlined" onClick={onUpdateNote}>Update</Button>
                </div>
              </>
            }
          </Typography>
        </CardContent>
      </Card>
    </Draggable>
  );
}
