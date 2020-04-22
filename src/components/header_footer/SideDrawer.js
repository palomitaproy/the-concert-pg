import React from 'react';
import {scroller} from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElement = (elements)=>{
        scroller.scrollTo(elements,{
            duration:1500,
            delay:100,
            smooth:true,
            offset:-135 //the component go to after the header
        })
          // close the nav after click
        props.onClose(false)
    }
  
   
  
    return (
       <Drawer
           ref={React.createRef()} 
           anchor="right"
           open={props.open}
           onClose={()=>props.onClose(false)}
           >  <React.StrictMode>
               <List  component="nav">
                    <ListItem button onClick={()=> scrollToElement('home')}>
                        HOME
                    </ListItem>
                    <ListItem button onClick={()=> scrollToElement('info')}>
                       INFO
                      </ListItem>
                    <ListItem button onClick={()=> scrollToElement('highlights')}>
                        HIGHLIGHTS
                    </ListItem>
                    <ListItem button onClick={()=> scrollToElement('pricing')}>
                        PRICING
                    </ListItem>
                    <ListItem button onClick={()=> scrollToElement('location')}>
                        LOCATION
                    </ListItem>
               </List>
               </React.StrictMode>
       </Drawer>
    );
};

export default SideDrawer;