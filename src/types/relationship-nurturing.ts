// Time range for preferred interaction times
export interface TimeRange {
  start: string;        // HH:MM format
  end: string;          // HH:MM format
  priority: number;     // 1-3 priority level
}

// Quiet periods where no interactions should be scheduled
export interface QuietPeriod {
  start: string;        // YYYY-MM-DD
  end: string;          // YYYY-MM-DD
  reason: string;
}

// Schedule settings for the connection scheduler
export interface ScheduleSettings {
  maxDailyInteractions: number;
  preferredDays: number[];        // 0-6 for days of week
  preferredTimeRanges: TimeRange[];
  quietPeriods: QuietPeriod[];
  batchSimilar: boolean;
  reminderStyle: 'gentle' | 'direct' | 'minimal';
}

// Custom frequency for a relationship
export interface CustomFrequency {
  unit: 'days' | 'weeks' | 'months';
  value: number;
  flexibility: number;           // days of flexibility
}

// Frequency for a category of relationships
export interface CategoryFrequency {
  unit: 'days' | 'weeks' | 'months';
  value: number;
}

// Relationship frequency settings
export interface RelationshipFrequency {
  relationshipId: string;
  categoryDefault: boolean;     // uses category default if true
  customFrequency?: CustomFrequency;
  lastInteraction: string;      // YYYY-MM-DD
  nextScheduled: string;        // YYYY-MM-DD
  isOverdue: boolean;
  overdueDays: number;
}

// Default frequency for a category
export interface CategoryDefault {
  category: string;             // family, close friends, etc.
  frequency: CategoryFrequency;
}

// Status for a scheduled interaction
export type InteractionStatus = 'planned' | 'completed' | 'rescheduled' | 'skipped';

// Type of interaction
export type InteractionType = 'call' | 'message' | 'meet' | 'email' | 'video' | 'other';

// Scheduled interaction
export interface ScheduledInteraction {
  id: string;
  relationshipId: string;
  relationshipName: string;      // For display purposes
  scheduledDate: string;         // YYYY-MM-DD
  suggestedTimeSlots: string[];  // HH:MM format
  interactionType: InteractionType;
  duration: number;              // minutes
  purpose: string;
  preparationNeeded: boolean;
  preparationNotes: string;
  status: InteractionStatus;
  completedDate?: string;
  followUpDate?: string;
  energyCost: number;            // 1-10
}

// Main connection scheduler data structure
export interface ConnectionScheduler {
  userId: string;
  scheduleSettings: ScheduleSettings;
  relationshipFrequencies: RelationshipFrequency[];
  categoryDefaults: CategoryDefault[];
  scheduledInteractions: ScheduledInteraction[];
}

// A suggested conversation topic for a relationship
export interface ConversationTopic {
  id: string;
  topic: string;
  context: string;
  source: 'previous-conversation' | 'life-event' | 'interest' | 'follow-up';
  importance: number;  // 1-5
  lastDiscussed?: string;
}

// A meaningful life event for a relationship
export interface LifeEvent {
  id: string;
  relationshipId: string;
  eventType: string;  // birthday, anniversary, promotion, etc.
  date: string;       // YYYY-MM-DD
  description: string;
  recurring: boolean;
  reminderDaysBefore: number;
}

// A relationship with basic info and context
export interface Relationship {
  id: string;
  name: string;
  category: string;
  importance: number;  // 1-5
  notes: string;
  contactMethods: {
    type: string;
    value: string;
  }[];
  interests: string[];
  lifeEvents: LifeEvent[];
  conversationTopics: ConversationTopic[];
  interactionHistory: {
    date: string;
    type: InteractionType;
    notes: string;
    quality: number;  // 1-5
  }[];
}

// Statistics for the dashboard
export interface NurturingStats {
  plannedToday: number;
  completedToday: number;
  plannedThisWeek: number;
  completedThisWeek: number;
  overdueCount: number;
  healthyRelationships: number;
  needsAttentionCount: number;
  upcomingEvents: number;
}