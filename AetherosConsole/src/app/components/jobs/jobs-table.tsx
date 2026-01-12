"use client"

import * as React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { jobRoles, JobRole } from "@/lib/placeholder-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

const JobCategory = ({ category, roles }: { category: string, roles: JobRole[] }) => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle className="font-headline text-xl">{category}</CardTitle>
    </CardHeader>
    <CardContent>
      <Accordion type="single" collapsible className="w-full">
        {roles.map((role, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>
              <div className="flex justify-between w-full pr-4">
                <span className="font-semibold">{role.role}</span>
                <span className="text-muted-foreground">{role.personnel} Personnel</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm">{role.notes}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="p-3 bg-muted/50 rounded-md">
                    <div className="font-semibold text-muted-foreground">Assigned Personnel</div>
                    <div className="text-lg font-bold">{role.personnel}</div>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-md">
                    <div className="font-semibold text-muted-foreground">Monthly Payroll</div>
                    <div className="text-lg font-bold">{formatCurrency(role.monthlyPayroll)}</div>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-md">
                    <div className="font-semibold text-muted-foreground">Annual Payroll</div>
                    <div className="text-lg font-bold">{formatCurrency(role.annualPayroll)}</div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </CardContent>
  </Card>
);

export function JobsTable() {
  const [roles] = React.useState(jobRoles)

  const rolesByCategory = roles.reduce((acc, role) => {
    const category = role.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(role)
    return acc
  }, {} as Record<string, JobRole[]>)

  return (
    <div>
      {Object.entries(rolesByCategory).map(([category, roles]) => (
        <JobCategory key={category} category={category} roles={roles} />
      ))}
    </div>
  )
}
