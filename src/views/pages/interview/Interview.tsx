import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { Collapse, Container, IconButton, ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { LANGUAGES } from '../../../utils/constants/constants';
import style from './style.module.scss'
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { useState } from 'react';
import { CodeBlock, CopyBlock, dracula } from 'react-code-blocks';
import { innerHtml } from '../../../utils/helpers';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core';

const drawerWidth = 280;
const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
      minHeight: 'calc(100vh - 64px)'
    },
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    root: {
      display: "flex"
    },
    active: {
      background: "#f4f4f4"
    },
    title: {
      padding: theme.spacing(2)
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1
    },
    avatar: {
      marginLeft: theme.spacing(2)
    },
    head: {
      paddingBottom: '4px',
      marginBottom: '40px !important',
      borderBottom: '1px solid #444'
    },
    menuIem: {
      cursor: 'pointer'
    }
  };
});
export default function Interview() {
  const classes = useStyles();
  const [languages, setLanguages] = useState(LANGUAGES);
  const [currentContent, setCurrentContent] = useState(LANGUAGES[0].items[0]);

  function showContent(item) {
    languages.forEach(l => {
      l.items.forEach(v => {
        v.isActive = false;
      })
    })
    item.isActive = true;
    setCurrentContent(item);
    setLanguages([...languages]);

  }

  function handleOpen(item) {
    item.open = !item.open;
    console.log(languages);
    setLanguages([...languages]);
  }

  return (
    <div className={classes.root}>
      <AppBar elevation={1} className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.date}>
            {currentContent.name}
          </Typography>
          <Typography>Tungkoa</Typography>
          <Avatar className={classes.avatar}/>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{paper: classes.drawerPaper}}
      >
        <div>
          <Typography className={classes.title} variant="h5">
            My knowledge
          </Typography>
        </div>

        <List>
          {languages.map((l, index) => {
            return <div key={index} >
              <ListItem className={style.item} onClick={() => handleOpen(l)} secondaryAction={<div>
                {l.open ? <ExpandLess/> : <ExpandMore/>}
              </div>}>
                <ListItemText
                  primary={l.name}
                />
              </ListItem>
              <Collapse in={l.open} timeout="auto" unmountOnExit>
                <List>
                  {l.items.map((item, index) => {
                    return <ListItem key={index} onClick={() => showContent(item)} className={`${style.subItem} ${item.isActive ? style.active : ''}`}>
                        <ListItemText
                          primary={item.name}
                        />
                      </ListItem>
                  })}
                </List>
              </Collapse>
            </div>
          })}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {currentContent.html?.map(html => {
          return <>
            {html.type === 'title' && <h3 style={{marginBottom: '8px'}} dangerouslySetInnerHTML={innerHtml(html.content)}></h3>}
            {html.type === 'text' && <div style={{marginBottom: '20px', lineHeight: '25px'}} dangerouslySetInnerHTML={innerHtml(html.content)}></div>}
            {html.type === 'code' && <CopyBlock
              text={html.content}
              language='javascript'
              showLineNumbers={true}
              theme={dracula}
              codeBlock
            />}
          </>
        })}
      </div>
    </div>
  );
}
