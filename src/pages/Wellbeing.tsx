
import { LineChart, BookOpen, Users, Battery, Book, ChevronDown, AlertCircle, User, MessageSquare, MountainSnow } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CommunityWisdom from "@/components/wellbeing/community-wisdom/CommunityWisdom";
import MindfulnessExercises from "@/components/wellbeing/mindfulness/MindfulnessExercises";
import EducationCenter from "@/components/wellbeing/education/EducationCenter";

const Wellbeing = () => {
  const [activeSection, setActiveSection] = useState<'overview' | 'education' | 'wisdom' | 'mindfulness'>('overview');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Wellbeing Center</h2>
        <p className="text-muted-foreground">Resources to support your introvert wellbeing</p>
      </div>

      <div className="flex overflow-x-auto pb-2 gap-2">
        <Button 
          variant={activeSection === 'overview' ? 'default' : 'outline'} 
          onClick={() => setActiveSection('overview')}
        >
          <LineChart className="h-4 w-4 mr-2" />
          Overview
        </Button>
        <Button 
          variant={activeSection === 'education' ? 'default' : 'outline'} 
          onClick={() => setActiveSection('education')}
        >
          <BookOpen className="h-4 w-4 mr-2" />
          Education Center
        </Button>
        <Button 
          variant={activeSection === 'mindfulness' ? 'default' : 'outline'} 
          onClick={() => setActiveSection('mindfulness')}
        >
          <MountainSnow className="h-4 w-4 mr-2" />
          Mindfulness Exercises
        </Button>
        <Button 
          variant={activeSection === 'wisdom' ? 'default' : 'outline'} 
          onClick={() => setActiveSection('wisdom')}
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Community Wisdom
        </Button>
      </div>

      {activeSection === 'overview' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Education Center
              </CardTitle>
              <CardDescription>Learn about introvert psychology</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <p className="text-muted-foreground">
                  Explore our introvert psychology education center with glossary, myth busters, and famous introverts.
                </p>
                <Button 
                  onClick={() => setActiveSection('education')}
                  className="gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  Explore Education Center
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MountainSnow className="h-5 w-5" />
                Mindfulness Exercises
              </CardTitle>
              <CardDescription>Introvert-specific mindfulness practices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <p className="text-muted-foreground">
                  Explore our library of mindfulness practices specifically designed for introverts.
                </p>
                <Button 
                  onClick={() => setActiveSection('mindfulness')}
                  className="gap-2"
                >
                  <MountainSnow className="h-4 w-4" />
                  Explore Mindfulness Practices
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Community Wisdom
              </CardTitle>
              <CardDescription>Anonymous sharing of introvert strategies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <p className="text-muted-foreground">
                  Share and discover strategies from fellow introverts.
                </p>
                <Button 
                  onClick={() => setActiveSection('wisdom')}
                  className="gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  Explore Community Wisdom
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : activeSection === 'education' ? (
        <EducationCenter />
      ) : activeSection === 'wisdom' ? (
        <CommunityWisdom />
      ) : (
        <MindfulnessExercises />
      )}
    </div>
  );
};

export default Wellbeing;
