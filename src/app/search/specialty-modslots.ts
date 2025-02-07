import { PlugCategoryHashes } from 'data/d2/generated-enums';

export interface ModSocketMetadata {
  /** we use these two to match with search filters (modslot) */
  slotTag: string;
  /** mod tags are a 1-to-some correlation with plugCategoryHashes */
  compatibleModTags: string[];
  /** armor items have sockets, and sockets have a socketTypeHash */
  socketTypeHashes: number[];
  /** mod items have a plugCategoryHash. this mod slot can hold these plugCategoryHashes */
  compatiblePlugCategoryHashes: number[];
  /** this helps us look up the "empty socket" definition, for its icon & name */
  emptyModSocketHash: number;
  /** so you can look these entries up if all you're given is an "Empty Mod Slot" plug item */
  emptyModSocketHashes: number[];
  /**
   * the year is 2022. the raid is Vow of the Disciple. bungie forgot to give raid mods a itemTypeDisplayName.
   * let's use this Activity name instead.
   * NB this was fixed but may prove useful in the future if it happens again, so let's keep this around?
   */
  modGroupNameOverrideActivityHash?: number;
}

const legacyCompatibleTags = ['nightmare', 'gardenofsalvation', 'lastwish'];

/** The plug categories that will fit in "legacy" sockets */
export const legacyCompatiblePlugCategoryHashes = [
  PlugCategoryHashes.EnhancementsSeasonMaverick, // nightmare
  PlugCategoryHashes.EnhancementsSeasonOutlaw, // taken/lw
  PlugCategoryHashes.EnhancementsRaidGarden,
  PlugCategoryHashes.EnhancementsSeasonOpulence, // opulent
  PlugCategoryHashes.EnhancementsSeasonForge, // fallen
];

// EnhancementsSeasonV500 has a one-to-many relationship here,
// but it's most accurate to call the category "combat" not "elemental well"
export const modTypeTagByPlugCategoryHash = {
  [PlugCategoryHashes.EnhancementsSeasonOutlaw]: 'lastwish',
  [PlugCategoryHashes.EnhancementsSeasonMaverick]: 'nightmare',
  [PlugCategoryHashes.EnhancementsRaidGarden]: 'gardenofsalvation',
  [PlugCategoryHashes.EnhancementsRaidDescent]: 'deepstonecrypt',
  [PlugCategoryHashes.EnhancementsRaidV520]: 'vaultofglass',
  [PlugCategoryHashes.EnhancementsRaidV600]: 'vowofthedisciple',
  [PlugCategoryHashes.EnhancementsRaidV620]: 'kingsfall',
  [PlugCategoryHashes.EnhancementsArtifice]: 'artifice',
};

// FIXME(Lightfall) what about legacy?

const legacySocketTypeHashes = [
  1540673283, // an outlaw-looking one, that's on S11 LW/Reverie,
  // but in-game it has the same compatibility as any other legacy slot
  3873071636, // forge
  1936582325, // dawn
  4127539203, // undying
  2836765131, // worthy
  1430586844, // opulent
  3267328333, // arrivals
];

const legacyEmptyModSocketHashes = [
  720857, // forge
  2357307006, // dawn
  2620967748, // undying
  2655746324, // worthy
  4153634494, // arrivals
  4106547009, // opulent
];

const modSocketMetadata: ModSocketMetadata[] = [
  {
    slotTag: 'legacy',
    compatibleModTags: legacyCompatibleTags,
    socketTypeHashes: legacySocketTypeHashes,
    compatiblePlugCategoryHashes: legacyCompatiblePlugCategoryHashes,
    emptyModSocketHashes: legacyEmptyModSocketHashes,
    emptyModSocketHash: 4153634494, // the arrivals icon. i don't know.
  },
  {
    slotTag: 'lastwish',
    compatibleModTags: ['lastwish'],
    socketTypeHashes: [1444083081],
    compatiblePlugCategoryHashes: [PlugCategoryHashes.EnhancementsSeasonOutlaw],
    emptyModSocketHashes: [1679876242],
    emptyModSocketHash: 1679876242, // ARGH, this is the wrong image in the game/manifest
  },
  {
    slotTag: 'gardenofsalvation',
    compatibleModTags: ['gardenofsalvation'],
    socketTypeHashes: [1764679361],
    compatiblePlugCategoryHashes: [PlugCategoryHashes.EnhancementsRaidGarden],
    emptyModSocketHashes: [706611068],
    emptyModSocketHash: 706611068,
  },
  {
    slotTag: 'deepstonecrypt',
    compatibleModTags: ['deepstonecrypt'],
    socketTypeHashes: [1269555732],
    compatiblePlugCategoryHashes: [PlugCategoryHashes.EnhancementsRaidDescent],
    emptyModSocketHashes: [4055462131],
    emptyModSocketHash: 4055462131,
  },
  {
    slotTag: 'vaultofglass',
    compatibleModTags: ['vaultofglass'],
    socketTypeHashes: [3372624220],
    compatiblePlugCategoryHashes: [PlugCategoryHashes.EnhancementsRaidV520],
    emptyModSocketHashes: [3738398030],
    emptyModSocketHash: 3738398030,
  },
  {
    slotTag: 'vowofthedisciple',
    compatibleModTags: ['vowofthedisciple'],
    socketTypeHashes: [2381877427],
    compatiblePlugCategoryHashes: [PlugCategoryHashes.EnhancementsRaidV600],
    emptyModSocketHashes: [2447143568],
    emptyModSocketHash: 2447143568,
  },
  {
    slotTag: 'kingsfall',
    compatibleModTags: ['kingsfall'],
    socketTypeHashes: [3344538838],
    compatiblePlugCategoryHashes: [PlugCategoryHashes.EnhancementsRaidV620],
    emptyModSocketHashes: [1728096240],
    emptyModSocketHash: 1728096240,
  },
  {
    slotTag: 'nightmare',
    compatibleModTags: ['nightmare'],
    socketTypeHashes: [2701840022],
    compatiblePlugCategoryHashes: [PlugCategoryHashes.EnhancementsSeasonMaverick],
    emptyModSocketHashes: [1180997867],
    emptyModSocketHash: 1180997867,
  },
  {
    slotTag: 'artifice',
    compatibleModTags: ['artifice'],
    socketTypeHashes: [1719555937],
    compatiblePlugCategoryHashes: [PlugCategoryHashes.EnhancementsArtifice],
    emptyModSocketHashes: [4173924323],
    emptyModSocketHash: 4173924323,
  },
];

export default modSocketMetadata;
