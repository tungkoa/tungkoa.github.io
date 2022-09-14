import React, { useState, useEffect } from "react";
import { notes } from "../data/db";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";

export default function Notes() {
  const [note, setNote] = useState([]) as any;

  useEffect(() => {
    setNote(notes);
  }, []);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {note.map((n) => {
          return (
            <div key={n.id}>
              <NoteCard n={n} />
            </div>
          );
        })}
      </Masonry>
    </Container>
  );
}
