"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Image from "next/image"

export default function Changelog() {
  const [selectedVersion, setSelectedVersion] = React.useState("v1.4.0")

  const handleVersionChange = (version: string) => {
    setSelectedVersion(version)
    const element = document.getElementById(version)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const versions = ["v1.4.0", "v1.3.2", "v1.3.1", "v1.2.1", "v1.1.0", "v1.0.0"]

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Changelog</h1>
          <p className="text-muted-foreground mb-8">
            Get the latest updates and improvements to our platform.
          </p>
          <div className="flex justify-center space-x-2 mb-8">
            <Input
              className="max-w-xs"
              placeholder="abc@example.com"
              type="email"
            />
            <Button>Subscribe</Button>
          </div>
          <Select
            value={selectedVersion}
            onValueChange={handleVersionChange}
          >
            <SelectTrigger className="w-[280px] mx-auto">
              <SelectValue placeholder="Select version" />
            </SelectTrigger>
            <SelectContent>
              {versions.map((version) => (
                <SelectItem key={version} value={version}>
                  {version}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </header>

        <main className="space-y-12">
          <ChangelogEntry
            version="1.4.0"
            date="15 October 2024"
            title="Major UI Overhaul and Performance Boost"
            description="We've completely revamped our user interface and significantly improved overall performance."
            updates={[
              "Redesigned dashboard for improved user experience",
              "Implemented lazy loading for faster page loads",
              "Added dark mode support across all pages",
              "Optimized database queries for quicker data retrieval",
            ]}
            imageUrl="/placeholder.svg"
          />

          <Separator className="my-12" />

          <ChangelogEntry
            version="1.3.2"
            date="30 September 2024"
            title="Bug Fixes and Minor Improvements"
            description="This release focuses on addressing reported issues and making small enhancements."
            updates={[
              "Fixed a critical bug in the user authentication process",
              "Improved error handling and logging",
              "Updated third-party dependencies to their latest versions",
              "Enhanced accessibility for screen readers",
            ]}
            imageUrl="/placeholder.svg"
          />

          <Separator className="my-12" />

          <ChangelogEntry
            version="1.3.1"
            date="15 September 2024"
            title="New Integration and Security Updates"
            description="We've added a new third-party integration and bolstered our security measures."
            updates={[
              "Integrated with popular CRM software for seamless data sync",
              "Implemented two-factor authentication for all user accounts",
              "Enhanced encryption for sensitive data storage",
              "Added new API endpoints for extended functionality",
            ]}
            imageUrl="/placeholder.svg"
          />

          <Separator className="my-12" />

          <ChangelogEntry
            version="1.2.1"
            date="23 September 2024"
            title="New features and improvements"
            description="Here are the latest updates and improvements to our platform. We are always working to improve our platform and your experience."
            updates={[
              "Added new feature to export data",
              "Improved performance and speed",
              "Fixed minor bugs and issues",
              "Added new feature to import data",
            ]}
            imageUrl="/placeholder.svg"
          />

          <Separator className="my-12" />

          <ChangelogEntry
            version="1.1.0"
            date="15 August 2024"
            title="Enhanced Reporting and Analytics"
            description="This update brings powerful new reporting features and improved analytics capabilities."
            updates={[
              "Introduced customizable dashboard widgets",
              "Added advanced data visualization options",
              "Implemented real-time data updates for live monitoring",
              "Expanded export options to include PDF and CSV formats",
            ]}
            imageUrl="/placeholder.svg"
          />

          <Separator className="my-12" />

          <ChangelogEntry
            version="1.0.0"
            date="31 August 2024"
            title="First version of our platform"
            description="Introducing a new platform to help you manage your projects and tasks. We are excited to launch our platform and help you get started. We are always working to improve our platform and your experience."
            imageUrl="/placeholder.svg"
          />
        </main>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link" className="text-muted-foreground">
                ISO 8601:2004
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">ISO 8601:2004</h4>
                  <p className="text-sm">
                    Data elements and interchange formats – Information interchange – Representation of dates and times
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Last updated: 2024-10-15
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </footer>
      </div>
    </div>
  )
}

function ChangelogEntry({
  version,
  date,
  title,
  description,
  updates,
  imageUrl,
}: {
  version: string
  date: string
  title: string
  description: string
  updates?: string[]
  imageUrl: string
}) {
  return (
    <div id={`v${version}`} className="grid md:grid-cols-[200px_1fr] gap-8">
      <div>
        <Badge variant="secondary" className="mb-2">Version {version}</Badge>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground mb-4">{description}</p>
        {updates && (
          <ul className="list-disc list-inside space-y-2 mb-8">
            {updates.map((update, index) => (
              <li key={index}>{update}</li>
            ))}
          </ul>
        )}
        <div className="bg-muted rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt="Update illustration"
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    </div>
  )
}