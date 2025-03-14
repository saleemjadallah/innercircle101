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
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePremium } from "@/contexts/premium";
import { Star } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useNavigate } from "react-router-dom";
import { PremiumFeatureGuard } from "@/components/premium/PremiumFeatureGuard";

const Wellbeing = () => {
  const [activeSection, setActiveSection] = useState<'overview' | 'education' | 'wisdom' | 'mindfulness'>('overview');
  const isMobile = useIsMobile();
  const { isPremium } = usePremium();
  const navigate = useNavigate();

  return (
    <div className="space-y-4 w-full max-w-full">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Wellbeing Center</h2>
        <p className="text-muted-foreground">AI-powered resources to support your introvert wellbeing</p>
      </div>

      <div className="w-full">
        <ScrollArea 
          className="w-full" 
          type="scroll" 
          orientation="horizontal"
        >
          <div className="flex gap-2 pb-3 px-1 whitespace-nowrap">
            <Button 
              variant={activeSection === 'overview' ? 'default' : 'outline'} 
              onClick={() => setActiveSection('overview')}
              className="flex-shrink-0 hover:text-white"
            >
              <LineChart className="h-4 w-4 mr-2 text-blueteal" />
              Overview
            </Button>
            <Button 
              variant={activeSection === 'education' ? 'default' : 'outline'} 
              onClick={() => setActiveSection('education')}
              className="flex-shrink-0 hover:text-white"
            >
              <BookOpen className="h-4 w-4 mr-2 text-blueteal" />
              AI Education Center
            </Button>
            <Button 
              variant={activeSection === 'mindfulness' ? 'default' : 'outline'} 
              onClick={() => setActiveSection('mindfulness')}
              className="flex-shrink-0 hover:text-white"
            >
              <MountainSnow className="h-4 w-4 mr-2 text-blueteal" />
              Mindfulness Exercises
            </Button>
            <Button 
              variant={activeSection === 'wisdom' ? 'default' : 'outline'} 
              onClick={() => setActiveSection('wisdom')}
              className="flex-shrink-0 hover:text-white"
            >
              <MessageSquare className="h-4 w-4 mr-2 text-blueteal" />
              Community Wisdom
            </Button>
          </div>
        </ScrollArea>
      </div>

      {!isPremium && activeSection !== 'overview' && (
        <Alert className="bg-muted/50 border border-primary/20">
          <AlertDescription className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            {activeSection === 'education' ? (
              <span>Free plan includes basic glossary and introvert fundamentals.</span>
            ) : activeSection === 'mindfulness' ? (
              <span>Free plan includes 5 basic mindfulness exercises.</span>
            ) : (
              <span>Free plan includes limited community access.</span>
            )}
            <Button 
              size="sm" 
              onClick={() => navigate("/profile?tab=pricing")}
              className="whitespace-nowrap"
            >
              <Star className="h-4 w-4 mr-2" />
              Upgrade to Premium
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {activeSection === 'overview' ? (
        <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2'} gap-4 w-full max-w-full`}>
          <Card className="w-full wellbeing-container-gradient">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blueteal" />
                AI Education Center
              </CardTitle>
              <CardDescription>Learn about introvert psychology</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <p className="text-muted-foreground">
                  Explore our AI-powered introvert psychology education center with glossary, myth busters, and famous introverts.
                </p>
                <Button 
                  onClick={() => setActiveSection('education')}
                  className="gap-2 bg-white/70 hover:bg-white text-blueteal"
                >
                  <BookOpen className="h-4 w-4" />
                  Explore Education Center
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full wellbeing-container-gradient">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MountainSnow className="h-5 w-5 text-blueteal" />
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
                  className="gap-2 bg-white/70 hover:bg-white text-blueteal"
                >
                  <MountainSnow className="h-4 w-4" />
                  Explore Mindfulness Practices
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className={`w-full wellbeing-container-gradient ${isMobile ? '' : 'md:col-span-2'}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blueteal" />
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
                  className="gap-2 bg-white/70 hover:bg-white text-blueteal"
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
