import DashboardPage from 'views/Dashboard/Dashboard';
import UserProfile from 'views/UserProfile/UserProfile';
import Names from 'views/Names/Names';
import DNA from 'views/DNA/DNA';
import Races from 'views/Races/Races';
import Backgrounds from 'views/Backgrounds/Backgrounds';
import Buildings from 'views/Buildings/Buildings';
import Calendars from 'views/Calendars/Calendars';
import Campaigns from 'views/Campaigns/Campaigns';
import Classes from 'views/Classes/Classes';
import Cultures from 'views/Cultures/Cultures';
import Dialogs from 'views/Dialogs/Dialogs';
import Persons from 'views/Persons/Persons';
import Domains from 'views/Domains/Domains';
import Dungeons from 'views/Dungeons/Dungeons';
import Dynasties from 'views/Dynasties/Dynasties';
import Encounters from 'views/Encounters/Encounters';
import Factions from 'views/Factions/Factions';
import Items from 'views/Items/Items';
import Languages from 'views/Languages/Languages';
import Monsters from 'views/Monsters/Monsters';
import Quests from 'views/Quests/Quests';
import Religions from 'views/Religions/Religions';
import Sigils from 'views/Sigils/Sigils';
import Spells from 'views/Spells/Spells';
import Stories from 'views/Stories/Stories';
import Traps from 'views/Traps/Traps';
import Artwork from 'views/Artwork/Artwork';
import Diseases from 'views/Diseases/Diseases';
import Sayings from 'views/Sayings/Sayings';

import {
  Dashboard,
  Person,
  PersonPinCircle,
  Label,
  Fingerprint,
  History,
  Business,
  Today,
  SettingsInputComponent,
  SettingsEthernet,
  Language,
  Comment,
  Message,
  Layers,
  Satellite,
  SupervisorAccount,
  SurroundSound,
  MoveToInbox,
  SpeakerNotes,
  Android,
  Flag,
  List,
  Stars,
  StarHalf,
  Highlight,
  Textsms,
  Warning,
  Brush,
  Healing,
} from '@material-ui/icons';

const dashboardRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'Dashboard',
    icon: Dashboard,
    sidebar: true,
    component: DashboardPage
  },{
    path: '/user',
    sidebarName: 'User Profile',
    navbarName: 'Profile',
    icon: Person,
    sidebar: false,
    component: UserProfile
  },{
    path: '/names',
    sidebarName: 'Names',
    navbarName: 'Names',
    icon: Label,
    sidebar: true,
    component: Names
  },{
    path: '/races',
    sidebarName: 'Races',
    navbarName: 'Races',
    icon: PersonPinCircle,
    sidebar: true,
    component: Races
  },{
    path: '/backgrounds',
    sidebarName: 'Backgrounds',
    navbarName: 'Backgrounds',
    icon: History,
    sidebar: true,
    component: Backgrounds
  },{
    path: '/classes',
    sidebarName: 'Classes',
    navbarName: 'Classes',
    icon: SettingsEthernet,
    sidebar: true,
    component: Classes
  },{
    path: '/dna',
    sidebarName: 'DNA',
    navbarName: 'DNA',
    icon: Fingerprint,
    sidebar: true,
    component: DNA
  },{
    path: '/persons',
    sidebarName: 'Persons',
    navbarName: 'Persons',
    icon: Person,
    sidebar: true,
    component: Persons
  },{
    path: '/buildings',
    sidebarName: 'Buildings',
    navbarName: 'Buildings',
    icon: Business,
    sidebar: true,
    component: Buildings
  },{
    path: '/calendars',
    sidebarName: 'Calendars',
    navbarName: 'Calendars',
    icon: Today,
    sidebar: true,
    component: Calendars
  },{
    path: '/cultures',
    sidebarName: 'Cultures',
    navbarName: 'Cultures',
    icon: Language,
    sidebar: true,
    component: Cultures
  },{
    path: '/campaigns',
    sidebarName: 'Campaigns',
    navbarName: 'Campaigns',
    icon: SettingsInputComponent,
    sidebar: true,
    component: Campaigns
  },{
    path: '/dialogs',
    sidebarName: 'Dialogs',
    navbarName: 'Dialogs',
    icon: Comment,
    sidebar: true,
    component: Dialogs
  },{
    path: '/domains',
    sidebarName: 'Domains',
    navbarName: 'Domains',
    icon: Satellite,
    sidebar: true,
    component: Domains
  },{
    path: '/dungeons',
    sidebarName: 'Dungeons',
    navbarName: 'Dungeons',
    icon: Layers,
    sidebar: true,
    component: Dungeons
  },{
    path: '/dynasties',
    sidebarName: 'Dynasties',
    navbarName: 'Dynasties',
    icon: SupervisorAccount,
    sidebar: true,
    component: Dynasties
  },{
    path: '/encounters',
    sidebarName: 'Encounters',
    navbarName: 'Encounters',
    icon: SurroundSound,
    sidebar: true,
    component: Encounters
  },{
    path: '/factions',
    sidebarName: 'Factions',
    navbarName: 'Factions',
    icon: Flag,
    sidebar: true,
    component: Factions
  },{
    path: '/items',
    sidebarName: 'Items',
    navbarName: 'Items',
    icon: MoveToInbox,
    sidebar: true,
    component: Items
  },{
    path: '/languages',
    sidebarName: 'Languages',
    navbarName: 'Languages',
    icon: SpeakerNotes,
    sidebar: true,
    component: Languages
  },{
    path: '/monsters',
    sidebarName: 'Monsters',
    navbarName: 'Monsters',
    icon: Android,
    sidebar: true,
    component: Monsters
  },{
    path: '/quests',
    sidebarName: 'Quests',
    navbarName: 'Quests',
    icon: List,
    sidebar: true,
    component: Quests
  },{
    path: '/religions',
    sidebarName: 'Religions',
    navbarName: 'Religions',
    icon: Stars,
    sidebar: true,
    component: Religions
  },{
    path: '/sigils',
    sidebarName: 'Sigils',
    navbarName: 'Sigils',
    icon: StarHalf,
    sidebar: true,
    component: Sigils
  },{
    path: '/spells',
    sidebarName: 'Spells',
    navbarName: 'Spells',
    icon: Highlight,
    sidebar: true,
    component: Spells
  },{
    path: '/stories',
    sidebarName: 'Stories',
    navbarName: 'Stories',
    icon: Textsms,
    sidebar: true,
    component: Stories
  },{
    path: '/traps',
    sidebarName: 'Traps',
    navbarName: 'Traps',
    icon: Warning,
    sidebar: true,
    component: Traps
  },{
    path: '/artwork',
    sidebarName: 'Artwork',
    navbarName: 'Artwork',
    icon: Brush,
    sidebar: true,
    component: Artwork
  },{
    path: '/diseases',
    sidebarName: 'Diseases',
    navbarName: 'Diseases',
    icon: Healing,
    sidebar: true,
    component: Diseases
  },{
    path: '/sayings',
    sidebarName: 'Sayings',
    navbarName: 'Sayings',
    icon: Message,
    sidebar: true,
    component: Sayings
  },{ 
    redirect: true,
    sidebar: false,
    path: '/',
    to: '/dashboard',
    navbarName: 'Redirect' 
  }
];

export default dashboardRoutes;
