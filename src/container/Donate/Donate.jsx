import React from 'react';
import './Donate.css';
import Base from '../../components/Base/Base';
import { darken } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Paper } from '@mui/material';
import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.jpg";
import { NavLink } from 'react-router-dom';

const Donate = () => {
    return (
        <Base>
            <div style={{ display: 'flex', justifyContent: 'center' }} className='background_img'>
                <Paper elevation={2} sx={{ padding: 5, display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: 15, marginBottom: 15, backgroundColor: 'lightgrey' }} >
                    <Card sx={{ maxWidth: 290, border: `1px solid ${darken('#e0e0e0', 0.3)}` }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                image={card1}
                                alt="green iguana"
                            />
                            <CardContent>
                                <h2 style={{ marginBottom: 20 }}>Education</h2>
                                <Typography variant="body2">
                                    Help them to grow and light up their lives to have a better future in India.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button size="small" color="primary" variant="contained" sx={{ border: '1px solid #e0e0e0' }}>
                                <NavLink to="/login">CONTRIBUTE</NavLink>
                            </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 290, border: `1px solid ${darken('#e0e0e0', 0.3)}` }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                image={card2}
                                alt="green iguana"
                            />
                            <CardContent>
                                <h2 style={{ marginBottom: 20 }}>Charity</h2>
                                <Typography variant="body2">
                                    Help people who are in need, let your hearts be as big as the universe.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button size="small" color="primary" variant="contained" sx={{ border: '1px solid #e0e0e0' }}>
                                <NavLink to="/login">CONTRIBUTE</NavLink>
                            </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 290, border: `1px solid ${darken('#e0e0e0', 0.3)}` }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                image={card3}
                                alt="green iguana"
                            />
                            <CardContent>
                                <h2 style={{ marginBottom: 20 }}>Healthcare</h2>
                                <Typography variant="body2">
                                    Let's save lives of people by donating and by taking care of them.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button size="small" color="primary" variant="contained" sx={{ border: '1px solid #e0e0e0' }}>
                                <NavLink to="/login">CONTRIBUTE</NavLink>
                            </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 290, border: `1px solid ${darken('#e0e0e0', 0.3)}` }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                image={card4}
                                alt="green iguana"
                            />
                            <CardContent>
                                <h2 style={{ marginBottom: 20 }}>Poverty</h2>
                                <Typography variant="body2">
                                    Help the people who are homeless and starving for food.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button size="small" color="primary" variant="contained" sx={{ border: '1px solid #e0e0e0' }}>
                                <NavLink to="/login">CONTRIBUTE</NavLink>
                            </Button>
                        </CardActions>
                    </Card>
                </Paper>
            </div>
        </Base>
    )
}

export default Donate;
