
export type PowerData = {
  time?: string;
  solar?: number;
  date?: string;
  generation?: number;
  usage?: number;
};

export const powerData: PowerData[] = [
  { time: '00:00', solar: 800 },
  { time: '02:00', solar: 750 },
  { time: '04:00', solar: 700 },
  { time: '06:00', solar: 1200 },
  { time: '08:00', solar: 1500 },
  { time: '10:00', solar: 1800 },
  { time: '12:00', solar: 2000 },
  { time: '14:00', solar: 1900 },
  { time: '16:00', solar: 1600 },
  { time: '18:00', solar: 1100 },
  { time: '20:00', solar: 800 },
  { time: '22:00', solar: 750 },
];

export const dailyPowerData: PowerData[] = [
  { date: 'Day 1', generation: 3.2, usage: 2.8 },
  { date: 'Day 2', generation: 3.3, usage: 2.9 },
  { date: 'Day 3', generation: 3.1, usage: 2.7 },
  { date: 'Day 4', generation: 3.4, usage: 3.0 },
  { date: 'Day 5', generation: 3.5, usage: 3.1 },
  { date: 'Day 6', generation: 3.0, usage: 2.6 },
  { date: 'Day 7', generation: 3.2, usage: 2.8 },
  { date: 'Day 8', generation: 3.6, usage: 3.2 },
  { date: 'Day 9', generation: 3.5, usage: 3.1 },
  { date: 'Day 10', generation: 3.7, usage: 3.3 },
];

export type Alert = {
  id: string;
  system: string;
  message: string;
  severity: 'Low' | 'Medium' | 'High';
  timestamp: string;
};

export const recentAlerts: Alert[] = [
    { id: 'ALT-001', system: 'Life Support', message: 'CO2 levels slightly elevated in botany bay.', severity: 'Low', timestamp: '2h ago' },
    { id: 'ALT-002', system: 'Power', message: 'Fusion reactor output fluctuating by 5%.', severity: 'Medium', timestamp: '8h ago' },
    { id: 'ALT-003', system: 'Comms', message: 'High-gain antenna realignment drift detected.', severity: 'Low', timestamp: '1d ago' },
    { id: 'ALT-004', system: 'Propulsion', message: 'Thruster G-7 pressure anomaly.', severity: 'High', timestamp: '3d ago' },
];

export type CrewMember = {
    id: string;
    name: string;
    role: string;
    shift: 'Alpha' | 'Beta' | 'Gamma';
    status: 'On Duty' | 'Off Duty' | 'On Leave';
    assignedModule: string;
    avatarUrl: string;
    imageHint: string;
}

export const crewMembers: CrewMember[] = [
    { id: 'crew-1', name: 'Cmdr. Eva Rostova', role: 'Mission Lead', shift: 'Alpha', status: 'On Duty', assignedModule: 'Command Deck', avatarUrl: 'https://picsum.photos/seed/crew1/100/100', imageHint: 'woman portrait' },
    { id: 'crew-2', name: 'Dr. Kenji Tanaka', role: 'Science Officer', shift: 'Beta', status: 'On Duty', assignedModule: 'Research Lab', avatarUrl: 'https://picsum.photos/seed/crew2/100/100', imageHint: 'man portrait' },
    { id: 'crew-3', name: 'Aria Patel', role: 'Chief Engineer', shift: 'Alpha', status: 'On Duty', assignedModule: 'Engineering', avatarUrl: 'https://picsum.photos/seed/crew3/100/100', imageHint: 'woman engineer' },
    { id: 'crew-4', name: 'Leo Maxwell', role: 'Pilot', shift: 'Gamma', status: 'Off Duty', assignedModule: 'Hangar Bay', avatarUrl: 'https://picsum.photos/seed/crew4/100/100', imageHint: 'man pilot' },
    { id: 'crew-5', name: 'Dr. Sofia Reyes', role: 'Medical Officer', shift: 'Beta', status: 'On Duty', assignedModule: 'MedBay', avatarUrl: 'https://picsum.photos/seed/crew5/100/100', imageHint: 'woman doctor' },
    { id: 'crew-6', name: 'Jax', role: 'Robotics Specialist', shift: 'Gamma', status: 'On Duty', assignedModule: 'Robotics Bay', avatarUrl: 'https://picsum.photos/seed/crew6/100/100', imageHint: 'person tech' },
];

export type JobRole = {
  category: string;
  role: string;
  personnel: number;
  monthlyPayroll: number;
  annualPayroll: number;
  notes: string;
  status: 'On Duty' | 'Off Duty' | 'On Leave';
};

export const jobRoles: JobRole[] = [
  {
    category: 'Command and Control',
    role: 'Station Commander',
    personnel: 2,
    monthlyPayroll: 200000,
    annualPayroll: 2400000,
    notes: 'The overall leader of our settlement who is responsible for overseeing the safety of all individuals, creating and enforcing all policies and procedures, as well as ensuring that all aspects of the settlement function properly. The Station Commander coordinates all of the various teams, and makes the final decision in the event of an emergency.',
    status: 'On Duty',
  },
  {
    category: 'Command and Control',
    role: 'Deptuty Commander',
    personnel: 4,
    monthlyPayroll: 100000,
    annualPayroll: 1200000,
    notes: 'The second-in-command for the Station Commander. Assists the Station Commander with the daily operations of the settlement and assumes full responsibility of the settlement during the absence of the Station Commander. Also responsible for facilitating collaboration between the various departments within the settlement.',
    status: 'On Duty',
  },
  {
    category: 'Engineering',
    role: 'Aerospace Engineer',
    personnel: 374,
    monthlyPayroll: 75000,
    annualPayroll: 900000,
    notes: 'The individuals responsible for the maintenance and repair of the spacecraft. Responsible for maintaining the stability of the spacecraft while in orbit, as well as ensuring proper functioning of the docking systems, propulsion systems, and spacecraft travel.',
    status: 'On Duty',
  },
  {
    category: 'Engineering',
    role: 'Mechanical Engineer',
    personnel: 300,
    monthlyPayroll: 25000,
    annualPayroll: 300000,
    notes: 'The people who design and build the moving parts of the spacecraft, such as rotating machinery and all automated systems, and responsible for maintaining and repairing the moving parts of the spacecraft.',
    status: 'Off Duty',
  },
  {
    category: 'Engineering',
    role: 'Electrical Engineer',
    personnel: 250,
    monthlyPayroll: 20000,
    annualPayroll: 240000,
    notes: 'Responsible for providing and maintaining power distribution systems. Focuses on the generation and distribution of electrical power.',
    status: 'On Duty',
  },
  {
    category: 'Engineering',
    role: 'Computer Systems engineer',
    personnel: 150,
    monthlyPayroll: 20000,
    annualPayroll: 240000,
    notes: 'The experts on the computer systems, networks, and all automated systems that are used in the settlement.',
    status: 'On Leave',
  },
  {
    category: 'Medical & Health',
    role: 'space doctor',
    personnel: 400,
    monthlyPayroll: 40000,
    annualPayroll: 480000,
    notes: 'Space-related doctor that takes care of patients in microgravity, performs surgeries and conducts long-term assessments of health.',
    status: 'On Duty',
  },
  {
    category: 'Medical & Health',
    role: 'nurse',
    personnel: 200,
    monthlyPayroll: 20000,
    annualPayroll: 240000,
    notes: 'Nurse supports the Doctor, assists with care and procedures for patients, monitors the health and recovery of crews.',
    status: 'On Duty',
  },
  {
    category: 'Medical & Health',
    role: 'physologist',
    personnel: 100,
    monthlyPayroll: 21000,
    annualPayroll: 252000,
    notes: 'Evaluator of how \'Space\' affects Humans; Designs methods of counteracting bone loss Muscle loss, etc.',
    status: 'Off Duty',
  },
  {
    category: 'Medical & Health',
    role: 'cardiologist',
    personnel: 100,
    monthlyPayroll: 21000,
    annualPayroll: 252000,
    notes: 'Heart Specialist/Physician monitors Heart Health in Low Gravity and Alteration of Heart due to prolonged Space living.',
    status: 'On Duty',
  },
  {
    category: 'Medical & Health',
    role: 'neurologist',
    personnel: 100,
    monthlyPayroll: 21000,
    annualPayroll: 252000,
    notes: 'Physician that is focused upon Brain Health, the knowledge of the mind, Mental Health; Stress, Sleep disorders, etc.',
    status: 'On Duty',
  },
  {
    category: 'Medical & Health',
    role: 'dermotologist',
    personnel: 100,
    monthlyPayroll: 21000,
    annualPayroll: 252000,
    notes: 'Individual who is responsible for treating all of the effects of the Space Environment, to the Skin, to provide a Healthy Skin Care Regimen.',
    status: 'On Leave',
  },
  {
    category: 'Life Support & Food',
    role: 'space farmer',
    personnel: 650,
    monthlyPayroll: 32500,
    annualPayroll: 390000,
    notes: 'An Individual grows all food utilizing Special Methods to ensure an ample supply of food for the Inhabitants aboard the spacecraft.',
    status: 'On Duty',
  },
  {
    category: 'Life Support & Food',
    role: 'aeroponics specalist',
    personnel: 475,
    monthlyPayroll: 27000,
    annualPayroll: 324000,
    notes: 'Responsible for managing Advanced Technologies that Grow Food using No Soil; Nutrient & Water Supplies are optimally utilized by the Plants.',
    status: 'On Duty',
  },
  {
    category: 'Life Support & Food',
    role: 'environmental technician',
    personnel: 125,
    monthlyPayroll: 14500,
    annualPayroll: 174000,
    notes: 'Environmental Technicians monitor Air, Water, and Waste Systems to ensure a clean and safe living environment for people.',
    status: 'Off Duty',
  },
  {
    category: 'Research',
    role: 'physics scientist',
    personnel: 265,
    monthlyPayroll: 35000,
    annualPayroll: 420000,
    notes: 'Physical Science Researchers conduct research on material systems within Space.Physical Science Researchers conduct research on material systems within Space. They improve processes and or systems of energy',
    status: 'On Duty',
  },
  {
    category: 'Research',
    role: 'biology scientist',
    personnel: 265,
    monthlyPayroll: 35000,
    annualPayroll: 420000,
    notes: 'Biology Researchers are responsible for conducting studies about Plants, Micro-organisms, and Humans in the Environment of Space.Biology Researchers conduct studies regarding Plants, Micro-organisms, and Humans in the Environment of Space. They will help improve Life Support Systems and conduct Health Research.',
    status: 'On Leave',
  },
  {
    category: 'Research',
    role: 'lab technician',
    personnel: 140,
    monthlyPayroll: 17500,
    annualPayroll: 210000,
    notes: 'Laboratory Technicians provide support for all testing and Experimentation necessary for the Science Projects. They ensure Laboratory Equipment functions properly and validate the accuracy of all Laboratory Data.',
    status: 'On Duty',
  },
];

export type Robot = {
  id: string;
  name: string;
  model: string;
  status: 'Operational' | 'Maintenance' | 'Offline' | 'Charging';
  maintenanceHealth: number;
  currentTask: string;
};

export const robots: Robot[] = [
  { id: 'R-001', name: 'Spider-Fab', model: 'T-800 Fabricator', status: 'Operational', maintenanceHealth: 95, currentTask: 'Repairing micrometeoroid damage' },
  { id: 'R-002', name: 'CARE-Taker', model: 'MediBot 5000', status: 'Charging', maintenanceHealth: 78, currentTask: 'Idle' },
  { id: 'R-003', name: 'Scrubber-Bot', model: 'CleanBot 3', status: 'Operational', maintenanceHealth: 85, currentTask: 'Sanitizing corridor' },
  { id: 'R-004', name: 'Grow-Bot', model: 'AgriHand v2', status: 'Maintenance', maintenanceHealth: 20, currentTask: 'Awaiting software patch' },
  { id: 'R-005', name: 'Digger', model: 'Excavator Drone', status: 'Offline', maintenanceHealth: 100, currentTask: 'Offline' },
  { id: 'R-006', name: 'Inspector', model: 'FlyEye Drone', status: 'Operational', maintenanceHealth: 92, currentTask: 'Structural integrity scan' },
];

export type WaterRecycleData = {
  time: string;
  reserves: number;
};

export const waterRecycleData: WaterRecycleData[] = [
  { time: '00:00', reserves: 4.21 },
  { time: '02:00', reserves: 4.18 },
  { time: '04:00', reserves: 4.15 },
  { time: '06:00', reserves: 4.12 },
  { time: '08:00', reserves: 4.16 },
  { time: '10:00', reserves: 4.25 },
  { time: '12:00', reserves: 4.23 },
  { time: '14:00', reserves: 4.20 },
  { time: '16:00', reserves: 4.17 },
  { time: '18:00', reserves: 4.19 },
  { time: '20:00', reserves: 4.22 },
  { time: '22:00', reserves: 4.20 },
];

export type WaterProductionData = {
  time: string;
  production: number;
};

export const waterProductionData: WaterProductionData[] = [
    { time: '00:00', production: 0.82 },
    { time: '02:00', production: 0.85 },
    { time: '04:00', production: 0.88 },
    { time: '06:00', production: 0.91 },
    { time: '08:00', production: 0.90 },
    { time: '10:00', production: 0.89 },
    { time: '12:00', production: 0.92 },
    { time: '14:00', production: 0.95 },
    { time: '16:00', production: 0.93 },
    { time: '18:00', production: 0.91 },
    { time: '20:00', production: 0.89 },
    { time: '22:00', production: 0.87 },
];

export type WasteRecyclingData = {
    time: string;
    processed: number;
    totalProcessed: number;
};

export const wasteRecyclingData: WasteRecyclingData[] = [
    { time: '00:00', processed: 920, totalProcessed: 950 },
    { time: '02:00', processed: 910, totalProcessed: 950 },
    { time: '04:00', processed: 930, totalProcessed: 950 },
    { time: '06:00', processed: 940, totalProcessed: 950 },
    { time: '08:00', processed: 950, totalProcessed: 950 },
    { time: '10:00', processed: 960, totalProcessed: 950 },
    { time: '12:00', processed: 950, totalProcessed: 950 },
    { time: '14:00', processed: 940, totalProcessed: 950 },
    { time: '16:00', processed: 930, totalProcessed: 950 },
    { time: '18:00', processed: 920, totalProcessed: 950 },
    { time: '20:00', processed: 910, totalProcessed: 950 },
    { time: '22:00', processed: 950, totalProcessed: 950 },
];


export type AtmosphereData = {
  date: string;
  nitrogen: number;
  oxygen: number;
  argon: number;
  co2: number;
};

export const atmosphereData: AtmosphereData[] = [
  { date: 'Day 1', nitrogen: 78.1, oxygen: 20.9, argon: 0.93, co2: 0.04 },
  { date: 'Day 2', nitrogen: 78.0, oxygen: 21.0, argon: 0.93, co2: 0.04 },
  { date: 'Day 3', nitrogen: 78.2, oxygen: 20.8, argon: 0.92, co2: 0.05 },
  { date: 'Day 4', nitrogen: 78.1, oxygen: 20.9, argon: 0.93, co2: 0.04 },
  { date: 'Day 5', nitrogen: 78.3, oxygen: 20.7, argon: 0.94, co2: 0.05 },
  { date: 'Day 6', nitrogen: 78.2, oxygen: 20.8, argon: 0.93, co2: 0.04 },
  { date: 'Day 7', nitrogen: 78.1, oxygen: 20.9, argon: 0.93, co2: 0.04 },
  { date: 'Day 8', nitrogen: 78.0, oxygen: 21.0, argon: 0.94, co2: 0.03 },
  { date: 'Day 9', nitrogen: 78.2, oxygen: 20.8, argon: 0.93, co2: 0.05 },
  { date: 'Day 10', nitrogen: 78.1, oxygen: 20.9, argon: 0.93, co2: 0.04 },
];

export type GalacticpyroHistoryData = {
  date: string;
  status: 'Operational' | 'Maintenance' | 'Standby' | 'Offline';
  maintenanceHealth: number;
  wasteLoad: number;
};

export const galacticpyroHistoryData: GalacticpyroHistoryData[] = [
  { date: 'Day 1', status: 'Operational', maintenanceHealth: 99, wasteLoad: 850 },
  { date: 'Day 2', status: 'Operational', maintenanceHealth: 99, wasteLoad: 900 },
  { date: 'Day 3', status: 'Standby', maintenanceHealth: 99, wasteLoad: 0 },
  { date: 'Day 4', status: 'Operational', maintenanceHealth: 98, wasteLoad: 750 },
  { date: 'Day 5', status: 'Operational', maintenanceHealth: 98, wasteLoad: 880 },
  { date: 'Day 6', status: 'Maintenance', maintenanceHealth: 95, wasteLoad: 0 },
  { date: 'Day 7', status: 'Operational', maintenanceHealth: 100, wasteLoad: 820 },
  { date: 'Day 8', status: 'Operational', maintenanceHealth: 100, wasteLoad: 910 },
  { date: 'Day 9', status: 'Standby', maintenanceHealth: 99, wasteLoad: 150 },
  { date: 'Day 10', status: 'Operational', maintenanceHealth: 98, wasteLoad: 750 },
];

export type CommsHistoryData = {
  date: string;
  externalStatus: 'Online' | 'Degraded' | 'Offline';
  signalStrength: number;
  latency: number;
  internalStatus: 'Optimal' | 'Degraded' | 'Offline';
};

export const commsHistoryData: CommsHistoryData[] = [
  { date: 'Day 1', externalStatus: 'Online', signalStrength: 98.7, latency: 2.3, internalStatus: 'Optimal' },
  { date: 'Day 2', externalStatus: 'Online', signalStrength: 99.1, latency: 2.2, internalStatus: 'Optimal' },
  { date: 'Day 3', externalStatus: 'Degraded', signalStrength: 85.4, latency: 3.1, internalStatus: 'Optimal' },
  { date: 'Day 4', externalStatus: 'Online', signalStrength: 97.5, latency: 2.4, internalStatus: 'Optimal' },
  { date: 'Day 5', externalStatus: 'Online', signalStrength: 99.2, latency: 2.2, internalStatus: 'Degraded' },
  { date: 'Day 6', externalStatus: 'Online', signalStrength: 98.8, latency: 2.3, internalStatus: 'Optimal' },
  { date: 'Day 7', externalStatus: 'Online', signalStrength: 99.0, latency: 2.3, internalStatus: 'Optimal' },
  { date: 'Day 8', externalStatus: 'Offline', signalStrength: 0, latency: 99.9, internalStatus: 'Optimal' },
  { date: 'Day 9', externalStatus: 'Online', signalStrength: 96.8, latency: 2.5, internalStatus: 'Optimal' },
  { date: 'Day 10', externalStatus: 'Online', signalStrength: 98.9, latency: 2.3, internalStatus: 'Optimal' },
];

    
