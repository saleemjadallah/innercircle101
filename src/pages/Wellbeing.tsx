
import { LineChart, BookOpen, Users, Battery, Book, ChevronDown, AlertCircle, User, MessageSquare, MountainSnow } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import IntrovertGlossary from "@/components/wellbeing/IntrovertGlossary";
import IntrovertMythbusters from "@/components/wellbeing/IntrovertMythbusters";
import FamousIntrovertsGallery from "@/components/wellbeing/FamousIntrovertsGallery";
import CommunityWisdom from "@/components/wellbeing/community-wisdom/CommunityWisdom";
import MindfulnessExercises from "@/components/wellbeing/mindfulness/MindfulnessExercises";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Wellbeing = () => {
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [isMythbustersOpen, setIsMythbustersOpen] = useState(false);
  const [isIntrovertsGalleryOpen, setIsIntrovertsGalleryOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'education' | 'wisdom' | 'mindfulness'>('education');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Wellbeing Center</h2>
        <p className="text-muted-foreground">Resources to support your introvert wellbeing</p>
      </div>

      <div className="flex overflow-x-auto pb-2 gap-2">
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

      {activeSection === 'education' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Education Center
              </CardTitle>
              <CardDescription>Learn about introvert psychology</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Collapsible
                  open={isGlossaryOpen}
                  onOpenChange={setIsGlossaryOpen}
                  className="border rounded-md"
                >
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="flex items-center justify-between w-full p-3 hover:bg-accent/50"
                    >
                      <div className="flex items-center gap-2">
                        <Book className="h-4 w-4" />
                        <span className="font-medium">Introvert Psychology Glossary</span>
                      </div>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${isGlossaryOpen ? "transform rotate-180" : ""}`} 
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pb-4">
                    <IntrovertGlossary />
                  </CollapsibleContent>
                </Collapsible>
                
                <Collapsible
                  open={isMythbustersOpen}
                  onOpenChange={setIsMythbustersOpen}
                  className="border rounded-md"
                >
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="flex items-center justify-between w-full p-3 hover:bg-accent/50"
                    >
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        <span className="font-medium">Introverts Mythbusters</span>
                      </div>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${isMythbustersOpen ? "transform rotate-180" : ""}`} 
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pb-4">
                    <IntrovertMythbusters />
                  </CollapsibleContent>
                </Collapsible>
                
                <Collapsible
                  open={isIntrovertsGalleryOpen}
                  onOpenChange={setIsIntrovertsGalleryOpen}
                  className="border rounded-md"
                >
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="flex items-center justify-between w-full p-3 hover:bg-accent/50"
                    >
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span className="font-medium">Famous Introverts Gallery</span>
                      </div>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${isIntrovertsGalleryOpen ? "transform rotate-180" : ""}`} 
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pb-4">
                    <FamousIntrovertsGallery />
                  </CollapsibleContent>
                </Collapsible>
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
      ) : activeSection === 'wisdom' ? (
        <CommunityWisdom />
      ) : (
        <MindfulnessExercises />
      )}
    </div>
  );
};

export default Wellbeing;
