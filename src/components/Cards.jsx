import React from 'react'
import { Card } from 'react-bootstrap'
import img1 from '../images/pet1.jpg'
import img2 from '../images/pet2.jpg'
import img3 from '../images/pet3.jpg'
import img4 from '../images/pet4.jpg'
import img5 from '../images/pet5.jpg'
import img6 from '../images/pet6.jpg'
import { motion } from "framer-motion"
import {fadeIn} from '../variants'

function Cards() {
  return (
    <motion.div
    variants={fadeIn('up', 0)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false,amount:0.7}}
     className='d-flex gap-5'>
        <Card className='adopt-card rounded shadow' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img1} className='p-1' />
        <Card.Body>
            <h3 className='text-center'>Card Title</h3>
        </Card.Body>
        </Card>
        <Card className='adopt-card rounded shadow' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img2} className='p-1' />
        <Card.Body>
            <h3 className='text-center'>Card Title</h3>
        </Card.Body>
        </Card>
        <Card className='adopt-card rounded shadow' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img6} className='p-1' />
        <Card.Body>
            <h3 className='text-center'>Card Title</h3>
        </Card.Body>
        </Card>
    </motion.div>
  )
}

export default Cards