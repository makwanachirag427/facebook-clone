import React from 'react'
import "./StoryReel.css"
import Story from './Story'
const StoryReel = () => {
  return (
    <div className='storyReel'>
    <Story profileUrl="https://cdn.pixabay.com/photo/2020/10/17/17/41/girl-5662873_960_720.jpg" 
           image="https://cdn.pixabay.com/photo/2020/10/17/17/41/girl-5662873_960_720.jpg"
           title="Hannah Carter"
            />
    <Story profileUrl="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_960_720.jpg" 
           image="https://cdn.pixabay.com/photo/2017/08/07/10/08/sea-2602227_960_720.jpg"
           title="Vivian Rechards"
            />
    <Story profileUrl="https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332_960_720.jpg" 
           image="https://cdn.pixabay.com/photo/2016/11/14/03/14/chicken-1822472_960_720.jpg"
           title="Chris Hamsworth"
            />
    <Story profileUrl="https://cdn.pixabay.com/photo/2017/08/07/16/39/girl-2605526_960_720.jpg" 
           image="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_960_720.jpg"
           title="Francoise Bettencourt"
            />
 
    </div>
  )
}

export default StoryReel
