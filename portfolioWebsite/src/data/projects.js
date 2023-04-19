//Image import on absolute path for build folder
import refImg from '../assets/images/ref.jpg'
import bubbleImg from '../assets/images/bubbleBG.png'
import profileImg from '../assets/images/best.jpg'

const projects = [
  {
    id: 1,
    title: 'Pasta Perfect',
    category: 'Website',
    description:
      'In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.',
    role: 'Pasta Website',
    year: 2023,
    framework: 'vue',
    built: ['JavaScript', 'TailWind'],
    img: refImg,
    gitHub: 'https://github.com/TLNRB/pastaPerfect',
    liveServer: 'https://project-pastaperfect.firebaseapp.com/'
  },
  {
    id: 2,
    title: 'KX Yorkville',
    category: 'Website',
    description:
      'In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.',
    role: 'Gym Website',
    year: 2022,
    framework: 'other',
    built: ['JavaScript'],
    img: refImg,
    gitHub: 'https://github.com/TLNRB/web-dev_1st-semester_project',
    liveServer: 'https://project-kxyorkville.firebaseapp.com/'
  },
  {
    id: 3,
    title: 'Longhorn',
    category: 'Website',
    description:
      'In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.',
    role: 'BBQ Event Website',
    year: 2022,
    framework: 'other',
    built: ['SCSS', 'JavaScript'],
    img: refImg,
    gitHub: 'https://github.com/HvadisVal/Semester-project',
    liveServer: 'https://longhorn-bbq.firebaseapp.com/'
  },
  {
    id: 4,
    title: 'Aalborg Journey',
    category: 'Video',
    description:
      'In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.',
    role: 'Journey Video',
    year: 2023,
    built: ['Premier Pro'],
    img: bubbleImg,
    gitHub: 'https://github.com/TLNRB',
    liveServer: 'https://www.google.com/'
  },
  {
    id: 5,
    title: 'Apple Add',
    category: 'Video',
    description:
      'In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.',
    role: 'Commercial Video',
    year: 2022,
    built: ['Premier Pro'],
    img: profileImg,
    gitHub: 'https://github.com/TLNRB',
    liveServer: 'https://www.google.com/'
  }
]

export default projects
