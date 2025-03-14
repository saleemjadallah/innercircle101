
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Star, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePremium, PremiumFeature } from "@/contexts/premium";
import { Skeleton } from "@/components/ui/skeleton";
import { Capacitor } from "@capacitor/core";
import { PRODUCT_IDS } from "@/services/InAppPurchaseService";

interface PremiumFeatureGuardProps {
  feature: PremiumFeature;
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const PremiumFeatureGuard: React.FC<PremiumFeatureGuardProps> = ({ 
  feature, 
  children, 
  title = "Premium Feature", 
  description = "This feature requires a premium subscription" 
}) => {
  const { checkFeatureAccess, isLoading, handlePurchase, purchaseInProgress } = usePremium();
  const navigate = useNavigate();
  const isNative = Capacitor.isNativePlatform();
  
  // Show loading skeleton while checking premium status
  if (isLoading) {
    return (
      <Card className="border-dashed border-2 border-muted-foreground/30">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Skeleton className="w-4 h-4 rounded-full" />
            <Skeleton className="w-40 h-6" />
          </div>
          <Skeleton className="w-full h-4 mt-2" />
        </CardHeader>
        <CardContent className="pb-2 text-center opacity-50">
          <div className="flex flex-col items-center space-y-4">
            <Skeleton className="w-full h-24" />
            <Skeleton className="w-3/4 h-4" />
          </div>
        </CardContent>
        <CardFooter>
          <Skeleton className="w-full h-10" />
        </CardFooter>
      </Card>
    );
  }
  
  const hasAccess = checkFeatureAccess(feature);
  
  if (hasAccess) {
    return <>{children}</>;
  }

  const handleUpgrade = async () => {
    if (isNative) {
      // For native platforms, use in-app purchase
      await handlePurchase(PRODUCT_IDS.PREMIUM_MONTHLY);
    } else {
      // For web, navigate to pricing page
      navigate("/profile?tab=pricing");
    }
  };
  
  return (
    <Card className="border-dashed border-2 border-muted-foreground/30">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-muted-foreground" />
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2 text-center opacity-50 pointer-events-none">
        <div className="filter blur-sm">
          {children}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full"
          onClick={handleUpgrade}
          variant="default"
          disabled={purchaseInProgress}
        >
          {purchaseInProgress ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <Star className="w-4 h-4 mr-2" />
              Upgrade to Premium
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
