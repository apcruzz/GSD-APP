export interface IslandSection {
  image: any; // require() reference to your image
  paragraphs: string[]; // array of plain text strings
}

export interface Island {
  id: string;
  name: string;
  emoji: string;
  color: string;
  image: any; // Update this type based on how images are handled in your project
  sections: {
    overview: IslandSection;
    history: IslandSection;
    traditions: IslandSection;
    culture: IslandSection;
    language: IslandSection;
  };
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  areCount: number;
  comments: string[];
  level: 'Trainee' | 'Level 1' | 'Level 2';
  tenure: string; // e.g., "2 years 3 months"
  startDate: string; // ISO date string
}

// next update ARESubmission

export interface ARESubmission {
  id: string;
  fromEmployeeId: string;
  toEmployeeId: string;
  message: string;
  date: string; // ISO date string
}


// next update user roles
export type UserRole = 'user' | 'admin';

export interface User {
  id: string;
  username: string;
  role: UserRole;
  employeeId?: string;
}