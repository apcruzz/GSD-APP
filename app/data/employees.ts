import { ARESubmission, Employee } from '../types';

export const employees: Employee[] = [
  // Training Leads
  { 
    id: 'emp-1', 
    name: 'Kalani Manu', 
    role: 'Training Lead', 
    department: 'Training', 
    areCount: 15, 
    comments: ['Always helpful and patient!', 'Great mentor'],
    level: 'Level 2',
    tenure: '4 years 2 months',
    startDate: '2020-08-15'
  },
  { 
    id: 'emp-2', 
    name: 'Heydden Tiori', 
    role: 'Training Lead', 
    department: 'Training', 
    areCount: 12, 
    comments: ['Excellent teacher', 'Very knowledgeable'],
    level: 'Level 2',
    tenure: '3 years 5 months',
    startDate: '2021-05-20'
  },
  { 
    id: 'emp-3', 
    name: 'Koa Silva', 
    role: 'Training Lead', 
    department: 'Training', 
    areCount: 18, 
    comments: ['Inspiring leader'],
    level: 'Level 2',
    tenure: '5 years 1 month',
    startDate: '2019-09-10'
  },
  
  // Operations Leads
  { 
    id: 'emp-4', 
    name: 'Moana Tui', 
    role: 'Operations Lead', 
    department: 'Operations', 
    areCount: 20, 
    comments: ['Super organized!', 'Gets things done'],
    level: 'Level 2',
    tenure: '3 years 8 months',
    startDate: '2021-02-14'
  },
  { 
    id: 'emp-5', 
    name: 'Tane Mateo', 
    role: 'Operations Lead', 
    department: 'Operations', 
    areCount: 14, 
    comments: ['Great problem solver'],
    level: 'Level 2',
    tenure: '2 years 11 months',
    startDate: '2021-11-05'
  },
  { 
    id: 'emp-6', 
    name: 'Hina Vailea', 
    role: 'Operations Lead', 
    department: 'Operations', 
    areCount: 16, 
    comments: ['Always reliable'],
    level: 'Level 1',
    tenure: '2 years 3 months',
    startDate: '2022-07-22'
  },
  
  // Managers
  { 
    id: 'emp-7', 
    name: 'Malia Chen', 
    role: 'Manager', 
    department: 'Management', 
    areCount: 25, 
    comments: ['Excellent leadership', 'Very supportive'],
    level: 'Level 2',
    tenure: '6 years 4 months',
    startDate: '2018-06-01'
  },
  { 
    id: 'emp-8', 
    name: 'Keanu Walsh', 
    role: 'Manager', 
    department: 'Management', 
    areCount: 22, 
    comments: ['Fair and understanding'],
    level: 'Level 2',
    tenure: '5 years 7 months',
    startDate: '2019-03-15'
  },
  
  // Student Supervisors
  { 
    id: 'emp-9', 
    name: 'Alani Park', 
    role: 'Student Supervisor', 
    department: 'Supervision', 
    areCount: 8, 
    comments: ['Great with guests!'],
    level: 'Level 1',
    tenure: '1 year 9 months',
    startDate: '2023-01-10'
  },
  { 
    id: 'emp-10', 
    name: 'Noa Kim', 
    role: 'Student Supervisor', 
    department: 'Supervision', 
    areCount: 10, 
    comments: ['Always smiling'],
    level: 'Level 1',
    tenure: '2 years 1 month',
    startDate: '2022-09-20'
  },
  { 
    id: 'emp-11', 
    name: 'Iolana Lopez', 
    role: 'Student Supervisor', 
    department: 'Supervision', 
    areCount: 7, 
    comments: ['Very helpful'],
    level: 'Level 1',
    tenure: '1 year 5 months',
    startDate: '2023-05-12'
  },
  { 
    id: 'emp-12', 
    name: 'Kai Johnson', 
    role: 'Student Supervisor', 
    department: 'Supervision', 
    areCount: 9, 
    comments: ['Friendly and professional'],
    level: 'Level 1',
    tenure: '1 year 8 months',
    startDate: '2023-02-18'
  },
  
  // Guides (sample of 20 from 100+)
  { 
    id: 'emp-13', 
    name: 'Makana Brown', 
    role: 'Guide', 
    department: 'Samoa', 
    areCount: 5, 
    comments: ['Passionate about culture'],
    level: 'Level 1',
    tenure: '1 year 2 months',
    startDate: '2023-08-25'
  },
  { 
    id: 'emp-14', 
    name: 'Kiele Davis', 
    role: 'Guide', 
    department: 'Samoa', 
    areCount: 6, 
    comments: [],
    level: 'Level 1',
    tenure: '1 year 7 months',
    startDate: '2023-03-10'
  },
  { 
    id: 'emp-15', 
    name: 'Ikaika Martinez', 
    role: 'Guide', 
    department: 'Aotearoa', 
    areCount: 8, 
    comments: ['Great storyteller'],
    level: 'Level 1',
    tenure: '1 year 11 months',
    startDate: '2022-11-15'
  },
  { 
    id: 'emp-16', 
    name: 'Nalani Wilson', 
    role: 'Guide', 
    department: 'Aotearoa', 
    areCount: 4, 
    comments: [],
    level: 'Trainee',
    tenure: '6 months',
    startDate: '2024-04-20'
  },
  { 
    id: 'emp-17', 
    name: 'Kapena Anderson', 
    role: 'Guide', 
    department: 'Hawaii', 
    areCount: 7, 
    comments: ['Excellent hula dancer'],
    level: 'Level 1',
    tenure: '1 year 4 months',
    startDate: '2023-06-08'
  },
  { 
    id: 'emp-18', 
    name: 'Liko Thomas', 
    role: 'Guide', 
    department: 'Hawaii', 
    areCount: 11, 
    comments: ['Very informative tours'],
    level: 'Level 2',
    tenure: '2 years 6 months',
    startDate: '2022-04-12'
  },
  { 
    id: 'emp-19', 
    name: 'Ofa Taylor', 
    role: 'Guide', 
    department: 'Tonga', 
    areCount: 3, 
    comments: [],
    level: 'Trainee',
    tenure: '4 months',
    startDate: '2024-06-15'
  },
  { 
    id: 'emp-20', 
    name: 'Sione Garcia', 
    role: 'Guide', 
    department: 'Tonga', 
    areCount: 9, 
    comments: ['Warm and welcoming'],
    level: 'Level 1',
    tenure: '1 year 10 months',
    startDate: '2022-12-20'
  },
  { 
    id: 'emp-21', 
    name: 'Mereoni Lee', 
    role: 'Guide', 
    department: 'Fiji', 
    areCount: 6, 
    comments: [],
    level: 'Level 1',
    tenure: '1 year 3 months',
    startDate: '2023-07-18'
  },
  { 
    id: 'emp-22', 
    name: 'Jone White', 
    role: 'Guide', 
    department: 'Fiji', 
    areCount: 5, 
    comments: ['Bula spirit!'],
    level: 'Trainee',
    tenure: '8 months',
    startDate: '2024-02-10'
  },
  { 
    id: 'emp-23', 
    name: 'Tehani Clark', 
    role: 'Guide', 
    department: 'French Polynesia', 
    areCount: 12, 
    comments: ['Beautiful dancing'],
    level: 'Level 2',
    tenure: '2 years 9 months',
    startDate: '2022-01-22'
  },
  { 
    id: 'emp-24', 
    name: 'Maeva Rodriguez', 
    role: 'Guide', 
    department: 'French Polynesia', 
    areCount: 7, 
    comments: [],
    level: 'Level 1',
    tenure: '1 year 6 months',
    startDate: '2023-04-05'
  },
  { 
    id: 'emp-25', 
    name: 'Pele Harris', 
    role: 'Guide', 
    department: 'Samoa', 
    areCount: 4, 
    comments: [],
    level: 'Trainee',
    tenure: '5 months',
    startDate: '2024-05-08'
  },
  { 
    id: 'emp-26', 
    name: 'Aroha Martin', 
    role: 'Guide', 
    department: 'Aotearoa', 
    areCount: 10, 
    comments: ['Great with kids'],
    level: 'Level 1',
    tenure: '2 years 2 months',
    startDate: '2022-08-15'
  },
  { 
    id: 'emp-27', 
    name: 'Keahi Thompson', 
    role: 'Guide', 
    department: 'Hawaii', 
    areCount: 8, 
    comments: [],
    level: 'Level 1',
    tenure: '1 year 9 months',
    startDate: '2023-01-28'
  },
  { 
    id: 'emp-28', 
    name: 'Mele Lewis', 
    role: 'Guide', 
    department: 'Tonga', 
    areCount: 6, 
    comments: [],
    level: 'Level 1',
    tenure: '1 year 4 months',
    startDate: '2023-06-12'
  },
  { 
    id: 'emp-29', 
    name: 'Viti Walker', 
    role: 'Guide', 
    department: 'Fiji', 
    areCount: 5, 
    comments: [],
    level: 'Trainee',
    tenure: '7 months',
    startDate: '2024-03-20'
  },
  { 
    id: 'emp-30', 
    name: 'Moana Hall', 
    role: 'Guide', 
    department: 'French Polynesia', 
    areCount: 9, 
    comments: [],
    level: 'Level 1',
    tenure: '1 year 10 months',
    startDate: '2022-12-05'
  },
  { 
    id: 'emp-31', 
    name: 'Tui Allen', 
    role: 'Guide', 
    department: 'Samoa', 
    areCount: 7, 
    comments: [],
    level: 'Level 1',
    tenure: '1 year 5 months',
    startDate: '2023-05-18'
  },
  { 
    id: 'emp-32', 
    name: 'Rangi Young', 
    role: 'Guide', 
    department: 'Aotearoa', 
    areCount: 11, 
    comments: [],
    level: 'Level 2',
    tenure: '2 years 8 months',
    startDate: '2022-02-14'
  },
];

export const areSubmissions: ARESubmission[] = [
  {
    id: 'are-1',
    fromEmployeeId: 'emp-13',
    toEmployeeId: 'emp-1',
    message: 'Thank you for the excellent training on Samoan culture! Your patience and knowledge really helped me grow.',
    date: '2025-10-20'
  },
  {
    id: 'are-2',
    fromEmployeeId: 'emp-15',
    toEmployeeId: 'emp-4',
    message: 'Great job coordinating today\'s event! Everything ran smoothly thanks to your organization.',
    date: '2025-10-22'
  },
  {
    id: 'are-3',
    fromEmployeeId: 'emp-17',
    toEmployeeId: 'emp-7',
    message: 'Your leadership during the busy season has been inspiring. Thank you for always supporting the team!',
    date: '2025-10-24'
  },
];
