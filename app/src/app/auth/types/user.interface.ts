export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Operator' | 'Supervisor' | 'Admin';
  lines: string[];
}
