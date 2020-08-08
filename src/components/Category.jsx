import React from 'react'
import { Card, CardMedia, CardContent, CardActionArea, Typography } from '@material-ui/core'

const Category = ({imageUrl, title}) =>{

    return (
        <Card >
            <CardActionArea>
            <CardMedia 
            component="img"
            alt={title}
            image={imageUrl}
            title={title}
            >

            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {title}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Category