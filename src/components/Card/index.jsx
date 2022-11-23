import React from 'react'
import {FiThumbsUp } from 'react-icons/fi'

import { 
    CardContainer,
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo,
    UserInfo,
    UserPicture} from './styles'

    const Card = () => {
  return (
    <CardContainer>
         
        <ImageBackground src="https://th.bing.com/th/id/R.8a10f4b3db866c88cb788d2e2f4bae48?rik=In5HLR3uWicsdw&pid=ImgRaw&r=0&sres=1&sresct=1" />
        <Content>
            <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                <div>
                    <h4>Pablo Henrique</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de html e css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                   <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }