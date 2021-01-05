import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'; 
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';


const MyWork = ({projects, fetchProjects}) => {

    useEffect(() => {
        fetchProjects();
          }, [])

    return ( 
        <Work style={{background: "#fff"}} variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            {projects &&
            projects.map(project => {
                return(
                <Movie key={project.name}>
                    <h2>{project.name}</h2>
                    <div className="line"></div>
                    <Link to={project.url}>
                        <img src={project.mainImg} alt={project.name}/>
                    </Link>
                </Movie>
                )
            })}
        </Work>
     );
}

const Work = styled (motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem; 
    h2 {
        padding: 1rem 0rem;
    }
`;
const Movie = styled.div`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img {
            width: 100%;
            height: 70vh;
            object-fit: cover;
        }
`;
 
export default MyWork;