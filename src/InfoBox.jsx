import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import './InfoBox.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}) {
   
    const Init_Url="https://images.unsplash.com/photo-1432839318976-b5c5785ce43f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JleXxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL="https://images.unsplash.com/photo-1535304902304-466bec5bf8e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwZGF5fGVufDB8fDB8fHww";
    const COLD_URL="https://images.unsplash.com/photo-1542801205-5240aa78e9d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1542801205-5240aa78e9d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            
            <div className='cardContainer'>
                 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{
          info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>
         }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}component={"span"}>
        <p>Temperature={info.temp}&deg;C</p>
        <p>Humidity={info.humidity}</p>
        <p>Min Temp={info.tempMin}</p>
        <p>Max Temp={info.tempMax}</p>
        <p>The Weather can be described as <i>{info.weather}</i> and Feels Like {info.feelsLike}</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
            

        </div>
    )
}