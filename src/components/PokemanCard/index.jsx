import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PokemonCard(props) {

  const typeHandler = ()=>{
        if(props.types[1]){
          return props.types[0].type.name+" | "+props.types[1].type.name;
        }
        return props.types[0].type.name;
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
          {typeHandler()}
        </Typography>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  );
}
