import React from 'react';
import { Grid } from 'semantic-ui-react';
import GridRow from './GridRow.jsx';

const PictureGrid = (props) => (

  <div className="grid-container">
    <Grid centered columns={3}>
      {
        props.user.posts.map((photo, i, arr) => {
          if (i % 3 === 0) {
            return <GridRow key={props.user.posts[i].photo} rowPosts={props.user.posts.slice(i, i + 3)} user={props.user}/>;
          }
        })
      }
    </Grid>
  </div>
    
);
  
export default PictureGrid;