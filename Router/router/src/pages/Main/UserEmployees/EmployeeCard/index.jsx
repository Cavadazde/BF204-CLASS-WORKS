import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function EmployeeCard({item}) {
  return (
    <Card sx={{ width: '100%' }}>
      <CardMedia
        sx={{ height: 300 }}
        image={item.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name + " " + item.surname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <div>Age: {item.age}</div>
            <div>Position: {item.position}</div>
            <div>Salary: {item.salary}</div>
        </Typography>
      </CardContent>
      <CardActions>
        <FavoriteIcon sx={{backgroundColor: 'white', color:'orange'}}/>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}