'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bot, HeartPulse, BrainCircuit, Smile, Siren, Warehouse, Utensils, Dumbbell, Truck, Sprout, ShieldCheck, Microscope, BatteryCharging, MapPin, Wrench, CirclePower, PowerOff, ShieldHalf } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { robots, type Robot } from '@/lib/placeholder-data';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

type RobotDivision = {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  imageHint: string;
};

const robotDivisions: RobotDivision[] = [
  {
    id: 'robot-1',
    title: 'Personal Healthcare Assistant Robots',
    icon: HeartPulse,
    description: 'Mini-robots that continuously monitor residents, dispense medications, and assist the elderly or disabled with daily care.',
    features: ['Continuous vital sign monitoring', 'Automated medication dispensing', 'Early illness detection', 'Basic care assistance'],
    imageHint: 'medical robot',
  },
  {
    id: 'robot-2',
    title: 'Smart Learning & Tutor Robots',
    icon: BrainCircuit,
    description: 'Adaptive AI robots that provide personalized education for all ages, simulating labs and virtual experiments.',
    features: ['Personalized lesson plans', 'Progress monitoring', 'VR science experiment simulation', 'Skill training modules'],
    imageHint: 'education robot',
  },
  {
    id: 'robot-3',
    title: 'Emotional Support & Social Companions',
    icon: Smile,
    description: 'Small companion robots designed to recognize user emotions and provide interaction to combat loneliness and support mental wellness.',
    features: ['Mood recognition', 'Interactive chat & storytelling', 'Personalized music & media', 'Guided meditation sessions'],
    imageHint: 'companion robot',
  },
  {
    id: 'robot-4',
    title: 'Emergency Evacuation & Rescue Robots',
    icon: Siren,
    description: 'Specialized robots that assist in emergencies like fires or hull breaches by carrying people, providing first aid, and clearing debris.',
    features: ['Personnel transport', 'On-site first aid', 'Obstacle and debris clearing', 'Structural integrity assessment'],
    imageHint: 'rescue robot',
  },
  {
    id: 'robot-5',
    title: 'Adaptive Infrastructure Builders',
    icon: Warehouse,
    description: 'Construction robots that dynamically reconfigure habitats and interiors using modular components and 3D printing.',
    features: ['Modular construction', 'On-demand 3D printing', 'Dynamic space reconfiguration', 'Automated structural assembly'],
    imageHint: 'construction robot',
  },
  {
    id: 'robot-6',
    title: 'Smart Food & Nutrition Robots',
    icon: Utensils,
    description: 'Robotic chefs that prepare personalized meals using station-grown ingredients, automatically tracking dietary needs and allergies.',
    features: ['Personalized meal preparation', 'Allergy and dietary tracking', 'Uses aeroponic & lab-grown ingredients', 'Nutrient optimization'],
    imageHint: 'robot chef',
  },
  {
    id: 'robot-7',
    title: 'Recreational & Fitness Robots',
    icon: Dumbbell,
    description: 'Robots that organize and facilitate physical activities, VR games, and sports to keep residents healthy and entertained.',
    features: ['Virtual Reality game setup', 'Personal fitness training', 'Team sport organization', 'Skill development exercises'],
    imageHint: 'fitness robot',
  },
  {
    id: 'robot-8',
    title: 'Adaptive Mobility & Assistance Robots',
    icon: Truck,
    description: 'Mobility platforms that assist residents by transporting heavy objects, delivering goods, and aiding those with physical challenges.',
    features: ['Heavy object transport', 'Grocery & goods delivery', 'Mobility assistance for residents', 'Safe station navigation'],
    imageHint: 'delivery robot',
  },
  {
    id: 'robot-9',
    title: 'Environmental Awareness & Education Robots',
    icon: Sprout,
    description: 'Mobile educators that teach residents about station sustainability practices like recycling, water purification, and resource management.',
    features: ['Interactive sustainability lessons', 'Live mini-experiments', 'Air & water quality monitoring demos', 'Resource usage analytics'],
    imageHint: 'science robot',
  },
  {
    id: 'robot-10',
    title: 'Multi-Sensor Safety Patrol Robots',
    icon: ShieldCheck,
    description: 'Robotic drones that continuously monitor the station for environmental hazards and structural issues, ensuring preventative action is taken.',
    features: ['Continuous radiation monitoring', 'Air quality & temperature sensing', 'Structural integrity scanning', 'Immediate hazard alerts'],
    imageHint: 'security robot',
  },
  {
    id: 'robot-11',
    title: 'Quantum-Assisted Repair Swarm (QARS)',
    icon: Microscope,
    description: 'A swarm of self-organizing nanobots using quantum computing to perform molecular-level repairs on the station’s infrastructure.',
    features: ['Microfracture detection & repair', 'Quantum-entangled communication', 'Adaptive material restructuring', 'High-efficiency targeted repairs'],
    imageHint: 'nanotechnology swarm',
  }
];

const statusConfig: Record<Robot['status'], { icon: LucideIcon, color: string }> = {
  'Operational': { icon: CirclePower, color: 'text-green-400' },
  'Maintenance': { icon: Wrench, color: 'text-yellow-400' },
  'Charging': { icon: BatteryCharging, color: 'text-blue-400' },
  'Offline': { icon: PowerOff, color: 'text-muted-foreground' },
};

export function RoboticsDashboard() {
  const getImage = (id: string) => {
    const image = PlaceHolderImages.find((img) => img.id === id);
    return image?.imageUrl || `https://picsum.photos/seed/${id}/400/300`;
  };

  return (
    <div className="grid gap-4">
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <Bot />
            Robotics Division Overview
          </CardTitle>
          <CardDescription>
            An overview of the specialized robotic systems that enhance efficiency, safety, and quality of life on Aetheros.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {robotDivisions.map((division) => (
              <Card key={division.title} className="flex flex-col overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image
                    src={getImage(division.id)}
                    alt={division.title}
                    fill
                    className="object-cover"
                    data-ai-hint={division.imageHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline text-lg">
                    <division.icon className="h-6 w-6 text-primary" />
                    {division.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground mb-4">{division.description}</p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                    <ul className="list-disc list-outside space-y-1 pl-4 text-xs text-muted-foreground">
                      {division.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Robot Status</CardTitle>
          <CardDescription>Live operational status of all robotic units.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Unit</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Maint. Health</TableHead>
                <TableHead>Current Task</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {robots.map((robot) => {
                const { icon: StatusIcon, color } = statusConfig[robot.status];
                return (
                  <TableRow key={robot.id}>
                    <TableCell>
                      <div className="font-medium">{robot.name}</div>
                      <div className="text-xs text-muted-foreground">{robot.model}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={cn("border-opacity-50", color.replace('text-', 'border-'))}>
                        <StatusIcon className={cn("mr-1.5 h-3 w-3", color)} />
                        {robot.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={robot.maintenanceHealth} className="h-2 w-20" />
                        <span className="text-xs text-muted-foreground font-mono">{robot.maintenanceHealth}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{robot.currentTask}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
