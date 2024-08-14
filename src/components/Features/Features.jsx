import React from 'react'
import './Features.css'
import Card from '../Card/Card'
import feature_speed from './../../assests/feature_speed.png'
import features_exper from './../../assests/features_exper.png'
import feature_indus from './../../assests/feature_indus.jpeg'

const feature_list = [
    {
        image: feature_speed,
        title: "High Speed Internet upto 100mbps",
    },
    {
        image: features_exper,
        title: "Highly experienced faculty",
    },
    {
        image: 'https://th.bing.com/th/id/OIP.zNUzHzdt_YSgElUDa72U4wHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        title: "Competative Environment",
    },
    {
        image: feature_indus,
        title: "Industry Exposure",
    }
]

function Features() {
  return (
    <div className="Features">
        <h3 className='feature-heading'>
            Our Features
        </h3>
        <div className="list">
            {feature_list.map((feature, index) => (
                    <Card 
                        key={index}
                        image={feature.image} 
                        title={feature.title} 
                    />
                ))}
        </div>
    </div>
  )
}

export default Features