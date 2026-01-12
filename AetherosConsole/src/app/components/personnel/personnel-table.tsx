
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
import { jobRoles, type JobRole } from "@/lib/placeholder-data"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const statusStyles: Record<JobRole['status'], string> = {
  'On Duty': 'border-green-400/50 text-green-400 bg-green-400/10',
  'Off Duty': 'border-blue-400/50 text-blue-400 bg-blue-400/10',
  'On Leave': 'border-yellow-400/50 text-yellow-400 bg-yellow-400/10',
}

export function PersonnelTable() {
  const [search, setSearch] = React.useState("")
  const [roles] = React.useState(jobRoles)

  const filteredRoles = roles.filter(role =>
    role.role.toLowerCase().includes(search.toLowerCase()) ||
    role.category.toLowerCase().includes(search.toLowerCase())
  )

  const totalPersonnel = roles.reduce((acc, role) => acc + role.personnel, 0)

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search roles..."
              className="pl-8"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
            <Users className="h-6 w-6 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Total Personnel</div>
              <div className="text-xl font-bold">{totalPersonnel.toLocaleString()}</div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Assigned Personnel</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRoles.map((role) => (
                <TableRow key={role.role}>
                  <TableCell className="font-medium text-muted-foreground">{role.category}</TableCell>
                  <TableCell>
                    <div className="font-semibold">{role.role}</div>
                  </TableCell>
                   <TableCell>
                    <Badge variant="outline" className={cn("font-mono", statusStyles[role.status])}>
                      {role.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-mono font-bold">{role.personnel.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
