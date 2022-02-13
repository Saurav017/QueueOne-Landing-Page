import { FaAccessibleIcon, FaChrome } from "react-icons/fa";
import { BsListUl } from "react-icons/bs";
import { CgIfDesign } from "react-icons/cg";
import {FaLaptopCode} from "react-icons/fa";
import {MdWork} from "react-icons/md";
import {AiFillMedicineBox} from "react-icons/ai";
import {FcBusinessContact} from "react-icons/fc";

const cardAssets = [
  {
    logo: <BsListUl />,
    title: "Queue Listing",
    description: "Create Digital Queue in a SaaS platform and Maintain all Digital Queues in one place.",
  },
  {
    logo: <CgIfDesign />,
    title: "Digital Signage",
    description: "Provide real-time Queue Progress display for waiting customers.",
  },
  {
    logo: <FaLaptopCode />,
    title: "Multi-Channel Interface",
    description: "Allow customers to join the Digital Queue using the web, mobile and IoT device interfaces.",
  },
  {
    logo: <MdWork />,
    title: "Flexible Work Management",
    description: "Create Flexible time schedules for facilitating smooth reopening of offices. Manage capacity, pre-book, contactless validations, automated reminders, etc.",
  },
  {
    logo: <AiFillMedicineBox />,
    title: "Manage COVID-19 Vaccination Program",
    description: "Create & manage digital queues for safe and efficient COVID-19 vaccine program. Easy (online/offline) registrations, contactless validation, automated re-appointment for next-dose, etc.",
  },
  {
    logo: <FcBusinessContact />,
    title: "Digital Queuing Solution for Businesses",
    description: "Create Digital Queue in a SaaS platform and maintain all Digital Queues in one place.",
  },
];

export default cardAssets;