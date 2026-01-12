'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Atom, Bone, Workflow, Droplet, TestTube, Flame, ShieldCheck, Calendar, Zap, Percent } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const researchSciences = [
    {
        title: 'Artificial Gravity Human Physiology',
        icon: Bone,
        focus: 'Our main focus is to study the long-term effects of half or full artificial gravity on the human body.',
        keyResearch: [
            'Maintaining bone density and preventing muscle shrinkage.',
            'Adapting the cardiovascular system.',
            'Understanding inner ear function under sustained 1G or varying gravity.',
            'Connecting studies between the artificial gravity rim and microgravity axis.'
        ],
        completion: 65,
        schedule: 'Q3 2024',
        currentExperiment: 'Vestibular System Adaptation Study',
    },
    {
        title: 'Structural Mechanics & Materials Science',
        icon: Workflow,
        focus: 'Our main focus is also to research how construction materials and structure-based components respond to the constant and intense rotation needed to produce artificial gravity effectively.',
        keyResearch: [
            'Testing functionally graded materials (FGM) for stress and fatigue limits.',
            'Observing vibration and resonance phenomena.',
            'Developing self-repairing materials for micrometeoroid resistance.',
            'Measuring material deformation (strain) under applied stress.'
        ],
        completion: 45,
        schedule: 'Q4 2024',
        currentExperiment: 'Composite Fatigue Analysis under Centripetal Load',
    },
    {
        title: 'Fluid Physics and Dynamics',
        icon: Droplet,
        focus: 'Our main focus is to observe the nature and stability of fluids in a stable 1G artificial gravity environment.',
        keyResearch: [
            'Studying fluid dynamics without dominant gravitational forces.',
            'Examining the behavior of complex fluids like foams and gels.',
            'Avoiding confounding variables present in microgravity.',
            'Informing the design of reliable life support and plumbing systems.'
        ],
        completion: 80,
        schedule: 'Q2 2024',
        currentExperiment: 'Cryogenic Fuel Slosh Simulation',
    },
    {
        title: 'Astrobiology and Exoplanet Simulation',
        icon: TestTube,
        focus: 'The main focus is to investigate how non-terrestrial microbes, spores, and chemical precursors—substances that come before another and influence its development—behave under controlled, Earth-like gravity.',
        keyResearch: [
            'Conducting abiogenesis (origins of life) experiments.',
            'Simulating planetary conditions in controlled artificial gravity chambers.',
            'Examining microbial growth and adaptation in various gravitational fields.',
            'Utilizing specialized low-gravity equipment for life science.'
        ],
        completion: 30,
        schedule: 'Q1 2025',
        currentExperiment: 'Extremophile Response to Simulated Martian Gravity',
    },
    {
        title: 'Combustion and Fire Safety Science',
        icon: Flame,
        focus: 'Our main focus is to study how flames and fire spread in a pressurized habitat with normal Earth-like gravity.',
        keyResearch: [
            'Contrasting fire behavior in artificial gravity vs. microgravity (e.g., spherical flames).',
            'Developing more effective fire suppression systems for space habitats.',
            'Testing and creating safer materials for use in confined, normal-gravity space environments.'
        ],
        completion: 90,
        schedule: 'Completed',
        currentExperiment: 'Final Report Generation',
    },
    {
        title: 'Radiation and Shielding Physics',
        icon: ShieldCheck,
        focus: 'Our main focus is to test how well different shielding materials, like lunar regolith or water, protect the torus structure.',
        keyResearch: [
            'Studying high-energy cosmic ray interactions with shielding materials.',
            'Understanding degradation of thick, permanent shielding.',
            'Ensuring long-term crew health and equipment stability against radiation.'
        ],
        completion: 55,
        schedule: 'Q4 2024',
        currentExperiment: 'Water Shielding Effectiveness vs. GCRs',
    }
];


export function MainLabDashboard() {
  return (
    <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
                <Atom />
                Core Research Sciences
            </CardTitle>
            <CardDescription>
                An overview of the primary scientific investigations conducted in the Aetheros Main Lab.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <Accordion type="single" collapsible className="w-full">
                {researchSciences.map((science, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger>
                            <div className="flex items-center gap-3">
                                <science.icon className="h-5 w-5 text-primary" />
                                <span className="font-semibold text-left">{science.title}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                           <div className="space-y-6 pl-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm -mx-4">
                                    <div className="p-3 bg-muted/50 rounded-md flex items-center gap-3">
                                        <div className="p-2 bg-background rounded-md">
                                          <Percent className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-muted-foreground">Status</div>
                                            <div className="text-lg font-bold">{science.completion}% Complete</div>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-muted/50 rounded-md flex items-center gap-3">
                                        <div className="p-2 bg-background rounded-md">
                                          <Calendar className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-muted-foreground">Next Milestone</div>
                                            <div className="text-lg font-bold">{science.schedule}</div>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-muted/50 rounded-md flex items-center gap-3 md:col-span-1">
                                        <div className="p-2 bg-background rounded-md">
                                            <Zap className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-muted-foreground">Current Experiment</div>
                                            <div className="text-base font-bold">{science.currentExperiment}</div>
                                        </div>
                                    </div>
                                </div>
                                <Progress value={science.completion} className="h-2" />

                                <div>
                                    <h4 className="font-semibold text-muted-foreground mb-1">Main Focus</h4>
                                    <p className="text-sm">{science.focus}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-muted-foreground mb-2">Key Research Areas</h4>
                                    <ul className="list-disc list-outside space-y-1 pl-4 text-sm">
                                        {science.keyResearch.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                           </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </CardContent>
    </Card>
  );
}
