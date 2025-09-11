import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, CheckCircle } from 'lucide-react';

const experiences = [
    {
        company: "Hewlett Packard Enterprise – Software Engineering Job Simulation (Forage)",
        date: "September 2025",
        description: "Completed a software engineering job simulation focused on backend development and testing.",
        tasks: [
            "Wrote a proposal for a RESTful web service to manage a list of employees.",
            "Built a web server application in Java Spring Boot that can accept and respond to HTTP requests as well as support uploading JSON data.",
            "Developed and ran a set of unit tests to assess my Java Spring Boot application’s performance."
        ]
    },
    {
        company: "Walmart USA – Advanced Software Engineering (Forage)",
        date: "Aug 2025",
        description: "Completed a job simulation solving complex technical challenges for Walmart’s global teams.",
        tasks: [
            "Developed a custom heap data structure in Java for the Shipping Department, improving data handling efficiency.",
            "Designed a UML class diagram for a multi-mode data processor integrating various database connections.",
            "Created an Entity-Relationship Diagram (ERD) to model a scalable database for Walmart’s Pet Department."
        ]
    },
    {
        company: "Tata Group – Data Analytics (Forage)",
        date: "Aug 2025",
        description: "Completed a data analytics job simulation with Tata iQ, applying AI-powered insights for financial services.",
        tasks: [
            "Conducted exploratory data analysis (EDA) to evaluate data quality, highlight risk indicators, and structure insights.",
            "Proposed a no-code predictive modeling framework to assess customer delinquency risk using GenAI tools.",
            "Designed an AI-driven collections strategy with agentic AI, ensuring scalability, ethical AI compliance, and regulatory alignment."
        ]
    }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Virtual Experience Programs
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Hands-on experience with industry-relevant challenges and technologies.
          </p>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card/70 border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden backdrop-blur-sm">
                <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                        <CardTitle className="text-xl font-bold text-foreground flex items-center gap-3">
                           <Building className="w-6 h-6 text-primary"/> 
                           {exp.company}
                        </CardTitle>
                        <span className="text-sm font-medium text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">{exp.date}</span>
                    </div>
                     <p className="text-muted-foreground pt-2">{exp.description}</p>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                   <ul className="space-y-3">
                        {exp.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary/80 mt-1 shrink-0"/>
                                <span className="text-muted-foreground">{task}</span>
                            </li>
                        ))}
                   </ul>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
