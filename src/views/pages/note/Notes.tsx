import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import NoteCard from "../../components/NoteCard";
import Masonry from "react-masonry-css";
import apisService from '../../../services/apis/apisService';

export default function Notes() {
  const [note, setNote] = useState([]) as any;


  useEffect(() => {
    apisService.getNotes().then(res => {
      console.log(12, res);
      setNote(res);
    }).catch(err => {
      console.log(3, err);
    })
  }, []);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };

  function onUpdateNote(note) {
    console.log(note);
    return apisService.updateNote(note.id, note);
  }

  function onNoteChange(newNoteData) {
    setNote(note.map(n => {
      if(n.id === newNoteData.id) {
        n = newNoteData;
      }
      return n;
    }))
  }

  return (
    <Container>
      <div className='btnAction'>
        <ButtonGroup variant="outlined" aria-label="text button group">
          <Button>Refresh</Button>
          <Button>Update all</Button>
          {/*<Button>Three</Button>*/}
        </ButtonGroup>
      </div>

      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >

        {note.map((n, i) => {
          return (
            <div key={i}>
              <NoteCard n={n} onNoteChange={d => onNoteChange(d)}
                        onUpdateNote={n => onUpdateNote(n)}
              />
            </div>
          );
        })}

      </Masonry>
    </Container>
  );
}
