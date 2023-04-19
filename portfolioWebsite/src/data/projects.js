//Image import on absolute path for build folder
import pastaPerfectImg from '../assets/images/pastaPerfect.jpg'
import kxYorkvilleImg from '../assets/images/kxYorkville.jpg'
import longhornLandingPageImg from '../assets/images/longhornLandingPage.jpg'
import aalborgImg from '../assets/images/aalborg.jpg'
import appleAddImg from '../assets/images/appleAdd.jpg'

const projects = [
  {
    id: 1,
    title: 'Pasta Perfect',
    category: 'Website',
    description:
      "The project's aim was to create a website that would provide users with pasta recepies which are stored in a database. Recepies are displayed dynamically on the site. It includes a section where you can filter the recepies based on different inputs. The ability to switch between light and dark mode is also included.",
    role: 'Recepie Website',
    year: 2023,
    framework: 'vue',
    built: ['JavaScript', 'TailWind'],
    img: pastaPerfectImg,
    gitHub: 'https://github.com/TLNRB/pastaPerfect',
    liveServer: 'https://project-pastaperfect.firebaseapp.com/'
  },
  {
    id: 2,
    title: 'KX Yorkville',
    category: 'Website',
    description:
      "KX Yorkville is an online platform for a fitness center, providing visitors an overview of the gym's facilities, class schedules, pricing, timeline and membership options. The website's design was developed to ensure an engaging user experience.",
    role: 'Gym Website',
    year: 2022,
    framework: 'other',
    built: ['JavaScript'],
    img: kxYorkvilleImg,
    gitHub: 'https://github.com/TLNRB/web-dev_1st-semester_project',
    liveServer: 'https://project-kxyorkville.firebaseapp.com/'
  },
  {
    id: 3,
    title: 'Longhorn',
    category: 'Website',
    description:
      'Our main goal was to create a website to promote and provide information about a BBQ event. The website included details about the event, such as the date, time, location, and an image gallery which displays shots from previous years. It was designed to attract visitors and generate interest in the event.',
    role: 'BBQ Event Website',
    year: 2022,
    framework: 'other',
    built: ['SCSS', 'JavaScript'],
    img: longhornLandingPageImg,
    gitHub: 'https://github.com/HvadisVal/Semester-project',
    liveServer: 'https://longhorn-bbq.firebaseapp.com/'
  },
  {
    id: 4,
    title: 'Aalborg Journey',
    category: 'Video',
    description:
      'This video was made as a mini project of my own. I captured my first time seeing Aalborg while visiting its most remarkable parts.',
    role: 'Journey Video',
    year: 2023,
    built: ['Premier Pro'],
    img: aalborgImg,
    gitHub: 'https://github.com/TLNRB',
    liveServer: 'https://youtu.be/5a6jqATvqKQ'
  },
  {
    id: 5,
    title: 'Apple Add',
    category: 'Video',
    description:
      'This project was aimed to create a short commercial video for social media. The product we promoted is an IPhone. Overall we wanted the video to be eyecatching and attention grabbing.',
    role: 'Commercial Video',
    year: 2022,
    built: ['Premier Pro'],
    img: appleAddImg,
    gitHub: 'https://github.com/TLNRB',
    liveServer: 'https://youtube.com/shorts/9QLWzJUZ8BE?feature=share'
  }
]

export default projects
