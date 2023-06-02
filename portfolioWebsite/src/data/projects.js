//Image import on absolute path for build folder
import pastaPerfectImg from '../assets/images/pastaPerfect.jpg'
import kxYorkvilleImg from '../assets/images/kxYorkville.jpg'
import longhornLandingPageImg from '../assets/images/longhornLandingPage.jpg'
import kantenImg from '../assets//images/kanten.jpg'

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
    built: ['JavaScript', 'TailWind CSS'],
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
    built: ['JavaScript', 'SCSS'],
    img: longhornLandingPageImg,
    gitHub: 'https://github.com/HvadisVal/Semester-project',
    liveServer: 'https://longhorn-bbq.firebaseapp.com/'
  },
  {
    id: 4,
    title: 'Kanten',
    category: 'Website',
    description:
      'This website was created for an event organizer to promote their events, along with all the valuable information about them. They had a sepcial requirement to provide a backend interface where they can maintain the data of the events and galleries. It contains a small database with an authentication system along with a contact form as well as a newsletter form used by MailChimp.',
    role: 'Event Organizer Website',
    year: 2023,
    framework: 'vue',
    built: ['Vue.js', 'TailWind CSS', 'GSAP', 'Firebase'],
    img: kantenImg,
    gitHub: 'https://github.com/TLNRB/kanten',
    liveServer: 'https://kanten-c95d9.web.app/'
  }
]

export default projects
