'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Flame, Zap, ShieldCheck, Settings, Package, Thermometer, GitBranch, Waves, Filter, Construction, Trash2, Power, Wrench, CirclePower, PowerOff, ShieldHalf, CalendarCheck } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { galacticpyroHistoryData } from '@/lib/placeholder-data';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { GalacticpyroHistoryData } from '@/lib/placeholder-data';


const sections = [
  {
    title: 'Core Technologies',
    icon: Zap,
    items: [
      {
        title: 'Pyrolysis',
        icon: Flame,
        content: [
          'Utilizes thermal decomposition of organic materials (biomass, agriculture waste) in a completely oxygen-absent environment.',
          'Operates at extreme temperatures, typically ranging from 800°C to 900°C, ensuring no burning occurs.',
          'Highly effective for managing dangerous medical and municipal solid waste due to its ability to destroy organic pollutants, bacteria, and viruses.',
          'Significantly reduces waste volume, minimizing the need for landfilling.'
        ]
      },
      {
        title: 'Plasma Arc Gasification',
        icon: Zap,
        content: [
          'Uses an ultra-high temperature plasma arc (2000°C to 6000°C) from a strong electric current to break down waste at a molecular level in a low-oxygen environment.',
          'The intense heat dissociates complex molecules into basic elements, which then recombine to form syngas (a clean fuel gas of H2 and CO) and an inert slag.',
        ]
      }
    ]
  },
  {
    title: 'Reactor Chamber Construction',
    icon: Construction,
    items: [
      {
        title: 'High-Temperature Reactor Chamber',
        icon: ShieldCheck,
        content: [
          'A multi-layered system designed to handle extreme heat.',
          'Features a hybrid structure: an Inconel 718 substrate (a nickel-based superalloy) for high yield strength and tensile resistance.',
          'A ceramic Thermal Barrier Coating (TBC) of YSZ zirconia or plasma-sprayed alumina on the hot face manages chemical exposure and reduces damage.',
          'This coating resists carburization (carbon diffusion) and oxidation in the low O2 atmosphere.'
        ]
      },
      {
        title: 'Insulation and Structure',
        icon: GitBranch,
        content: [
          'A thermal insulation layer (20-80mm thick) made of high-temperature ceramic fiber blankets (aluminosilicate), flexible microporous insulation, or aerogel blankets is used between the hot liner and the outer titanium structure.',
          'This layer keeps the outer titanium shell below 200°C.',
          'Low thermal-conductivity ceramic standoffs (Silicon Chloride, Alumina) support the inner liner while minimizing heat leak.'
        ]
      },
      {
        title: 'Seals and Fasteners',
        icon: Settings,
        content: [
          'Metal C-rings and spring-energized seals made from Inconel are used for high-temperature joints.',
          'Graphite and flexible PAN-based carbon fiber rope seals are used for access hatches, offering extreme temperature resistance (up to 3000°C in vacuum).',
          'Structural fasteners are made from Inconel or titanium, with continuous welded seams to reduce leak paths.'
        ]
      }
    ]
  },
  {
    title: 'Operational Components',
    icon: Package,
    items: [
      {
        title: 'Sensors & Instrumentation',
        icon: Thermometer,
        content: [
          'Type B or Type S (Platinum/Rhodium) thermocouples for temperatures >600°C due to their stability and accuracy.',
          'Type K (Nickel-based) thermocouples for lower temperature ranges (<600°C) as a tough, cost-effective option.',
        ]
      },
      {
        title: 'Solid & Gas Handling',
        icon: Waves,
        content: [
          'Inconel screw/auger mechanisms with ceramic liners handle the removal of char solids.',
          'High-temperature ceramic filters (porous SiC) capture particulates from the syngas.',
          'Gas-handling surfaces are made of Inconel or high-grade stainless steel (310/316) with protective coatings.',
          'Purge gases (Nitrogen, Argon) are used to prevent oxidation and to cool down the system.'
        ]
      },
       {
        title: 'Coatings & Surface Treatments',
        icon: Filter,
        content: [
          'Carbide-resistant coatings (aluminide or MCrAlY) on metal surfaces to resist carburization and oxidation.',
          'Anti-fouling TBC (Yttria-Stabilized Zirconia or plasma-sprayed alumina) reduces chemical attack and prevents the sticking of tars and char.',
        ]
      }
    ]
  }
];

const statusConfig: Record<GalacticpyroHistoryData['status'], { icon: React.ElementType, color: string, label: string }> = {
  'Operational': { icon: CirclePower, color: 'text-green-400', label: 'Operational' },
  'Maintenance': { icon: Wrench, color: 'text-yellow-400', label: 'Maintenance' },
  'Standby': { icon: PowerOff, color: 'text-blue-400', label: 'Standby' },
  'Offline': { icon: PowerOff, color: 'text-muted-foreground', label: 'Offline' },
};


export function GalacticpyroDashboard() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
            <Power className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">Operational</div>
            <p className="text-xs text-muted-foreground">Currently processing waste batch #734</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Maintenance Health</CardTitle>
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
            <p className="text-xs text-muted-foreground">All systems nominal. Next check in 250 hours.</p>
            <Progress value={98} className="mt-2 h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Waste Load</CardTitle>
            <Trash2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">750 kg / 1000 kg</div>
            <p className="text-xs text-muted-foreground">Chamber is at 75% capacity</p>
            <Progress value={75} className="mt-2 h-2" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-3 font-headline">
                <CalendarCheck className="h-6 w-6 text-primary" />
                10-Day Operational Log
            </CardTitle>
             <CardDescription>
                Historical performance data for the Galacticpyro Waste Chamber.
            </CardDescription>
        </CardHeader>
        <CardContent>
           <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Maint. Health</TableHead>
                <TableHead className="text-right">Waste Load (kg)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {galacticpyroHistoryData.map((day) => {
                const { icon: StatusIcon, color, label } = statusConfig[day.status];
                return (
                  <TableRow key={day.date}>
                    <TableCell className="font-medium">{day.date}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={cn("border-opacity-50", color.replace('text-', 'border-'))}>
                        <StatusIcon className={cn("mr-1.5 h-3 w-3", color)} />
                        {label}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-mono">{day.maintenanceHealth}%</TableCell>
                    <TableCell className="text-right font-mono">{day.wasteLoad.toLocaleString()}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {sections.map((section, index) => (
         <Card key={index}>
            <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline">
                    <section.icon className="h-6 w-6 text-primary" />
                    {section.title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {section.items.map((item, itemIndex) => (
                        <AccordionItem value={`item-${index}-${itemIndex}`} key={itemIndex}>
                            <AccordionTrigger>
                                <div className="flex items-center gap-3">
                                    <item.icon className="h-5 w-5 text-primary/80" />
                                    <span className="font-semibold text-left">{item.title}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                               <div className="space-y-2 pl-8">
                                    <ul className="list-disc list-outside space-y-2 text-sm text-muted-foreground">
                                        {item.content.map((point, pointIndex) => (
                                            <li key={pointIndex}>{point}</li>
                                        ))}
                                    </ul>
                               </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
      ))}
    </div>
  );
}
